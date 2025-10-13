---
title: The first browser with JavaScript landed 30 years ago
date: 2025-10-12
sources:
  - https://javascriptweekly.com/issues/754
status: draft
tags: [typescript, ts, javascript, react, next.js]
---

# The first browser with JavaScript landed 30 years ago

- Source: https://javascriptweekly.com/issues/754
- Date: 2025-09-26T00:00:00.000Z

#​754 — September 26, 2025


Read on the Web




    
    

JavaScript Weekly




  





  
  
Give Your AI Eyes: Introducing Chrome DevTools MCP — The Chrome team has released an MCP server for Chrome DevTools, enabling agents like Claude Code or OpenAI Codex to use the DevTools to debug and analyze the performance and behavior of your webapps (or even just to automate the use of Chrome generally). Addy does a great job of explaining the potential here.
Addy Osmani 


  
  
AI Code Reviews Meet CLI Coding Agents — CodeRabbit CLI brings instant code reviews directly to your terminal, integrating with Claude Code, Cursor CLI, and other AI agents. While they generate code, CodeRabbit ensures it's production-ready - catching bugs, security issues, and hallucinations before they hit your codebase.
CodeRabbit sponsor


  
  
GitHub's Plan for a More Secure npm Supply Chain — In direct response to the recent npm ecosystem supply chain attacks of recent weeks, GitHub’s senior director of security research has outlined steps GitHub is taking, including blocking the upload of packages featuring the patterns of the recent malware, hardening package publication, and promoting the use of trusted publishing.
Xavier René-Corail (GitHub) 


IN BRIEF:
Netscape Navigator 2.0 Beta was released 30 years ago – it was notable as the first browser to include JavaScript support.
The agenda of this week's TC39 meeting where several proposals were advanced, including Import Bytes, Iterator Chunking, and Array.prototype.pushAll.
The Chrome team expects Chrome/Chromium's support for the Temporal API to land in Chromium 144 (the current stable version is 140).
InfoQ shares an update on the features of Preact 11 beta, the recently released update to the popular lightweight React alternative.
The IEEE has released its list of the top programming languages of 2025 with JavaScript and TypeScript coming in at #6 and #7 respectively.
RELEASES:
pnpm 10.17 – The new minimumReleaseAgeExclude now supports patterns to exclude groups of packages from minimum release age checks.
Astro 5.14 - Boasts "a bumper harvest of features and DX improvements to warm the cockles of your heart."
Node.js v24.9.0 (Current) and v22.20.0 (LTS)
Nuxt UI 4.0, PostgreSQL 18.0, ESLint v9.36.0


📖  Articles and Videos





  
  
From Steam to Floppy: Porting Modern TypeScript to Run on DOS — The creator of a DOS-inspired programming game (available on Steam) wanted to try and get the game running on real DOS. Thanks to jSH, a JavaScript engine for DOS, it was kinda do-able.
Jimbly / Dashing Strike 


  
  
NPM Security Best Practices — An extensive list of best practices, techniques, and ideas to consider for making your use of the npm packaging ecosystem and its tooling more secure.
Boda 


  
  
Implementing Authentication and Session Management in Next.js — Learn how to integrate user sign-up, sign-in, and protected routes into your Next.js app with modern auth practices.
Clerk sponsor


  
  
JSON is Not JSON Across Languages — If you use JSON to communicate between systems built in different languages, beware. Different libraries with varying opinions can cause “some of the most soul-crushing debugging experiences in software development.”
Dochia CLI 


📄 Stop Using .reverse().find(): Meet findLast()  Matt Smith
📄 Storing Unwise Amounts of Data in JavaScript BigInts  Jonathan Frere
🎤 Making Desktop Frameworks More Accessible with Electron – A 20 minute chat with a long-time Electron maintainer. The GitHub Podcast
📄 Create 'Sick' Web Animations in Three.js with GSAP – A very simple example. Michael Li
📄 How to Test the New ARIA Notify API with Cypress  Mark Noonan


🛠 Code & Tools




  





  
  
🤖 GitHub Copilot CLI Now in Public Preview — Not content to let Claude Code and OpenAI Codex dominate the CLI-based dev agent scene, GitHub has released a CLI-based version of Copilot, built using Node.
GitHub 


  
  
TanStack Start v1 Release Candidate — TanStack’s attempt at a full-stack TanStack Router-powered framework has reached a v1.0 release candidate that’s expected to be largely the same as its eventual 1.0 release. “It’s the next chapter in building type-safe, high-performance React apps without the heavy abstractions.” 
Tanner Linsley 


  
  
Roles Get Messy Fast. WorkOS RBAC Keeps Access in Check — Define roles, group permissions, and sync with SSO and SCIM. Manage access with clean APIs and a powerful dashboard.
WorkOS sponsor


  
  
Cap'n Web: A New RPC System for Browsers and Web Servers — A ‘spiritual sibling’ to Cap’n Proto, an RPC protocol created by one of the same authors. However, Cap’n Web’s underlying serialization is human-readable, focused on integrating well with JS runtimes, and works over HTTP, WebSocket, and postMessage() out-of-the-box.
Varda and Faulkner (Cloudflare) 


  
  
eslint-plugin-react-you-might-not-need-an-effect — What a project name! It’s an ESLint plugin to help React developers catch unnecessary useEffects which are quite commonly overused.
Nick van Dyke 





  






📊 Billboard.js 3.17.0 (above) – The popular charting library adds image label support for charts, label border styling, and dynamic control of label colors.
PythonMonkey 1.3 – Embed the SpiderMonkey JS engine into Python's VM. Now with Python 3.14 support.
pretty-bytes 7.1 – Convert a size in bytes into a human readable equivalent (e.g. 1337 becomes '1.34 kB').
Docusaurus 3.9 – The popular React + MDX-powered content/docs site generator.
Neo.mjs 10.9 – Multi-threaded framework for fast, desktop-like webapps.
eslint-plugin-vue 10.5 – Official ESLint plugin for Vue.js. (Homepage.)
VanJS 1.6 – The small but sweet reactive UI framework. (Homepage.)
Milkdown 7.16 – Plugin-driven WYSIWYG Markdown editor framework.








	
📰 Classifieds


Meticulous automatically creates and maintains an E2E UI test suite with zero developer effort. Relied on by Dropbox, Wiz, Lattice, Bilt Rewards, etc.
🚀 Next week: JetBrains JavaScript Day 2025! A free online event full of talks & live Q&A with experts from the JS community. Don’t miss it!










🧐 Learning web development with Dr. Axel





Over the past couple of months the esteemed Dr. Axel Rauschmayer has been working on a valuable series of beginner-friendly posts on a range of web development topics, with a heavy focus on JavaScript. He pitches the series as a way to teach people "who have never programmed how to create web apps with JavaScript".
These are all excellent primers/refreshers, and ideal for sharing with those early in their web development journey. Here are some of the highlights so far:
Working with numbers, variables, and functions, and strings and methods.


Booleans, comparisons and if statements and loops.

Digging into plain objects, Arrays, Maps, and exceptions.

An introduction to frontend frameworks using Preact.
Installing npm packages and bundling.
Promises and async functions.




P.S. Don't go JSON waterfalls..
