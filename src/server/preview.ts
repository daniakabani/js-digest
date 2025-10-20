import { readFileSync } from 'fs';
import { Storage } from '../storage/db';

export async function serve(port = 3099) {
  const token = process.env.PREVIEW_TOKEN || '';
  const storage = new Storage();

  const server = Bun.serve({
    port,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === '/health') return new Response('ok');
      if (url.pathname === '/drafts' && req.method === 'GET') {
        const drafts = storage.listDrafts();
        return json(drafts);
      }
      if (url.pathname.startsWith('/approve/') && req.method === 'POST') {
        if (!token || req.headers.get('authorization') !== `Bearer ${token}`) {
          return new Response('Unauthorized', { status: 401 });
        }
        const idStr = url.pathname.split('/').pop()!;
        const id = parseInt(idStr, 10);
        storage.approveDraft(id);
        return json({ ok: true });
      }
      if (url.pathname.startsWith('/draft-file/') && req.method === 'GET') {
        const path = decodeURIComponent(url.pathname.replace('/draft-file/', ''));
        try {
          const text = readFileSync(path, 'utf8');
          return new Response(text, {
            headers: { 'content-type': 'text/markdown; charset=utf-8' },
          });
        } catch (e) {
          return new Response('Not found', { status: 404 });
        }
      }
      return new Response('Not Found', { status: 404 });
    },
  });
  console.log(`Preview server running at http://localhost:${server.port}`);
}

function json(obj: any) {
  return new Response(JSON.stringify(obj), { headers: { 'content-type': 'application/json' } });
}
