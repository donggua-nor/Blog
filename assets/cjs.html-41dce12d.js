import{_ as t,M as p,p as o,q as c,R as n,t as s,N as l,a1 as a}from"./framework-fa6fd9c7.js";const i={},u=a(`<h1 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h1><p>在 <code>Node.js</code> 模块系统中，每个文件都被视为独立的模块。</p><h2 id="基础使用" tabindex="-1"><a class="header-anchor" href="#基础使用" aria-hidden="true">#</a> 基础使用</h2><ul><li><code>module.exports</code> 导出</li><li><code>require()</code> 加载</li></ul><h2 id="module实例" tabindex="-1"><a class="header-anchor" href="#module实例" aria-hidden="true">#</a> Module实例</h2><p><code>Node</code> 内部提供了一个构建函数 <code>module</code> ，而每个模块都是一个 <code>module</code> 实例</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// module实例对象</span>
Module <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/Users/donggua/learning/daily&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exports</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">parent</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;/Users/donggua/learning/daily/mod.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">loaded</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;/Users/donggua/learning/daily/node_modules&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/Users/donggua/learning/node_modules&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/Users/donggua/node_modules&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/Users/node_modules&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;/node_modules&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>module.id</code> 标识符，&#39;.&#39; 或者是带有绝对路径的模块文件名</li><li><code>module.filename</code> 文件名，带有绝对路径</li><li><code>module.loaded</code> 表示模块是否已完成加载</li></ul><p>当前例子是单独的模块，没有被 <code>require</code> 调用使用，所以为 <code>false</code></p><ul><li><code>module.parent</code> 表示调用该模块的模块</li></ul><p>当前例子没有被调用，所以返回值是 <code>null</code></p><div class="custom-container tip"><p class="custom-container-title">Note</p><p>于 v14.6.0, v12.19.0版本已弃用，使用 <code>require.main</code> 代替</p></div><ul><li><code>module.children</code> 表示模块所调用的其他模块</li><li><code>module.exports</code> 表示模块对外输出的值，默认 <code>{}</code></li><li><code>module.path</code> 模块所在目录名称</li><li><code>module.paths</code> 模块的搜索路径</li></ul><h2 id="exports-变量" tabindex="-1"><a class="header-anchor" href="#exports-变量" aria-hidden="true">#</a> exports 变量</h2><p><code>Node</code> 为每个模块提供一个 <code>exports</code> 变量，指向 <code>module.exports</code> ，因此模块导出有以下几种写法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 或</span>
exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时应该注意， 我们不能修改 <code>exports</code> 的指向</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 以下写法是错误且无效的</span>
exports <span class="token operator">=</span> <span class="token string">&#39;angthing&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块的缓存机制" tabindex="-1"><a class="header-anchor" href="#模块的缓存机制" aria-hidden="true">#</a> 模块的缓存机制</h2><p>当执行 <code>require(path)</code> 时，会先使用 <code>path</code> 为 <code>id</code> 从模块的缓存 <code>Module._cache</code> 中检查，存在则直接从缓存中读取返回对应的 <code>module.exports</code> ，因此多次调用 <code>require(path)</code> 不会导致模块代码被多次执行</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>done <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Node</code> 中使用 <code>require.cache</code> 指向 <code>Module._cache</code> 给予开发者访问查看模块的缓存 若需要删除对应的模块缓存，可以使用 <code>delete require.cache[path]</code></p><h2 id="循环加载" tabindex="-1"><a class="header-anchor" href="#循环加载" aria-hidden="true">#</a> 循环加载</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/// 这里直接引用官方demo</span>
<span class="token comment">// a.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a starting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;in a, b.done = %j&#39;</span><span class="token punctuation">,</span> b<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// b.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b starting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;in b, a.done = %j&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;b done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// main.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;main starting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./b.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;in main, a.done = %j, b.done = %j&#39;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>done<span class="token punctuation">,</span> b<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了防止无限循环，在循环引用时， <code>Node</code> 会返回未完成的不完整副本。</p><h2 id="require-加载机制" tabindex="-1"><a class="header-anchor" href="#require-加载机制" aria-hidden="true">#</a> require 加载机制</h2><h3 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h3><p><code>CommonJs</code> 源码位于 <code>node/lib/internal/modules/cjs</code> ，这里主要看 <code>loaders.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 模块构造函数</span>
<span class="token keyword">function</span> <span class="token function">Module</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>path <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  moduleParentCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">updateChildren</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 以通过的文件路径为id，加载并返回模块的exports属性</span>
<span class="token class-name">Module</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">require</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">validateString</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>id <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ERR_INVALID_ARG_VALUE</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> id<span class="token punctuation">,</span> <span class="token string">&#39;must be a non-empty string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  requireDepth<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Module<span class="token punctuation">.</span><span class="token function">_load</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token comment">/* isMain */</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    requireDepth<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),d={class:"custom-container tip"},r=n("p",{class:"custom-container-title"},"注",-1),k={href:"https://github.com/nodejs/node/blob/master/lib/internal/bootstrap/loaders.js",target:"_blank",rel:"noopener noreferrer"},v=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 如果缓存中有模块数据，则从缓存中取出并返回模块的exports属性</span>
<span class="token comment">// 2. 通过构造方法生成新的模块，保存到缓存中并返回模块的exports属性</span>
Module<span class="token punctuation">.</span><span class="token function-variable function">_load</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> parent<span class="token punctuation">,</span> isMain</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> relResolveCacheIdentifier<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;Module._load REQUEST %s parent: %s&#39;</span><span class="token punctuation">,</span> request<span class="token punctuation">,</span> parent<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// Fast path for (lazy loaded) modules in the same directory. The indirect</span>
    <span class="token comment">// caching is required to allow cache invalidation without changing the old</span>
    <span class="token comment">// cache key names.</span>
    relResolveCacheIdentifier <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>parent<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\x00</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> filename <span class="token operator">=</span> relativeResolveCache<span class="token punctuation">[</span>relResolveCacheIdentifier<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filename <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> cachedModule <span class="token operator">=</span> Module<span class="token punctuation">.</span>_cache<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedModule <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">updateChildren</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> cachedModule<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cachedModule<span class="token punctuation">.</span>loaded<span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token function">getExportsForCircularRequire</span><span class="token punctuation">(</span>cachedModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> cachedModule<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">delete</span> relativeResolveCache<span class="token punctuation">[</span>relResolveCacheIdentifier<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
  <span class="token comment">// 检查缓存</span>
  <span class="token keyword">const</span> cachedModule <span class="token operator">=</span> Module<span class="token punctuation">.</span>_cache<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedModule <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateChildren</span><span class="token punctuation">(</span>parent<span class="token punctuation">,</span> cachedModule<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cachedModule<span class="token punctuation">.</span>loaded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parseCachedModule <span class="token operator">=</span> cjsParseCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>cachedModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>parseCachedModule <span class="token operator">||</span> parseCachedModule<span class="token punctuation">.</span>loaded<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">getExportsForCircularRequire</span><span class="token punctuation">(</span>cachedModule<span class="token punctuation">)</span><span class="token punctuation">;</span>
      parseCachedModule<span class="token punctuation">.</span>loaded <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cachedModule<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 从模块映射中查看是否有符合条件的</span>
  <span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token function">loadNativeModule</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>mod<span class="token operator">?.</span>canBeRequiredByUsers<span class="token punctuation">)</span> <span class="token keyword">return</span> mod<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
  <span class="token comment">// Don&#39;t call updateChildren(), Module constructor already does.</span>
  <span class="token keyword">const</span> module <span class="token operator">=</span> cachedModule <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Module</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isMain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>mainModule <span class="token operator">=</span> module<span class="token punctuation">;</span>
    module<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  Module<span class="token punctuation">.</span>_cache<span class="token punctuation">[</span>filename<span class="token punctuation">]</span> <span class="token operator">=</span> module<span class="token punctuation">;</span>
  <span class="token comment">//...</span>
  <span class="token keyword">return</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>当执行<code>require(path)</code>时，<code>node</code>才会去执行对应的模块</li><li>通过<code>Module._load()</code>函数解析并返回<code>module.exports</code> 对象，<code>require()</code>实际就是加载了<code>exports</code>对象</li><li>以<code>path</code>作为<code>id</code>进行缓存，对同一模块 <code>require()</code> 加载将直接从缓存中获取并返回</li></ul><p>其中，模块的缓存在 <code>helper.js</code> 中通过 <code>require.cache</code> 指向 <code>Module._cache</code></p><h3 id="实例-debugger-验证" tabindex="-1"><a class="header-anchor" href="#实例-debugger-验证" aria-hidden="true">#</a> 实例 debugger 验证</h3><div class="custom-container tip"><p class="custom-container-title">debugger流程：</p><ol><li>执行 <code>node --inspect-brk=9229 main</code> 命令</li><li>在<strong>chrome</strong>浏览器中打开 <code>chrome://inspect</code> 并点击 <code>Remote Target</code> 中的 <code>main(文件名)</code> 标识的<code>inspect</code></li></ol><blockquote><p><code>--inspect-brk</code> 用于首行开始debugger，否则用 <code>--inspect</code> 。 <code>9229</code> 为指定端口号</p></blockquote></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token keyword">let</span> done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  done <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;in a, change inside&quot;</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkIsChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;in a, real done&quot;</span><span class="token punctuation">,</span> done<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> done<span class="token punctuation">,</span> change<span class="token punctuation">,</span> checkIsChange <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// b.js</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;in b, before change&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span>done <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;in b, done changed&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">checkIsChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">debugger</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;in main, a.done&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>done<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出结果</span>
<span class="token keyword">in</span> b, before change <span class="token boolean">false</span>
<span class="token keyword">in</span> b, <span class="token keyword">done</span> changed <span class="token boolean">true</span>
<span class="token keyword">in</span> a, real <span class="token keyword">done</span> <span class="token boolean">false</span>
<span class="token keyword">in</span> a, change inside <span class="token boolean">false</span>
<span class="token keyword">in</span> main, a.done <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时我们会发现：</p><ol><li><code>b.js</code> 中的 <code>a.done = true</code> 只影响了 <code>main.js</code> 中的输出结果</li><li><code>b.js</code> 中调用 <code>a.change()</code> 方法没有影响到 <code>main.js</code> 和 <code>b.js</code> 的输出结果</li></ol><p>通过<strong>debugger</strong>可以看到：</p><p>当 <code>main.js</code> 运行到 <code>const a = require(&quot;./a&quot;);</code> 时， <code>node</code> 才执行 <code>Module._load()</code> 获取模块 <code>a</code></p><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_cjs.png" alt="node_debug_cjs"></p><p>而 <code>b.js</code> 再次加载模块 <code>a</code> 时，是通过缓存机制读取的。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><code>CommonJs</code> 属于运行时加载</li><li><code>CommonJs</code> 是同步加载</li><li><code>require()</code> 是对<code>exports</code>对象的赋值操作，而<code>Module._load()</code> 借用函数形式保证模块内外不会互相影响</li></ul>`,17);function m(b,h){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,n("div",d,[r,n("p",null,[s("以下源码省略了原生模块 "),n("a",k,[s("NativeModule"),l(e)]),s("等部分无关本次分析的代码")])]),v])}const f=t(i,[["render",m],["__file","cjs.html.vue"]]);export{f as default};