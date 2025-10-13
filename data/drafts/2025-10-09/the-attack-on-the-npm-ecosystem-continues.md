---
title: The attack on the npm ecosystem continues
date: 2025-10-09
sources:
  - https://javascriptweekly.com/issues/753
status: draft
tags: [typescript, ts, javascript, react, next.js]
---

# The attack on the npm ecosystem continues

- Source: https://javascriptweekly.com/issues/753
- Date: 2025-09-19T00:00:00.000Z

#​753 — September 19, 2025


Read on the Web




    
    

JavaScript Weekly




  





  
  
The 'Shai-Hulud' npm Supply Chain Attack Rumbles On — Now named after a term for the sandworms of the Dune universe, the ongoing malicious supply chain attack affecting the npm ecosystem has grown in scale with hundreds of packages affected in an attempt to exfiltrate tokens and secrets from developers’ machines.
Pandya, van der Zee, and Brown (Socket) 


The story above has triggered a wave of responses and mitigations:
pnpm 10.16 has been released with support for delaying dependency updates using a minimumReleaseAge option – explained in more depth here. We expect to see more tools adopt similar features in due course.
In 'a meditation on npm supply chain attacks', Tane Piper points a finger at Microsoft's role.
Drew DeVault talks about a better future for JavaScript 'that won't happen', focusing on the systemic changes needed to improve the situation.


  
  
FlexGrid by Wijmo: The Industry-Leading JavaScript Datagrid — A fast and flexible DataGrid for building modern web apps. Key features and virtualized rendering are included in the core grid module. Pick & choose special features to keep your app small. Built for JavaScript, extended to Angular, React, and Vue.
Wijmo From MESCIUS sponsor


  
  
⚖️ Deno Asks: 'Help Us Raise $200k to Free JavaScript from Oracle' — The term JavaScript(™) is actually an Oracle trademark, but Ryan Dahl and Deno are attempting to fight that and are raising funds to get through the all-important discovery phase of the cancellation petition.
Ryan Dahl (Deno) 


IN BRIEF:
The WebAssembly 3.0 standard is now 'live' (and already ships with most browsers) with various features that should improve JS interoperability, including garbage collection, tail calls, exception handling, and ways to manipulate JavaScript strings directly.
▶️ Vue's Evan You was recently interviewed by Nuno Maduro of the Laravel project about his background at Google, how Vue.js was first created, the relationship between Next.js and Nuxt, and his current work with void(0).
We recently mentioned Andromeda as being the newest JavaScript runtime to appear, but now there's Ion, a runtime aimed at bringing a JavaScript engine into Rust programs.
Webflow has donated $150k to the Astro project.
RELEASES:
Safari 26.0 has been released alongside macOS 26.0, iOS 26.0, etc. Along with numerous CSS enhancements and a new <model> element for embedding 3D models onto web pages, every site can now "be a web app" on iOS and iPadOS if a user adds it to their home screen.
Bun v1.2.22 – Stack traces now include asynchronous call frames, there's Bun.YAML.stringify to turn objects into YAML, bundler & minifier improvements, and more.
As of React Router 7.9.0, the long-awaited middleware feature is now stable.


📖  Articles




  





  
  
Fetch Streams are Great, But Not for Measuring Upload/Download Progress — Fetch upload streams seem well-suited for tracking the progress of uploads, but as Jake notes “just because stuff is taken from the stream doesn’t mean it’s yet been sent over the network”. He also touches on an issue relating to measuring download progress using response streams.
Jake Archibald 


  
  
Moving Off of TypeScript (We Love You, TypeScript) — An interesting tale from an engineering team that has decided to throw in the towel on its 2.5 million lines of TypeScript, instead migrating to .NET and C#. React will remain on their frontend, however.
Chander Ramesh 


  
  
Secure Your Agentic Apps with Auth for GenAI — Secure your agentic apps with features like User Authentication for AI agents, Token Vault, and more with Auth0’s Auth for GenAI (exclusively in Developer Preview).
Auth0 sponsor


  
  
'React Won by Default – And It's Killing Frontend Innovation' — An opinionated React thought-piece that’s provoked much discussion this week by poking at the downsides and inertia caused by ‘the React-by-default mindset.’
Loren Stewart 


📄 Beyond The Horizon: How Angular is Embracing AI for Next-Gen Apps – An update direct from the Angular team. Simona Cotin (Angular)
📄 Solid.js vs. React: A Developer's Perspective – “Solid has been a breath of fresh air and it has opened my eyes to what React could be, but probably never will be.” Alem Tuzlak
📄 Creating an Immersive 3D Weather Visualization with React Three Fiber  Carter Rink


🛠 Code & Tools




  





  
  
npm-check-updates 18.2: Update package.json Dependencies to Latest Versions — That is, as opposed to the specified versions. Includes a handy -i interactive mode so you can look at potential upgrades and then opt in to them one by one. v18.2 adds a ‘cooldown’ feature to help protect against supply chain attacks by requiring package versions to be published at least the given number of days before considering them for upgrade.
Raine Revere 


  
  
Expo SDK 54 Released: A Big One for React Native Developers — The Expo framework continues its rapid ascent in the world of React Native with precompiled React Native iOS builds (for much shorter build times), iOS 26 and Liquid Glass support, and the use of React Native 0.81 and React 19.1. The new Expo File System has also become stable.
Hughes and Vatne (Expo) 


  
  
Ready to Increase Your Conversions? Get Started with Free Trials — Free Trials are now available through Clerk Billing. Stop building trial logic, cancellation flows, and upgrade paths.
Clerk sponsor


  
  
🦋 BlueSky Likes: Flexible Components for Displaying Bluesky Likes — Includes two custom element components: bluesky-likes and bluesky-likers to display the number of likes and a group of avatars of those who liked a post respectively. Live demo.
Lea Verou 


  
  
Svedit: A Tiny Library for Building Rich Content Editors with Svelte — Enables you to model your content in JSON, render it with custom Svelte components, and edit directly in the layout. GitHub repo.
Michael Aufreiter 




TypeBox 1.0 – A runtime type system that creates in-memory JSON Schema objects that infer as TypeScript types.
🙂 Vue Frimousse v0.1.3 – Unstyled, composable emoji picker for Vue.
wait-on 9.0 – CLI utility and Node API to wait for files, ports, sockets, and http(s) resources to become available.
🗓️ DayPicker 9.10 – React component for creating date pickers, calendars, and date inputs.
Wasp 0.18 – Wasp is a Rails-like framework using Node, React & Prisma.
pretty-ms 9.3 – Convert milliseconds to a human readable string.
npm-publish 4.0 – GitHub Action to publish packages to npm.
Hexo 8.0 – Popular blog framework/ generator.
Fresh 2.1 – Deno-powered Web framework.








	
📰 Classifieds


Meticulous automatically creates and maintains an E2E UI test suite with zero developer effort. Relied on by Dropbox, Wiz, Lattice, Bilt Rewards, etc.
Go beyond caching. Redis 8.2 handles 5x more data with 150 new commands and 8 new data structures vs 7.2. Get started today.
⭐ JetBrains JavaScript Day 2025 brings insights from experts like Ryan Carniato, Kent C. Dodds, and more. Free & online – tune in on Oct 2!










🎁 Some Bonus Items




  






IINA is a popular, open-source media player for macOS and it has just added a JavaScript-based plugin system to let users extend its functionality.
Which npm Package Has the Largest Version Number? Armed with Bun and access to the npm registry's data, a developer set out to satisfy his curiosity, discovering a variety of winners (depending on how you define ‘version’ and ‘largest’).
📂 Want to download MDN for offline reference? The creator of the Dash macOS documentation browser shares some archive files of MDN's documentation covering areas like JavaScript, CSS, HTML and SVG.
Bocoup's Mike Pennisi talks about the Web's most tolerated feature (yet an oft-forgotten one), namely the zoom CSS property.
