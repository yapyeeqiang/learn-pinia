import{_ as n,c as s,o as a,a as t}from"./app.aedd70e1.js";const g='{"title":"State","description":"","frontmatter":{},"headers":[{"level":2,"title":"Creating the state","slug":"creating-the-state"},{"level":2,"title":"Accessing the state","slug":"accessing-the-state"},{"level":3,"title":"Way 1: Return the whole store","slug":"way-1-return-the-whole-store"},{"level":3,"title":"Way 2: Compute the state","slug":"way-2-compute-the-state"},{"level":2,"title":"Mutating the state with $patch","slug":"mutating-the-state-with-patch"}],"relativePath":"core-concepts/state.md","lastUpdated":1633252058720}',p={},e=t(`<h1 id="state" tabindex="-1"><code>State</code> <a class="header-anchor" href="#state" aria-hidden="true">#</a></h1><p><code>State</code> is the most important thing in a store. It holds the <strong>source of truth</strong>. Let&#39;s start with learning how to create our first <code>state</code>, and do some basic <em>mutations</em>.</p><h2 id="creating-the-state" tabindex="-1">Creating the <code>state</code> <a class="header-anchor" href="#creating-the-state" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// useStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// exactly same as \`data\` in Vue 2!!</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="accessing-the-state" tabindex="-1">Accessing the <code>state</code> <a class="header-anchor" href="#accessing-the-state" aria-hidden="true">#</a></h2><h3 id="way-1-return-the-whole-store" tabindex="-1">Way 1: Return the whole store <a class="header-anchor" href="#way-1-return-the-whole-store" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- output: 0 --&gt;</span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ store.count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
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
</code></pre></div><p>Returning the whole store might be the solution, you can keep your code <strong>short</strong> and <strong>readable</strong>. However, you <strong>lose control</strong> on which <code>state</code> to be expose and which are not.</p><h3 id="way-2-compute-the-state" tabindex="-1">Way 2: Compute the <code>state</code> <a class="header-anchor" href="#way-2-compute-the-state" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- output: 0 --&gt;</span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/useStore&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// using computed will keep the reactivity</span>
            count<span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> store<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="mutating-the-state-with-patch" tabindex="-1">Mutating the <code>state</code> with <code>$patch</code> <a class="header-anchor" href="#mutating-the-state-with-patch" aria-hidden="true">#</a></h2><p>Before we look into how to mutate/change our <code>state</code>, I have to let you know that mutating the <code>state</code> <strong>directly</strong> is not a good idea. A better way is to use the <code>actions</code> to do all the mutations in your pinia store.</p><p>But if you&#39;re looking for mutating a simple and short <code>state</code>, here it is:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/useStore&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// using \`$patch\`, you can mutate more than 1 \`state\`</span>
        store<span class="token punctuation">.</span><span class="token function">$patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            count<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token comment">// ...</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,14),o=[e];function c(u,l,i,k,r,d){return a(),s("div",null,o)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};
