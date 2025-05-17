// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AI 900 Notes",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  url: "https://ai900.shahtech.info",
  baseUrl: "/",

  organizationName: "busycaesar",
  projectName: "AI_900",
  deploymentBranch: "Deployment",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  staticDirectories: ["static"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    navbar: {
      title: "AI 900 Notes",
      logo: {
        alt: "ShahTech Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sections",
          position: "left",
          label: "Learn",
        },
        {
          href: "https://github.com/busycaesar/AI_900",
          label: "GitHub",
          position: "right",
        },
                {
          href: "https://learn.microsoft.com/en-us/training/courses/ai-900t00",
          label: "Microsoft Learn Course",
          position: "right",
        },

      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/busycaesar",
            },
            {
              label: "GitHub",
              href: "https://github.com/busycaesar",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/busycaesar",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blogs",
              href: "https://dev.to/busycaesar",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/@busycaesar",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/busycaesar",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Buy Me a Coffee",
              href: "https://buymeacoffee.com/busycaesar",
            },
            {
              label: "Topmate",
              href: "https://topmate.io/busycaesar",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} shahtech.info. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
