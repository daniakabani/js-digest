---
title: Using Node with Cloudflare Workers
date: 2025-10-09
sources:
  - https://nodeweekly.com/issues/594
status: draft
tags: [typescript, ts, javascript, react, next.js]
---

# Using Node with Cloudflare Workers

- Source: https://nodeweekly.com/issues/594
- Date: 2025-09-30T00:00:00.000Z

#​594 — September 30, 2025


Read on the Web



🗓️ We're back after taking a week off for my birthday. I've never bothered to do that before, but I figured I'd give it a go, and.. it was good 😅 We're now back every week until Christmas!
__
Peter Cooper, your editor











  





  
  
A Year of Improving Node.js Compatibility in Cloudflare Workers — “We’ve been busy,” says Cloudflare which recently announced it’s bringing Node.js HTTP server support to its Workers function platform. This post goes deep into the technicalities, covering what areas of the standard library is supported, how the file system works (Workers doesn’t have a typical file system), how input/output streams work, and more. And you can use all of this now.
James M Snell (Cloudflare) 


  
  
Electron-Based Apps Causing System-Wide Lag on macOS 26 Tahoe? — There were a variety of reports and discussions on social media about system-wide sluggishness caused by changes in a private API in macOS that Electron uses. The good news? The recently released Electron 38.2, 37.6 and 36.9.2 fix the bug, if you maintain an Electron powered app you need to repackage.
Various Contributors 


  
  
Go from Monolith to Monorepo — Join Mike North for this course on architecting maintainable, fast and light codebases. You'll learn how to refactor a codebase into a TypeScript monorepo using tools like Nx and Lerna — covering dependencies, formatting, linting, performance and more.
Frontend Masters sponsor


IN BRIEF:
Node v24.9.0 (Current) has been released – it's a small release with minor enhancements to http, sqlite, and worker. Node v22.20 (LTS) was also released focused on updating OpenSSL to v3.5.2.
🎂 AdonisJS, a popular full-featured web framework for Node, is celebrating its tenth birthday.
The latest State of JS survey is now open to take.


  
  
GitHub's Plan for a More Secure npm Supply Chain — In direct response to the recent npm ecosystem supply chain attacks of recent weeks, GitHub’s senior director of security research has outlined steps GitHub is taking, including blocking the upload of packages featuring the patterns of the recent malware, hardening package publication, and promoting the use of trusted publishing.
Xavier René-Corail (GitHub) 


💡 GitHub has posted a more technical update with a timeline of npm package publishing changes taking place in the coming weeks.





  
  
Mastering npx: A Cheatsheet for npm and Node Power Users — You’ve almost certainly used the npx command to easily run a command from an npm package (either local or remote) – it’s easy to use, but npx has a couple of other features and options to keep in mind.
Liran Tal 


📄 Stop Using .reverse().find(): Meet findLast()  Matt Smith
📄 Storing Unwise Amounts of Data in JavaScript BigInts  Jonathan Frere
📄 Instrumenting the Node.js Event Loop with eBPF  Nikolay Sivko






🛠 Code & Tools





  
  
Skia Canvas 3.0: A Canvas Environment for Node — Based on Google’s Skia graphics engine and offers end results similar to Chrome’s own canvas. GPU accelerated and can render images, paths, fonts, shapes, etc. GitHub repo.
Christian Swinehart 


  
  
Pompelmi: Scan File Uploads for Malware — Provides adapters for Express, Koa, and Next.js to perform fast file-upload malware scanning in Node, including digging into ZIP files and with optional integration with the YARA malware detection tool. GitHub repo.
Tommaso Bertocchi 


  
  
Catch Bugs in PRs Before They Hit Production — Use Sentry’s AI code review to spot errors, performance issues & test gaps in your pull requests.
Sentry sponsor


  
  
npm-check-updates 19.0: Update package.json Dependencies to Latest Versions — That is, as opposed to the specified versions. Has a -i interactive mode so you can look at upgrades and opt in to them one by one. The recent v18.2  release added a ‘cooldown’ feature to help protect against supply chain attacks by requiring package versions be of a certain age first.
Raine Revere 


  
  
🤖 GitHub Copilot CLI Now in Public Preview — Not content to let Claude Code and OpenAI Codex dominate the CLI-based dev agent scene, GitHub has released a CLI-based version of Copilot, built using Node.
GitHub 


  
  
modern-tar: Zero-Dependency Streaming tar Parser and Writer — As in the classic tar archive format.
Ayuhito 


  
  
ffetch: TypeScript-First fetch Wrapper with Extras — What extras? Think retries, circuit breaking, hooks, and monitoring of active requests.
Gabor Koos 




pnpm 10.17 – The new minimumReleaseAgeExclude now supports patterns to exclude groups of packages from minimum release age checks.
TypeBox 1.0 – A runtime type system that creates in-memory JSON Schema objects that infer as TypeScript types.
🤖 OpenAI Node 5.23.1 – The official Node library for OpenAI's API now supports gpt5-codex.
pretty-bytes 7.1 – Convert a size in bytes into a human readable equivalent (e.g. 1337 becomes '1.34 kB').
Wasp 0.18 – Wasp is a Rails-like framework using Node, React & Prisma.
MongoDB Node.js Driver 6.20 – The latest official MongoDB driver.
pg-boss 11.0 – Postgres-based job queuing system for Node.js.
Verdaccio 6.2 – Lightweight local private npm registry.











📰 Classifieds


🕳️ 🥊 At Holepunch we maintain 2000+ OSS npm packages, make the JS runtime Bare to build the P2P Internet. Real tech, Real impact. Join us!
Go beyond caching. Redis 8.2 handles 5x more data with 150 new commands and 8 new data structures vs 7.2. Try Redis Pro.






📢  Elsewhere in the ecosystem




A roundup of some other interesting stories in the broader landscape:
The agenda of this week's TC39 meeting where several proposals were advanced, including Import Bytes, Iterator Chunking, and Array.prototype.pushAll.
Bun v1.2.23 has been released with a myriad of smaller features and Node.js compatibility improvements. The big release of Bun v1.3 is expected later this week, however.
IINA is a popular, open-source media player for macOS and it has just added a JavaScript-based plugin system to let users extend its functionality.
We recently mentioned Andromeda as being the newest JavaScript runtime to appear, but now there's Ion, a runtime aimed at bringing a JavaScript engine into Rust programs.
