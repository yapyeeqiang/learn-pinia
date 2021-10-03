# Defining a Store
After creating the pinia store, let's define our first store.

```js
// useStore.js
import { defineStore } from 'pinia';

/*  
    the best practice of naming your store is with a prefix 'use' 
    followed by the purpose of the store.

    it can be useCount, useTodo, useCustomer, etc.
*/
export const useStore = defineStore('storeId', {
    // some options ...
})
```

Notice we `export` our store, now we can use it in our `*.vue` file.

## Using our store

```vue
<script>
// Generally we put our pinia stores all into the `stores` folder.
import { useStore } from '@/stores/useStore'

export default {
    setup() {
        const store = useStore();

        // by returning the store, we expose the store to our `template`
        return {
            store
        }
    }
}
</script>
```

## Store Options
If you learnt **Vue 2**, we know that there are:
- `data` for storing datas/values
- `computed` for computing our datas/values before returning back to us
- `methods` for doing some actions like update `data` and etc.

In **Pinia**, it is exactly the same case:
- `state` is same as `data`
- `getters` is same as `computed`
- `actions` is same as `methods`
