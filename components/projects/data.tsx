import { ICategory } from "./project-category";

import {
  FaRegLightbulb,
  FaRegClock,
  FaCandyCane,
  FaHamburger,
  FaLayerGroup,
  FaDatabase,
  FaRegFile,
  FaCode,
  FaLanguage,
  FaBook,
} from "react-icons/fa";
import { SiAdafruit } from "react-icons/si";
import { CgShoppingBag } from "react-icons/cg";

export const catagories: ICategory[] = [
  {
    name: "Fun Projects",
    projects: [
      {
        name: "Ideas",
        description: "A collection of my strange but may be useful ideas",
        url: "https://xyynext.xyz/ideas/index.html",
        icon: <FaRegLightbulb />,
      },
      {
        name: "unplugin-pomodoro",
        description: "A plugin to put a pmodoro timer on your web page in development",
        url: "https://github.com/InfiniteXyy/unplugin-pomodoro",
        icon: <FaRegClock />,
      },
      {
        name: "babel-plugin-react-label-sugar",
        description: "A simple React Ref Sugar just for fun :) 😄",
        url: "https://github.com/InfiniteXyy/babel-plugin-react-label-sugar",
        icon: <FaCandyCane />,
      },
      {
        name: "hamburger",
        description: "[Developing] 📕 A declarative UI framework, with ",
        url: "https://github.com/InfiniteXyy/hamburger",
        icon: <FaHamburger />,
      },
      {
        name: "Micro Use",
        description: "A composition API plugin for Vercel's Micro",
        url: "https://github.com/InfiniteXyy/micro-use",
        icon: <FaDatabase />,
      },
      {
        name: "Just Layout",
        description: "[Developing] The EveryLayout implementation",
        url: "https://github.com/InfiniteXyy/just-layout",
        icon: <FaLayerGroup />,
      },
    ],
  },
  {
    name: "Websites / Apps / Plugins",
    projects: [
      {
        name: "Working Time",
        description: "A Website for the great working-time project",
        url: "https://working-time-react.vercel.app",
        icon: <CgShoppingBag />,
      },
      {
        name: "Resumee",
        description: "A website for you to create your resume by markdown",
        url: "https://github.com/InfiniteXyy/resumee",
        icon: <FaRegFile />,
      },
      {
        name: "PlayCode",
        description: "run C++/Python/TypeScript in browser",
        url: "https://github.com/InfiniteXyy/playcode",
        icon: <FaCode />,
      },
      {
        name: "live-chinese-converter-ext",
        description: "A browser extension to convert traditional/mandarin chinese in time",
        url: "https://github.com/InfiniteXyy/live-chinese-converter-ext",
        icon: <FaLanguage />,
      },
      {
        name: "Spreader",
        description: "A cross-platform reader, which can read anything with user-defined spiders",
        url: "https://github.com/InfiniteXyy/spreader",
        icon: <FaBook />,
      },
      {
        name: "pokemmo-fruit",
        description: "A pokemmo fruit management tool based on Tkinter",
        url: "https://github.com/InfiniteXyy/pokemmo-fruit",
        icon: <SiAdafruit />,
      },
    ],
  },
  {
    name: "React Ecosystem",
    projects: [
      {
        name: "React Global Component",
        description: "A lib for creating shared stateful components in react",
        url: "https://github.com/InfiniteXyy/react-global-component",
      },
      {
        name: "zoov",
        description: "Use 🐻 Zustand with Module-like api",
        url: "https://github.com/InfiniteXyy/zoov",
      },
      {
        name: "React Link Svelte",
        description: "use svelte component in react apps.",
        url: "https://github.com/InfiniteXyy/react-link-svelte",
      },
      {
        name: "Tiny Carousel",
        description: "A 0.6kb simple carousel headless component",
        url: "https://github.com/InfiniteXyy/tiny-carousel",
      },
    ],
  },
  {
    name: "Developer Tools",
    projects: [
      {
        name: "yuml-typescript-helper",
        description: "🍦 A TypeScript utility for yuml.me (generate UML)",
        url: "https://github.com/InfiniteXyy/yuml-typescript-helper",
      },
      {
        name: "vscode-better-online-judge",
        description: "VS Code plugin for Creating/Testing your Online Judge answer",
        url: "https://github.com/InfiniteXyy/vscode-better-online-judge",
      },
    ],
  },
  {
    name: "Templates",
    projects: [
      {
        name: "SolidJS Starter Lite",
        description: "⚛ A starter template for SolidJS, inspired by vitesse",
        url: "https://github.com/InfiniteXyy/solid-starter-lite",
      },
      {
        name: "React Starter Lite",
        description: "⚛ A starter template for React, inspired by vitesse",
        url: "https://github.com/InfiniteXyy/react-starter-lite",
      },
    ],
  },
];
