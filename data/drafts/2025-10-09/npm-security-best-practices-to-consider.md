---
title: npm security best practices to consider
date: 2025-10-09
sources:
  - https://nodeweekly.com/issues/595
status: draft
tags: [ts, javascript, react, svelte, angular]
---

# npm security best practices to consider

- Source: https://nodeweekly.com/issues/595
- Date: 2025-10-07T00:00:00.000Z

#​595 — October 7, 2025


Read on the Web









  





  
  
15 Recent Node Features That Can Replace Popular npm Packages — Many features that once required third-party packages are now built into the runtime itself. Here’s a look at some of the most notable that you may want to experiment with, prior to reducing unnecessary dependencies.
Lizz Parody 


  
  
Awesome npm Security Best Practices — Web security expert Liran Tal has put together a handy set of best practices to consider when working with the npm ecosystem, whether or not you’re using the canonical npm tool. Plenty of good advice here.
Liran Tal 


  
  
API Design in Node — Ready to build scalable APIs with Node and Express? Join Scott Moss for this video course and learn RESTful API design, testing techniques, authentication and authorization, error handling, and more. Create a production deployment and ship your next API today!
Frontend Masters sponsor


IN BRIEF:
Nicholas C. Zakas presents a look at what's coming in ESLint v10.0, including changes to Node.js compatibility, a variety of removals and deprecations, and the enabling of JSX reference tracking.
pnpm 10.18 has been released with a new network performance monitoring feature enabling you to be warned when requests are suffering delays.
Bun 1.3 is due to be released later today but hadn't appeared by the time we went to press.


  
  
📉 Processing 14GB Files 78% Faster with Buffer Optimization — The author took on an interesting challenge for fun: how quickly could he get Node to process almost 15 gigabytes of weather data? “By the end of the weekend, what started as idle curiosity turned into a 78% speedup—but the story of how I got there is far more interesting than the numbers alone.”
Peter Mbanugo 


  
  
How Deno Protects Against npm Exploits — The maintainers of the Deno runtime reflect on the recent npm ecosystem security issues, and show off how Deno’s non-permissive explicit ‘secure by default’ model can help.
Andy Jiang (Deno) 


  
  
🧹 Cleaning House in Nx Monorepo: How I Removed 120 Unused Dependencies Safely — Another win (mostly) for Knip, a tool that helps you declutter projects by finding unused dependencies.
John James 


  
  
Free Virtual DevSecCon on Oct 22, 2025 — Join the AI Security Developers Challenge at DevSecCon 2025 on October 22nd and learn best practices to secure AI-native apps. Register now!
Snyk sponsor


📄 Shipping Node.js Packages in 2025 – A dense and helpful slidedeck from a talk given at last week's NordicJS event. We look forward to sharing the video when it's available. Joyee Cheung
📄 How to Group Arrays Without reduce() – A look at Object.groupBy() and Map.groupBy() Matt Smith
📄 Eleventy/11ty Hacks for Fun and Performance – Eleventy is a popular Node-based static site generator. Alex Russell






🛠 Code & Tools





  
  
Javet 5.0: A Way to Embed Node.js and V8 in Java — The idea is you can use Node and V8 directly within the JVM. Platform support is mixed, but it's an interesting idea and the docs are good. GitHub repo.
Sam Cao 


  
  
Cap'n Web: A New RPC System for Browsers and Web Servers — A ‘spiritual sibling’ to Cap’n Proto, an RPC protocol created by one of the same authors. However, Cap’n Web’s underlying serialization is human-readable, focused on integrating well with JS runtimes, and works over HTTP, WebSocket, and postMessage() out-of-the-box.
Varda and Faulkner (Cloudflare) 


  
  
*.* Globby 15.0: User-Friendly Glob Matching — Give it an array of globs and it returns an array of matching paths. It even supports negations and .gitignore files.
Sindre Sorhus 


  
  
Icebird: Read Apache Iceberg Tables in JavaScript — Iceberg is a high performance open-source format for large analytic tables.
Hyperparam 


  
  
🖼️ Odiff 4.0: A Fast Pixel-by-Pixel Image Diffing Tool and Library — Claims to provide results in milliseconds. You can use it as a CLI tool or from Node (though it’s written in OCaml, primarily). It supports PNG, JPG, and BMP, including cross-file comparisons.
Dmitriy Kovalenko 




isomorphic-git 1.34 – Pure JS implementation of git for Node & browsers.
node-llama-cpp 3.14 – Run LLMs locally with bindings to llama.cpp.
pg-promise 12.2 – Postgres interface for Node. Now with official Postgres 18 support.
BullMQ 5.61 – Reliable, Redis-based distributed queue.
node-mssql 12.0 – Microsoft SQL Server client.
node-soap 1.5 – SOAP client and server library.
Pino 10.0 – High-speed HTTP logger for Node.
NodeBB 4.6 – Node.js-powered forum system.
ESLint v9.37.0











📰 Classifieds


HIRING NOW🕳️ 🥊: At Holepunch we maintain 2000+ OSS npm packages, make the JS runtime Bare to build the P2P Internet. Real tech, Real impact. Join us!
🐘 Postgres user? Postgres Weekly is our sister newsletter covering all things Postgres related each week.






📢  Elsewhere in the ecosystem




A roundup of some other interesting stories in the broader landscape:
React 19.2 was released last week.
Monthly roundups were published by the Svelte project, team Astro, and void(0) covering Vite-adjacent projects.
🤖 Google AI Studio has added the ability to generate Angular apps.
The relaunched JSConf returns to Maryland next week. Tickets are still available and they sent us a JSCONF25NEWSLETTER code which gives a discount. (Note: We have no financial relationship with the event.)
PostgreSQL 18 was released two weeks ago and Tudor Golubenco takes us down the 'rabbit hole' of Postgres 18's features.
