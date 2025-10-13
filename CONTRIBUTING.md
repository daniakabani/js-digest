# Contributing to JS Digest

Thanks for your interest in contributing!

## Development setup
- Install Bun: https://bun.sh
- Install deps: `bun install`
- Typecheck: `bun run build`
- Lint: `bun run lint`
- Test: `bun test`

## Running locally
- Copy `.env.example` to `.env`
- Keep `LLM_MOCK=true` for local/dev
- Run end-to-end: `bun run run-once`
- Drafts will be saved under `data/drafts/<date>/`

## Branches & PRs
- Create a feature branch from `scaffold` or `main`
- Keep commits small and focused
- Include tests where applicable
- Do not add secrets to the repo
- Ensure CI passes (typecheck, lint, tests)

## Roadmap ideas
- Better ranking (TF-IDF, recency decay)
- More sources (HN, Reddit, X/Twitter via API)
- Richer preview UI
- Real publishing integrations for Medium/LinkedIn
- Slack/Discord notifier

## Code of Conduct
Be kind, inclusive, and respectful.
