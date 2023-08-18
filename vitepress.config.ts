// vite.config.js (or) vite.config.ts
import { fileURLToPath, URL } from 'node:url'

import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
// import VueDevTools from 'vite-plugin-vue-devtools'

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  /* Uncomment this line */
  // srcDir: fileURLToPath(new URL('./src/pages', import.meta.url)),
  title: 'My Awesome Project',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      liveDesigner({
        devtoolsKey: 'devtools',
        tailwindcss: {
          configPath: 'tailwind.config.ts',
          cssPath: '@/assets/css/tailwind.css',
        },
      }),
      // ...
      // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
      AutoImportAPIs({
        include: [
          /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /.vue$/,
          /.vue?vue/, // .vue
          /.md$/, // .md
        ],
        imports: [
          'vue',
          'vue-router',
          // 'vue-i18n',
          // 'vue/macros',
          // '@vueuse/head',
          // '@vueuse/core',
          // 'pinia',
        ],
        dirs: [
          '.',
          // 'src/composables',
          // 'src/stores',
        ],
        vueTemplate: true,
        dts: 'auto-imports.d.ts',
      }),
      // ...
      // For details, refer to https://github.com/antfu/unplugin-vue-components#configuration
      AutoImportComponents({
        /* Take care to amend any paths to reflect the actual paths used in your project. */

        dirs: ['./src/components'],

        // allow auto load markdown components under ./src/components/
        extensions: ['vue', 'md'],

        // allow auto import and register components used in markdown
        include: [/.vue$/, /.vue?vue/, /.md$/],

        // resolvers: [], // Auto-import using resolvers
        dts: 'components.d.ts',
      }),
      Unocss({
        presets: [
          presetIcons({
            prefix: 'i-', // default prefix, do not change
          }),
        ],
      }),
      // VueDevTools(),
    ],
    // ...
    resolve: {
      alias: {
        /* Must be either an object, or an array of { find, replacement, customResolver } pairs. */
        /* Refer to: https://vitejs.dev/config/shared-options.html#resolve-alias */
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./src', import.meta.url)),
        '~~': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
})
