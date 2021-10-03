# Build our Todo App with `Options API`

## Getting started

### Create a project
Let's get started by creating a `Vue 3` project with `Vite`.

```sh
npm init vite@latest my-todo-app --template vue

cd my-todo-app
npm install
npm run dev
```

If you see this on your **http://localhost:3000/**, you are on the right path!

![Starter template](/hello-vue3-vite.png)

### Clean up our project

Let's remove some unnecessary folders and do some code refactoring:

- Delete `assets`
- Delete `components`

![Delete folders](/cleanup-1.png)

- Add in this code in `App.vue`

![Refactor App.vue](/cleanup-2.png)

```vue
<template>
    <h1>Todo App</h1>
</template>

<script>
export default {
    name: 'TodoApp'
}
</script>
```

You should have this in your **http://localhost:3000/**
![Refactor App.vue](/cleanup-3.png)

## Todo Form

### Build the UI

Now, let's create a simple form, which have the following:
- `<input>` to receive user inputs
- `<button>` to trigger add todo function later
- `<select>` to filter the todos

```vue
<template>
    <h1>Todo App</h1>

    <form>
        <label for="newTodo">Enter a todo: </label>
        <input type="text">

        <button>Add Todo</button>

        <select name="filterTodos" id="filterTodos">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
        </select>
    </form>
</template>
```

This is how it should look:

![Todo Form](/form-1.png)

Let's not worry about the styles, we will be focusing on making it works and function!

Next, let's try to display a hardcoded `todos` array.

```vue
<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            todos: [
                { id: 1, item: 'Learn Pinia', completed: false },
                { id: 2, item: 'Learn Options API', completed: false },
                { id: 3, item: 'Learn Vue 3', completed: false }
            ]
        }
    }
}
</script>
```

Then, in the `<template>`, let's use `<ul>` and `<li>` to display it as a unorder list with `v-for` directive.

We will also add 2 `<buttton>` for each todo item, a **complete** button and a **delete** button.

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in todos">
            <span>{{ todo.item }}</span>
            <button>Complete</button>
            <button>Delete</button>
        </li>
    </ul>
</template>
```

## Adding new todo

### Use `v-model` to bind the todo input

```vue
<template>
    ...
    <form>
        <label for="newTodo">Enter a todo: </label>
        <!-- 1: v-model -->
        <input v-model="todoInput" type="text">

        <button>Add Todo</button>
    </form>
    ...
</template>

<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            // 1: v-model
            todoInput: '',
            ...
        }
    },
}
</script>
```

### Create `addTodo` function

```vue
<template>
    ...
    <form>
        <label for="newTodo">Enter a todo: </label>
        <!-- 1: v-model -->
        <input v-model="todoInput" type="text">

        <!-- 2: addTodo() -->
        <button @click.prevent="addTodo()">Add Todo</button>
    </form>
    ...
</template>

<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            // 1: v-model
            todoInput: '',
            ...
        }
    },
    methods: {
        // 2: addTodo()
        addTodo() {
            // create a todo variable
            let newTodo = {
                // get the last item in todos, add its id by 1 for our new id
                id: this.todos[this.todos.length - 1].id + 1,
                item: this.todoInput,
                completed: false
            };

            // push to `todos` array
            this.todos.push(newTodo);

            // clear the input after pushed
            this.todoInput = '';
        }
    }
}
</script>
```

## Delete a todo

### Attach an `@click` to the **Delete** button

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in todos">
            <span>{{ todo.item }}</span>
            <button>Complete</button>
            <button @click.prevent="deleteTodo(todo.id)">Delete</button>
        </li>
    </ul>
</template>
```

### Create `deleteTodo` function

```vue
<script>
export default {
    ...
    methods: {
        ... 
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
}
</script>
```

## Complete a todo

### Attach an `@click` to the **Complete** button

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in todos">
            <span>{{ todo.item }}</span>
            <button @click.prevent="completeTodo(todo.id)">Complete</button>
            <button @click.prevent="deleteTodo(todo.id)">Delete</button>
        </li>
    </ul>
</template>
```

### Create `completeTodo` function

```vue
<script>
export default {
    ...
    methods: {
        ... 
        completeTodo(id) {
            const todo = this.todos.find(todo => todo.id === id);
            todo.completed = !todo.completed;
        }
    }
}
</script>
```

- If the todo is completed, show **Undo** as the button text, else **Complete**

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in todos">
            ...
            <button @click.prevent="completeTodo(todo.id)">{{ todo.completed ? 'Undo' : 'Complete' }}</button>
            ...
        </li>
    </ul>
</template>
```

- Add a `.completed__todo` class when the todo has a `completed` true.

```vue
<style scoped>
.completed__todo {
    color: green;
    text-decoration: line-through;
}
</style>
```

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in todos">
            <span
                :class="[todo.completed ? 'completed__todo' : '']"
            >
                {{ todo.item }}
            </span>
            ...
        </li>
    </ul>
</template>
```

## Filtering a todo

### Use v-model to bind the filtered value

```vue
<template>
    <h1>Todo App</h1>

    <form>
        ...
        <select v-model="filterTodo" name="filterTodos" id="filterTodos">
            ...
        </select>
    </form>

  ...
</template>

<script>
export default {
    name: 'TodoApp',
    data() {
        return {
            ...
            filterTodo: 'All',
            ...
        }
    },
}
</script>
```

### Create a computed value `filteredTodos`

```vue
<template>
    ...
    <ul>
        <li :key="todo.id" v-for="todo in filteredTodos">
            ...
        </li>
    </ul>
</template>

<script>
export default {
    ...
    computed: {
        filteredTodos() {
            const completedTodos = this.todos.filter(todo => todo.completed)
            const incompleteTodos = this.todos.filter(todo => !todo.completed)

            if (this.filterTodo === 'All') return this.todos;
            if (this.filterTodo === 'Completed') return completedTodos;
            if (this.filterTodo === 'Incomplete') return incompleteTodos;
        }
    },
    ...
}
</script>
```

Congratulations! If you have reached till here, you have successfully completed this section! :tada:

Let's move on to the fun part, we will start integrating `pinia` in the next section!