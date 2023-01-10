import{_ as c,M as t,p as l,q as i,R as s,t as n,N as p,V as u,a1 as a}from"./framework-fa6fd9c7.js";const r={},d=a(`<h1 id="从入口开始" tabindex="-1"><a class="header-anchor" href="#从入口开始" aria-hidden="true">#</a> 从入口开始</h1><p>当着手一个项目时，应当从其入口开始，对于基于 NPM 托管的项目，我们从 <code>package.json</code> 文件入手：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.6.14&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/vue.runtime.common.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist/vue.runtime.esm.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;srcipts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -w -c scripts/config.js --environment TARGET:web-full-dev&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/build.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:ssr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build -- web-runtime-cjs,web-server-renderer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build:weex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run build -- weex&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-alias&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.3.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-buble&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.19.6&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-commonjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^9.2.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-flow-no-whitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-node-resolve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rollup-plugin-replace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此罗列了本文章需要关注的信息：</p><ul><li>指明项目引用不同规范下的文件入口</li></ul><p>比如笔者调试的项目demo是基于 <code>vue-cli</code> 构建的项目，优先使用 <code>module</code> 字段标识对应的 <code>ESM</code> 模块文件</p><p>在调试源码时一般调试 <code>dist/vue.runtime.esm.js</code> 文件</p>`,7),k={href:"https://cli.vuejs.org/zh/config/#runtimecompiler",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"dist/vue.esm.js",-1),m=a(`<ul><li><p><code>Vue</code> 基于 <code>Rollup</code> 进行构建打包</p></li><li><p><code>Vue</code> 运行构建命令时将执行 <code>node scripts/build.js</code>，并会根据对应场景传入对应的参数</p></li></ul><h2 id="基于-rollup-的源码构建" tabindex="-1"><a class="header-anchor" href="#基于-rollup-的源码构建" aria-hidden="true">#</a> 基于 Rollup 的源码构建</h2><h3 id="build-构建文件" tabindex="-1"><a class="header-anchor" href="#build-构建文件" aria-hidden="true">#</a> build 构建文件</h3><p>打开 <code>scripts/build.js</code> 文件，了解主要的代码逻辑部分：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> builds <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./config&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAllBuilds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// filter builds via command line arg</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> filters <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
  builds <span class="token operator">=</span> builds<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> filters<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">f</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span>output<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> b<span class="token punctuation">.</span>_name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// filter out weex builds by default</span>
  builds <span class="token operator">=</span> builds<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> b<span class="token punctuation">.</span>output<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;weex&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">build</span><span class="token punctuation">(</span>builds<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这段代码可以看出：</p><ul><li>根据对应场景传入对应的参数，将在此进行构建配置的过滤以沟通不同版本的代码</li><li>相关配置存放于 <code>scripts/config.js</code> 中</li></ul><h3 id="alias-路径别名" tabindex="-1"><a class="header-anchor" href="#alias-路径别名" aria-hidden="true">#</a> alias 路径别名</h3><p>打开 <code>scripts/config.js</code> ，需要先关注一下 <code>Rollup</code> 路径别名配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> alias <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;rollup-plugin-alias&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> aliases <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./alias&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> base <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>aliases<span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>aliases<span class="token punctuation">[</span>base<span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>base<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),b=s("code",null,"Vue",-1),g=s("code",null,"p",-1),f=s("code",null,"base",-1),y={href:"https://github.com/rollup/rollup-plugin-alias",target:"_blank",rel:"noopener noreferrer"},w=a(`<p><code>alias</code> 配置位于 <code>scripts/alias.js</code> 中：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">p</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/platforms/web/entry-runtime-with-compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">compiler</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/compiler&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">core</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/core&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">shared</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/shared&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">web</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/platforms/web&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weex</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/platforms/weex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sfc</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/sfc&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当在源码中引入对应配置的路径时，将通过 <code>resolve</code> 函数找到实际的文件路径。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 以 src/platforms/web/runtime/index.js 为例</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;core/index&#39;</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;src/core/index&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-构建配置" tabindex="-1"><a class="header-anchor" href="#config-构建配置" aria-hidden="true">#</a> config 构建配置</h3><p>了解完路径别名规则，再看下最终完成打包的构建配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 预设的对应构建目标下的 Rollup 配置</span>
<span class="token keyword">const</span> builds <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Runtime only ES modules build (for bundlers)</span>
  <span class="token string-property property">&#39;web-runtime-esm&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.runtime.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Runtime+compiler ES modules build (for bundlers)</span>
  <span class="token string-property property">&#39;web-full-esm&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;web/entry-runtime-with-compiler.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;dist/vue.esm.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">he</span><span class="token operator">:</span> <span class="token string">&#39;./entity-decoder&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    banner
  <span class="token punctuation">}</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据构建目标取出 Rollup 配置</span>
<span class="token keyword">function</span> <span class="token function">genConfig</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> opts <span class="token operator">=</span> builds<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>entry<span class="token punctuation">,</span>
    <span class="token literal-property property">external</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>external<span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token function">flow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token function">alias</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> aliases<span class="token punctuation">,</span> opts<span class="token punctuation">.</span>alias<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>plugins <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">file</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>dest<span class="token punctuation">,</span>
      <span class="token literal-property property">format</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>format<span class="token punctuation">,</span>
      <span class="token literal-property property">banner</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>banner<span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> opts<span class="token punctuation">.</span>moduleName <span class="token operator">||</span> <span class="token string">&#39;Vue&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onwarn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> warn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Circular</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...略去部分配置代码</span>

  <span class="token keyword">return</span> config
<span class="token punctuation">}</span>

<span class="token comment">// 导出供 \`scripts/build.js\` 使用</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">getAllBuilds</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>builds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>genConfig<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h=s("code",null,"Rollup",-1),q=s("code",null,"web/entry-runtime.js",-1),x=s("code",null,"vue.runtime.esm.js",-1),j=s("code",null,"dist",-1),_=a(`<h2 id="vue-的入口" tabindex="-1"><a class="header-anchor" href="#vue-的入口" aria-hidden="true">#</a> Vue 的入口</h2><p>在 <code>web/entry-runtime.js</code> 构建入口文件中，是一份简单的接口转发代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;./runtime/index&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进一步查找源入口，打开 <code>src/platforms/web/runtime/index.js</code> 文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;core/index&#39;</span>

<span class="token comment">// ...略去与入口无关的代码，将在其他对应章节详述</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过事先了解的 <code>Rollup</code> 构建中的 <a href="#alias-%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D">alias</a> 配置，我们便可找到对应的 <code>src/core/index.js</code> ：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;./instance/index&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> initGlobalAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./global-api/index&#39;</span>

<span class="token function">initGlobalAPI</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token comment">// ...服务端渲染相关</span>

Vue<span class="token punctuation">.</span>version <span class="token operator">=</span> <span class="token string">&#39;__VERSION__&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中有两处关键： <code>initGlobalAPI(Vue)</code> 从语义化的函数命名可知是对 <code>Vue</code> 进行全局 API 扩展的功能函数。同时引导我们进入更接近的 <code>src/core/instance/index.js</code> 文件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> initMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./init&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> stateMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./state&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> renderMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./render&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> eventsMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./events&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lifecycleMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./lifecycle&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> warn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>

<span class="token keyword">function</span> <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">initMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token function">stateMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token function">eventsMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token function">lifecycleMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>
<span class="token function">renderMixin</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此终于找到了 <code>Vue</code> 的初始化声明，接下来便可以由此开始对 <code>Vue</code> 构造函数及整体功能进行进一步深入了解。</p>`,10);function V(E,M){const e=t("ExternalLinkIcon"),o=t("RouterLink");return l(),i("div",null,[d,s("p",null,[n("开启 "),s("a",k,[n("runtimeCompiler"),p(e)]),n(" 选项后调试 "),v,n(" 文件")]),m,s("p",null,[n("在此 "),b,n(" 使用根据传入路径参数 "),g,n(" 获取根路径 "),f,n(" ，并通过 "),s("a",y,[n("rollup-plugin-alias"),p(e)]),n(" 配置路径别名")]),w,s("p",null,[n("当构建我们项目所需的 "),p(o,{to:"/notes/node/esm.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"},{default:u(()=>[n("ES Module")]),_:1}),n(" 规范源码文件时，将经过 "),h,n(" 以 "),q,n(" 为入口文件进行构建打包，最终生成 "),x,n(" 文件放置于 "),j,n(" 目录中。")]),_])}const A=c(r,[["render",V],["__file","entry.html.vue"]]);export{A as default};