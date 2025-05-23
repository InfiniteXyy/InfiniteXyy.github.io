import type { ICategory } from './project-category';

export const catagories: ICategory[] = [
  {
    name: 'Fun Projects',
    projects: [
      {
        name: 'Ideas',
        description: 'A collection of my strange but may be useful ideas',
        url: 'https://infinitexyy.github.io/ideas/index.html',
        icon: <div className="i-[fa-lightbulb-o]" />,
        stack: ['vitepress', 'doc'],
      },
      {
        name: 'unplugin-pomodoro',
        description: 'A plugin to put a pmodoro timer on your web page in development',
        url: 'https://github.com/InfiniteXyy/unplugin-pomodoro',
        icon: <div className="i-[fa-solid-clock]" />,
        stack: ['svelte', 'plugin'],
      },
      {
        name: 'babel-plugin-react-label-sugar',
        description: 'A simple React Ref Sugar just for fun :) 😄',
        url: 'https://github.com/InfiniteXyy/babel-plugin-react-label-sugar',
        icon: <div className="i-[fa-solid-candy-cane]" />,
        stack: ['React', 'plugin'],
      },
      {
        name: 'hamburger',
        description: '[Developing] 📕 A declarative UI framework',
        url: 'https://github.com/InfiniteXyy/hamburger',
        icon: <div className="i-[fa-solid-hamburger]" />,
        stack: ['framework'],
      },
      {
        name: 'Micro Use',
        description: 'A composition API plugin for Vercel\'s Micro',
        url: 'https://github.com/InfiniteXyy/micro-use',
        icon: <div className="i-[fa-solid-database]" />,
        stack: ['backend', 'plugin'],
      },
      {
        name: 'Just Layout',
        description: '[Developing] The EveryLayout implementation',
        url: 'https://github.com/InfiniteXyy/just-layout',
        icon: <div className="i-[fa-solid-layer-group]" />,
        stack: ['CSS', 'Demo'],
      },
    ],
  },
  {
    name: 'Websites / Apps / Plugins',
    projects: [
      {
        name: 'Process Killer',
        description: 'A user friendly Developer Tool for killing processes',
        url: 'https://process-killer-release.vercel.app/',
        stack: ['React', 'Rust'],
      },
      {
        name: 'Gtd',
        description: 'Easy Get Thing Done app for the web',
        url: 'https://github.com/InfiniteXyy/easy-gtd',
        stack: ['React'],
      },
      {
        name: 'Fallacy List',
        description: 'A Website listing all kinds of fallacies, in Chinese',
        url: 'https://github.com/InfiniteXyy/list-of-fallacies',
        icon: <div className="i-[fa-arrow-circle-o-left]" />,
        stack: ['Vue3', 'Nuxt3'],
      },
      {
        name: 'Working Time',
        description: 'A Website for the great working-time project',
        url: 'https://working-time-react.vercel.app',
        icon: <div className="i-[fa-shopping-bag]" />,
        stack: ['React'],
      },
      {
        name: 'Resumee',
        description: 'A website for you to create your resume by markdown',
        url: 'https://github.com/InfiniteXyy/resumee',
        icon: <div className="i-[fa-solid-file]" />,
        stack: ['React'],
      },
      {
        name: 'PlayCode',
        description: 'run C++/Python/TypeScript in browser',
        url: 'https://github.com/InfiniteXyy/playcode',
        icon: <div className="i-[fa-solid-code]" />,
        stack: ['React'],
      },
      {
        name: 'live-chinese-converter-ext',
        description: 'A browser extension to convert traditional/mandarin chinese in time',
        url: 'https://github.com/InfiniteXyy/live-chinese-converter-ext',
        icon: <div className="i-[fa-solid-language]" />,
        stack: ['Browser Plugin'],
      },
      {
        name: 'Spreader',
        description: 'A cross-platform reader, which can read anything with user-defined spiders',
        url: 'https://github.com/InfiniteXyy/spreader',
        icon: <div className="i-[fa-solid-book]" />,
        stack: ['React Native'],
      },
      {
        name: 'pokemmo-fruit',
        description: 'A pokemmo fruit management tool based on Tkinter',
        url: 'https://github.com/InfiniteXyy/pokemmo-fruit',
        icon: <div className="i-[simple-icons-adafruit]" />,
        stack: ['Python'],
      },
    ],
  },
  {
    name: 'Frontend Ecosystem',
    projects: [
      {
        name: 'zustand-computed-middleware',
        description: 'A Zustand middleware for creating computed values.',
        url: 'https://github.com/InfiniteXyy/zustand-computed-middleware',
      },
      {
        name: 'tailwindcss-iconify',
        description: 'A tailwindcss plugin for iconify, a copy of @unocss/preset-icon',
        url: 'https://github.com/InfiniteXyy/tailwindcss-iconify',
      },
      {
        name: 'React Global Component',
        description: 'A lib for creating shared stateful components in react',
        url: 'https://github.com/InfiniteXyy/react-global-component',
      },
      {
        name: 'zoov',
        description: 'Use 🐻 Zustand with Module-like api',
        url: 'https://github.com/InfiniteXyy/zoov',
      },
      {
        name: 'React Link Svelte',
        description: 'use svelte component in react apps.',
        url: 'https://github.com/InfiniteXyy/react-link-svelte',
      },
      {
        name: 'Tiny Carousel',
        description: 'A 0.6kb simple carousel headless component',
        url: 'https://github.com/InfiniteXyy/tiny-carousel',
      },
    ],
  },
  {
    name: 'Developer Tools',
    projects: [
      {
        name: 'get-app-icon',
        description: 'Unified get app icon cli based on Rust, C# and Swift',
        url: '',
        badge: 'TBD',
      },
      {
        name: 'yuml-typescript-helper',
        description: '🍦 A TypeScript utility for yuml.me (generate UML)',
        url: 'https://github.com/InfiniteXyy/yuml-typescript-helper',
      },
      {
        name: 'vscode-better-online-judge',
        description: 'VS Code plugin for Creating/Testing your Online Judge answer',
        url: 'https://github.com/InfiniteXyy/vscode-better-online-judge',
      },
    ],
  },
  {
    name: 'Templates',
    projects: [
      {
        name: 'Monorepo boilerplate',
        description: '⚛ A monorepo boilerplate for backend and frontend, based on contract',
        url: 'https://github.com/InfiniteXyy/monorepo-boilerplate',
        badge: "New",
        icon: <div className="i-[fa-solid-layer-group]" />,
      },
      {
        name: 'React Native Starter Lite',
        description: '⚛ A starter template for React Native',
        url: 'https://github.com/InfiniteXyy/react-native-starter-lite',
      },
      {
        name: 'NextJS Starter Lite',
        description: '⚛ A starter template for NextJS, inspired by vitesse',
        url: 'https://github.com/InfiniteXyy/nextjs-starter-lite',
      },
      {
        name: 'SolidJS Starter Lite',
        description: '⚛ A starter template for SolidJS, inspired by vitesse',
        url: 'https://github.com/InfiniteXyy/solid-starter-lite',
      },
      {
        name: 'React Starter Lite',
        description: '⚛ A starter template for React, inspired by vitesse',
        url: 'https://github.com/InfiniteXyy/react-starter-lite',
      },
    ],
  },
];
