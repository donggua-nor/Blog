import{_ as n,p as s,q as a,a1 as e}from"./framework-e93b08cb.js";const t={},p=e(`<h1 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h1><p>ES6 新增的模块化方案，将逐步取代 <a href="./cjs">CommonJS</a> 等规范，成为未来浏览器与服务器通用的模块解决方案</p><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><ul><li><code>export</code> 导出</li><li><code>import ... from $path</code> 导入</li></ul><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h2><p><code>export</code> 定义对外接口，导出模块内部变量/方法/类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> fn<span class="token punctuation">,</span> val <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可使用关键词 <code>as</code> 对变量/方法/类重命名</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> val <span class="token keyword">as</span> num <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不可对变量进行重复导出</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> val <span class="token punctuation">}</span> <span class="token comment">// Duplicate export of &#39;val&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>应注意 <code>export</code> 应提供对外接口，即需要显式声明</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Unexpected token &#39;export&#39;
 * 缺乏声明，相当于直接导出值，而不是接口
 */</span>
<span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Declaration or statement expected
 * 声明语句没有紧跟着export，所以这里相当于直接输出变量的值
 * 可使用 export <span class="token punctuation">{</span> val <span class="token punctuation">}</span>; 修正
 */</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> val<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>export default</strong></li></ul><p>语义化标准，用于导出模块的默认值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> val<span class="token punctuation">;</span>

<span class="token comment">// OR</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token comment">// OR</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是， <code>export default</code> 相当于导出模块的 <code>default</code> 变量， 因此后面不能紧跟声明语句 同时模块的默认值有且只有一个，因此不能重复输出</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">repeatVal</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// Identifier &#39;.default&#39; has already been declared</span>

<span class="token keyword">export</span> <span class="token keyword">default</span>
<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token comment">// Unexpected token &#39;const&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同于 <code>export</code> ， <code>export default</code> 可以将模块整体导出，以便导入使用时不需要指定与 <code>export</code> 对应的变量名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils.js</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> val<span class="token punctuation">,</span> fn <span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> utils <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>
utils<span class="token punctuation">.</span>val
utils<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相当于</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils.js</span>
<span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token punctuation">{</span> val<span class="token punctuation">,</span> fn <span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span> <span class="token comment">// 注意这里 utils 需要用 {} 包裹，且变量名必须与 export 导出的一致</span>
utils<span class="token punctuation">.</span>val
utils<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>结合使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> _<span class="token punctuation">,</span> <span class="token punctuation">{</span> cloneDeep <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>

_<span class="token punctuation">.</span><span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token function">cloneDeep</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h2><p><code>import</code> 用于加载模块的对外接口</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> val <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>与 <code>export</code> 相同，可使用关键词 <code>as</code> 对导入的变量重命名</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token literal-property property">val</span><span class="token operator">:</span> num <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于非 <code>export default</code> 导出的模块想要进行整体加载，可以使用 <code>*</code> 配合 <code>as</code> 指定加载整个模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> val <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> utils <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>
utils<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在加载完成后，import 语句会执行所加载的模块，可以借用这个特性，将项目初始化方法封装抽离</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// bootstrap.js</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./bootstrap&#39;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// main</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">import</span> print <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>
<span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>import</code> 命令带有提升作用</p></div><h2 id="特性与运用" tabindex="-1"><a class="header-anchor" href="#特性与运用" aria-hidden="true">#</a> 特性与运用</h2><ul><li>组合使用<code>export</code> 、<code>import</code> 进行模块转发</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> utils <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同于第二种写法，第一种写法在模块中不能使用 <code>utils</code></p><ul><li>浏览器加载 使用 <code>script</code> 标签加载 ESM 时，需要声明 <code>type</code> 属性</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;module&quot;</span> scr<span class="token operator">=</span><span class="token string">&quot;./utils.js&quot;</span><span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token string">&#39; &#39;</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>带有 <code>type=&quot;module&quot;</code> 属性的脚本将被异步执行，不会堵塞浏览器渲染</p></div><p>为了浏览器兼容性加载，还可以使用 <code>type=&quot;nomudole&quot;</code> 告知浏览器加载对应支持的标准模块</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span> script type <span class="token operator">=</span> <span class="token string">&quot;module&quot;</span>
scr <span class="token operator">=</span> <span class="token string">&quot;./esm.js&quot;</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">/</span>script<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>
script type <span class="token operator">=</span> <span class="token string">&quot;nomodule&quot;</span>
scr <span class="token operator">=</span> <span class="token string">&quot;./cjs.js&quot;</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于不支持 <code>ES Module</code> 的浏览器，标识有 <code>type=&quot;module&quot;</code> 的脚本将不会被执行，反之同理</p><ul><li>import() 动态加载</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span><span class="token punctuation">(</span>$path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=&gt;</span> <span class="token comment">/* to do */</span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token comment">/* err handle */</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>按需加载</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span>$path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>条件加载</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span>$path_A<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span>$path_B<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>动态路径</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> condition <span class="token operator">?</span> $path_A <span class="token operator">:</span> $path_B<span class="token punctuation">;</span>
<span class="token keyword">import</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import-加载机制" tabindex="-1"><a class="header-anchor" href="#import-加载机制" aria-hidden="true">#</a> import 加载机制</h2><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// utils.js</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">1</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  val <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> utils <span class="token keyword">from</span> <span class="token string">&#39;./utils.mjs&#39;</span>
utils<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  utils<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
<span class="token comment">// 输出结果</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出，当 <code>utils</code> 模块内数据发生变化， <code>main</code> 模块中引用的数据也将同步变化</p><h3 id="debugger-验证" tabindex="-1"><a class="header-anchor" href="#debugger-验证" aria-hidden="true">#</a> debugger 验证</h3><div class="custom-container tip"><p class="custom-container-title">debugger 流程：</p><ol><li>执行 <code>node --inspect-brk=9229 main</code> 命令</li><li>在<strong>chrome</strong>浏览器中打开 <code>chrome://inspect</code> 并点击 <code>Remote Target</code> 中的 <code>main(文件名)</code> 标识的<code>inspect</code></li></ol><blockquote><p><code>--inspect-brk</code> 用于首行开始 debugger，否则用 <code>--inspect</code> 。 <code>9229</code> 为指定端口号</p></blockquote></div><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_esm.png" alt="node_debug_esm"></p><p>在项目初始化时， <code>utils</code> 模块内容就已经被加载，而此时 <code>main</code> 模块还未开始加载</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><code>ES Module</code> 属于编译时加载</li><li><code>ES Module</code> 是异步加载</li><li><code>import</code> 是对模块接口中值的引用，模块内的数据变化将影响外部引用数据</li></ul>`,63),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","esm.html.vue"]]);export{d as default};
