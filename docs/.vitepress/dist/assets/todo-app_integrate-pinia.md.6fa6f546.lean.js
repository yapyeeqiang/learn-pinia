import{_ as n,c as s,o as a,a as t}from"./app.475fc00d.js";const m='{"title":"Integrate Pinia","description":"","frontmatter":{},"headers":[{"level":2,"title":"Getting started","slug":"getting-started"},{"level":3,"title":"Installation","slug":"installation"},{"level":3,"title":"Create pinia store","slug":"create-pinia-store"},{"level":2,"title":"Define useTodo store","slug":"define-usetodo-store"},{"level":3,"title":"Moved all options to store","slug":"moved-all-options-to-store"},{"level":3,"title":"Use useTodo store","slug":"use-usetodo-store"}],"relativePath":"todo-app/integrate-pinia.md","lastUpdated":1633260786277}',p={},o=t(`__VP_STATIC_START__<h1 id="integrate-pinia" tabindex="-1">Integrate Pinia <a class="header-anchor" href="#integrate-pinia" aria-hidden="true">#</a></h1><p>In this section, we will continue on using the project on <a href="/todo-app/options-api.html">Build with Options API</a> section.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><h3 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code>npm install pinia@next
</code></pre></div><h3 id="create-pinia-store" tabindex="-1">Create pinia store <a class="header-anchor" href="#create-pinia-store" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// import { createApp } from &#39;vue&#39;;</span>
<span class="token comment">// import App from &#39;./App.vue&#39;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// const app = createApp(App);</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// app.mount(&#39;#app&#39;);</span>
</code></pre></div><h2 id="define-usetodo-store" tabindex="-1">Define <code>useTodo</code> store <a class="header-anchor" href="#define-usetodo-store" aria-hidden="true">#</a></h2><p>Create <code>useTodo.js</code> in <code>src/stores</code></p><div class="language-"><pre><code>\u2514\u2500 src
    \u2514\u2500 stores
        \u2514\u2500 useTodo.js
    \u251C\u2500 App.vue
    \u2514\u2500 main.js
</code></pre></div><p>After creating <code>useTodo.js</code>, let&#39;s define the store.</p><div class="language-js"><pre><code><span class="token comment">// src/stores/useTodo.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useTodo <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="moved-all-options-to-store" tabindex="-1">Moved all options to store <a class="header-anchor" href="#moved-all-options-to-store" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useTodo <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;todo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            todoInput<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
            filterTodo<span class="token operator">:</span> <span class="token string">&#39;All&#39;</span><span class="token punctuation">,</span>
            todos<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token string">&#39;Learn Pinia&#39;</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token string">&#39;Learn Options API&#39;</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token string">&#39;Learn Vue 3&#39;</span><span class="token punctuation">,</span> completed<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">filteredTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> completedTodos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span>
            <span class="token keyword">const</span> incompleteTodos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filterTodo <span class="token operator">===</span> <span class="token string">&#39;All&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filterTodo <span class="token operator">===</span> <span class="token string">&#39;Completed&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> completedTodos<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>filterTodo <span class="token operator">===</span> <span class="token string">&#39;Incomplete&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> incompleteTodos<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> newTodo <span class="token operator">=</span> <span class="token punctuation">{</span>
                id<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                item<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todoInput<span class="token punctuation">,</span>
                completed<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newTodo<span class="token punctuation">)</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>todoInput <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">deleteTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>todos <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">completeTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> todo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">todo</span> <span class="token operator">=&gt;</span> todo<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span>
            todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Isn&#39;t it easy! \u{1F604} This is the reason why I like using <code>Pinia</code>.</p><h3 id="use-usetodo-store" tabindex="-1">Use <code>useTodo</code> store <a class="header-anchor" href="#use-usetodo-store" aria-hidden="true">#</a></h3><p>Let&#39;s import and initialize our store instance:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useTodo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./stores/useTodo&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;TodoApp&#39;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useTodo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            store
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Next, let&#39;s attach <code>store</code> to each <code>state</code>, <code>getters</code>, and <code>actions</code> we used in the <code>&lt;template&gt;</code>.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Todo App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">&gt;</span></span>
        ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.todoInput<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.addTodo()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add Todo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.filterTodo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterTodos<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>filterTodos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo in store.filteredTodos<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            ...
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.completeTodo(todo.id)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ todo.completed ? &#39;Undo&#39; : &#39;Complete&#39; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.deleteTodo(todo.id)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Nice work! Integrating <code>pinia</code> to our project is as simple as 1 + 1. \u{1F604}</p>__VP_STATIC_END__`,21),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
