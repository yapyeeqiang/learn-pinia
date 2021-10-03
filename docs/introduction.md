# Introduction

Pinia is a state management tool, an alternative of
[Vuex](https://next.vuex.vuejs.org/). It is a store library that works well with
both [Vue 2](https://vuejs.org/) and the Composition API of
[Vue 3](https://v3.vuejs.org/). There might be some differences for installation
and SSR, feel free to check the
[official documentation](https://pinia.esm.dev/ssr/) for more!

## Why should you use Pinia?

Pinia allows you to define multiple stores that can be shared across components
or pages. Using Pinia, you only need to have `state`, `getters`, and `actions`.

Pinia also comes with proper [TypeScript](https://www.typescriptlang.org/)
support or **autocompletion** for JS users.

Last but not least, it also has **Hot module replacement**. You can modify your
stores without reloading your page, this improves the development experience.
