import{_ as n,c as s,o as a,a as t}from"./app.475fc00d.js";const h='{"title":"Getters","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating getters","slug":"creating-getters"},{"level":2,"title":"Accessing getters","slug":"accessing-getters"}],"relativePath":"core-concepts/getters.md","lastUpdated":1633252892741}',e={},p=t(`__VP_STATIC_START__<h1 id="getters" tabindex="-1"><code>Getters</code> <a class="header-anchor" href="#getters" aria-hidden="true">#</a></h1><p>Sometimes we need to compute our <code>state</code> before passing to our <code>&lt;template&gt;</code>. For example filtering a todo list based on <code>completed</code> status.</p><h2 id="creating-getters" tabindex="-1">Creating <code>getters</code> <a class="header-anchor" href="#creating-getters" aria-hidden="true">#</a></h2><p>As the name <code>getters</code> imply, it gets the value of the state, compute it, and finally return the computed value.</p><p>In this example, we want to know the double of the <code>count</code> value:</p><div class="language-js"><pre><code><span class="token comment">// useStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// exactly same as \`data\` in Vue 2!!</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    getters<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">doubleCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="accessing-getters" tabindex="-1">Accessing <code>getters</code> <a class="header-anchor" href="#accessing-getters" aria-hidden="true">#</a></h2><p>Accessing <code>getters</code> is the same as accessing <code>state</code>, remember we returned the value after computed? At the end of the day, it is actually still a <code>state</code> that had gone through some changes and computations.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- output: 1 --&gt;</span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ store.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- output: 2 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ store.doubleCount }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div>__VP_STATIC_END__`,9),o=[p];function c(u,l,i,r,k,d){return a(),s("div",null,o)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};
