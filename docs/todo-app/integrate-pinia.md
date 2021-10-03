# Integrate Pinia
In this section, we will continue on using the project on [Build with Options API](/todo-app/options-api.html) section.

## Getting started

### Installation

```sh
npm install pinia@next
```

### Create pinia store

```js
// import { createApp } from 'vue';
// import App from './App.vue';
import { createPinia } from 'pinia';

// const app = createApp(App);
app.use(createPinia()); 

// app.mount('#app');
```

## Define `useTodo` store

Create `useTodo.js` in `src/stores`

```
└─ src
    └─ stores
        └─ useTodo.js
    ├─ App.vue
    └─ main.js
```

After creating `useTodo.js`, let's define the store.

```js
// src/stores/useTodo.js
import { defineStore } from 'pinia';

export const useTodo = defineStore('todo', {
    state() {
        return {
            // ...
        }
    },
    getters: {},
    actions: {}
})
```

### Moved all options to store

```js
import { defineStore } from 'pinia';

export const useTodo = defineStore('todo', {
    state() {
        return {
            todoInput: '',
            filterTodo: 'All',
            todos: [
                { id: 1, item: 'Learn Pinia', completed: false },
                { id: 2, item: 'Learn Options API', completed: false },
                { id: 3, item: 'Learn Vue 3', completed: false },
            ]
        }
    },
    getters: {
        filteredTodos() {
            const completedTodos = this.todos.filter(todo => todo.completed)
            const incompleteTodos = this.todos.filter(todo => !todo.completed)

            if (this.filterTodo === 'All') return this.todos;
            if (this.filterTodo === 'Completed') return completedTodos;
            if (this.filterTodo === 'Incomplete') return incompleteTodos;
        }
    },
    actions: {
        addTodo() {
            let newTodo = {
                id: this.todos[this.todos.length - 1].id + 1,
                item: this.todoInput,
                completed: false
            }

            this.todos.push(newTodo)

            this.todoInput = ''
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        completeTodo(id) {
            const todo = this.todos.find(todo => todo.id === id)
            todo.completed = !todo.completed
        }
    }
})
```

Isn't it easy! :smile: This is the reason why I like using `Pinia`.


### Use `useTodo` store

Let's import and initialize our store instance:

```vue
<script>
import { useTodo } from './stores/useTodo';

export default {
    name: 'TodoApp',
    setup() {
        const store = useTodo();

        return {
            store
        }
    }
}
</script>
```

Next, let's attach `store` to each `state`, `getters`, and `actions` we used in the `<template>`.

```vue
<template>
    <h1>Todo App</h1>

    <form>
        ...
        <input v-model="store.todoInput" type="text">

        <button @click.prevent="store.addTodo()">Add Todo</button>

        <select v-model="store.filterTodo" name="filterTodos" id="filterTodos">
            ...
        </select>
    </form>

    <ul>
        <li :key="todo.id" v-for="todo in store.filteredTodos">
            ...
            <button @click.prevent="store.completeTodo(todo.id)">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
            <button @click.prevent="store.deleteTodo(todo.id)">Delete</button>
        </li>
    </ul>
</template>
```

Nice work! Integrating `pinia` to our project is as simple as 1 + 1. :smile: