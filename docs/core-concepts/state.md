# `State`

`State` is the most important thing in a store. It holds the **source of truth**. Let's start with learning how to create our first `state`, and do some basic *mutations*.

## Creating the `state`

```js
// useStore.js
import { defineStore } from 'pinia';

export const useStore = defineStore('storeId', {
    // exactly same as `data` in Vue 2!!
    state() {
        return {
            count: 0,
        };
    }
});
```

## Accessing the `state`


### Way 1: Return the whole store
```vue
<template>
    <!-- output: 0 --> 
    <p>{{ store.count }}</p>
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

Returning the whole store might be the solution, you can keep your code **short** and **readable**. However, you **lose control** on which `state` to be expose and which are not.

### Way 2: Compute the `state`
```vue
<template>
    <!-- output: 0 --> 
    <p>{{ count }}</p>
</template>

<script>
import { useStore } from '@/stores/useStore';
import { computed } from 'vue';

export default {
    setup() {
        const store = useStore();


        return {
            // using computed will keep the reactivity
            count: computed(() => store.count);
        };
    }
};
</script>
```

## Mutating the `state` with `$patch`

Before we look into how to mutate/change our `state`, I have to let you know that mutating the `state` **directly** is not a good idea. A better way is to use the `actions` to do all the mutations in your pinia store.

But if you're looking for mutating a simple and short `state`, here it is:

```vue
<script>
import { useStore } from '@/stores/useStore';

export default {
    setup() {
        const store = useStore();

        // using `$patch`, you can mutate more than 1 `state`
        store.$patch({
            count: 100,
            // ...
        });

        return {
            // ...
        };
    }
};
</script>
```