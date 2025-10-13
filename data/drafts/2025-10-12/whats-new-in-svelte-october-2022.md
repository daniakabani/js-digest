---
title: "What’s new in Svelte: October 2022"
date: 2025-10-12
sources:
  - https://svelte.dev/blog/whats-new-in-svelte-october-2022
status: draft
tags: [ts, javascript, react, svelte, edge]
---

# What’s new in Svelte: October 2022

- Source: https://svelte.dev/blog/whats-new-in-svelte-october-2022
- Date: 2022-10-01T00:00:00.000Z

There’s a bunch of updates this month... from new features in Svelte and SvelteKit to a whole 2-day summit! Plus, the Svelte extension gets some helpful new tools, new accessibility (a11y) warnings, and Tan Li Hau teaches us how to build our own Svelte and a Svelte spreadsheet 😎
What happened at Svelte Summit?
A lot! Below you can find all the talks, by timestamp, from each livestream. Bite-size videos of the event will be coming soon to the Svelte Society channel, so be sure to Subscribe, if you haven’t already!
Day One
12:31 - How to get Svelte adopted at work
33:21 - Animating Data Visualization in Svelte
2:20:36 - Red flags & code smells
2:53:42 - Enhance your DX
4:42:41 - Svelte in UBS’ knowledge graph
5:06:42 - How to migrate react libraries to svelte
5:45:27 - DX magic in the world of Svelte
7:25:39 - Data visualizations powered by Svelte
7:59:38 - Partial Hydration in Svelte for Increased Performance
8:20:49 - Building the future, faster
Day Two
24:09 - Scrollytell me why: Ain’t nothing but a piece of cake
2:02:40 - I told you my dog wouldn’t run
2:29:43 - 10Xing Svelte
3:04:56 - Svemix? Re-svmix? Re-svelte?: Bringing Svelte to Remix Router
5:09:39 - Having fun with stores: an interactive demo of Svelte’s built in state management library
5:37:06 - When Keeping it Svelte Goes Wrong. An Analysis of Some of the Worst Svelte I Have Ever Coded
7:22:05 - Getting started with Hooks
7:38:14 - Special Announcement*
*In the final talk of the summit, Rich Harris announces the first Release Candidate of SvelteKit! With no planned breaking changes left, the team is hard at work squashing bugs and adding the remaining features for 1.0...
More SvelteKit Updates

use:enhance is the easiest way to progressively enhance a form (Docs, #6633, #6828, #7012)
The demo app has been updated to add the Sverdle game, which Rich demoed at Svelte Summit and demonstrates use:enhance (#6979)
Cloudflare Pages _routes.json specification is now supported by adapter-cloudflare (#6530)
Improved build performance by running asset and page compression in parallel (#6710)
Breaking changes:

Node 16.14 is now the minimum version to run SvelteKit (#6388)
App.PrivateEnv and App.PublicEnv have been removed in favour of generated types (#6413)
%sveltekit.message% has been replaced with %sveltekit.error.message% (6659)
App.PageError is now App.Error - check for it in your hooks (Docs, #6963)
externalFetch is now handleFetch and will run for all fetch calls in load that run on the server (#6565)
For a full list of changes, check out SvelteKit’s CHANGELOG.
Svelte Updates

New a11y warnings for incorrect-aria-attribute-type, no-abstract-role, interactive-element-to-noninteractive-role and role-has-required-aria-props.no-noninteractive-tabindex and click-events-have-key-events coming soon! (3.50.0)
New types for ComponentEvents and SveltePreprocessor (3.50.0)
Improved parsing speed when encountering large blocks of whitespace (3.50.0)
All global JavaScript objects and functions are now recognized as known globals (3.50.1)
For all the changes to the Svelte compiler, including upcoming changes, check out the CHANGELOG.
New in Language Tools

Better code formatting for editor suggestion (106.0.0, #1598)
Easily create SvelteKit route files from the context menu or command palette (106.1.0, #1620)
Ask Questions in the Svelte Discord
In case you missed the announcement, the Svelte Discord has an exciting new update... a forum! The new questions channel utilizes Discord’s new forums feature to help the community better ask, find and answer questions!
It can be used for anything you may be trying to accomplish using Svelte including using SvelteKit, community libraries, tools, etc. So ask away!
Community Showcase
Apps & Sites built with Svelte

Timeflow is a smart calendar & task manager that dynamically schedules your tasks between your events
GeoQuest is an open source geography game
Houses Of is a project showcasing charismatic houses around the world
Greenfield Brewery is a tool for quickly installing a lot of homebrew casks
Gram Jam is a word puzzle game inspired by match three games and Scrabble
Beatbump is a privacy-respecting alternative frontend for YouTube Music
RoomOS Device Widgets is an app for demoing RoomOS device capabilities in Kiosk/PWA mode
World Seed is a full blown online multiplayer game
Lirify is a song lyrics writing web app tool made in Latvia
Splet Tech Konferencija is a tech conference in Serbia with a very fancy website
Unbounded is an open-source variable font - funded by blockchain (and an awesome-looking website)
Porter’s Paints is an eCommerce site for (you guessed it) paints built with Svelte
CRAN/E is a search engine for modern R-packages
Learning Resources
Starring the Svelte team
Upgrading SvelteKit by Svelte Sirens (with Brittney, Kev, and GHOST!)
Build your own Svelte by lihautan
Native Page Transitions in SvelteKit: Part 1 by Geoff Rich
Build a cross platform app with Tauri by GHOST
To Watch
How To Use Future CSS In Svelte and Master Animation With Svelte by Joy of Code
Svelte Kit Form Actions 101 - New Svelte Kit API and Svelte Kit Form Actions - Real World Examples - Q&A by LevelUpTuts
To Read
What’s new in svelte-kit, 1.0.0-next.445: (group) layout by Parables
Handling breaking changes in SvelteKit pre-1.0 by Thilo Maier
Svelte Custom Stores Demystified by Raqueebuddin Aziz
Sveltekit Changes: Advanced Layouts, Form Actions and Progressive Enhancement and Cookies and Authentication by Shivam Meena
How to add an Emoji Picker to Sveltekit by Xavier Coiffard
Get Started with SvelteKit Headless WordPress by Rodney Lab
Speed up SvelteKit Pages With a Redis Cache and How to await Firebase Auth with SvelteKit by Captain Codeman
Deploying SvelteKit with NodeJS to a Server Using GitLab and PM2 by A Byte of Coding
Quality of Life Tips when using SvelteKit in VS Code by doa-doa
Libraries, Tools & Components

Svelte Fit is an extremely simple, no dependency fit text library
svelte-switch-case is a switch case syntax for your Svelte components
svelte-canvas-confetti uses a single canvas to render full-screen confetti
@slidy/svelte is a simple, configurable & reusable carousel component built with Svelte - based on @slidy/core
svelte-currency-input is a form input that converts numbers to localized currency formats as you type
Adria is a super simple form validation library, with autocomplete and value/type checking
Canopy is a Svelte debugging app for the Chrome devtools panel
MenuFramework is a menu framework written for alt:V
whyframe gives iframes superpowers, making it easy to render anything in isolation
@svelte-put/modal is a solution to async, declarative, type-safe modals in Svelte
Kitty is a collection of libraries and handlers for developing secure frontend apps
svelte-turnstile is a component for Cloudflare Turnstile, the privacy focused CAPTCHA replacement
UI Kits and Starters
QWER is a blog starter built with SvelteKit
SvelteKit Zero API provides type-safety between the frontend and backend - creating a structure for easy APIs
sveltekit-monorepo is monorepo starter with 2022 tech
svelte-component-test-recipes uses vitest, @testing-library/svelte, and svelte-htm to test Svelte components that seemed to be hard to test
Whew! That’s a lot of updates. Let us know if we missed anything on Reddit or Discord!
See ya next month 👋
