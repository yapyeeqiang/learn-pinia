# Getting Started

This documentation is meant for beginner. If you already know how to set up a Vue 3 Project, please skip to this [section](/getting-started.html#installation)

## Set up Vue 3 Project

### Vue CLI

```sh
npm install -g @vue/cli
vue create my-app

cd my-app
code .
```

### Vite JS

:::warning
Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.
:::

```sh
npm init vite@latest my-app --template vue

cd my-app && npm install
code .
```

## Installation
We are going to use Vue 3 throughout this documentation. If you are still using Vue 2, feel free to check the [official documentation](https://pinia.esm.dev/ssr/).

### Install pinia
```sh
npm install pinia@next
```

### Create pinia root store
Remember we talked about that pinia can define multiple stores? This happen because we create a pinia root store at pass it to our `app` instance, then all we have to do is to `define` it any amount you like.

```js
// import { createApp } from 'vue';
// import App from './App.vue';
import { createPinia } from 'pinia';

// const app = createApp(App);
app.use(createPinia()); 

// app.mount('#app');
```

That's it! You successfully create a pinia store! :tada: