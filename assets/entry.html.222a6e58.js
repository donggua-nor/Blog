import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as r,c as a,b as i,d as u,w as c,a as n,e}from"./app.8b739d02.js";const v={},o=n(`<h1 id="\u4ECE\u5165\u53E3\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u5165\u53E3\u5F00\u59CB" aria-hidden="true">#</a> \u4ECE\u5165\u53E3\u5F00\u59CB</h1><p>\u5F53\u7740\u624B\u4E00\u4E2A\u9879\u76EE\u65F6\uFF0C\u5E94\u5F53\u4ECE\u5176\u5165\u53E3\u5F00\u59CB\uFF0C\u5BF9\u4E8E\u57FA\u4E8E NPM \u6258\u7BA1\u7684\u9879\u76EE\uFF0C\u6211\u4EEC\u4ECE <code>package.json</code> \u6587\u4EF6\u5165\u624B\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;vue&quot;,
  &quot;version&quot;: &quot;2.6.14&quot;,
  &quot;main&quot;: &quot;dist/vue.runtime.common.js&quot;,
  &quot;module&quot;: &quot;dist/vue.runtime.esm.js&quot;,
  &quot;srcipts&quot;: {
    &quot;dev&quot;: &quot;rollup -w -c scripts/config.js --environment TARGET:web-full-dev&quot;,
    &quot;build&quot;: &quot;node scripts/build.js&quot;,
    &quot;build:ssr&quot;: &quot;npm run build -- web-runtime-cjs,web-server-renderer&quot;,
    &quot;build:weex&quot;: &quot;npm run build -- weex&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;rollup&quot;: &quot;^1.0.0&quot;,
    &quot;rollup-plugin-alias&quot;: &quot;^1.3.1&quot;,
    &quot;rollup-plugin-buble&quot;: &quot;^0.19.6&quot;,
    &quot;rollup-plugin-commonjs&quot;: &quot;^9.2.0&quot;,
    &quot;rollup-plugin-flow-no-whitespace&quot;: &quot;^1.0.0&quot;,
    &quot;rollup-plugin-node-resolve&quot;: &quot;^4.0.0&quot;,
    &quot;rollup-plugin-replace&quot;: &quot;^2.0.0&quot;,
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64\u7F57\u5217\u4E86\u672C\u6587\u7AE0\u9700\u8981\u5173\u6CE8\u7684\u4FE1\u606F\uFF1A</p><ul><li>\u6307\u660E\u9879\u76EE\u5F15\u7528\u4E0D\u540C\u89C4\u8303\u4E0B\u7684\u6587\u4EF6\u5165\u53E3</li></ul><p>\u6BD4\u5982\u7B14\u8005\u8C03\u8BD5\u7684\u9879\u76EEdemo\u662F\u57FA\u4E8E <code>vue-cli</code> \u6784\u5EFA\u7684\u9879\u76EE\uFF0C\u4F18\u5148\u4F7F\u7528 <code>module</code> \u5B57\u6BB5\u6807\u8BC6\u5BF9\u5E94\u7684 <code>ESM</code> \u6A21\u5757\u6587\u4EF6</p><p>\u5728\u8C03\u8BD5\u6E90\u7801\u65F6\u4E00\u822C\u8C03\u8BD5 <code>dist/vue.runtime.esm.js</code> \u6587\u4EF6</p><p>\u5F00\u542F <a href="https://cli.vuejs.org/zh/config/#runtimecompiler" target="_blank" rel="noopener noreferrer">runtimeCompiler</a> \u9009\u9879\u540E\u8C03\u8BD5 <code>dist/vue.esm.js</code> \u6587\u4EF6</p><ul><li><p><code>Vue</code> \u57FA\u4E8E <code>Rollup</code> \u8FDB\u884C\u6784\u5EFA\u6253\u5305</p></li><li><p><code>Vue</code> \u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u65F6\u5C06\u6267\u884C <code>node scripts/build.js</code>\uFF0C\u5E76\u4F1A\u6839\u636E\u5BF9\u5E94\u573A\u666F\u4F20\u5165\u5BF9\u5E94\u7684\u53C2\u6570</p></li></ul><h2 id="\u57FA\u4E8E-rollup-\u7684\u6E90\u7801\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u57FA\u4E8E-rollup-\u7684\u6E90\u7801\u6784\u5EFA" aria-hidden="true">#</a> \u57FA\u4E8E Rollup \u7684\u6E90\u7801\u6784\u5EFA</h2><h3 id="build-\u6784\u5EFA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#build-\u6784\u5EFA\u6587\u4EF6" aria-hidden="true">#</a> build \u6784\u5EFA\u6587\u4EF6</h3><p>\u6253\u5F00 <code>scripts/build.js</code> \u6587\u4EF6\uFF0C\u4E86\u89E3\u4E3B\u8981\u7684\u4EE3\u7801\u903B\u8F91\u90E8\u5206\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>let builds = require(&#39;./config&#39;).getAllBuilds()

// filter builds via command line arg
if (process.argv[2]) {
  const filters = process.argv[2].split(&#39;,&#39;)
  builds = builds.filter(b =&gt; {
    return filters.some(f =&gt; b.output.file.indexOf(f) &gt; -1 || b._name.indexOf(f) &gt; -1)
  })
} else {
  // filter out weex builds by default
  builds = builds.filter(b =&gt; {
    return b.output.file.indexOf(&#39;weex&#39;) === -1
  })
}

build(builds)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF1A</p><ul><li>\u6839\u636E\u5BF9\u5E94\u573A\u666F\u4F20\u5165\u5BF9\u5E94\u7684\u53C2\u6570\uFF0C\u5C06\u5728\u6B64\u8FDB\u884C\u6784\u5EFA\u914D\u7F6E\u7684\u8FC7\u6EE4\u4EE5\u6C9F\u901A\u4E0D\u540C\u7248\u672C\u7684\u4EE3\u7801</li><li>\u76F8\u5173\u914D\u7F6E\u5B58\u653E\u4E8E <code>scripts/config.js</code> \u4E2D</li></ul><h3 id="alias-\u8DEF\u5F84\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#alias-\u8DEF\u5F84\u522B\u540D" aria-hidden="true">#</a> alias \u8DEF\u5F84\u522B\u540D</h3><p>\u6253\u5F00 <code>scripts/config.js</code> \uFF0C\u9700\u8981\u5148\u5173\u6CE8\u4E00\u4E0B <code>Rollup</code> \u8DEF\u5F84\u522B\u540D\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const alias = require(&#39;rollup-plugin-alias&#39;)
const aliases = require(&#39;./alias&#39;)
const resolve = p =&gt; {
  const base = p.split(&#39;/&#39;)[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, &#39;../&#39;, p)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64 <code>Vue</code> \u4F7F\u7528\u6839\u636E\u4F20\u5165\u8DEF\u5F84\u53C2\u6570 <code>p</code> \u83B7\u53D6\u6839\u8DEF\u5F84 <code>base</code> \uFF0C\u5E76\u901A\u8FC7 <a href="https://github.com/rollup/rollup-plugin-alias" target="_blank" rel="noopener noreferrer">rollup-plugin-alias</a> \u914D\u7F6E\u8DEF\u5F84\u522B\u540D</p><p><code>alias</code> \u914D\u7F6E\u4F4D\u4E8E <code>scripts/alias.js</code> \u4E2D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const resolve = p =&gt; path.resolve(__dirname, &#39;../&#39;, p)

module.exports = {
  vue: resolve(&#39;src/platforms/web/entry-runtime-with-compiler&#39;),
  compiler: resolve(&#39;src/compiler&#39;),
  core: resolve(&#39;src/core&#39;),
  shared: resolve(&#39;src/shared&#39;),
  web: resolve(&#39;src/platforms/web&#39;),
  weex: resolve(&#39;src/platforms/weex&#39;),
  server: resolve(&#39;src/server&#39;),
  sfc: resolve(&#39;src/sfc&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u5728\u6E90\u7801\u4E2D\u5F15\u5165\u5BF9\u5E94\u914D\u7F6E\u7684\u8DEF\u5F84\u65F6\uFF0C\u5C06\u901A\u8FC7 <code>resolve</code> \u51FD\u6570\u627E\u5230\u5B9E\u9645\u7684\u6587\u4EF6\u8DEF\u5F84\u3002\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u4EE5 src/platforms/web/runtime/index.js \u4E3A\u4F8B
import Vue from &#39;core/index&#39;

// \u76F8\u5F53\u4E8E
import Vue from &#39;src/core/index&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-\u6784\u5EFA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#config-\u6784\u5EFA\u914D\u7F6E" aria-hidden="true">#</a> config \u6784\u5EFA\u914D\u7F6E</h3><p>\u4E86\u89E3\u5B8C\u8DEF\u5F84\u522B\u540D\u89C4\u5219\uFF0C\u518D\u770B\u4E0B\u6700\u7EC8\u5B8C\u6210\u6253\u5305\u7684\u6784\u5EFA\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u9884\u8BBE\u7684\u5BF9\u5E94\u6784\u5EFA\u76EE\u6807\u4E0B\u7684 Rollup \u914D\u7F6E
const builds = {
  // Runtime only ES modules build (for bundlers)
  &#39;web-runtime-esm&#39;: {
    entry: resolve(&#39;web/entry-runtime.js&#39;),
    dest: resolve(&#39;dist/vue.runtime.esm.js&#39;),
    format: &#39;es&#39;,
    banner
  },
  // Runtime+compiler ES modules build (for bundlers)
  &#39;web-full-esm&#39;: {
    entry: resolve(&#39;web/entry-runtime-with-compiler.js&#39;),
    dest: resolve(&#39;dist/vue.esm.js&#39;),
    format: &#39;es&#39;,
    alias: { he: &#39;./entity-decoder&#39; },
    banner
  }
  // ...
}

// \u6839\u636E\u6784\u5EFA\u76EE\u6807\u53D6\u51FA Rollup \u914D\u7F6E
function genConfig(name) {
  const opts = builds[name]
  const config = {
    input: opts.entry,
    external: opts.external,
    plugins: [
      flow(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || []),
    output: {
      file: opts.dest,
      format: opts.format,
      banner: opts.banner,
      name: opts.moduleName || &#39;Vue&#39;
    },
    onwarn: (msg, warn) =&gt; {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }

  // ...\u7565\u53BB\u90E8\u5206\u914D\u7F6E\u4EE3\u7801

  return config
}

// \u5BFC\u51FA\u4F9B \`scripts/build.js\` \u4F7F\u7528
exports.getAllBuilds = () =&gt; Object.keys(builds).map(genConfig)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),t=e("\u5F53\u6784\u5EFA\u6211\u4EEC\u9879\u76EE\u6240\u9700\u7684 "),m=e("ES Module"),b=e(" \u89C4\u8303\u6E90\u7801\u6587\u4EF6\u65F6\uFF0C\u5C06\u7ECF\u8FC7 "),p=i("code",null,"Rollup",-1),f=e(" \u4EE5 "),g=i("code",null,"web/entry-runtime.js",-1),h=e(" \u4E3A\u5165\u53E3\u6587\u4EF6\u8FDB\u884C\u6784\u5EFA\u6253\u5305\uFF0C\u6700\u7EC8\u751F\u6210 "),q=i("code",null,"vue.runtime.esm.js",-1),j=e(" \u6587\u4EF6\u653E\u7F6E\u4E8E "),x=i("code",null,"dist",-1),_=e(" \u76EE\u5F55\u4E2D\u3002"),w=n(`<h2 id="vue-\u7684\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#vue-\u7684\u5165\u53E3" aria-hidden="true">#</a> Vue \u7684\u5165\u53E3</h2><p>\u5728 <code>web/entry-runtime.js</code> \u6784\u5EFA\u5165\u53E3\u6587\u4EF6\u4E2D\uFF0C\u662F\u4E00\u4EFD\u7B80\u5355\u7684\u63A5\u53E3\u8F6C\u53D1\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Vue from &#39;./runtime/index&#39;

export default Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u4E00\u6B65\u67E5\u627E\u6E90\u5165\u53E3\uFF0C\u6253\u5F00 <code>src/platforms/web/runtime/index.js</code> \u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Vue from &#39;core/index&#39;

// ...\u7565\u53BB\u4E0E\u5165\u53E3\u65E0\u5173\u7684\u4EE3\u7801\uFF0C\u5C06\u5728\u5176\u4ED6\u5BF9\u5E94\u7AE0\u8282\u8BE6\u8FF0

export default Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u4E8B\u5148\u4E86\u89E3\u7684 <code>Rollup</code> \u6784\u5EFA\u4E2D\u7684 <a href="#alias-%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D">alias</a> \u914D\u7F6E\uFF0C\u6211\u4EEC\u4FBF\u53EF\u627E\u5230\u5BF9\u5E94\u7684 <code>src/core/index.js</code> \uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Vue from &#39;./instance/index&#39;
import { initGlobalAPI } from &#39;./global-api/index&#39;

initGlobalAPI(Vue)

// ...\u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173

Vue.version = &#39;__VERSION__&#39;

export default Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\u6709\u4E24\u5904\u5173\u952E\uFF1A <code>initGlobalAPI(Vue)</code> \u4ECE\u8BED\u4E49\u5316\u7684\u51FD\u6570\u547D\u540D\u53EF\u77E5\u662F\u5BF9 <code>Vue</code> \u8FDB\u884C\u5168\u5C40 API \u6269\u5C55\u7684\u529F\u80FD\u51FD\u6570\u3002\u540C\u65F6\u5F15\u5BFC\u6211\u4EEC\u8FDB\u5165\u66F4\u63A5\u8FD1\u7684 <code>src/core/instance/index.js</code> \u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import { initMixin } from &#39;./init&#39;
import { stateMixin } from &#39;./state&#39;
import { renderMixin } from &#39;./render&#39;
import { eventsMixin } from &#39;./events&#39;
import { lifecycleMixin } from &#39;./lifecycle&#39;
import { warn } from &#39;../util/index&#39;

function Vue(options) {
  if (p<wbr>rocess.env.NODE_ENV !== &#39;production&#39; &amp;&amp;
    !(this instanceof Vue)
  ) {
    warn(&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;)
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64\u7EC8\u4E8E\u627E\u5230\u4E86 <code>Vue</code> \u7684\u521D\u59CB\u5316\u58F0\u660E\uFF0C\u63A5\u4E0B\u6765\u4FBF\u53EF\u4EE5\u7531\u6B64\u5F00\u59CB\u5BF9 <code>Vue</code> \u6784\u9020\u51FD\u6570\u53CA\u6574\u4F53\u529F\u80FD\u8FDB\u884C\u8FDB\u4E00\u6B65\u6DF1\u5165\u4E86\u89E3\u3002</p>`,10);function V(y,E){const s=d("RouterLink");return r(),a("div",null,[o,i("p",null,[t,u(s,{to:"/notes/node/esm.html#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8"},{default:c(()=>[m]),_:1}),b,p,f,g,h,q,j,x,_]),w])}var A=l(v,[["render",V],["__file","entry.html.vue"]]);export{A as default};
