// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Voices of the Void Modding Wiki',
  tagline: 'Adding more Voices to your Void.',
  favicon: 'img/favicon.ico',

  url: 'https://questwalker.github.io/',
  baseUrl: '/votv-modding-wiki/',

  organizationName: 'Questwalker',
  projectName: 'votv-modding-wiki',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-GB',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Questwalker/votv-modding-wiki/tree/main/',
          // sidebarCollapsed: false
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/background-snow.png', // TODO. Shows as website thumbnail
      navbar: {
        title: 'VotV Modding Wiki',
        logo: {
          alt: 'VotV Logo',
          src: 'img/votv.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Questwalker/votv-modding-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial', // TODO: Change when docs are filled in. Point towards "Welcome", "Installing Mods", and "Creating Mods" sections
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/eternitydevgames',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/Voicesofthevoid/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'VotV Wiki',
                href: 'https://voicesofthevoid.wiki.gg/',
              },
              {
                label: 'VotV Webite',
                href: 'https://votv.dev/',
              },
              {
                label: 'VotV Archive',
                href: 'https://archive.ariral.space/',
              },
            ],
          },
        ],
        copyright: `Wiki by Questwalker (@questwalker) on Discord, based on the wiki by GatoDeveloper/Creepycats.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['diff'],
      },
      metadata: [
        {property: 'og:image:height', content: '252'},
        {property: 'og:image:width', content: '448'},
      ],
    }),
};

export default config;
