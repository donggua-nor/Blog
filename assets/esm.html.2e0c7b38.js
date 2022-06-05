import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8b739d02.js";const d={},l=s(`<h1 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h1><p>ES6 \u65B0\u589E\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u5C06\u9010\u6B65\u53D6\u4EE3 <a href="./cjs">CommonJS</a> \u7B49\u89C4\u8303\uFF0C\u6210\u4E3A\u672A\u6765\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u901A\u7528\u7684\u6A21\u5757\u89E3\u51B3\u65B9\u6848</p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><ul><li><code>export</code> \u5BFC\u51FA</li><li><code>import ... from $path</code> \u5BFC\u5165</li></ul><h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h2><p><code>export</code> \u5B9A\u4E49\u5BF9\u5916\u63A5\u53E3\uFF0C\u5BFC\u51FA\u6A21\u5757\u5185\u90E8\u53D8\u91CF/\u65B9\u6CD5/\u7C7B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {};
const val = 1;

export { fn, val };

export class Person {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u53EF\u4F7F\u7528\u5173\u952E\u8BCD <code>as</code> \u5BF9\u53D8\u91CF/\u65B9\u6CD5/\u7C7B\u91CD\u547D\u540D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const val = 1;
export { val as num };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u53EF\u5BF9\u53D8\u91CF\u8FDB\u884C\u91CD\u590D\u5BFC\u51FA</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export const val = 1;
export { val }; // Duplicate export of &#39;val&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E94\u6CE8\u610F <code>export</code> \u5E94\u63D0\u4F9B\u5BF9\u5916\u63A5\u53E3\uFF0C\u5373\u9700\u8981\u663E\u5F0F\u58F0\u660E</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * Unexpected token &#39;export&#39;
 * \u7F3A\u4E4F\u58F0\u660E\uFF0C\u76F8\u5F53\u4E8E\u76F4\u63A5\u5BFC\u51FA\u503C\uFF0C\u800C\u4E0D\u662F\u63A5\u53E3
 */
export 1;

/**
 * Declaration or statement expected
 * \u58F0\u660E\u8BED\u53E5\u6CA1\u6709\u7D27\u8DDF\u7740export\uFF0C\u6240\u4EE5\u8FD9\u91CC\u76F8\u5F53\u4E8E\u76F4\u63A5\u8F93\u51FA\u53D8\u91CF\u7684\u503C
 * \u53EF\u4F7F\u7528 export { val }; \u4FEE\u6B63
 */
const val = 1;
export val;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>export default</strong></li></ul><p>\u8BED\u4E49\u5316\u6807\u51C6\uFF0C\u7528\u4E8E\u5BFC\u51FA\u6A21\u5757\u7684\u9ED8\u8BA4\u503C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const val = 1;
export default val;

// OR
export default function() { ... }

// OR
export default class Person { ... }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C <code>export default</code> \u76F8\u5F53\u4E8E\u5BFC\u51FA\u6A21\u5757\u7684 <code>default</code> \u53D8\u91CF\uFF0C \u56E0\u6B64\u540E\u9762\u4E0D\u80FD\u7D27\u8DDF\u58F0\u660E\u8BED\u53E5 \u540C\u65F6\u6A21\u5757\u7684\u9ED8\u8BA4\u503C\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\uFF0C\u56E0\u6B64\u4E0D\u80FD\u91CD\u590D\u8F93\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default { val: 1 };
export default { repeatVal: 2 };
// Identifier &#39;.default&#39; has already been declared

export default
const test = 3;
// Unexpected token &#39;const&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u4E8E <code>export</code> \uFF0C <code>export default</code> \u53EF\u4EE5\u5C06\u6A21\u5757\u6574\u4F53\u5BFC\u51FA\uFF0C\u4EE5\u4FBF\u5BFC\u5165\u4F7F\u7528\u65F6\u4E0D\u9700\u8981\u6307\u5B9A\u4E0E <code>export</code> \u5BF9\u5E94\u7684\u53D8\u91CF\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// utils.js
const val = 1;

function fn() {
  console.log(val)
};
export default { val, fn };

// main.js
import utils from &#39;./utils&#39;;
utils.val;
utils.fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F8\u5F53\u4E8E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// utils.js
const val = 1;

function fn() {
  console.log(val)
};
export const utils = { val, fn };

// main.js
import { utils } from &#39;./utils&#39;; // \u6CE8\u610F\u8FD9\u91CC utils \u9700\u8981\u7528 {} \u5305\u88F9\uFF0C\u4E14\u53D8\u91CF\u540D\u5FC5\u987B\u4E0E export \u5BFC\u51FA\u7684\u4E00\u81F4
utils.val;
utils.fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7ED3\u5408\u4F7F\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import _, { cloneDeep } from &#39;lodash&#39;;

_.cloneDeep(obj);
cloneDeep(obj);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h2><p><code>import</code> \u7528\u4E8E\u52A0\u8F7D\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import { val } from &#39;./utils&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0E <code>export</code> \u76F8\u540C\uFF0C\u53EF\u4F7F\u7528\u5173\u952E\u8BCD <code>as</code> \u5BF9\u5BFC\u5165\u7684\u53D8\u91CF\u91CD\u547D\u540D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import { val: num } from &#39;./utils&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u975E <code>export default</code> \u5BFC\u51FA\u7684\u6A21\u5757\u60F3\u8981\u8FDB\u884C\u6574\u4F53\u52A0\u8F7D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>*</code> \u914D\u5408 <code>as</code> \u6307\u5B9A\u52A0\u8F7D\u6574\u4E2A\u6A21\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// utils.js
export const val = 1;
export function fn() {
  console.log(val);
}

// main.js
import * as utils from &quot;./utils&quot;;
utils.fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0Cimport \u8BED\u53E5\u4F1A\u6267\u884C\u6240\u52A0\u8F7D\u7684\u6A21\u5757\uFF0C\u53EF\u4EE5\u501F\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u5C06\u9879\u76EE\u521D\u59CB\u5316\u65B9\u6CD5\u5C01\u88C5\u62BD\u79BB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// bootstrap.js
console.log(1);

// main.js
import &#39;./bootstrap&#39;; // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// utils
export default function() {
  console.log(1);
}

// main
print();
import print from &#39;./utils&#39;;
// 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip <code>import</code> \u547D\u4EE4\u5E26\u6709\u63D0\u5347\u4F5C\u7528 :::</p><h2 id="\u7279\u6027\u4E0E\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#\u7279\u6027\u4E0E\u8FD0\u7528" aria-hidden="true">#</a> \u7279\u6027\u4E0E\u8FD0\u7528</h2><ul><li>\u7EC4\u5408\u4F7F\u7528<code>export</code> \u3001<code>import</code> \u8FDB\u884C\u6A21\u5757\u8F6C\u53D1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export { utils } from &#39;./utils&#39;;

// \u76F8\u5F53\u4E8E
import { utils } from &#39;./utils&#39;;
export { utils };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u540C\u4E8E\u7B2C\u4E8C\u79CD\u5199\u6CD5\uFF0C\u7B2C\u4E00\u79CD\u5199\u6CD5\u5728\u6A21\u5757\u4E2D\u4E0D\u80FD\u4F7F\u7528 <code>utils</code></p><ul><li>\u6D4F\u89C8\u5668\u52A0\u8F7D \u4F7F\u7528 <code>script</code> \u6807\u7B7E\u52A0\u8F7DESM\u65F6\uFF0C\u9700\u8981\u58F0\u660E <code>type</code> \u5C5E\u6027</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt; script type = &quot;module&quot;
scr = &quot;./utils.js&quot; &gt; &lt; /script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip Note \u5E26\u6709 <code>type=&quot;module&quot;</code> \u5C5E\u6027\u7684\u811A\u672C\u5C06\u88AB\u5F02\u6B65\u6267\u884C\uFF0C\u4E0D\u4F1A\u5835\u585E\u6D4F\u89C8\u5668\u6E32\u67D3 :::</p><p>\u4E3A\u4E86\u6D4F\u89C8\u5668\u517C\u5BB9\u6027\u52A0\u8F7D\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 <code>type=&quot;nomudole&quot;</code> \u544A\u77E5\u6D4F\u89C8\u5668\u52A0\u8F7D\u5BF9\u5E94\u652F\u6301\u7684\u6807\u51C6\u6A21\u5757</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>&lt; script type = &quot;module&quot;
scr = &quot;./esm.js&quot; &gt; &lt; /script&gt; &lt;
script type = &quot;nomodule&quot;
scr = &quot;./cjs.js&quot; &gt; &lt; /script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u4E0D\u652F\u6301 <code>ES Module</code> \u7684\u6D4F\u89C8\u5668\uFF0C\u6807\u8BC6\u6709 <code>type=&quot;module&quot;</code> \u7684\u811A\u672C\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\uFF0C\u53CD\u4E4B\u540C\u7406</p><ul><li>import() \u52A8\u6001\u52A0\u8F7D</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import($path).then(module =&gt; /* to do */ ).catch(err =&gt; /* err handle */ );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u6309\u9700\u52A0\u8F7D</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document.addEventListener(&#39;click&#39;, e =&gt; import($path).then(...));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6761\u4EF6\u52A0\u8F7D</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (condition) {
  import($path_A).then(...);
} else {
  import($path_B).then(...);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u52A8\u6001\u8DEF\u5F84</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const path = condition ? $path_A : $path_B;
import(path).then(...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import-\u52A0\u8F7D\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#import-\u52A0\u8F7D\u673A\u5236" aria-hidden="true">#</a> import \u52A0\u8F7D\u673A\u5236</h2><h3 id="\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a> \u5B9E\u4F8B</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// utils.js
export let val = 1;

setTimeout(() =&gt; {
  val = 2;
}, 1000);

export function fn() {
  console.log(val);
}
// main.js
import * as utils from &quot;./utils.mjs&quot;;
utils.fn();
setTimeout(() =&gt; {
  utils.fn();
}, 1500);
// \u8F93\u51FA\u7ED3\u679C
// 1
// 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u8F93\u51FA\u7ED3\u679C\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53 <code>utils</code> \u6A21\u5757\u5185\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C <code>main</code> \u6A21\u5757\u4E2D\u5F15\u7528\u7684\u6570\u636E\u4E5F\u5C06\u540C\u6B65\u53D8\u5316</p><h3 id="debugger-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#debugger-\u9A8C\u8BC1" aria-hidden="true">#</a> debugger \u9A8C\u8BC1</h3><p>:::tip debugger\u6D41\u7A0B\uFF1A</p><ol><li>\u6267\u884C <code>node --inspect-brk=9229 main</code> \u547D\u4EE4</li><li>\u5728<strong>chrome</strong>\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 <code>chrome://inspect</code> \u5E76\u70B9\u51FB <code>Remote Target</code> \u4E2D\u7684 <code>main(\u6587\u4EF6\u540D)</code> \u6807\u8BC6\u7684<code>inspect</code></li></ol><blockquote><p><code>--inspect-brk</code> \u7528\u4E8E\u9996\u884C\u5F00\u59CBdebugger\uFF0C\u5426\u5219\u7528 <code>--inspect</code> \u3002 <code>9229</code> \u4E3A\u6307\u5B9A\u7AEF\u53E3\u53F7</p></blockquote><p>:::</p><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_esm.png" alt="node_debug_esm"></p><p>\u5728\u9879\u76EE\u521D\u59CB\u5316\u65F6\uFF0C <code>utils</code> \u6A21\u5757\u5185\u5BB9\u5C31\u5DF2\u7ECF\u88AB\u52A0\u8F7D\uFF0C\u800C\u6B64\u65F6 <code>main</code> \u6A21\u5757\u8FD8\u672A\u5F00\u59CB\u52A0\u8F7D</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><code>ES Module</code> \u5C5E\u4E8E\u7F16\u8BD1\u65F6\u52A0\u8F7D</li><li><code>ES Module</code> \u662F\u5F02\u6B65\u52A0\u8F7D</li><li><code>import</code> \u662F\u5BF9\u6A21\u5757\u63A5\u53E3\u4E2D\u503C\u7684\u5F15\u7528\uFF0C\u6A21\u5757\u5185\u7684\u6570\u636E\u53D8\u5316\u5C06\u5F71\u54CD\u5916\u90E8\u5F15\u7528\u6570\u636E</li></ul>`,66),a=[l];function r(c,v){return i(),n("div",null,a)}var u=e(d,[["render",r],["__file","esm.html.vue"]]);export{u as default};
