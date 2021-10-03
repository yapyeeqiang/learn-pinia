import{_ as s,c as n,o as a,a as e}from"./app.aedd70e1.js";const f='{"title":"Defining a Store","description":"","frontmatter":{},"headers":[{"level":2,"title":"Using our store","slug":"using-our-store"},{"level":2,"title":"Store Options","slug":"store-options"}],"relativePath":"core-concepts/index.md","lastUpdated":1633207187744}',t={},o=e(`<h1 id="defining-a-store" tabindex="-1">Defining a Store <a class="header-anchor" href="#defining-a-store" aria-hidden="true">#</a></h1><p>After creating the pinia store, let&#39;s define our first store.</p><div class="language-js"><pre><code><span class="token comment">// useStore.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token comment">/*  
    the best practice of naming your store is with a prefix &#39;use&#39; 
    followed by the purpose of the store.

    it can be useCount, useTodo, useCustomer, etc.
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;storeId&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// some options ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Notice we <code>export</code> our store, now we can use it in our <code>*.vue</code> file.</p><h2 id="using-our-store" tabindex="-1">Using our store <a class="header-anchor" href="#using-our-store" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// Generally we put our pinia stores all into the \`stores\` folder.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/useStore&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// by returning the store, we expose the store to our \`template\`</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            store
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="store-options" tabindex="-1">Store Options <a class="header-anchor" href="#store-options" aria-hidden="true">#</a></h2><p>If you learnt <strong>Vue 2</strong>, we know that there are:</p><ul><li><code>data</code> for storing datas/values</li><li><code>computed</code> for computing our datas/values before returning back to us</li><li><code>methods</code> for doing some actions like update <code>data</code> and etc.</li></ul><p>In <strong>Pinia</strong>, it is exactly the same case:</p><ul><li><code>state</code> is same as <code>data</code></li><li><code>getters</code> is same as <code>computed</code></li><li><code>actions</code> is same as <code>methods</code></li></ul>`,11),p=[o];function c(r,i,u,l,d,k){return a(),n("div",null,p)}var h=s(t,[["render",c]]);export{f as __pageData,h as default};
