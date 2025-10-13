---
title: Package efficiency and dependency hygiene
date: 2025-10-09
sources:
  - https://javascriptweekly.com/issues/752
status: draft
tags: [typescript, ts, javascript, react, next.js]
---

# Package efficiency and dependency hygiene

- Source: https://javascriptweekly.com/issues/752
- Date: 2025-09-12T00:00:00.000Z

#​752 — September 12, 2025


Read on the Web



If you have any interest in music and being able to render music or generate music with JavaScript, be sure to check out the very end of this issue where we've dedicated an entire section to the topic :-)
__
Your editor, Peter Cooper






    
    

JavaScript Weekly




  





  
  
How to Keep package.json Under Control — Staring at a 863 megabyte node_modules folder for Val Town’s React app, Tom got to thinking about ‘dependency hygiene’ and some good ways to keep things under control. Good tips and tool recommendations here.
Tom MacWright 


  
  
Behind the Scenes of bun install — Talk about an epic post. This is no mere explanation of how Bun quickly and efficiently installs packages — but a tour of package installation more generally, the underlying technicalities that make package installation tricky universally, and how Bun has tackled the problem.
Lydia Hallie (Bun) 


  
  
Stop Reinventing Forms. Use SurveyJS Instead — SurveyJS UI components let you build JSON-driven forms, render them in React, Angular, Vue 3, or plain JS, and store results in your own DB. Open-source, extensible, no vendor lock-in — save months of development and stay in control of your data.
SurveyJS sponsor


  
  
A Major Supply Chain Attack Hit the npm Ecosystem — Socket warned us about a phishing campaign targeting npm package publishers which, sadly, bore fruit earlier this week when a variety of popular packages became compromised (like Chalk, DuckDB's distribution for Node.js, debug, and many others).
Gooding, Brown, et al. (Socket) 


RELEASES:
Deno 2.5 – You can now create sets of permissions in deno.json, Deno.test gets some DX improvements, and deno bundle gets a programmatic API so you can script the bundling of your app, along with much more.
ESLint v9.35.0 – Has a new rule (preserve-caught-error) for disallowing the loss of an originally caught error when re-throwing custom errors.
Node.js v24.8.0 (Current) – Now supporting inspection of HTTP/2 network calls in Chrome DevTools.
Electron 38 – Mentioned last week, but now has an official blog post.
Storybook 10 is now in beta. The big change is it's going ESM only.
Ember 6.7, Rspack 1.5.3, Expo Router v6, Fastify 5.6


📖  Articles and Videos





  
  
The Missing Link in JavaScript Tools? — Marvin ponders whether today’s fractured toolchain for templates, CSS imports, JSX, and numerous other non-standard enhancements to JavaScript could be unified into a single pipeline.
Marvin Hagemeister 


  
  
Finally, Safe Array Methods in JavaScript — arr.sort() will sort your array in place, whereas ES2023’s arr.toSorted() will return a new, sorted copy of arr. There are several such methods you might prefer to use.
Matt Smith 


  
  
Secure Your Agentic Apps with Auth for GenAI — Secure your agentic apps with features like User Authentication for AI agents, Token Vault, and more with Auth0’s Auth for GenAI (exclusively in Developer Preview).
Auth0 sponsor


  
  
An Interactive Guide to TanStack DB — TanStack DB offers an embedded client‑side database that uses differential dataflow to power live, relational queries, sub‑ms incremental updates, and optimistic writes. This tutorial leans on using it with React, but TanStack DB works alongside Vue, Solid, and Svelte as well.
Maxi Ferreira 


📺 Handling 500 Million Clicks with a $4 VPS – Behind the scenes of a Node-backed site that went viral. Andrew Schmelyun
📄 How To Set Up Express.js 5 For Production in 2025  Jan Hesters
📄 Building Microfrontends with Module Federation and Vue  Alex Opalic
📄 How Shopify Migrated to React Native's New Architecture  
Thiago Magalhaes (Shopify)


🛠 Code & Tools




  





  
  
Andromeda: The Newest JavaScript Runtime on the Block — A new JavaScript and TypeScript runtime built around the Rust-powered Nova engine. It’s still early days but they’re promising a lot: native single file compilation, a GPU-accelerated 2D Canvas API, low runtime overhead, interop with Rust, memory safety, WinterTC compatibility, and cross-platform support.
Andromeda Team 


  
  
BlazeDiff: 'Blazing-Fast' Pixel-by-Pixel Image Comparisons — The creator was happy with the established pixelmatch library for doing image comparisons, until it got too slow for the scale he wanted. Here’s the story of how he came up with a faster alternative.
Teimur Gasanov 


  
  
Unlock the Power of MCP Servers — Clerk shows how MCP servers let AI apps access data securely with OAuth — complete with a Next.js demo.
Clerk sponsor


  
  
Feedsmith 2.0: Feed Parser and Generation Library — As well as parsing feeds, you can also create RSS, Atom, JSON Feed, and OPML files with many common namespaces (iTunes, Podcast, Media RSS, Dublin Core, etc.) There’s a quick start tutorial for using it both in browsers or Node.js. GitHub repo.
Maciej Lamberski 


  
  
React Bits: 100+ Creative, Animated React Components — If you want a bit of visual pizzazz in your project, this is for you. The components span from a variety of text effects to general animations, a ‘chroma grid’, bouncing cards, distortions, and more. GitHub repo.
David Has 




Ink 6.3 – Use React to build CLI apps, as used by Claude Code, Gemini CLI, and many other apps.
Tricolore 0.1 – Visualize ternary compositions with choropleth maps. Live demo.
ts-to-zod 4.0 – Generate Zod schemas (v4) from TypeScript types/interfaces.
Confirmal 1.3 – Turn FormData into real objects with TypeScript inference.
📊 Chartbrew 4.3 – Create live reporting dashboards.
ow 3.0 – Function argument validation for humans.
uuid 13.0 – Generate RFC9562 compliant UUIDs.
Fresh 2.0 – Deno-powered Web framework.








	
📰 Classifieds


Meticulous automatically creates and maintains an E2E UI test suite with zero developer effort. Relied on by Dropbox, Wiz, Lattice, Bilt Rewards, etc.
🔈 JetBrains JavaScript Day 2025 registration is now open! Get up to speed with modern JavaScript development in just one day – for free.
$100 off yearly Frontend Masters membership! 250+ courses, personalized learning path, workshops with devs from GitHub & Netflix. Sale ends soon →
🗓️ Free virtual DevSecCon on Oct 22, 2025. Learn to secure AI-native apps with keynotes, demos, and a developer challenge. Register now!










🎵 Let's Get Musical




  








  
  
SpessaSynth: SoundFont2-Based MIDI Player and Synthesizer — If you think typical browser-played MIDI files sound terrible, you’re right – but try this! It uses a SoundFont sample driven approach to play MIDI files in a predictable fashion, and also includes an editor/visualizer if you need it. The live demo is quite striking.
Spessasus 


While we're on the topic, here are some other neat music related JavaScript projects we've enjoyed over the years:


  






alphaTab – A full on music notation and guitar tab rendering library for building complete musical apps (above).
chiptune3.js – A bit like SpressaSynth (also above) but for playing module file music. Live demo.
Tone.js – An easy way to use the Web Audio API to create music in the browser. Someone used it to recreate the famous THX 'deep note' sound.
🎸 SVGuitar – A library to render SVG guitar chord charts.
JZZ.js – A JavaScript MIDI library that hides a lot of complexity behind its chained syntax when you need to work directly with MIDI. (The keyboard logo at the top left of its homepage is a neat easter egg.)
Strudel – A live-coding environment in the browser for generating pieces of music with simple, chained JavaScript expressions.
