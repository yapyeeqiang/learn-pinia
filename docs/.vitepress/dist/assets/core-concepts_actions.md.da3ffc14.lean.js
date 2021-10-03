import{_ as n,c as s,o as a,a as t}from"./app.475fc00d.js";const m='{"title":"Actions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating actions","slug":"creating-actions"},{"level":2,"title":"Calling actions","slug":"calling-actions"},{"level":2,"title":"Passing arguments to actions","slug":"passing-arguments-to-actions"}],"relativePath":"core-concepts/actions.md","lastUpdated":1633253249863}',p={},o=t(`__VP_STATIC_START__<h1 id="actions" tabindex="-1"><code>Actions</code> <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h1><p><code>Actions</code> are just functions that will be triggered when called. Their job is to run <strong>CRUD</strong> tasks and more.</p><ul><li><strong>C</strong>reate - Adding new data to <code>state</code></li><li><strong>R</strong>ead - Fetching APIs, calling <code>getters</code></li><li><strong>U</strong>pdate - Updating a <code>state</code></li><li><strong>D</strong>elete - Removing a data from <code>state</code></li></ul><h2 id="creating-actions" tabindex="-1">Creating <code>actions</code> <a class="header-anchor" href="#creating-actions" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// useStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// exactly same as normal function</span>
        <span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Remember when accessing <code>state</code>, <code>getters</code> or <code>actions</code> in the pinia store, you have to use <code>this</code> keyword, referencing the instance of the store object.</p></div><h2 id="calling-actions" tabindex="-1">Calling <code>actions</code> <a class="header-anchor" href="#calling-actions" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ store.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- add 1 to the count state on every button click --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.incrementCount()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/useStore&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            store
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="passing-arguments-to-actions" tabindex="-1">Passing arguments to <code>actions</code> <a class="header-anchor" href="#passing-arguments-to-actions" aria-hidden="true">#</a></h2><p>Say we want to add different value to the <code>count</code>, we need a way to pass and receive the argument to our <code>actions</code>. If you learned about function in JavaScript, this should be easy for you.</p><div class="language-js"><pre><code><span class="token comment">// useStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    actions<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// accept a \`value\` parameter, add it to our \`count\`</span>
        <span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">+=</span> value
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Then, in our <code>*.vue</code> file:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ store.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- add 2 to the count state on every button click --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.incrementCount(2)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- add 10 to the count state on every button click --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>store.incrementCount(10)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Add 10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/useStore&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            store
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,13),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
