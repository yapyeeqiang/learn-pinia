# `Getters`
Sometimes we need to compute our `state` before passing to our `<template>`. For example filtering a todo list based on `completed` status.

## Creating `getters`

As the name `getters` imply, it gets the value of the state, compute it, and finally return the computed value.

In this example, we want to know the double of the `count` value:
```js
// useStore.js
import { defineStore } from 'pinia';

export const useStore = defineStore('storeId', {
    // exactly same as `data` in Vue 2!!
    state() {
        return {
            count: 1,
        };
    },
    getters: {
        doubleCount() {
            return this.count * 2
        }
    }
});
```

## Accessing `getters`

Accessing `getters` is the same as accessing `state`, remember we returned the value after computed? At the end of the day, it is actually still a `state` that had gone through some changes and computations.

```vue
<template>
    <!-- output: 1 --> 
    <h1>{{ store.count }}</h1>

    <!-- output: 2 -->
    <p>{{ store.doubleCount }}</p>
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