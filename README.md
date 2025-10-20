# JS Digest

A CLI-first aggregator that collects JavaScript/TypeScript ecosystem updates, summarizes them with an LLM, saves drafts as Markdown for manual review, and can optionally publish to Medium and LinkedIn after approval. Built with TypeScript and Bun.

## Features

- Collect from curated RSS feeds and GitHub Releases
- Deduplicate and rank items by keywords
- Summarize using OpenAI (with mock mode for local/dev and tests)
- Store items and drafts in SQLite (with JSON file fallback)
- Write drafts to `data/drafts/YYYY-MM-DD/<slug>.md` with YAML frontmatter
- Manual approval workflow (never auto-publishes)
- Optional local preview server to approve drafts via token-secured endpoint
- CLI-first with Bun scripts; lightweight, dependency-minimized

## Tech

- Runtime & Tooling: Bun
- Language: TypeScript (strict)
- DB: SQLite via `bun:sqlite` (fallback to JSON)
- LLM: OpenAI (abstracted via LLMProvider) + Mock
- HTTP: global fetch with retries/backoff
- Tests: `bun test`
- CI: GitHub Actions

## Getting Started

1. Install Bun: https://bun.sh
2. Clone this repo and install deps:
   - `bun install`
3. Configure env: copy `.env.example` to `.env` and tune values. For local/dev, keep `LLM_MOCK=true`.

Quick run (end-to-end with mock LLM):

- `bun run run-once`

This will:

- collect sources
- dedupe & rank
- summarize in mock mode
- write drafts under `data/drafts/<today>/`

List drafts:

- `bun run list-drafts`

Preview server (optional):

- `bun run preview`
- GET http://localhost:3099/drafts
- POST http://localhost:3099/approve/<id> with header `Authorization: Bearer <PREVIEW_TOKEN>`

Approve a draft:

- `bun run approve 1`

Publish (guarded; requires PUBLISH=true and credentials):

- `PUBLISH=true bun run publish 1 --to=medium,linkedin`

Note: The app never auto-publishes; manual approval is required.

## CLI Commands

- collect
- process
- run-once
- list-drafts
- preview-draft <id>
- approve <id>
- publish <id> --to=medium,linkedin
- preview

## Tests

- `bun test`

## Lint & Typecheck

- `bun run build` (typecheck only)
- `bun run lint`

## Cron

Use your scheduler (crontab, GitHub Actions, etc.) to run daily:

```
0 8 * * * cd /path/to/js-digest && bun run run-once >> logs.txt 2>&1
```

## Configuration

Curated sources live in `src/config/sources.ts`. Update ranking keywords there too.

## Publishing

- Medium: set MEDIUM_TOKEN and MEDIUM_USER_ID
- LinkedIn: set LINKEDIN_TOKEN and optionally LINKEDIN_ORGANIZATION_ID
- Exports are currently safe "dry-run" stubs. Real API calls are outlined in comments.

## Contributing

See CONTRIBUTING.md

## License

MIT
