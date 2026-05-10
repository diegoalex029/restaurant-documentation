
import {themes as prismThemes} from 'prism-react-renderer';

const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Burger Restaurant',
  tagline: 'Documentacion burger restaurant',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://diegoalex029.github.io',
  baseUrl: '/burger-restaurant/',

  organizationName: 'diegoalex029', // Usually your GitHub org/user name.
  projectName: 'burger-restaurant', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', 
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Burger restaurant',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'burgerRestaurantSidebar',
            position: 'left',
            label: 'Contenido',
          },
          {
            href: 'https://github.com/diegoalex029/burger-restaurant',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Burger Restaurant, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
