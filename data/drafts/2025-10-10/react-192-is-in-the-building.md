---
title: React 19.2 is in the building
date: 2025-10-10
sources:
  - https://javascriptweekly.com/issues/755
status: draft
tags: [typescript, ts, javascript, react, next.js]
---

# React 19.2 is in the building

- Source: https://javascriptweekly.com/issues/755
- Date: 2025-10-03T00:00:00.000Z

#​755 — October 3, 2025


Read on the Web




    
    

JavaScript Weekly




  





  
  
The State of JavaScript 2025 Survey — Each year, Devographics runs an epic survey of as many JavaScript community members as it can and turns the results into an interesting report on the state of the ecosystem – here’s the results from 2024. If you have the time, fill it in, especially as they format it in a way where you can actually learn about stuff as you go.
Devographics 


  
  
React 19.2 Released — The third release in a year for React, this time introducing new features like <Activity /> (a way to hide and restore the UI and internal state of its children), useEffectEvent, and improvements to Chrome DevTools' performance profiles so you can see more about React’s scheduling and the tree of components it’s  working with. Oh, and how about partial pre-rendering?
The React Team 


  
  
Don’t miss The AI Security Developers Challenge at DevSecCon on Oct 22, 2025 — Participate in the hands-on developer challenge workshop 💻at DevSecCon and get a chance to team up with industry experts from around the globe 🌎. Register for free and walk away with practical tips you can apply directly to your projects 🚀.
Snyk sponsor


IN BRIEF:
Monthly roundups aplenty from the Svelte project, team Astro, and Viteland!
It was recently discovered that Electron-based apps were causing system-wide lag on macOS 26/Tahoe due to changes in a private API. Electron 38.2, 37.6 and 36.9.2 fix the bug.
📺 The creators of popular documentaries ▶️ about Vue.js, ▶️ React, and ▶️ Node.js are about to release a new one about Vite. It lands next week; ▶️ here's a 1-minute teaser trailer.
The newly relaunched JSConf event returns to Maryland on October 14-16. Tickets are still available and they gave us a JSCONF25NEWSLETTER code which gives a discount. (Note: We have no financial relationship with the event.)
🤖 Google AI Studio has added the ability to generate Angular apps.
The release of Bun 1.3, expected yesterday, has been pushed back to next Monday.
RELEASES:
Anime.js 4.2 – Powerful JavaScript animation engine.
npm-check-updates 19.0 – Find newer versions of packages dependencies than your package.json allows.
pnpm 10.18, Oxlint 1.19, Bun 1.2.23, Deno 2.5.3


📖  Articles and Videos




  





  
  
How Deno Protects Against npm Exploits — The maintainers of the Deno runtime reflect on the recent npm ecosystem security issues and show off how Deno’s non-permissive explicit ‘secure by default’ model can help.
Andy Jiang 


  
  
Cleaning House in Nx Monorepo: How I Removed 120 Unused Deps Safely — Another win (mostly) for Knip, a tool that helps you declutter projects by finding unused dependencies.
John James 


  
  
Tests Are Dead. Meticulous Is Here — Meticulous automatically creates and maintains an E2E UI test suite with zero developer effort.
Meticulous sponsor


  
  
You Can Now Make PS2 Games in JavaScript — Last week we mentioned running JavaScript in MS-DOS but you can take it to Sony’s Playstation 2 as well using a system built upon QuickJS.
JSLegendDev 


  
  
How to Detect Safari and iOS Versions from JavaScript — Naturally, progressive enhancement is the best policy, but if you need to..
Evgeniy Valyaev 


  
  
Mastering npx: A Cheatsheet for npm and Node Power Users — You’ve almost certainly used the npx command to easily run a command from an npm package (either local or remote) – it’s easy to use, but npx has a couple of other features and options to keep in mind.
Liran Tal 


📄 Why Next.js Falls Short on Software Engineering  Harshal Patil
📄 @ts-ignore is Almost Always the Worst Option – Prefer any and @ts-expect-error, says the author. Evan Hahn
📄 I Want to Intercept Boolean Coercion for Objects in JavaScript  Zach Leatherman


🛠 Code & Tools





  
  
qjs: Run JavaScript in Go using QuickJS and Wazero — A new Cgo-free JavaScript runtime option for integrating JavaScript into apps written in Go. It uses a fork of QuickJS that’s compiled to WebAssembly and then run using Wazero.
Nguyen Ngoc Phuong and Contributors 


💡 If you happen to be a Go developer, we have a sister newsletter for that!





  
  
Diagramming Library for the Enterprise? Use JointJS — Cut dev time 12x with JointJS, the most feature-rich diagramming library trusted by Fortune 100 companies.
JointJS sponsor


  
  
SpaceTime 7.11: A Lightweight Timezone Library — Use this to calculate times in other timezones. Has a Moment-like API but is immutable. No dependencies. GitHub repo.
Spencer Kelly 


  
  
Jeasx: A Lightweight SSR Framework That Uses JSX — A server side rendering framework built on top of JSX and Fastify. It doesn’t use React, but if you want to keep using JSX while keeping your server side lightweight, it’s an option. The JSX functionality is provided by the author’s jsx-async-runtime package. v1.9 was just released.
Maik Jablonski 


  
  
📊 Vue ECharts 8.0: Vue.js Component for Apache ECharts — Apache ECharts is a popular, powerful JavaScript charting library we’ve linked many times and this project makes it easier to use in Vue.js apps. v8.0 upgrades to ECharts 6.0. GitHub repo.
GU Yiling and ECOMFE 


  
  
modern-tar: Zero-Dependency Streaming tar Parser and Writer — As in the classic tar archive format.
Ayuhito 




🗓️ Color Calendar 2.0 – Add interactive events calendars to a page.
Skia Canvas 3.0 – GPU-powered 2D vector canvas graphics for Node.
CKEditor5 47.0 – Popular commercial rich text editor framework.
Verdaccio 6.2 – Lightweight local private npm registry.
BlockNote 0.40 – 'Notion-style' block-based editor.
NodeBB 4.6 – Node.js based forum system.








	
📰 Classifieds


🚀 FastCI: How to double the speed of your Continuous Integration with a 2-minute setup.
At Holepunch we maintain 2000+ OSS npm packages, make the JS runtime Bare to build the P2P Internet. Real tech, Real impact. Join us!











🕰  ICYMI (Some older stuff that may catch your eye...)




🛣️ Sean C Davis runs through strategies for managing routes in JavaScript projects — good, practical advice for establishing a consistent workflow and improve overall maintainability.
🦆 Remember Duck Hunt for the NES? Well, ▶️ here's a lengthy video looking at how to recreate it in TypeScript.
🛠️ Chizaram Ken runs through a handful of reasons why your Next.js app may be slow, along with some possible fixes.






😗  And a weird note to end on..




Have you ever wanted to program by whistling? Now you can. Velato is a JavaScript-inspired esoteric language designed to be written entirely by whistling and you can give it a go in your browser right now. I struggled with it, but you might have more luck (it doesn't seem to like Safari, for starters).
Velato was built by Daniel Temkin, the author of Forty-Four Esolangs, a new book, published by MIT Press, about an artist's take on creating esoteric programming languages.
