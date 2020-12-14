# Vue3 + Vite + Tailwind2 + Typescript

[![Netlify Status](https://api.netlify.com/api/v1/badges/9466db12-fffb-4d4a-8d8e-a7a1f3d15897/deploy-status)](https://app.netlify.com/sites/determined-ride-d3788b/deploys)

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gerardrbentley/vue3-tailwind2-starter)

Set of starter templates for using Vue with Vite and Tailwind2 (optionally with linting tools and jest testing). PostCSS 8 caused some problems with running Vite with Tailwind2, but the Tailwind team released a backwards compatible package and setup guide to make it hurt less (for the time being).

Simple skeleton akin to create vite app, with tailwind styling and a dark mode toggle hook that respects browser local storage & OS preferences.

Different templates are per branch, with `main` including testing and linting setup.

Feel free to hack / change / fork, MIT license. Cheers :beers:

**NOTE** Vite and Vue Test Utils 2 are still in beta. This will most likely be updated in the future.

[Vue Docs](https://v3.vuejs.org/guide/introduction.html)

[Vite](https://github.com/vitejs/vite)

[Create Vite App](https://github.com/vitejs/create-vite-app)

[Tailwind (Vite Install Docs)](https://tailwindcss.com/docs/guides/vue-3-vite)

[Vue Test Utils 2 (targets vue3)](https://vue-test-utils.vuejs.org/v2/guide/introduction.html#vue-test-utils-documentation)

# Setup:

Clone / download zip / [Use Degit](https://github.com/Rich-Harris/degit) to fetch the template.

Feel free to use npm instead of yarn.

``` bash
# or gerardrbentley/vue3-tailwind2-starter#bare
# or gerardrbentley/vue3-tailwind2-starter#lint
$ degit gerardrbentley/vue3-tailwind2-starter#tested DEST_FOLDER

$ cd DEST_FOLDER
$ yarn
$ yarn dev
# Server should be running on port 3000

# Build production files in ./dist/
$ yarn build
# Run a server with npx http-server ./dist or python -m http.server --directory dist
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

- `tailwind.config.js`: extend tailwind's base theme (new colors, sizes, more dark variants)
- `postcss.config.js`: necessary for tailwind
- `tsconfig.json`: create-vite-app default typescript config
- `src/App.vue`: main component for Vue, contains logic for dark-mode and an example of using tailwind in a template
- `src/index.css`: used in `main.ts` for the whole app. Has examples for styling classes, id's, and elements.
- `src/vue-app-env.d.ts`: used to enable vite's module loading

Commands:

- `yarn dev`
- `yarn build`

## lint

Packages:

...bare +

- prettier
- eslint
- typescript-eslint
- vue-eslint-plugin

Files:

- `.eslintrc.js`: setup for eslint
- `.prettierrc.json`: setup for prettier
- `.eslintignore`: ignored files during eslint

Commands:

- `yarn dev`
- `yarn build`
- `yarn lint`: prettier + eslint + typecheck, no fixing
- `yarn fix`: above, with fixing (except unfixables)

## tested

TODO: investigate xComponent.spec.vue pattern, only xComponent.spec.ts works at the moment

...lint +

- jest
- vue-jest: for using vue files in jest
- ts-jest: for using ts files in jest
- jest-transform-stub: for using non-ts and non-vue files (png, gif, etc.) in jest
- @vue/test-utils
- @types/jest

Files:

- `jest.config`: specifies jest to use "jsdom", run tests on any file that matches xxx.spec.ts or xxx.spec.vue (only .ts works, but .vue is supposed to)
- `src/App.spec.ts`: Tests vue app mounting and useTailwindDarkMode hook using jest mock
- `src/components/HelloWorld.spec.ts`: Tests a single component and its function
- `src/shims-vue.d.ts`: Enables jest to play nicely

Commands:

- `yarn test`: runs jest testing command
