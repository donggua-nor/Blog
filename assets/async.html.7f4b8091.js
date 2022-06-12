import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as r}from"./app.e85e7de9.js";const d={},a=r(`<h1 id="\u5F02\u6B65\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u7F16\u7A0B" aria-hidden="true">#</a> \u5F02\u6B65\u7F16\u7A0B</h1><h2 id="\u5355\u7EBF\u7A0B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u7EBF\u7A0B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u7EBF\u7A0B\u6A21\u5F0F</h2><p>JavaScript \u5F15\u64CE\u662F\u5355\u7EBF\u7A0B\u540C\u6B65\u8FDB\u884C\u7684\uFF0C\u5373\u6BCF\u6B21\u4EC5\u80FD\u5904\u7406\u4E00\u4E2A\u4E8B\u4EF6\u3002\u5F53\u5904\u7406\u591A\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u5219\u9700\u8981\u6392\u961F\u7B49\u5F85\u6267\u884C\u3002\u56E0\u6B64\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u5728\u6267\u884C\u65F6\uFF0C\u5C06\u963B\u585E\u540E\u7EED\u7684\u4E8B\u4EF6\u6267\u884C\u3002 \u8FD9\u5728\u5B9E\u9645\u7684\u6D4F\u89C8\u5668\u4EA4\u4E92\u4E2D\u5C06\u662F\u6781\u5DEE\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u6BD4\u5982\u8FDC\u53E4\u65F6\u4EE3\u5F53\u7528\u6237\u63D0\u4EA4\u4E00\u4E2A\u8868\u5355\u65F6\uFF0C\u6D4F\u89C8\u5668\u5C06\u7B49\u5F85\u8868\u5355\u63D0\u4EA4\u52A8\u4F5C\u5B8C\u6210\u624D\u80FD\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C\uFF0C\u671F\u95F4\u5BF9\u4E8E\u7528\u6237\u800C\u8A00\u6D4F\u89C8\u5668\u4E00\u76F4\u662F\u5361\u6B7B\u7684\u4E00\u4E2A\u72B6\u6001\u3002 \u540C\u65F6\u5355\u7EBF\u7A0B\u673A\u5236\u4E5F\u4E0D\u9002\u5E94\u5982\u4ECA\u591A\u6838CPU\u7684\u73AF\u5883\uFF0C\u65E0\u6CD5\u5145\u5206\u5229\u7528CPU\u8D44\u6E90\uFF0C\u6548\u7387\u4F4E\u6548\uFF0C\u7A0B\u5E8F\u8FD0\u884C\u65F6\u95F4\u957F\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u6B64\u7C7B\u95EE\u9898\uFF0CJavaScript\u5F15\u5165\u4E86<strong>\u5F02\u6B65</strong>\uFF08<em>Asynchronous</em>\uFF09\u7684\u6267\u884C\u6A21\u5F0F\uFF0C\u5982 ajax \u64CD\u4F5C\u3002\u4E86\u89E3\u5F02\u6B65\u7F16\u7A0B\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u7F16\u5199\u66F4\u52A0\u5408\u7406\u51FA\u8272\u7684JavaScript\u7A0B\u5E8F\u3002</p><h2 id="\u56DE\u8C03\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DE\u8C03\u51FD\u6570" aria-hidden="true">#</a> \u56DE\u8C03\u51FD\u6570</h2><p>\u56DE\u8C03\u51FD\u6570\u662F\u5F02\u6B65\u64CD\u4F5C\u6700\u57FA\u672C\u7684\u65B9\u6CD5\uFF0C\u4E5F\u662F\u5E94\u7528\u53CA\u5176\u5E7F\u6CDB\u7684\u5B58\u5728\u3002\u5728\u6B64\u501F\u7528 <a href="http://nodejs.cn/api/fs.html" target="_blank" rel="noopener noreferrer">Node.fs</a> \u4F5C\u4E3A\u4F8B\u5B50\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const fs = require(&quot;fs&quot;);
const { resolve } = require(&quot;path&quot;);
const dirPath = resolve(__dirname, &quot;./directory&quot;);

function errHandler(err) {
  /* handle error */
}

fs.mkdir(dirPath, (err, data) =&gt; {
  if (err) {
    errHandler(err);
    // return or not
  }
  fs.writeFile(\`\${dirPath}/demo.txt\`, &quot;Hello World!&quot;, &quot;utf8&quot;, (err, data) =&gt; {
    if (err) {
      errHandler(err);
      // return or not
    }
    fs.readFile(\`\${dirPath}/demo.txt\`, &quot;utf8&quot;, (err, data) =&gt; {
      if (err) {
        errHandler(err);
        // return or not
      }
      console.log(data);
    });

  });
});

// Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u51FA\u56DE\u8C03\u51FD\u6570\u7684\u7F3A\u70B9\u4E5F\u5F88\u660E\u663E\uFF1A</p><ul><li>\u53EA\u80FD\u6307\u5B9A\u4E00\u4E2A\u56DE\u8C03\u4EFB\u52A1\uFF0C\u5F53\u4E1A\u52A1\u590D\u6742\u65F6\uFF0C\u4E0D\u5F97\u4E0D\u5199\u51FA\u591A\u4E2A\u5D4C\u5957\u7684\u56DE\u8C03\u51FD\u6570\u800C\u9677\u5165<strong>\u56DE\u8C03\u5730\u72F1</strong>\uFF08<em>Callback Hell</em>\uFF09</li><li>\u6BCF\u4E2A\u56DE\u8C03\u4E8B\u4EF6\u4E2D\u7684\u9519\u8BEF\u5904\u7406\u90FD\u9700\u8981\u5355\u72EC\u5224\u65AD\u5904\u7406\uFF0C\u4E8B\u4EF6\u6D41\u7A0B\u63A7\u5236\u4E5F\u663E\u5F97\u590D\u6742</li><li>\u5D4C\u5957\u7684\u56DE\u8C03\u51FD\u6570\u4E0D\u4EC5\u4EE3\u7801\u53EF\u8BFB\u6027\u5DEE\uFF0C\u5176\u4EE3\u7801\u7ED3\u6784\u4E5F\u9AD8\u5EA6\u8026\u5408\u3002\u5373\u4F7F\u6211\u4EEC\u53EF\u4EE5\u5C06\u5404\u4E2A\u90E8\u5206\u5C01\u88C5\u62BD\u79BB\uFF0C\u5BF9\u4E8E\u6216\u8005\u6D41\u7A0B\u8FFD\u8E2A\u4E5F\u663E\u5F97\u5F02\u5E38\u68D8\u624B\u3002</li></ul><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2><p><strong>\u4E3A\u89E3\u51B3\u56DE\u8C03\u5730\u72F1</strong>\uFF0C\u793E\u533A\u63D0\u51FA\u5E76\u5B9E\u73B0\u4E86 <a href="https://es6.ruanyifeng.com/#docs/promise" target="_blank" rel="noopener noreferrer">Promise</a> \u65B9\u6848\uFF0C\u5E76\u5728ES6\u4E2D\u89C4\u8303\u5316\u63D0\u4F9B\u539F\u751F <code>Promise</code> \u5BF9\u8C61\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const mkdir = function(path) {
  return new Promise((resolve, reject) =&gt; {
    fs.mkdir(path, (err, data) =&gt; (err ? reject(err) : resolve(data)));
  });
};

const writeFile = function(path, msg, type = &#39;utf8&#39;) {
  return new Promise((resolve, reject) =&gt; {
    fs.writeFile(path, msg, type, (err, data) =&gt;
      err ? reject(err) : resolve(data)
    );
  });
};

const readFile = function(path, type = &#39;utf8&#39;) {
  return new Promise((resolve, reject) =&gt; {
    fs.readFile(path, type, (err, data) =&gt; (err ? reject(err) : resolve(data)));
  });
};

mkdir(dirPath)
  .then(() =&gt; writeFile(\`\${dirPath}/demo.txt\`, &#39;Hello World!&#39;))
  .catch(writeErr =&gt; errHandler(writeErr));
.then(() =&gt; readFile(\`\${dirPath}/demo.txt\`))
  .catch(readErr =&gt; errHandler(readErr));
.then((data) =&gt; console.log(data), err =&gt; errHandler(err));

// Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Promise.then</code> \u4F7F\u7528<strong>\u94FE\u5F0F\u8C03\u7528</strong>\u6280\u5DE7\u89E3\u51B3\u4E86\u56DE\u8C03\u5730\u72F1\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u9519\u8BEF\u5904\u7406\uFF0C\u6709\u5BF9\u5E94\u7684\u72B6\u6001/\u65B9\u6CD5\u5904\u7406\uFF0C\u4F7F\u5F97\u5F02\u6B65\u7F16\u7A0B\u66F4\u52A0\u6E05\u6670\u3002</p><p>\u4F46\u662F\u5927\u91CF\u7684 <code>Promise.then/catch</code> \u4F7F\u4EE3\u7801\u663E\u5F97\u5197\u4F59\uFF0C\u4E14\u5F53 <code>Promise</code> \u5904\u4E8E <code>pending</code> \u72B6\u6001\u65F6\uFF0C\u6211\u4EEC\u65E0\u6CD5\u5224\u65AD\u5F02\u6B65\u4E8B\u4EF6\u7684\u6267\u884C\u9636\u6BB5\uFF0C\u66F4\u65E0\u6CD5\u4E2D\u65AD\u5176\u6267\u884C\uFF0C\u4E0D\u5229\u7528\u63A7\u5236\u6D41\u7A0B\u3002</p><h2 id="generator-co" tabindex="-1"><a class="header-anchor" href="#generator-co" aria-hidden="true">#</a> Generator + co</h2><p>\u5728ES6\u4E2D\u4F7F\u7528 <a href="https://es6.ruanyifeng.com/#docs/generator" target="_blank" rel="noopener noreferrer">Generator</a> \u5B9E\u73B0\u4E86\u534F\u7A0B\uFF1A\u4E00\u79CD\u7C7B\u4F3C\u4E8E\u7EBF\u7A0B\uFF0C\u4F46\u4EA4\u66FF\u6267\u884C\u7684\u7A0B\u5E8F\u8FD0\u884C\u65B9\u5F0F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function* gen() {
  yield mkdir(dirPath);
  yield writeFile(\`\${dirPath}/demo.txt\`, &quot;Hello World!&quot;);
  yield readFile(\`\${dirPath}/demo.txt\`);
}

const scheduler = gen();
scheduler.next().value.catch((err) =&gt; errHandler(err));
scheduler.next().value.then(() =&gt; {
  const result = scheduler.next();
  result.value.then((res) =&gt; console.log(res));
});

// Hello World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4F7F\u7528 <code>Generator</code> \u5C01\u88C5\u6587\u4EF6\u64CD\u4F5C\u540E\uFF0C\u5176\u5185\u90E8\u5C31\u50CF\u662F\u5728\u6267\u884C\u540C\u6B65\u64CD\u4F5C\uFF0C\u5E76\u4E14 <code>Generator</code> \u603B\u662F\u8FD4\u56DE\u4E00\u4E2A <code>Iterator</code> \u5BF9\u8C61\uFF0C\u4F7F\u5F97\u6211\u4EEC\u53EF\u4EE5\u63A7\u5236\u6D41\u7A0B\u7684\u6267\u884C\u3002\u5185\u90E8\u5F02\u6B65\u64CD\u4F5C\u4ECD\u662F <code>Promise</code> \u63A5\u53E3\uFF0C\u4EA6\u4E0D\u5F71\u54CD\u6211\u4EEC\u8FDB\u884C\u9519\u8BEF\u5904\u7406\u3002</p><p>\u4E0D\u8FC7\u624B\u52A8\u5355\u6B65\u6267\u884C\u4EE5\u53CA\u5D4C\u5957\u53D6\u503C\u7684\u65B9\u5F0F\u5E76\u975E\u6240\u613F\uFF0C\u6211\u4EEC\u9700\u8981\u501F\u52A9 <a href="https://github.com/tj/co" target="_blank" rel="noopener noreferrer">co</a> \u5E93\u4E3A <code>Generator</code> \u51FD\u6570\u505A\u81EA\u52A8\u6267\u884C\u7684\u5C01\u88C5\u3002 <code>co</code> \u6A21\u5757\u7684\u539F\u7406\u5F88\u7B80\u5355\uFF0C\u5229\u7528\u9012\u5F52 + \u56DE\u8C03\u51FD\u6570\uFF08\u4F53\u73B0\u4E3A<a href="https://es6.ruanyifeng.com/#docs/generator-async#Thunk-%E5%87%BD%E6%95%B0" target="_blank" rel="noopener noreferrer">Thunk\u51FD\u6570</a>\uFF09\u6216 <code>Promise</code> \u5C01\u88C5\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5728\u5F02\u6B65\u56DE\u8C03\u4E2D\u7EE7\u7EED\u6267\u884C\u4E0B\u4E00\u6B65\u5F02\u6B65\u64CD\u4F5C\uFF0C\u76F4\u5230\u5B8C\u6210 <code>Generator</code> \u51FD\u6570\u7684\u6267\u884C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// Thunk \u51FD\u6570
function thunkLauncher(gen) {
  const g = gen();

  function next(data) {
    const res = g.next(data);
    if (res.done) {
      return res.value;
    }
    res.value(next);
  }
  next();
}

// Promise
function promiseLauncher(gen) {
  const g = gen();

  function next(data) {
    const res = g.next(data);
    if (!res.done) {
      return res.value;
    }
    res.value.then((data) =&gt; next(data));
  }
  next();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u4E8E <code>Promise</code> \u7684\u652F\u6301\u66F4\u5E7F\u6CDB\u4E14\u5B9E\u7528\u6027\u5E7F\uFF0C\u4E5F\u662F <code>co</code> \u6A21\u5757\u540E\u7EED\u91CD\u6784\u9009\u62E9\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002</p><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async / await</h2><blockquote><p>It is a stepping stone towards the async/await proposal \u2014\u2014\u2014\u2014\u2014\u2014 \u5F15\u7528\u4E8E tj/co</p></blockquote><p>\u7531 <code>Generator + co</code> \u7684\u5F02\u6B65\u64CD\u4F5C\u4E3A\u57FA\u7840\uFF0CES6\u5C0F\u7248\u672C\uFF08ES2017\uFF09\u5F15\u5165\u4E86\u65B0\u6807\u51C6 <a href="https://es6.ruanyifeng.com/#docs/async" target="_blank" rel="noopener noreferrer">async</a> \u51FD\u6570\u3002</p><p>\u5728\u5F02\u6B65\u5904\u7406\u4E0A\uFF0C <code>async</code> \u51FD\u6570\u5C31\u662F <code>Generator</code> \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\u3002 <code>async</code> \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u914D\u5408 <code>await</code> \u547D\u4EE4\uFF08 <code>Promise.then</code> \u7684\u8BED\u6CD5\u7CD6\uFF09\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>async function fileScheduler() {
  try {
    await mkdir(dirPath);
    await writeFile(\`\${dirPath}/demo.txt\`, &quot;Hello World!&quot;);
    const result = await readFile(\`\${dirPath}/demo.txt\`);
    console.log(result);
  } catch (err) {
    errHandler(err);
  }
}

(async () =&gt; await fileScheduler())();

// Hello World; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>async/await</code> \u7684\u5199\u6CD5\uFF0C\u5C31\u76F8\u5F53\u4E8E\u53EA\u5199\u4E86 <code>Generator</code> \u51FD\u6570\uFF1A <code>* =&gt; async\uFF0Cyield =&gt; await </code></p><p>\u4E14\u5305\u542B\u4E86 co \u81EA\u52A8\u6267\u884C\u5668\u7684\u673A\u5236\uFF0C\u4F7F\u5F97\u5F02\u6B65\u7F16\u7A0B\u66F4\u52A0\u65B9\u4FBF\uFF0C\u4EE3\u7801\u5C42\u9762\u5C31\u5982\u540C\u540C\u6B65\u64CD\u4F5C\u4E00\u822C\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C <code>async/await</code> \u65B9\u5F0F\u66F4\u52A0\u8BED\u4E49\u5316\uFF0C\u9664\u4E86\u4F8B\u5B50\u4E2D\u7EDF\u4E00\u5904\u7406\u9519\u8BEF\u7684\u65B9\u5F0F\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u9488\u5BF9\u67D0\u4E2A\u4E00\u6B65\u64CD\u4F5C\u8FDB\u884C\u9519\u8BEF\u5904\u7406\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>async () =&gt; await mkdir(dirPath).catch(err =&gt; errHandler(err));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),s=[a];function l(c,t){return n(),i("div",null,s)}var u=e(d,[["render",l],["__file","async.html.vue"]]);export{u as default};
