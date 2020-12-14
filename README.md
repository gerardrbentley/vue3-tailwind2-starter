# Vue3 + Vite + Tailwind2 + Typescript

[Vue Docs](https://v3.vuejs.org/guide/introduction.html)

[Vite](https://github.com/vitejs/vite)

[Create Vite App](https://github.com/vitejs/create-vite-app)

[Tailwind (Vite Install Docs)](https://tailwindcss.com/docs/guides/vue-3-vite)

Setup:

``` bash
$ yarn
$ yarn dev

# Build production files in ./dist/
$ yarn build
```

# Branches

## bare

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

Commands:

- yarn dev
- yarn build

## lint

Packages:

...bare +

- prettier
- eslint
- typescript-eslint
- vue-eslint-plugin

Files:

- .eslintrc.js: setup for eslint
- .prettierrc.json: setup for prettier
- .eslintignore: ignored files during eslint

Commands:

- yarn dev
- yarn build
- yarn lint: prettier + eslint + typecheck, no fixing
- yarn fix: above, with fixing (except unfixables)

## tested

TODO: investigate xComponent.spec.vue pattern, only xComponent.spec.ts works at the moment

...lint +

- jest
- vue-jest
- ts-jest
- jest-transform-stub
- @vue/test-utils
- @types/jest

Files:

- jest.config: specifies jest to use "jsdom", run tests on any file that matches xxx.spec.ts or xxx.spec.vue (only .ts works, but .vue is supposed to)
- src/App.spec.ts: Tests vue app mounting and useTailwindDarkMode hook using jest mock
- src/components/HelloWorld.spec.ts: Tests a single component and its function

Commands:

- yarn test: runs jest testing command
