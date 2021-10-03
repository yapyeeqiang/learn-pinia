import{_ as e,c as a,o as t,a as n}from"./app.475fc00d.js";const g='{"title":"Getting Started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Set up Vue 3 Project","slug":"set-up-vue-3-project"},{"level":3,"title":"Vue CLI","slug":"vue-cli"},{"level":3,"title":"Vite JS","slug":"vite-js"},{"level":2,"title":"Installation","slug":"installation"},{"level":3,"title":"Install pinia","slug":"install-pinia"},{"level":3,"title":"Create pinia root store","slug":"create-pinia-root-store"}],"relativePath":"getting-started.md","lastUpdated":1633259780479}',s={},i=n(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><p>This documentation is meant for beginner. If you already know how to set up a Vue 3 Project, please skip to this <a href="/getting-started.html#installation">section</a></p><h2 id="set-up-vue-3-project" tabindex="-1">Set up Vue 3 Project <a class="header-anchor" href="#set-up-vue-3-project" aria-hidden="true">#</a></h2><h3 id="vue-cli" tabindex="-1">Vue CLI <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code>npm install -g @vue/cli
vue create my-app

cd my-app
code .
</code></pre></div><h3 id="vite-js" tabindex="-1">Vite JS <a class="header-anchor" href="#vite-js" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Vite requires <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a> version &gt;=12.0.0.</p></div><div class="language-sh"><pre><code>npm init vite@latest my-app --template vue

cd my-app &amp;&amp; npm install
code .
</code></pre></div><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>We are going to use Vue 3 throughout this documentation. If you are still using Vue 2, feel free to check the <a href="https://pinia.esm.dev/ssr/" target="_blank" rel="noopener noreferrer">official documentation</a>.</p><h3 id="install-pinia" tabindex="-1">Install pinia <a class="header-anchor" href="#install-pinia" aria-hidden="true">#</a></h3><div class="language-sh"><pre><code>npm install pinia@next
</code></pre></div><h3 id="create-pinia-root-store" tabindex="-1">Create pinia root store <a class="header-anchor" href="#create-pinia-root-store" aria-hidden="true">#</a></h3><p>Remember we talked about that pinia can define multiple stores? This happen because we create a pinia root store at pass it to our <code>app</code> instance, then all we have to do is to <code>define</code> it any amount you like.</p><div class="language-js"><pre><code><span class="token comment">// import { createApp } from &#39;vue&#39;;</span>
<span class="token comment">// import App from &#39;./App.vue&#39;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// const app = createApp(App);</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// app.mount(&#39;#app&#39;);</span>
</code></pre></div><p>That&#39;s it! You successfully create a pinia store! \u{1F389}</p>`,16),o=[i];function p(r,c,l,d,u,h){return t(),a("div",null,o)}var v=e(s,[["render",p]]);export{g as __pageData,v as default};
