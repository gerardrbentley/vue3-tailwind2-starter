# Vue3 + Vite + Tailwind2 + Typescript

[Vue Docs](https://v3.vuejs.org/guide/introduction.html)

[Vite](https://github.com/vitejs/vite)

[Create Vite App](https://github.com/vitejs/create-vite-app)

[Tailwind (Vite Install Docs)](https://tailwindcss.com/docs/guides/vue-3-vite)

# Branches

## main

Simple Starter Code akin to create-vite-app, but with Tailwind and dark-mode toggle set up.

Packages:

- vue
- vite
- @vuedx/typecheck @vuedx/typescript-plugin-vue
- @vue/compiler-sfc
- typescript
- tailwindcss
- postcss
- autoprefixer

Files:

- tailwind.config.js: extend tailwind's base theme (new colors, sizes, more dark variants)
- postcss.config.js: necessary for tailwind
- tsconfig.json: create-vite-app default typescript config
- src/App.vue: main component for Vue, contains logic for dark-mode and an example of using tailwind in a template
- src/index.css: used in `main.ts` for the whole app. Has examples for styling classes, id's, and elements.

Setup:

``` bash
$ yarn
$ yarn dev

# Build production files in ./dist/
$ yarn build
```