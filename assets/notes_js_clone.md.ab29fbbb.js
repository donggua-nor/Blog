import{_ as s,c as n,o as a,a as l}from"./app.5f24077a.js";const d=JSON.parse('{"title":"对象的拷贝","description":"","frontmatter":{"prev":false,"next":false},"headers":[{"level":2,"title":"浅拷贝","slug":"浅拷贝","link":"#浅拷贝","children":[{"level":3,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"Array.prototype.concat()","slug":"array-prototype-concat","link":"#array-prototype-concat","children":[]},{"level":3,"title":"Array.prototype.slice()","slug":"array-prototype-slice","link":"#array-prototype-slice","children":[]},{"level":3,"title":"ES6 扩展运算符","slug":"es6-扩展运算符","link":"#es6-扩展运算符","children":[]}]},{"level":2,"title":"深拷贝","slug":"深拷贝","link":"#深拷贝","children":[{"level":3,"title":"JSON.parse(JSON.stringify())","slug":"json-parse-json-stringify","link":"#json-parse-json-stringify","children":[]},{"level":3,"title":"structuredClone","slug":"structuredclone","link":"#structuredclone","children":[]},{"level":3,"title":"MessageChannel","slug":"messagechannel","link":"#messagechannel","children":[]},{"level":3,"title":"JQuery、lodash","slug":"jquery、lodash","link":"#jquery、lodash","children":[]}]}],"relativePath":"notes/js/clone.md","lastUpdated":1678975061000}'),p={name:"notes/js/clone.md"},o=l(`<h1 id="对象的拷贝" tabindex="-1">对象的拷贝 <a class="header-anchor" href="#对象的拷贝" aria-hidden="true">#</a></h1><p>由于 JavaScript 中对象是引用数据类型，访问、操作对象实际上就是对其内存地址上的数据进行读写操作。在开发中执行拷贝对象并进行修改时，便需要根据场景需求注意对原对象数据的影响。</p><h2 id="浅拷贝" tabindex="-1">浅拷贝 <a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a></h2><p>浅拷贝只会对一层对象开辟新的内存空间进行存放，对于嵌套对象的深层属性仍是原来的引用地址。</p><h3 id="object-assign" tabindex="-1">Object.assign() <a class="header-anchor" href="#object-assign" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;donggua&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assign</span><span style="color:#ABB2BF;">({}, </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;_donggua&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;donggua&#39;, props: { value: 2 } }</span></span>
<span class="line"><span style="color:#E06C75;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;_donggua&#39;, props: { value: 2 } }</span></span>
<span class="line"></span></code></pre></div><h3 id="array-prototype-concat" tabindex="-1">Array.prototype.concat() <a class="header-anchor" href="#array-prototype-concat" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, [</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">]]</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">concat</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">][</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [1, 2, 3, [1, 5]];</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [4, 2, 3, [1, 5]];</span></span>
<span class="line"></span></code></pre></div><h3 id="array-prototype-slice" tabindex="-1">Array.prototype.slice() <a class="header-anchor" href="#array-prototype-slice" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, [</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">]]</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">slice</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">][</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [1, 2, 3, [1, 5]];</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [4, 2, 3, [1, 5]];</span></span>
<span class="line"></span></code></pre></div><h3 id="es6-扩展运算符" tabindex="-1">ES6 扩展运算符 <a class="header-anchor" href="#es6-扩展运算符" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;donggua&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  ...</span><span style="color:#E06C75;">obj</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;_donggua&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;donggua&#39;, props: { value: 2 } }</span></span>
<span class="line"><span style="color:#E06C75;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;_donggua&#39;, props: { value: 2 } }</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, [</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">]]</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [...</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">4</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">][</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [1, 2, 3, [1, 5]];</span></span>
<span class="line"><span style="color:#E06C75;">ary</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// [4, 2, 3, [1, 5]];</span></span>
<span class="line"></span></code></pre></div><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a></h2><p>深拷贝将对象深层进行完整的精确拷贝，对新对象的任何修改不会影响原对象数据。</p><h3 id="json-parse-json-stringify" tabindex="-1">JSON.parse(JSON.stringify()) <a class="header-anchor" href="#json-parse-json-stringify" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;donggua&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;_donggua&#39;</span></span>
<span class="line"><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">value</span><span style="color:#56B6C2;">++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;donggua&#39;, props: { value: 1 } }</span></span>
<span class="line"><span style="color:#E06C75;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// { name: &#39;_donggua&#39;, props: { value: 2 } }</span></span>
<span class="line"></span></code></pre></div><p><strong>但 <code>JSON.stringify()</code> 存在明显的弊端:</strong></p><ul><li><code>JSON.stringify()</code> 只能序列化对象的可枚举的自有属性</li><li><code>undefined</code>、<code>Symbol</code>、任意函数将被忽略</li><li><code>NaN</code>、<code>Infinity</code> 、<code>-Infinity</code> 将被当成 <code>null</code> 处理</li><li><code>RegExp</code>、<code>Error</code>、<code>Set</code>、<code>Map</code> 等特殊对象，仅会序列化可枚举的属性（一般情况下即为空对象）</li><li>Date 类型，转换后会调用 toJSON 转为字符串类型</li><li>循环引用的对象将报错</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">map</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Map</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#E5C07B;">map</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// Map: 0: {1 =&gt; 2}</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">undefined</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">: </span><span style="color:#61AFEF;">Symbol</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">c</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">NaN</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">d</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">Infinity</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">: </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">Infinity</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">f</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">map</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">g</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Date</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// h: obj =&gt; throw Error</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">defineProperty</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;i&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">JSON</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">stringify</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// before:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// obj: {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     a: undefined</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     b: Symbol()</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     c: NaN</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     d: Infinity</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     e: -Infinity</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     f: Map: 0: {1 =&gt; 2}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     g: Fri Jan 28 2022 23: 29: 48 GMT + 0800(中国标准时间) {}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     i: &quot;hidden value&quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// after</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// newObj: {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     c: null,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     d: null,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     e: null,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     f: {},</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//     g: &#39;2022-01-28T15:29:48.519Z&#39;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// }</span></span>
<span class="line"></span></code></pre></div><h3 id="structuredclone" tabindex="-1">structuredClone <a class="header-anchor" href="#structuredclone" aria-hidden="true">#</a></h3><blockquote><p>HTML 规范标准的 <a href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone" target="_blank" rel="noreferrer">Web API</a></p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">original</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;MDN&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">original</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">itself</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">original</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">structuredClone</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">original</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assert</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">clone</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">original</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// the objects are not the same (not same identity)</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assert</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">clone</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;MDN&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// they do have the same values</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">assert</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">clone</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">itself</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">clone</span><span style="color:#ABB2BF;">) </span><span style="color:#7F848E;font-style:italic;">// and the circular reference is preserved</span></span>
<span class="line"></span></code></pre></div><p><code>HTML</code> 规范的标准提案，默认解决了循环引用问题，支持多种默认数据类型。同时不限于普通拷贝，可使用 <code>structuredClone(value, { transfer })</code> 调用方式以直接移动源数据</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>尽管作为规范标准实现的 Web API，但目前兼容性还是个巨大的问题，同时仍有其他不足：</p><ul><li>无法拷贝对象的原型链</li><li>无法拷贝函数</li><li>不支持 <code>Error</code> 数据类型</li><li>...</li></ul></div><h3 id="messagechannel" tabindex="-1">MessageChannel <a class="header-anchor" href="#messagechannel" aria-hidden="true">#</a></h3><blockquote><p>vue.nextTick 源码曾使用的 Web API，在了解这个 API 时发现可以用于深拷贝</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">cloneUsingChannel</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">obj</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">channel</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">MessageChannel</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">channel</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">port1</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">onmessage</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">e</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">channel</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">port2</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">postMessage</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><p>但该方法存在一个缺陷，当拷贝对象带有函数属性时，将抛出错误：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> () {}</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">cloneUsingChannel</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Failed to execute &#39;postMessage&#39; on &#39;MessagePort&#39;: function() {} could not be cloned.</span></span>
<span class="line"></span></code></pre></div><h3 id="jquery、lodash" tabindex="-1">JQuery、lodash <a class="header-anchor" href="#jquery、lodash" aria-hidden="true">#</a></h3><ul><li><code>JQuery.extend()</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">$</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;jquery&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">$</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">extend</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, {}, </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre></div><ul><li><code>lodash.cloneDeep</code></li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro" tabindex="0"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">cloneDeep</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;lodash&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">newObj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">cloneDeep</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre></div>`,34),e=[o];function c(t,B,r,y,i,F){return a(),n("div",null,e)}const C=s(p,[["render",c]]);export{d as __pageData,C as default};