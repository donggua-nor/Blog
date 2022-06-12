import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as s}from"./app.e85e7de9.js";const a={},d=s(`<h1 id="\u5BF9\u8C61\u7684\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7684\u62F7\u8D1D" aria-hidden="true">#</a> \u5BF9\u8C61\u7684\u62F7\u8D1D</h1><p>\u7531\u4E8E JavaScript \u4E2D\u5BF9\u8C61\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u8BBF\u95EE\u3001\u64CD\u4F5C\u5BF9\u8C61\u5B9E\u9645\u4E0A\u5C31\u662F\u5BF9\u5176\u5185\u5B58\u5730\u5740\u4E0A\u7684\u6570\u636E\u8FDB\u884C\u8BFB\u5199\u64CD\u4F5C\u3002\u5728\u5F00\u53D1\u4E2D\u6267\u884C\u62F7\u8D1D\u5BF9\u8C61\u5E76\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u4FBF\u9700\u8981\u6839\u636E\u573A\u666F\u9700\u6C42\u6CE8\u610F\u5BF9\u539F\u5BF9\u8C61\u6570\u636E\u7684\u5F71\u54CD\u3002</p><h2 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h2><p>\u6D45\u62F7\u8D1D\u53EA\u4F1A\u5BF9\u4E00\u5C42\u5BF9\u8C61\u5F00\u8F9F\u65B0\u7684\u5185\u5B58\u7A7A\u95F4\u8FDB\u884C\u5B58\u653E\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5C42\u5C5E\u6027\u4ECD\u662F\u539F\u6765\u7684\u5F15\u7528\u5730\u5740\u3002</p><h3 id="object-assign" tabindex="-1"><a class="header-anchor" href="#object-assign" aria-hidden="true">#</a> Object.assign()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj = {
  name: &#39;donggua&#39;,
  props: {
    value: 1
  }
}

const newObj = Object.assign({}, obj);
newObj.name = &#39;_donggua&#39;;
newObj.props.value++;

obj; // { name: &#39;donggua&#39;, props: { value: 2 } }
newObj; // { name: &#39;_donggua&#39;, props: { value: 2 } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-concat" tabindex="-1"><a class="header-anchor" href="#array-prototype-concat" aria-hidden="true">#</a> Array.prototype.concat()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [1, 2, 3, [4, 5]];
const ary = arr.concat();
ary[0] = 4;
ary[3][0] = 1;

arr; // [1, 2, 3, [1, 5]];
ary; // [4, 2, 3, [1, 5]];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-slice" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice" aria-hidden="true">#</a> Array.prototype.slice()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arr = [1, 2, 3, [4, 5]];
const ary = arr.slice();
ary[0] = 4;
ary[3][0] = 1;

arr; // [1, 2, 3, [1, 5]];
ary; // [4, 2, 3, [1, 5]];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6-\u6269\u5C55\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#es6-\u6269\u5C55\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> ES6 \u6269\u5C55\u8FD0\u7B97\u7B26</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj = {
  name: &#39;donggua&#39;,
  props: {
    value: 1
  }
}

const newObj = {
  ...obj
};
newObj.name = &#39;_donggua&#39;;
newObj.props.value++;

obj; // { name: &#39;donggua&#39;, props: { value: 2 } }
newObj; // { name: &#39;_donggua&#39;, props: { value: 2 } }
const arr = [1, 2, 3, [4, 5]];
const ary = [...arr];
ary[0] = 4;
ary[3][0] = 1;

arr; // [1, 2, 3, [1, 5]];
ary; // [4, 2, 3, [1, 5]];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DF1\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h2><p>\u6DF1\u62F7\u8D1D\u5C06\u5BF9\u8C61\u6DF1\u5C42\u8FDB\u884C\u5B8C\u6574\u7684\u7CBE\u786E\u62F7\u8D1D\uFF0C\u5BF9\u65B0\u5BF9\u8C61\u7684\u4EFB\u4F55\u4FEE\u6539\u4E0D\u4F1A\u5F71\u54CD\u539F\u5BF9\u8C61\u6570\u636E\u3002</p><h3 id="json-parse-json-stringify" tabindex="-1"><a class="header-anchor" href="#json-parse-json-stringify" aria-hidden="true">#</a> JSON.parse(JSON.stringify())</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj = {
  name: &#39;donggua&#39;,
  props: {
    value: 1
  }
}

const newObj = JSON.parse(JSON.stringify(obj));
newObj.name = &#39;_donggua&#39;;
newObj.props.value++;

obj; // { name: &#39;donggua&#39;, props: { value: 1 } }
newObj; // { name: &#39;_donggua&#39;, props: { value: 2 } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F46 <code>JSON.stringify()</code> \u5B58\u5728\u660E\u663E\u7684\u5F0A\u7AEF:</strong></p><ul><li><code>JSON.stringify()</code> \u53EA\u80FD\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u7684\u81EA\u6709\u5C5E\u6027</li><li><code>undefined</code>\u3001<code>Symbol</code>\u3001\u4EFB\u610F\u51FD\u6570\u5C06\u88AB\u5FFD\u7565</li><li><code>NaN</code>\u3001<code>Infinity</code> \u3001<code>-Infinity</code> \u5C06\u88AB\u5F53\u6210 <code>null</code> \u5904\u7406</li><li><code>RegExp</code>\u3001<code>Error</code>\u3001<code>Set</code>\u3001<code>Map</code> \u7B49\u7279\u6B8A\u5BF9\u8C61\uFF0C\u4EC5\u4F1A\u5E8F\u5217\u5316\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF08\u4E00\u822C\u60C5\u51B5\u4E0B\u5373\u4E3A\u7A7A\u5BF9\u8C61\uFF09</li><li>Date \u7C7B\u578B\uFF0C\u8F6C\u6362\u540E\u4F1A\u8C03\u7528 toJSON \u8F6C\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B</li><li>\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61\u5C06\u62A5\u9519</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const map = new Map();
map.set(1, 2); // Map: 0: {1 =&gt; 2}
const obj = {
  a: undefined,
  b: Symbol(),
  c: NaN,
  d: Infinity,
  e: -Infinity,
  f: map,
  g: new Date(),
  // h: obj =&gt; throw Error
};

Object.defineProperty(obj, &#39;i&#39;, {
  value: &#39;&#39;
})

const newObj = JSON.parse(JSON.stringify(obj));

// before:
// obj: {
//     a: undefined
//     b: Symbol()
//     c: NaN
//     d: Infinity
//     e: -Infinity
//     f: Map: 0: {1 =&gt; 2}
//     g: Fri Jan 28 2022 23: 29: 48 GMT + 0800(\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4) {}
//     i: &quot;hidden value&quot;
// }

// after 
// newObj: {
//     c: null,
//     d: null,
//     e: null,
//     f: {},
//     g: &#39;2022-01-28T15:29:48.519Z&#39;
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="structuredclone" tabindex="-1"><a class="header-anchor" href="#structuredclone" aria-hidden="true">#</a> structuredClone</h3><blockquote><p>HTML \u89C4\u8303\u6807\u51C6\u7684 <a href="https://developer.mozilla.org/en-US/docs/Web/API/structuredClone" target="_blank" rel="noopener noreferrer">Web API</a></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const original = {
  name: &quot;MDN&quot;
};
original.itself = original;

const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === &quot;MDN&quot;); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HTML</code> \u89C4\u8303\u7684\u6807\u51C6\u63D0\u6848\uFF0C\u9ED8\u8BA4\u89E3\u51B3\u4E86\u5FAA\u73AF\u5F15\u7528\u95EE\u9898\uFF0C\u652F\u6301\u591A\u79CD\u9ED8\u8BA4\u6570\u636E\u7C7B\u578B\u3002\u540C\u65F6\u4E0D\u9650\u4E8E\u666E\u901A\u62F7\u8D1D\uFF0C\u53EF\u4F7F\u7528 <code>structuredClone(value, { transfer })</code> \u8C03\u7528\u65B9\u5F0F\u4EE5\u76F4\u63A5\u79FB\u52A8\u6E90\u6570\u636E</p><p>:::warning \u5C3D\u7BA1\u4F5C\u4E3A\u89C4\u8303\u6807\u51C6\u5B9E\u73B0\u7684Web API\uFF0C\u4F46\u76EE\u524D\u517C\u5BB9\u6027\u8FD8\u662F\u4E2A\u5DE8\u5927\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u4ECD\u6709\u5176\u4ED6\u4E0D\u8DB3\uFF1A</p><ul><li>\u65E0\u6CD5\u62F7\u8D1D\u5BF9\u8C61\u7684\u539F\u578B\u94FE</li><li>\u65E0\u6CD5\u62F7\u8D1D\u51FD\u6570</li><li>\u4E0D\u652F\u6301 <code>Error</code> \u6570\u636E\u7C7B\u578B</li><li>... :::</li></ul><h3 id="messagechannel" tabindex="-1"><a class="header-anchor" href="#messagechannel" aria-hidden="true">#</a> MessageChannel</h3><blockquote><p>vue.nextTick \u6E90\u7801\u66FE\u4F7F\u7528\u7684Web API\uFF0C\u5728\u4E86\u89E3\u8FD9\u4E2AAPI\u65F6\u53D1\u73B0\u53EF\u4EE5\u7528\u4E8E\u6DF1\u62F7\u8D1D</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function cloneUsingChannel(obj) {
  return new Promise(resolve =&gt; {
    const channel = new MessageChannel();
    channel.port1.onmessage = e =&gt; resolve(e.data)
    channel.port2.postMessage(obj);
  })
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u8BE5\u65B9\u6CD5\u5B58\u5728\u4E00\u4E2A\u7F3A\u9677\uFF0C\u5F53\u62F7\u8D1D\u5BF9\u8C61\u5E26\u6709\u51FD\u6570\u5C5E\u6027\u65F6\uFF0C\u5C06\u629B\u51FA\u9519\u8BEF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const obj = {
  fn: function() {}
}
const newObj = cloneUsingChannel(obj)
// Failed to execute &#39;postMessage&#39; on &#39;MessagePort&#39;: function() {} could not be cloned.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jquery\u3001lodash" tabindex="-1"><a class="header-anchor" href="#jquery\u3001lodash" aria-hidden="true">#</a> JQuery\u3001lodash</h3><ul><li><code>JQuery.extend()</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import $ from &quot;jquery&quot;;

const newObj = $.extend(true, {}, obj);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>lodash.cloneDeep</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import { cloneDeep } from &quot;lodash&quot;; 

const newObj = cloneDeep(obj); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35),l=[d];function r(c,v){return n(),i("div",null,l)}var t=e(a,[["render",r],["__file","clone.html.vue"]]);export{t as default};
