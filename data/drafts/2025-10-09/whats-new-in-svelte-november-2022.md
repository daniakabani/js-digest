---
title: "What’s new in Svelte: November 2022"
date: 2025-10-09
sources:
  - https://svelte.dev/blog/whats-new-in-svelte-november-2022
status: draft
tags: [typescript, ts, react, svelte, angular]
---

# What’s new in Svelte: November 2022

- Source: https://svelte.dev/blog/whats-new-in-svelte-november-2022
- Date: 2022-11-01T00:00:00.000Z

It’s been a busy October for the Svelte community. use:enhance and Advanced Routes got some great improvements in SvelteKit while the Svelte compiler released a minor version to improve the day-to-day dev experience.
There’s also a huge showcase to cover... so let’s jump in!
What’s new in SvelteKit

The new update method for use:enhance lets you easily get back the default form behavior while augmenting it with your own logic (docs, #7083 and #7326)
[[optional]] parameters are now available for routing (docs, #7051)
goto now has invalidateAll to (re-)run all load functions belonging to the new active page (docs, #7407)
config.kit.paths.base is now used in adapters looking for static assets - fixing 404 issues across adapter-netlify, adapter-vercel, adapter-cloudflare, and adapter-cloudflare-workers (#4448)
Breaking changes:

Errors will now be thrown when routes conflict (#7051)
The global fetch override has been removed when prerendering (#7318)
Route IDs have been prefixed with / (#7338)
Svelte changes

New accessibility warnings, a11y-click-events-have-key-events and a11y-no-noninteractive-tabindex, will now warn when your components lack required key events or tabindex. While a11y-role-has-required-aria-props will no longer warn when elements match their semantic role (3.51.0)
--style-props are now supported on <svelte:component> and <svg> (3.51.0, Component Example: Before and After, SVG Example: Before and After)
“nullish” values for component event handlers are now supported (3.51.0, Example)
Scoped styles can now be applied to <svelte:element> (3.51.0, Example)
You can now use important in inline style tags: style:foo|important (3.52.0, #7365)
A warning will now be thrown when using <a target="_blank"> without rel="noreferrer" (3.52.0, #6188)
Tom Smykowski also released a great summary of all the changes in 3.52.0! For all the changes to the Svelte compiler, including upcoming changes, check out the CHANGELOG.
Community Showcase
Apps & Sites built with Svelte

AttendZen is an event management and marketing platform for in-person, virtual or hybrid events
Gram Jam is a challenging daily word game using SvelteKit
Collabwriting is an actionable knowledge base for your team
Dazzle is a Puzzle Game made with Svelte & DallE
Figma Autoname plugin automatically names your Figma layers in one click
DECK is powerful and high performant local web development studio for MacOS, Ubuntu and Windows
Asm editor is a webapp to write and run m68k assembly code
Nucleus is a text editor featuring a clean and easy to use user interface inspired by Visual Studio Code, Atom, Fleet, and others
Observer is a frontend for Arth Panel, an open-source & self-hosted minecraft server panel
.PLAN is a cloud-based notetaking app with markdown and section support
Stablecog is a simple, free & open source AI image generator
FreeSpeech AAC is a free and open-source assistive communication app written in TypeScript
sqrdoff is a dots and boxes to enjoy playing with friends
itty is a fresh take on the traditional link-shortener
splits lets you track your splits, calculate your race pace, become a better athlete
Weaver is an application for creating weave drafts
Learning Resources
To Watch
Starting With Svelte - Brittney Postma by fitcevents
Learn Svelte from scratch with Geoff Rich: A Svelte tutorial by Kelvin Omereshone
How To Connect to MongoDB in Svelte Kit by LevelUpTuts
SvelteKit Authentication Using Cookies, Make A Typing Game With Svelte and SvelteKit Tailwind CSS Setup With Automatic Class Sorting by Joy of Code
Authentication with SvelteKit & PocketBase and Form Actions in SvelteKit (+page) by Huntabyte
Sybil - Episode 1 - Rust knowledge management with SurrealDB by Raphael Darley
To Read
4 things I miss from Svelte after working in React and Create dynamic social card images with Svelte components by Geoff Rich
First-class Vite support in Storybook 7.0 (Svelte and SvelteKit included) by Ian VanSchooten
Better Svelte support is coming to WebStorm from JetBrains
Dark Mode Toggle by pyronaur
HeadlessUI Components with Svelte by Captain Codeman
Using Sequelize with SvelteKit by MetaZebre
Implementing Maintenance mode on a SvelteKit site by Andreas Söderlund
ActionStore: Real-time Svelte stores for Rails by Stefan Buhrmester
Svelte CSS Image Slider: with Bouncy Overscroll and SvelteKit Local Edge Functions: Edge on Localhost by Rodney Lab
Creating a Svelte Tabs component with Slot props by Shinichi Okada
Sky Cart: An Open Source, cloud-agnostic shopping cart using Stripe Checkout by Mike Bifulco for Stripe
Libraries, Tools & Components

Threlte is a component library for Svelte to build and render three.js scenes declaratively and state-driven in Svelte apps. It’s being featured again to highlight the new “Playground” button in its examples
Svelte Turnstile is a library to integrate Cloudflare’s Turnstile (a new CAPTCHA alternative) into a Svelte app
ActionStore allows you to push data directly into Svelte stores via ActionCable
SvelteKit + <is-land> is an experiment with partial hydration in SvelteKit using @11ty/is-land
Svelte Color Select is an Okhsv Color Selection component for Svelte using OKLab perceptual colorspace
svelte-awesome-color-picker is a highly customizable color picker component library
rx-svelte-forms creates reactive Svelte forms inspired by Angular reactive forms
svelte-wc-bind enables two way data binding in Svelte web components
svelte-preprocess-style-child-component allows you to style elements inside a child component using similar syntax as CSS Shadow Parts
unplugin-svelte-components allows for on-demand components auto importing for Svelte
sveltekit-search-params aims to be the fastest way to read AND WRITE from query search params in SvelteKit
svelte-crop-window is a crop window component for images and videos that supports touch gestures (pinch zoom, rotate, pan), as well as mousewheel zoom, mouse-dragging the image, and rotating on right mouse button
Open Graph Image Generation lets you generate open graph images dynamically from HTML/CSS without a browser in SvelteKit
Svelte Tap Hold is a minimalistic tap and hold component for Svelte/SvelteKit
svelte-copy’s new version lets you customize the events that cause text to be copied to the clipboard
UI Kits, Integrations and Starters
SvelteKit Statiko is a multi-featured assistant for SvelteKit static projects
Svelte-TailwindCSS UI (STWUI) is a Tailwind-based UI that is currently in pre-release beta
KitBase is a starter template for SvelteKit and PocketBase
UnoCSS Vite Plugin (svelte-scoped) is a scoped-CSS utility for Vite/SvelteKit
SvelteKit Auth App is an example of how we can create an authentication system with SvelteKit using JsonWebToken and Prisma
SvelteKit Supabase Dashboard is a simple dashboard inspired by Supabase UI made with SvelteKit as frontend and Supabase as backend
Supakit is a Supabase auth helper for SvelteKit
@bun-community/sveltekit-adapter-bun is an adapter for SvelteKit apps that generates a standalone Bun server
hooks-as-store lets you use React custom hooks in Svelte Apps
Fun ones
svelte-typewriter-store is the simplest way to get a rotating typewriter effect in Svelte
Aksel is the seagull you needed on your site
Svelte-Dodge makes components dodge the pointer
That’s it for this month! Let us know if we missed anything on Reddit or Discord
See ya next month 👋
