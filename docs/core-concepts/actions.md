# `Actions`
`Actions` are just functions that will be triggered when called. Their job is to run **CRUD** tasks and more.

- **C**reate    - Adding new data to `state`
- **R**ead      - Fetching APIs, calling `getters`
- **U**pdate    - Updating a `state`
- **D**elete    - Removing a data from `state`

## Creating `actions`

```js
// useStore.js
import { defineStore } from 'pinia';

export const useStore = defineStore('storeId', {
    state() {
        return {
            count: 1,
        };
    },
    actions: {
        // exactly same as normal function
        incrementCount() {
            this.count++
        }
    }
});
```

:::warning
Remember when accessing `state`, `getters` or `actions` in the pinia store, you have to use `this` keyword, referencing the instance of the store object.
:::

## Calling `actions`

```vue
<template>
    <h1>{{ store.count }}</h1>

    <!-- add 1 to the count state on every button click -->
    <button @click.prevent="store.incrementCount()">Add 1</button>
</template>

<script>
import { useStore } from '@/stores/useStore';

export default {
    setup() {
        const store = useStore();

        return {
            store
        };
    }
};
</script>
```

## Passing arguments to `actions`

Say we want to add different value to the `count`, we need a way to pass and receive the argument to our `actions`. If you learned about function in JavaScript, this should be easy for you.

```js
// useStore.js
import { defineStore } from 'pinia';

export const useStore = defineStore('storeId', {
    state() {
        return {
            count: 1,
        };
    },
    actions: {
        // accept a `value` parameter, add it to our `count`
        incrementCount(value) {
            this.count += value
        }
    }
});
```

Then, in our `*.vue` file:

```vue
<template>
    <h1>{{ store.count }}</h1>

    <!-- add 2 to the count state on every button click -->
    <button @click.prevent="store.incrementCount(2)">Add 2</button>

    <!-- add 10 to the count state on every button click -->
    <button @click.prevent="store.incrementCount(10)">Add 10</button>
</template>

<script>
import { useStore } from '@/stores/useStore';

export default {
    setup() {
        const store = useStore();

        return {
            store
        };
    }
};
</script>
```