import { defineConfig } from 'vitepress'

// The framework version this site documents. Keep in step with the root VERSION file.
const hfeVersion = '1.1.1'

// Clean, readable heading slugs: strip emoji, em dashes, and punctuation so anchors
// look like `#pillar-1-think-first` rather than keeping the leading emoji.
const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Human-First Engineering',
  description:
    'Growing engineers in the age of AI. Principles and practices for keeping engineering judgement, ownership, and craft intact in an AI-enabled world.',

  // Served from the humanfirstengineering.dev custom domain root, so no sub-path base.
  base: '/',

  lastUpdated: true,
  cleanUrls: true,

  // Default to dark mode while keeping the light/dark toggle available.
  appearance: 'dark',

  markdown: {
    anchor: { slugify },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#09090b' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Human-First Engineering' }],
    ['meta', { property: 'og:url', content: 'https://humanfirstengineering.dev/' }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Manifesto', link: '/manifesto' },
      { text: 'Framework', link: '/framework' },
      { text: 'Toolkit', link: '/toolkit/' },
      {
        text: `v${hfeVersion}`,
        link: 'https://github.com/irarainey/human-first-engineering/blob/main/CHANGELOG.md',
      },
    ],

    sidebar: {
      '/toolkit/': [
        {
          text: 'Toolkit',
          items: [
            { text: 'Overview', link: '/toolkit/' },
            { text: 'Implementation Guide', link: '/toolkit/implementation-guide' },
            { text: 'Practices', link: '/toolkit/practices' },
            { text: 'Context Engineering', link: '/toolkit/context-engineering' },
            { text: 'Slide Deck', link: '/toolkit/slide-deck' },
            { text: 'Developer FAQ', link: '/toolkit/developer-faq' },
            { text: 'For Early-Career Engineers', link: '/toolkit/for-early-career-engineers' },
            { text: 'Relationship to HVE', link: '/toolkit/relationship-to-hve' },
          ],
        },
        {
          text: 'Templates & Prompts',
          items: [
            { text: 'Overview', link: '/toolkit/templates/' },
            { text: 'Copilot Instructions', link: '/toolkit/templates/copilot-instructions' },
            { text: 'Claude Instructions', link: '/toolkit/templates/claude' },
            { text: 'Problem Frame Prompt', link: '/toolkit/templates/prompts/problem-frame' },
            { text: 'Review Assistant Prompt', link: '/toolkit/templates/prompts/review-assistant' },
            { text: 'Risk Assessment Prompt', link: '/toolkit/templates/prompts/risk-assessment' },
            { text: 'Context Bootstrap Prompt', link: '/toolkit/templates/prompts/context-bootstrap' },
            { text: 'CONTEXT.md', link: '/toolkit/templates/context' },
            { text: 'ARCHITECTURE.md', link: '/toolkit/templates/architecture' },
            { text: 'DECISIONS.md', link: '/toolkit/templates/decisions' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/irarainey/human-first-engineering' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message:
        'Licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>. Share freely. Build on it. Don\'t sell it.',
      copyright: `Human-First Engineering v${hfeVersion} · <a href="https://github.com/irarainey/human-first-engineering">Source on GitHub</a>`,
    },
  },
})
