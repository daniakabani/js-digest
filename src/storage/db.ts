import { Database } from 'bun:sqlite';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';
import type { DraftRecord, FeedItem } from '../types';
import { logger } from '../utils/logger';

export class Storage {
  private db?: Database;
  private jsonPath: string;

  constructor(dbPath = process.env.DB_PATH || './data/db.sqlite') {
    this.jsonPath = dbPath.replace(/\.sqlite$/, '.json');
    try {
      ensureDir('./data');
      this.db = new Database(dbPath);
      this.migrate();
      logger.info(`Using SQLite at ${dbPath}`);
    } catch (e) {
      logger.warn('SQLite not available; using JSON storage at', this.jsonPath);
      if (!existsSync(this.jsonPath))
        writeFileSync(this.jsonPath, JSON.stringify({ items: [], drafts: [] }, null, 2));
    }
  }

  private migrate() {
    this.db?.run(`CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY,
      sourceId TEXT,
      title TEXT,
      url TEXT,
      date TEXT,
      author TEXT,
      excerpt TEXT
    )`);
    this.db?.run(`CREATE TABLE IF NOT EXISTS drafts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      itemId TEXT,
      slug TEXT,
      title TEXT,
      path TEXT,
      date TEXT,
      approved INTEGER DEFAULT 0,
      publishedMedium INTEGER DEFAULT 0,
      publishedLinkedIn INTEGER DEFAULT 0
    )`);
  }

  saveItems(items: FeedItem[]) {
    if (this.db) {
      const stmt = this.db.prepare(
        `INSERT OR IGNORE INTO items (id, sourceId, title, url, date, author, excerpt) VALUES (?, ?, ?, ?, ?, ?, ?);`,
      );
      this.db.transaction(() => {
        for (const i of items) {
          stmt.run(i.id, i.sourceId, i.title, i.url, i.date, i.author ?? null, i.excerpt ?? null);
        }
      })();
      return;
    }
    const data = this.json();
    const existing = new Set<string>(data.items.map((i: FeedItem) => i.id));
    const merged = [...data.items, ...items.filter((i) => !existing.has(i.id))];
    this.writeJson({ ...data, items: merged });
  }

  listItems(): FeedItem[] {
    if (this.db) {
      return this.db
        .query(
          `SELECT id, sourceId, title, url, date, author, excerpt FROM items ORDER BY date DESC`,
        )
        .all() as FeedItem[];
    }
    return this.json().items as FeedItem[];
  }

  createDraft(d: Omit<DraftRecord, 'id'>): DraftRecord {
    if (this.db) {
      const stmt = this.db.prepare(
        `INSERT INTO drafts (itemId, slug, title, path, date, approved, publishedMedium, publishedLinkedIn) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      );
      stmt.run(
        d.itemId,
        d.slug,
        d.title,
        d.path,
        d.date,
        d.approved,
        d.publishedMedium,
        d.publishedLinkedIn,
      );
      const id = this.db.query(`SELECT last_insert_rowid() as id`).get() as { id: number };
      return { id: id.id, ...d };
    }
    const data = this.json();
    const newId = (data.drafts.at(-1)?.id ?? 0) + 1;
    const rec = { id: newId, ...d };
    data.drafts.push(rec);
    this.writeJson(data);
    return rec;
  }

  listDrafts(): DraftRecord[] {
    if (this.db)
      return this.db.query(`SELECT * FROM drafts ORDER BY date DESC`).all() as DraftRecord[];
    return this.json().drafts as DraftRecord[];
  }

  getDraft(id: number): DraftRecord | undefined {
    if (this.db)
      return this.db.query(`SELECT * FROM drafts WHERE id = ?`).get(id) as DraftRecord | undefined;
    return this.json().drafts.find((d: DraftRecord) => d.id === id);
  }

  approveDraft(id: number) {
    if (this.db) {
      this.db.run(`UPDATE drafts SET approved = 1 WHERE id = ?`, id);
      return;
    }
    const data = this.json();
    const d = data.drafts.find((x: DraftRecord) => x.id === id);
    if (d) d.approved = 1;
    this.writeJson(data);
  }

  markPublished(id: number, where: 'medium' | 'linkedin') {
    if (this.db) {
      const col = where === 'medium' ? 'publishedMedium' : 'publishedLinkedIn';
      this.db.run(`UPDATE drafts SET ${col} = 1 WHERE id = ?`, id);
      return;
    }
    const data = this.json();
    const d = data.drafts.find((x: DraftRecord) => x.id === id);
    if (d) {
      if (where === 'medium') d.publishedMedium = 1;
      else d.publishedLinkedIn = 1;
    }
    this.writeJson(data);
  }

  private json(): any {
    const raw = readFileSync(this.jsonPath, 'utf8');
    return JSON.parse(raw);
  }

  private writeJson(obj: any) {
    ensureDir('./data');
    writeFileSync(this.jsonPath, JSON.stringify(obj, null, 2));
  }
}

function ensureDir(path: string) {
  if (!existsSync(path)) mkdirSync(path, { recursive: true });
}
