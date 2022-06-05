import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as i,a as n}from"./app.8b739d02.js";const l={},s=n(`<h1 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h1><p>\u5728 <code>Node.js</code> \u6A21\u5757\u7CFB\u7EDF\u4E2D\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u90FD\u88AB\u89C6\u4E3A\u72EC\u7ACB\u7684\u6A21\u5757\u3002</p><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h2><ul><li><code>module.exports</code> \u5BFC\u51FA</li><li><code>require()</code> \u52A0\u8F7D</li></ul><h2 id="module\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#module\u5B9E\u4F8B" aria-hidden="true">#</a> Module\u5B9E\u4F8B</h2><p><code>Node</code> \u5185\u90E8\u63D0\u4F9B\u4E86\u4E00\u4E2A\u6784\u5EFA\u51FD\u6570 <code>module</code> \uFF0C\u800C\u6BCF\u4E2A\u6A21\u5757\u90FD\u662F\u4E00\u4E2A <code>module</code> \u5B9E\u4F8B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// module\u5B9E\u4F8B\u5BF9\u8C61
Module {
  id: &#39;.&#39;,
  path: &#39;/Users/donggua/learning/daily&#39;,
  exports: {},
  parent: null,
  filename: &#39;/Users/donggua/learning/daily/mod.js&#39;,
  loaded: false,
  children: [],
  paths: [
    &#39;/Users/donggua/learning/daily/node_modules&#39;,
    &#39;/Users/donggua/learning/node_modules&#39;,
    &#39;/Users/donggua/node_modules&#39;,
    &#39;/Users/node_modules&#39;,
    &#39;/node_modules&#39;
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>module.id</code> \u6807\u8BC6\u7B26\uFF0C&#39;.&#39; \u6216\u8005\u662F\u5E26\u6709\u7EDD\u5BF9\u8DEF\u5F84\u7684\u6A21\u5757\u6587\u4EF6\u540D</li><li><code>module.filename</code> \u6587\u4EF6\u540D\uFF0C\u5E26\u6709\u7EDD\u5BF9\u8DEF\u5F84</li><li><code>module.loaded</code> \u8868\u793A\u6A21\u5757\u662F\u5426\u5DF2\u5B8C\u6210\u52A0\u8F7D</li></ul><p>\u5F53\u524D\u4F8B\u5B50\u662F\u5355\u72EC\u7684\u6A21\u5757\uFF0C\u6CA1\u6709\u88AB <code>require</code> \u8C03\u7528\u4F7F\u7528\uFF0C\u6240\u4EE5\u4E3A <code>false</code></p><ul><li><code>module.parent</code> \u8868\u793A\u8C03\u7528\u8BE5\u6A21\u5757\u7684\u6A21\u5757</li></ul><p>\u5F53\u524D\u4F8B\u5B50\u6CA1\u6709\u88AB\u8C03\u7528\uFF0C\u6240\u4EE5\u8FD4\u56DE\u503C\u662F <code>null</code></p><p>:::tip Note \u4E8E v14.6.0, v12.19.0\u7248\u672C\u5DF2\u5F03\u7528\uFF0C\u4F7F\u7528 <code>require.main</code> \u4EE3\u66FF :::</p><ul><li><code>module.children</code> \u8868\u793A\u6A21\u5757\u6240\u8C03\u7528\u7684\u5176\u4ED6\u6A21\u5757</li><li><code>module.exports</code> \u8868\u793A\u6A21\u5757\u5BF9\u5916\u8F93\u51FA\u7684\u503C\uFF0C\u9ED8\u8BA4 <code>{}</code></li><li><code>module.path</code> \u6A21\u5757\u6240\u5728\u76EE\u5F55\u540D\u79F0</li><li><code>module.paths</code> \u6A21\u5757\u7684\u641C\u7D22\u8DEF\u5F84</li></ul><h2 id="exports-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#exports-\u53D8\u91CF" aria-hidden="true">#</a> exports \u53D8\u91CF</h2><p><code>Node</code> \u4E3A\u6BCF\u4E2A\u6A21\u5757\u63D0\u4F9B\u4E00\u4E2A <code>exports</code> \u53D8\u91CF\uFF0C\u6307\u5411 <code>module.exports</code> \uFF0C\u56E0\u6B64\u6A21\u5757\u5BFC\u51FA\u6709\u4EE5\u4E0B\u51E0\u79CD\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module.exports.a = 1;
// \u7B49\u540C\u4E8E
module.exports = { a: 1 };
// \u6216
exports.a = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u5E94\u8BE5\u6CE8\u610F\uFF0C \u6211\u4EEC\u4E0D\u80FD\u4FEE\u6539 <code>exports</code> \u7684\u6307\u5411</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u4EE5\u4E0B\u5199\u6CD5\u662F\u9519\u8BEF\u4E14\u65E0\u6548\u7684
exports = &#39;angthing&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u5757\u7684\u7F13\u5B58\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u7684\u7F13\u5B58\u673A\u5236" aria-hidden="true">#</a> \u6A21\u5757\u7684\u7F13\u5B58\u673A\u5236</h2><p>\u5F53\u6267\u884C <code>require(path)</code> \u65F6\uFF0C\u4F1A\u5148\u4F7F\u7528 <code>path</code> \u4E3A <code>id</code> \u4ECE\u6A21\u5757\u7684\u7F13\u5B58 <code>Module._cache</code> \u4E2D\u68C0\u67E5\uFF0C\u5B58\u5728\u5219\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u8FD4\u56DE\u5BF9\u5E94\u7684 <code>module.exports</code> \uFF0C\u56E0\u6B64\u591A\u6B21\u8C03\u7528 <code>require(path)</code> \u4E0D\u4F1A\u5BFC\u81F4\u6A21\u5757\u4EE3\u7801\u88AB\u591A\u6B21\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>require(&quot;./a&quot;);
require(&quot;./a&quot;).done = true;
require(&quot;./a&quot;).done // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Node</code> \u4E2D\u4F7F\u7528 <code>require.cache</code> \u6307\u5411 <code>Module._cache</code> \u7ED9\u4E88\u5F00\u53D1\u8005\u8BBF\u95EE\u67E5\u770B\u6A21\u5757\u7684\u7F13\u5B58 \u82E5\u9700\u8981\u5220\u9664\u5BF9\u5E94\u7684\u6A21\u5757\u7F13\u5B58\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>delete require.cache[path]</code></p><h2 id="\u5FAA\u73AF\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u52A0\u8F7D" aria-hidden="true">#</a> \u5FAA\u73AF\u52A0\u8F7D</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/// \u8FD9\u91CC\u76F4\u63A5\u5F15\u7528\u5B98\u65B9demo
// a.js
console.log(&#39;a starting&#39;);
exports.done = false;
const b = require(&#39;./b.js&#39;);
console.log(&#39;in a, b.done = %j&#39;, b.done);
exports.done = true;
console.log(&#39;a done&#39;);

// b.js
console.log(&#39;b starting&#39;);
exports.done = false;
const a = require(&#39;./a.js&#39;);
console.log(&#39;in b, a.done = %j&#39;, a.done);
exports.done = true;
console.log(&#39;b done&#39;);

// main.js
console.log(&#39;main starting&#39;);
const a = require(&#39;./a.js&#39;);
const b = require(&#39;./b.js&#39;);
console.log(&#39;in main, a.done = %j, b.done = %j&#39;, a.done, b.done);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u9632\u6B62\u65E0\u9650\u5FAA\u73AF\uFF0C\u5728\u5FAA\u73AF\u5F15\u7528\u65F6\uFF0C <code>Node</code> \u4F1A\u8FD4\u56DE\u672A\u5B8C\u6210\u7684\u4E0D\u5B8C\u6574\u526F\u672C\u3002</p><h2 id="require-\u52A0\u8F7D\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#require-\u52A0\u8F7D\u673A\u5236" aria-hidden="true">#</a> require \u52A0\u8F7D\u673A\u5236</h2><h3 id="\u6E90\u7801\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a> \u6E90\u7801\u5206\u6790</h3><p><code>CommonJs</code> \u6E90\u7801\u4F4D\u4E8E <code>node/lib/internal/modules/cjs</code> \uFF0C\u8FD9\u91CC\u4E3B\u8981\u770B <code>loaders.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u6A21\u5757\u6784\u9020\u51FD\u6570
function Module(id = &#39;&#39;, parent) {
  this.id = id;
  this.path = path.dirname(id);
  this.exports = {};
  moduleParentCache.set(this, parent);
  updateChildren(parent, this, false);
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
// \u4EE5\u901A\u8FC7\u7684\u6587\u4EF6\u8DEF\u5F84\u4E3Aid\uFF0C\u52A0\u8F7D\u5E76\u8FD4\u56DE\u6A21\u5757\u7684exports\u5C5E\u6027
Module.prototype.require = function(id) {
  validateString(id, &#39;id&#39;);
  if (id === &#39;&#39;) {
    throw new ERR_INVALID_ARG_VALUE(&#39;id&#39;, id, &#39;must be a non-empty string&#39;);
  }
  requireDepth++;
  try {
    return Module._load(id, this, /* isMain */ false);
  } finally {
    requireDepth--;
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u6CE8 \u4EE5\u4E0B\u6E90\u7801\u7701\u7565\u4E86\u539F\u751F\u6A21\u5757 <a href="https://github.com/nodejs/node/blob/master/lib/internal/bootstrap/loaders.js" target="_blank" rel="noopener noreferrer">NativeModule</a>\u7B49\u90E8\u5206\u65E0\u5173\u672C\u6B21\u5206\u6790\u7684\u4EE3\u7801 :::</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// 1. \u5982\u679C\u7F13\u5B58\u4E2D\u6709\u6A21\u5757\u6570\u636E\uFF0C\u5219\u4ECE\u7F13\u5B58\u4E2D\u53D6\u51FA\u5E76\u8FD4\u56DE\u6A21\u5757\u7684exports\u5C5E\u6027
// 2. \u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u751F\u6210\u65B0\u7684\u6A21\u5757\uFF0C\u4FDD\u5B58\u5230\u7F13\u5B58\u4E2D\u5E76\u8FD4\u56DE\u6A21\u5757\u7684exports\u5C5E\u6027
Module._load = function(request, parent, isMain) {
  let relResolveCacheIdentifier;
  if (parent) {
    debug(&#39;Module._load REQUEST %s parent: %s&#39;, request, parent.id);
    // Fast path for (lazy loaded) modules in the same directory. The indirect
    // caching is required to allow cache invalidation without changing the old
    // cache key names.
    relResolveCacheIdentifier = \`\${parent.path}\\x00\${request}\`;
    const filename = relativeResolveCache[relResolveCacheIdentifier];
    if (filename !== undefined) {
      const cachedModule = Module._cache[filename];
      if (cachedModule !== undefined) {
        updateChildren(parent, cachedModule, true);
        if (!cachedModule.loaded)
          return getExportsForCircularRequire(cachedModule);
        return cachedModule.exports;
      }
      delete relativeResolveCache[relResolveCacheIdentifier];
    }
  }
  //...
  // \u68C0\u67E5\u7F13\u5B58
  const cachedModule = Module._cache[filename];
  if (cachedModule !== undefined) {
    updateChildren(parent, cachedModule, true);
    if (!cachedModule.loaded) {
      const parseCachedModule = cjsParseCache.get(cachedModule);
      if (!parseCachedModule || parseCachedModule.loaded)
        return getExportsForCircularRequire(cachedModule);
      parseCachedModule.loaded = true;
    } else {
      return cachedModule.exports;
    }
  }
  // \u4ECE\u6A21\u5757\u6620\u5C04\u4E2D\u67E5\u770B\u662F\u5426\u6709\u7B26\u5408\u6761\u4EF6\u7684
  const mod = loadNativeModule(filename, request);
  if (mod?.canBeRequiredByUsers) return mod.exports;
  // Don&#39;t call updateChildren(), Module constructor already does.
  const module = cachedModule || new Module(filename, parent);
  if (isMain) {
    process.mainModule = module;
    module.id = &#39;.&#39;;
  }
  Module._cache[filename] = module;
  //...
  return module.exports;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5F53\u6267\u884C<code>require(path)</code>\u65F6\uFF0C<code>node</code>\u624D\u4F1A\u53BB\u6267\u884C\u5BF9\u5E94\u7684\u6A21\u5757</li><li>\u901A\u8FC7<code>Module._load()</code>\u51FD\u6570\u89E3\u6790\u5E76\u8FD4\u56DE<code>module.exports</code> \u5BF9\u8C61\uFF0C<code>require()</code>\u5B9E\u9645\u5C31\u662F\u52A0\u8F7D\u4E86<code>exports</code>\u5BF9\u8C61</li><li>\u4EE5<code>path</code>\u4F5C\u4E3A<code>id</code>\u8FDB\u884C\u7F13\u5B58\uFF0C\u5BF9\u540C\u4E00\u6A21\u5757 <code>require()</code> \u52A0\u8F7D\u5C06\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u5E76\u8FD4\u56DE</li></ul><p>\u5176\u4E2D\uFF0C\u6A21\u5757\u7684\u7F13\u5B58\u5728 <code>helper.js</code> \u4E2D\u901A\u8FC7 <code>require.cache</code> \u6307\u5411 <code>Module._cache</code></p><h3 id="\u5B9E\u4F8B-debugger-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B-debugger-\u9A8C\u8BC1" aria-hidden="true">#</a> \u5B9E\u4F8B debugger \u9A8C\u8BC1</h3><p>:::tip debugger\u6D41\u7A0B\uFF1A</p><ol><li>\u6267\u884C <code>node --inspect-brk=9229 main</code> \u547D\u4EE4</li><li>\u5728<strong>chrome</strong>\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 <code>chrome://inspect</code> \u5E76\u70B9\u51FB <code>Remote Target</code> \u4E2D\u7684 <code>main(\u6587\u4EF6\u540D)</code> \u6807\u8BC6\u7684<code>inspect</code></li></ol><blockquote><p><code>--inspect-brk</code> \u7528\u4E8E\u9996\u884C\u5F00\u59CBdebugger\uFF0C\u5426\u5219\u7528 <code>--inspect</code> \u3002 <code>9229</code> \u4E3A\u6307\u5B9A\u7AEF\u53E3\u53F7</p></blockquote><p>:::</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// a.js
let done = false;

function change() {
  done = false;
  console.log(&quot;in a, change inside&quot;, done);
}

function checkIsChange() {
  console.log(&quot;in a, real done&quot;, done);
}

module.exports = { done, change, checkIsChange };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// b.js
const a = require(&quot;./a&quot;);
console.log(&quot;in b, before change&quot;, a.done);
a.done = true;
console.log(&quot;in b, done changed&quot;, a.done);
a.checkIsChange();
a.change();

module.exports = {};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// main.js
debugger;
const a = require(&quot;./a&quot;);
const b = require(&quot;./b&quot;);
console.log(&quot;in main, a.done&quot;, a.done);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u8F93\u51FA\u7ED3\u679C
in b, before change false
in b, done changed true
in a, real done false
in a, change inside false
in main, a.done true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u6211\u4EEC\u4F1A\u53D1\u73B0\uFF1A</p><ol><li><code>b.js</code> \u4E2D\u7684 <code>a.done = true</code> \u53EA\u5F71\u54CD\u4E86 <code>main.js</code> \u4E2D\u7684\u8F93\u51FA\u7ED3\u679C</li><li><code>b.js</code> \u4E2D\u8C03\u7528 <code>a.change()</code> \u65B9\u6CD5\u6CA1\u6709\u5F71\u54CD\u5230 <code>main.js</code> \u548C <code>b.js</code> \u7684\u8F93\u51FA\u7ED3\u679C</li></ol><p>\u901A\u8FC7<strong>debugger</strong>\u53EF\u4EE5\u770B\u5230\uFF1A</p><p>\u5F53 <code>main.js</code> \u8FD0\u884C\u5230 <code>const a = require(&quot;./a&quot;);</code> \u65F6\uFF0C <code>node</code> \u624D\u6267\u884C <code>Module._load()</code> \u83B7\u53D6\u6A21\u5757 <code>a</code></p><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/node_debug_cjs.png" alt="node_debug_cjs"></p><p>\u800C <code>b.js</code> \u518D\u6B21\u52A0\u8F7D\u6A21\u5757 <code>a</code> \u65F6\uFF0C\u662F\u901A\u8FC7\u7F13\u5B58\u673A\u5236\u8BFB\u53D6\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li><code>CommonJs</code> \u5C5E\u4E8E\u8FD0\u884C\u65F6\u52A0\u8F7D</li><li><code>CommonJs</code> \u662F\u540C\u6B65\u52A0\u8F7D</li><li><code>require()</code> \u662F\u5BF9<code>exports</code>\u5BF9\u8C61\u7684\u8D4B\u503C\u64CD\u4F5C\uFF0C\u800C<code>Module._load()</code> \u501F\u7528\u51FD\u6570\u5F62\u5F0F\u4FDD\u8BC1\u6A21\u5757\u5185\u5916\u4E0D\u4F1A\u4E92\u76F8\u5F71\u54CD</li></ul>`,50),a=[s];function c(o,r){return d(),i("div",null,a)}var t=e(l,[["render",c],["__file","cjs.html.vue"]]);export{t as default};
