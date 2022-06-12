import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as d}from"./app.e85e7de9.js";const s={},l=d(`<h1 id="\u7F16\u8BD1\u6267\u884C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u6267\u884C\u6D41\u7A0B" aria-hidden="true">#</a> \u7F16\u8BD1\u6267\u884C\u6D41\u7A0B</h1><h2 id="\u57FA\u672C\u7F16\u8BD1\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7F16\u8BD1\u6D41\u7A0B" aria-hidden="true">#</a> \u57FA\u672C\u7F16\u8BD1\u6D41\u7A0B</h2><h3 id="\u8BCD\u6CD5\u5206\u6790-lexical-analysis" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u5206\u6790-lexical-analysis" aria-hidden="true">#</a> \u8BCD\u6CD5\u5206\u6790\uFF08Lexical Analysis\uFF09</h3><p>\u5C06\u4EE3\u7801\u89E3\u6790\u4E3A\u8BCD\u6CD5\u5355\u5143 <code>token</code> \u3002 \u4E3B\u8981\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>\u5173\u952E\u5B57\uFF1A\u4F8B\u5982 <code>var</code>\u3001<code>let</code>\u3001<code>const</code> \u7B49</li><li>\u6807\u8BC6\u7B26\uFF1A\u6CA1\u6709\u88AB\u5F15\u53F7\u62EC\u8D77\u6765\u7684\u8FDE\u7EED\u5B57\u7B26\uFF0C\u53EF\u80FD\u662F\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4E5F\u53EF\u80FD\u662F <code>if</code>\u3001<code>else</code> \u8FD9\u4E9B\u5173\u952E\u5B57\uFF0C\u53C8\u6216\u8005\u662F <code>true</code>\u3001<code>false</code> \u8FD9\u4E9B\u5185\u7F6E\u5E38\u91CF</li><li>\u8FD0\u7B97\u7B26\uFF1A <code>+</code>\u3001<code>-</code>\u3001 <code>\\</code>\u3001<code>/</code> \u7B49</li><li>\u6570\u5B57\uFF1A\u50CF\u5341\u516D\u8FDB\u5236\uFF0C\u5341\u8FDB\u5236\uFF0C\u516B\u8FDB\u5236\u4EE5\u53CA\u79D1\u5B66\u8868\u8FBE\u5F0F\u7B49\u8BED\u6CD5</li><li>\u5B57\u7B26\u4E32\uFF1A\u56E0\u4E3A\u5BF9\u8BA1\u7B97\u673A\u800C\u8A00\uFF0C\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u4F1A\u53C2\u4E0E\u8BA1\u7B97\u6216\u663E\u793A</li><li>\u7A7A\u683C\uFF1A\u8FDE\u7EED\u7684\u7A7A\u683C\uFF0C\u6362\u884C\uFF0C\u7F29\u8FDB\u7B49</li><li>\u6CE8\u91CA\uFF1A\u884C\u6CE8\u91CA\u6216\u5757\u6CE8\u91CA\u90FD\u662F\u4E00\u4E2A\u4E0D\u53EF\u62C6\u5206\u7684\u6700\u5C0F\u8BED\u6CD5\u5355\u5143</li><li>\u5176\u4ED6\uFF1A\u5927\u62EC\u53F7\u3001\u5C0F\u62EC\u53F7\u3001\u5206\u53F7\u3001\u5192\u53F7\u7B49</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// source code
var name = &#39;donggua&#39;

// compile into Tokens
[{
    type: &#39;Keyword&#39;,
    value: &#39;var&#39;
  },
  {
    type: &#39;Identifier&#39;,
    value: &#39;name&#39;
  },
  {
    type: &#39;Punctuator&#39;,
    value: &#39;=&#39;
  },
  {
    type: &#39;String&#39;,
    value: &quot;&#39;donggua&#39;&quot;
  },
  {
    type: &#39;Punctuator&#39;,
    value: &#39;;&#39;
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BED\u6CD5\u5206\u6790-synatax-analysis" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u5206\u6790-synatax-analysis" aria-hidden="true">#</a> \u8BED\u6CD5\u5206\u6790\uFF08Synatax Analysis\uFF09</h3><p>\u5C06\u8BCD\u6CD5\u5206\u6790\u83B7\u5F97\u7684 token\uFF0C\u7ED3\u5408\u8BED\u53E5\u8868\u8FBE\u5F0F\uFF0C\u7EC4\u5408\u5EFA\u7ACB<strong>\u62BD\u8C61\u8BED\u6CD5\u6811</strong></p><p>:::tip <strong>\u62BD\u8C61\u8BED\u6CD5\u6811</strong>\uFF08 <em>Abstract Synatax Tree</em>, <strong>AST</strong> \uFF09 \u5E38\u7528\u4E8E\uFF1A</p><ul><li><code>ESLint</code> \u7B49\u4EE3\u7801\u98CE\u683C\u4E0E\u8BED\u6CD5\u68C0\u67E5</li><li><code>babel</code> \u7B49\u5DE5\u5177\u8FDB\u884C\u4EE3\u7801\u8F6C\u6362</li><li><code>IDE</code> \u7684\u4EE3\u7801\u683C\u5F0F\u5316\u3001\u9AD8\u4EAE\u4E0E\u81EA\u52A8\u8865\u5168\u7B49</li><li><code>UgligyJS</code> \u4EE3\u7801\u538B\u7F29\u6DF7\u6DC6\u7B49 :::</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// AST
{
  &quot;type&quot;: &quot;Program&quot;,
  &quot;body&quot;: [{
    &quot;type&quot;: &quot;VariableDeclaration&quot;,
    &quot;declarations&quot;: [{
      &quot;type&quot;: &quot;VariableDeclarator&quot;,
      &quot;id&quot;: {
        &quot;type&quot;: &quot;Identifier&quot;,
        &quot;name&quot;: &quot;name&quot;
      },
      &quot;init&quot;: {
        &quot;type&quot;: &quot;Literal&quot;,
        &quot;value&quot;: &quot;donggua&quot;,
        &quot;raw&quot;: &quot;&#39;donggua&#39;&quot;
      }
    }],
    &quot;kind&quot;: &quot;var&quot;
  }],
  &quot;sourceType&quot;: &quot;script&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AST</strong> \u4E2D\u4EE3\u7801\u7ED3\u6784\u6E05\u6670\uFF0C\u4E0A\u4F8B\u4E2D\uFF0C\u53D8\u91CF\u58F0\u660E\u8BED\u53E5 <em>VariableDeclaration</em>\uFF0C\u53D8\u91CF\u58F0\u660E\u5668 <em>VariableDeclarator</em> \u4F7F\u7528\u7684\u662F <code>var</code> \uFF0C\u5E76\u5728\u521D\u59CB\u5316 <code>init</code> \u65F6\u63D0\u4F9B\u5B57\u9762\u91CF <em>Literal</em> \u503C\u4E3A <code>donggua</code></p><h3 id="\u4EE3\u7801\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u751F\u6210" aria-hidden="true">#</a> \u4EE3\u7801\u751F\u6210</h3><p>\u83B7\u53D6 AST \u5E76\u5C06\u5176\u8F6C\u5316\u6210\u5E73\u53F0\u673A\u5668\u53EF\u6267\u884C\u7684\u4F4E\u7EA7\u4EE3\u7801</p><h2 id="\u6267\u884C\u4E0A\u4E0B\u6587\u4E0E\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u4E0E\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u4E0E\u4F5C\u7528\u57DF</h2><blockquote><p><em>Execution Contect &amp; Stack</em></p></blockquote><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u5728 JavaScript \u89E3\u6790\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0CJS \u5F15\u64CE\u5E76\u4E0D\u662F\u771F\u6B63\u7684\u9010\u884C\u89E3\u6790\uFF0C\u800C\u662F\u6839\u636E\u4EE3\u7801\u5212\u5206\u6210\u5BF9\u5E94\u7684\u6267\u884C\u73AF\u5883\u5E76\u4F9D\u6B64\u6267\u884C :::tip JS \u5F15\u64CE\u6709 <em>Chrome</em> \u7684 <a href="https://v8.dev/" target="_blank" rel="noopener noreferrer"><code>V8</code></a>\u3001 <em>Firefox</em> \u7684 <code>SpiderMonkey</code> \u7B49\u5404\u6D4F\u89C8\u5668\u5382\u5546\u57FA\u4E8E <code>ECMAScript</code> \u6807\u51C6\u5B9E\u73B0\u3002\u4F46\u90E8\u5206\u5B9E\u73B0\u4E0A\u4EA6\u5B58\u5728\u7EC6\u8282\u4E0A\u7684\u5DEE\u5F02\uFF0C\u5982 <code>EventLoop</code> \u6267\u884C\u987A\u5E8F\u53EF\u80FD\u5E76\u4E0D\u4E00\u81F4\u3002\u7B14\u8005\u5B9E\u8DF5\u4E0A\u4EE5 <code>Chrome</code> \u4E3A\u4E3B\u3002 :::</p><h3 id="\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587</h3><p>JS \u4EE3\u7801\u7684\u6267\u884C\u73AF\u5883\u79F0\u4E3A <strong>\u6267\u884C\u4E0A\u4E0B\u6587</strong> (<em>Execution Contect</em>)\uFF0C\u4E00\u822C\u5206\u4E3A\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>\u5168\u5C40\u4EE3\u7801</li><li>\u51FD\u6570\u4EE3\u7801</li><li>Eval \u4EE3\u7801</li></ul><p>:::warning <a href="https://developer.mozilla.org/zh-CN/docs/orphaned/Web/JavaScript/Reference/Global_Objects/eval#don.27t_use_eval.21" target="_blank" rel="noopener noreferrer"><code>eval</code></a> \u901A\u8FC7\u8C03\u7528 JS \u89E3\u91CA\u5668\u6267\u884C\u4EE3\u7801\uFF0C\u62E5\u6709\u8C03\u7528\u8005\u6743\u9650\uFF0C\u5BB9\u6613\u5BFC\u81F4\u7F51\u7AD9\u906D\u53D7\u6076\u610F\u653B\u51FB\uFF0C\u5E94\u907F\u514D\u4F7F\u7528 :::</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// ctx.js
// Global context
function fn() {
  // local context of funtion fn
  function foo() {
    // local context of funtion foo
  }

  function bar() {
    // local context of funtion bar
  }
  foo();
}
fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u4E0A\u4E0B\u6587\u5806\u6808" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587\u5806\u6808" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587\u5806\u6808</h3><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u51FD\u6570\u7684\u6570\u91CF\u662F\u4EFB\u610F\u591A\u7684\u3002\u800C JavaScript \u89E3\u91CA\u5668\u662F\u5355\u7EBF\u7A0B\u540C\u6B65\u8FDB\u884C\u7684\uFF0C\u6BCF\u6B21\u4EC5\u80FD\u6267\u884C\u5904\u7406\u4E00\u4E2A\u4E0A\u4E0B\u6587\u3002 \u56E0\u6B64 JS \u4E2D\u901A\u8FC7 <strong>\u5806\u6808</strong> \u62BD\u8C61\u5316 <strong>\u6267\u884C\u4E0A\u4E0B\u6587\u5806\u6808</strong> \u4EE5\u5904\u7406\u4EE3\u7801\u5757\u6267\u884C</p><p>\u901A\u8FC7\u5806\u6808\u5BF9\u4E0A\u8FF0\u4F8B\u5B50\u8FDB\u884C\u62BD\u8C61\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// abstract stack for ctx.js
// \u7A0B\u5E8F\u6267\u884C\u65F6\uFF0C\u521D\u59CB\u5316\u5C06\u63A8\u5165\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587
const ECStack = [GlobalExecutionContext];

// fn() \u51FD\u6570 fn \u6267\u884C\uFF0C\u63A8\u5165\u6808\u4E2D
ECStack.push(fnExecutionContext);
// foo() \u51FD\u6570 foo \u6267\u884C\uFF0C\u63A8\u5165\u6808\u4E2D
ECStack.push(fooExecutionContext);
// \u51FD\u6570 bar \u5E76\u6CA1\u6709\u6267\u884C\uFF0C\u4E0D\u4F1A\u63A8\u5165\u6808\u4E2D

// foo() \u6267\u884C\u5B8C\u6BD5\u540E\u81EA\u52A8\u63A8\u51FA\u5806\u6808
ECStack.pop();
// fn() \u6267\u884C\u5B8C\u6BD5\u540E\u81EA\u52A8\u63A8\u51FA\u5806\u6808
ECStack.pop();
// ECStack \u7684 GLobalExecutionContext \u5C06\u4FDD\u7559\u76F4\u5230\u7A0B\u5E8F\u7ED3\u675F\u8FD0\u884C\uFF0C\u6BD4\u5982\u6D4F\u89C8\u5668\u5173\u95ED/\u5F53\u524D\u6807\u7B7E\u9875\u5173\u95ED
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u501F\u52A9\u6D4F\u89C8\u5668\u8C03\u8BD5\u5DE5\u5177\u8FDB\u884C\u76F4\u89C2\u7684 <strong>debugger</strong></p><blockquote><p><code>chrome == &gt; Source === &gt; Call Stack</code></p></blockquote><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/execution_context_example.gif" alt="execution_context_example"></p><h3 id="\u6DF1\u5165\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u6DF1\u5165\u6267\u884C\u4E0A\u4E0B\u6587</h3><p>\u5F53\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u90FD\u4F1A\u7ECF\u5386\u4E24\u4E2A\u9636\u6BB5\uFF1A</p><h4 id="\u521B\u5EFA\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9636\u6BB5" aria-hidden="true">#</a> \u521B\u5EFA\u9636\u6BB5</h4><h5 id="\u521D\u59CB\u5316\u4F5C\u7528\u57DF\u94FE-scope-chain" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4F5C\u7528\u57DF\u94FE-scope-chain" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4F5C\u7528\u57DF\u94FE\uFF08<em>Scope Chain</em>\uFF09</h5><p>\u5728 JavaScript \u4E2D\uFF0C\u51B3\u5B9A\u53D8\u91CF\u3001\u51FD\u6570\u548C\u5BF9\u8C61\u7B49\u5C5E\u6027\u7684\u53EF\u8BBF\u95EE\u6027\u7684\u533A\u57DF\u79F0\u4E3A <strong>\u4F5C\u7528\u57DF</strong>(<em>Scope</em>)\uFF0C\u4F5C\u7528\u57DF\u8D77\u5230\u4E86\u6570\u636E\u9694\u79BB\u7684\u4F5C\u7528\uFF0C\u975E\u5D4C\u5957\u7684\u4F5C\u7528\u57DF\u662F\u72EC\u7ACB\u4E0D\u51B2\u7A81\u7684</p><p>:::tip JavaScript \u4F7F\u7528<strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF</strong>(<em>lexical scoping</em>)\uFF0C\u53C8\u79F0<strong>\u9759\u6001\u4F5C\u7528\u57DF</strong>(<em>static scoping</em>) \u5728\u51FD\u6570\u5B9A\u4E49\u65F6\u5373\u51B3\u5B9A\u4E86\u4F5C\u7528\u57DF\u3002</p><p>\u4E0E\u4E4B\u76F8\u5BF9\u7684\u662F<strong>\u52A8\u6001\u4F5C\u7528\u57DF</strong>(<em>dynamic scoping</em>), \u5728\u51FD\u6570\u8FD0\u884C\u65F6\u624D\u51B3\u5B9A\u4F5C\u7528\u57DF</p><p>\u7B80\u5355\u6765\u8BF4\uFF0C\u5355\u4ECE\u4EE3\u7801\u5C42\u9762\u4E0A\u6211\u4EEC\u5C31\u80FD\u786E\u5B9A JavaScript \u4E2D\u51FD\u6570\u7684\u4F5C\u7528\u57DF :::</p><p>\u5728\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u4F1A\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61\u7684\u4E00\u4E2A<strong>\u4F5C\u7528\u57DF\u94FE</strong>(<em>Scope Chain</em>)\u3002\u8FD9\u4E2A\u4F5C\u7528\u57DF\u94FE\u51B3\u5B9A\u4E86\u5404\u7EA7\u4E0A\u4E0B\u6587\u4E2D\u7684\u4EE3\u7801\u5728\u8BBF\u95EE\u53D8\u91CF\u548C\u51FD\u6570\u65F6\u7684\u987A\u5E8F\u4E0E\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE3\u7801\u6B63\u5728\u6267\u884C\u7684\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u5BF9\u8C61\u59CB\u7EC8\u4F4D\u4E8E\u4F5C\u7528\u57DF\u94FE\u7684\u6700\u524D\u7AEF\u3002</p><p>\u67E5\u627E\u53D8\u91CF\u65F6\uFF0C\u4ECE\u4F5C\u7528\u57DF\u94FE\u7684\u6700\u524D\u7AEF(\u5373\u5F53\u524D\u4E0A\u4E0B\u6587)\u67E5\u627E, \u7136\u540E\u9010\u7EA7\u5411\u540E\u67E5\u627E\u7236\u7EA7\u4E0A\u4E0B\u6587\uFF0C\u76F4\u5230\u6700\u9876\u5C42\u7684\u5168\u5C40\u4E0A\u4E0B\u6587\u3002\u82E5\u6700\u7EC8\u627E\u4E0D\u5230\uFF0C\u901A\u5E38\u629B\u51FA\u9519\u8BEF <code>Reference Error</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// Global Scope
var val = 1;

function foo() {
  // Local Scope #foo
  console.log(val);

  function bar() {
    // Local Scope #bar
    val = 2;
    console.log(val);
  }
  bar();
}
foo();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/scope_chain_example.jpg" alt="scope_chain_example"></p><h5 id="\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u53D8\u91CF\u5BF9\u8C61</h5><p><strong>\u53D8\u91CF\u5BF9\u8C61</strong>\uFF08<em>Variable Object</em>\uFF0C<strong>AO</strong>\uFF09\u662F\u4E0E\u6267\u884C\u4E0A\u4E0B\u6587\u76F8\u5173\u7684\u6570\u636E\u5BF9\u8C61\uFF0C\u5176\u4FDD\u5B58\u4E86\u4E0A\u4E0B\u6587\u4E2D\u6240\u5B9A\u4E49\u7684\u53D8\u91CF\u548C\u51FD\u6570\u3002\u5E76\u4E14\u53EA\u6709\u8FDB\u5165\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u53D8\u91CF\u5BF9\u8C61\u624D\u88AB\u6FC0\u6D3B\uFF0C\u5176\u5404\u79CD\u5C5E\u6027\u624D\u80FD\u88AB\u8BBF\u95EE\u3002</p><blockquote><p>\u53D8\u91CF\u5BF9\u8C61\u662F ECMAScript \u89C4\u8303\u672F\u8BED, \u53EA\u6709\u89E3\u6790\u5668\u5728\u5904\u7406\u6570\u636E\u65F6\u624D\u4F1A\u4F7F\u7528\u5B83\u3002</p></blockquote><p>:::tip</p><ol><li>\u5728 web \u6D4F\u89C8\u5668\u7684\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\uFF0C <code>window</code> \u5BF9\u8C61\u88AB\u8BA4\u4E3A\u662F<strong>\u5168\u5C40\u5BF9\u8C61</strong>\uFF08<em>Global Object</em>\uFF0C<strong>GO</strong>\uFF09\uFF0C\u56E0\u6B64\u6240\u6709\u5168\u5C40\u53D8\u91CF\u548C\u51FD\u6570\u90FD\u662F\u4F5C\u4E3A <code>window</code> \u5BF9\u8C61\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5\u3002\u5373\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5168\u5C40\u5BF9\u8C61\u9884\u88AB\u5B9A\u4E49\u4E3A\u6D3B\u52A8\u5BF9\u8C61\uFF0C\u4E14\u901A\u8FC7 <code>window</code> \u5C5E\u6027\u6307\u5411\u5176\u81EA\u8EAB\uFF1A</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>this === window; // true
window.window === window; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5728\u51FD\u6570\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u521D\u59CB\u5316\u65F6\u5C06\u521B\u5EFA\u53EA\u5305\u62EC <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments" target="_blank" rel="noopener noreferrer">arguments</a> \u5BF9\u8C61\u7684<strong>\u6D3B\u52A8\u5BF9\u8C61</strong>\uFF08<em>Activation Object</em>\uFF0C<strong>AO</strong>\uFF09\u5E76\u5C06\u5176\u4F5C\u4E3A\u53D8\u91CF\u5BF9\u8C61</li></ol><p>:::</p><h5 id="\u626B\u63CF\u5206\u6790\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u626B\u63CF\u5206\u6790\u4EE3\u7801" aria-hidden="true">#</a> \u626B\u63CF\u5206\u6790\u4EE3\u7801</h5><ol><li>\u5148\u5904\u7406\u51FD\u6570\u58F0\u660E\uFF0C\u4F7F\u7528\u51FD\u6570\u540D\u5728\u6D3B\u52A8\u5BF9\u8C61\u4E2D\u521B\u5EFA\u5C5E\u6027\uFF0C\u5E76\u5F15\u7528\u6307\u5411\u8BE5\u51FD\u6570\u3002\u82E5\u5B58\u5728\u76F8\u540C\u7684\u51FD\u6570\u540D\uFF0C\u5B8C\u5168\u66FF\u6362\u4E4B\u3002</li><li>\u518D\u5904\u7406\u53D8\u91CF\u58F0\u660E\uFF0C\u4F7F\u7528\u53D8\u91CF\u540D\u5728\u6D3B\u52A8\u5BF9\u8C61\u4E2D\u521B\u5EFA\u5C5E\u6027\uFF0C\u5E76\u521D\u59CB\u5316\u503C\u4E3A <code>undefined</code>\u3002\u82E5\u5B58\u5728\u76F8\u540C\u7684\u53D8\u91CF\u540D\uFF0C\u5219\u8DF3\u8FC7\u3002</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// example
function foo(a) {
  var b = 1;

  function fn() {};
  var anonymous = function() {}; // \u58F0\u660E\u53D8\u91CF\u4E14\u6307\u5411\u533F\u540D\u51FD\u6570
  b = 2;
}
context(1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// abstract example
fooExecutionContext = {
  ScopeChain: {
    ...
  },
  ActivationObject: {
    arguments: {
      1: 3,
      length: 1
    },
    a: 1,
    b: undefined,
    fn: reference to fn(), // \u5BF9\u51FD\u6570fn\u7684\u5F15\u7528
    anonymous: undefined
  },
  this: {
    ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u786E\u5B9A-this-\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u786E\u5B9A-this-\u7684\u503C" aria-hidden="true">#</a> \u786E\u5B9A this \u7684\u503C</h5><ul><li><p>\u5728\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\uFF0Cthis \u6307\u5411\u5168\u5C40\u5BF9\u8C61\uFF0C\u5177\u4F53\u503C\u7531\u5176\u5BBF\u4E3B\u73AF\u5883\u51B3\u5B9A</p><p>\u5728 web \u6D4F\u89C8\u5668\u4E2D\uFF0C\u9ED8\u8BA4\u4E3A\u975E\u4E25\u683C\u6A21\u5F0F\uFF0C\u5176\u6307\u5411 <code>window</code></p><p>\u5728 <code>ECMAScript</code> \u89C4\u8303\u4E2D\uFF0C\u9ED8\u8BA4\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C <strong>this</strong> \u7684\u503C\u4E3A <code>undefined</code></p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {
  &#39;use strict&#39;;
  console.log(this);
}
fn(); // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u51FD\u6570\u4E2D\uFF0C this \u59CB\u7EC8\u6307\u5411\u8C03\u7528\u51FD\u6570\u7684\u5BF9\u8C61\uFF08 \u8FD0\u884C\u65F6\u7ED1\u5B9A\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {
  console.log(this);
}
const obj = {
  fn
};

fn(); // window - \u76F8\u5F53\u4E8E window.fn(); 
obj.fn(); // obj
fn.call(obj); // obj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ES6 \u7BAD\u5934\u51FD\u6570\u4E2D\uFF0C\u6CA1\u6709\u81EA\u8EAB\u7684 <code>this</code> \u7ED1\u5B9A\uFF0C\u800C\u662F\u7EE7\u627F\u5176\u6240\u5728\u4E0A\u4E0B\u6587\u7684 <code>this</code> \u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {
  var a = 2;
  setTimeout(() =&gt; {
    console.log(this.a);
  }, 0)
}
var a = 1;
fn(); // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6FC0\u6D3B-\u6267\u884C\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6FC0\u6D3B-\u6267\u884C\u9636\u6BB5" aria-hidden="true">#</a> \u6FC0\u6D3B/\u6267\u884C\u9636\u6BB5</h4><ul><li>\u5728\u4E0A\u4E0B\u6587\u4E2D\u9010\u884C\u6267\u884C\u4EE3\u7801\u4E3A\u53D8\u91CF/\u51FD\u6570\u5E76\u8D4B\u503C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>fooExecutionContext = {
  ScopeChain: {
    ...
  },
  ActivationObject: {
    arguments: {
      1: 3,
      length: 1
    },
    a: 1,
    b: 2,
    fn: reference to fn(), // \u5BF9\u51FD\u6570fn\u7684\u5F15\u7528
    anonymous: reference to FunctionExpression // \u5BF9\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u5F15\u7528
  },
  this: {
    ...
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5E94\u7528\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u62D3\u5C55" aria-hidden="true">#</a> \u5E94\u7528\u62D3\u5C55</h3><h4 id="\u53D8\u91CF\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u63D0\u5347" aria-hidden="true">#</a> \u53D8\u91CF\u63D0\u5347</h4><p>\u901A\u8FC7\u4E86\u89E3\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u7406\u89E3 <code>var</code> \u53CA <code>function</code> \u58F0\u660E\u64CD\u4F5C\u7684\u53D8\u91CF\u63D0\u5347\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(typeof foo);

function foo() {};
var foo = 1;

console.log(typeof foo);

// \u6253\u5370\u7ED3\u679C\uFF1A
// function
// number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u6D41\u7A0B\u5982\u4E0B\uFF1A</p><ol><li>\u8FDB\u5165\u5168\u5C40\u4E0A\u4E0B\u6587</li><li>\u521D\u59CB\u5316\u53D8\u91CF\u5BF9\u8C61</li></ol><ul><li>\u521B\u5EFA\u9636\u6BB5</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// line 3\uFF1A 
// \u58F0\u660E\u53D8\u91CF foo \u5E76\u6307\u5411\u51FD\u6570 foo()
VO = {
  foo: reference to foo()
}

// line 4\uFF1A \`var foo = 1;\`
// \u53D8\u91CF\u58F0\u660E\uFF0C\u53D8\u91CF\u540D\u5DF2\u5B58\u5728\uFF0C\u8DF3\u8FC7\u5904\u7406
VO = {
  foo: reference to foo()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6267\u884C\u9636\u6BB5\uFF0C\u8FB9\u8D4B\u503C\u8FB9\u6267\u884C</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  // line 1\uFF1A\`console.log(typeof foo);\`
  // \u6B64\u65F6 foo \u662F\u51FD\u6570\u6307\u9488
  log: function

  // line 4\uFF1A\`var foo = 1;\`
  // \u53D8\u91CF\u8D4B\u503C\uFF0C\u5C06 foo \u8D4B\u503C\u4E3A 1
  VO = {
    foo: 1
  }

  // line 6
  log: number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u53D8\u91CF\u63D0\u5347\u53EA\u6709\u58F0\u660E\u63D0\u5347\uFF0C\u4E14\u4EC5\u63D0\u5347\u5230\u5F53\u524D\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u6700\u9876\u90E8 :::</p><h4 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let / const</h4><p>\u5728 ES6 \u4E4B\u524D\uFF0CJS \u4E2D\u58F0\u660E\u53D8\u91CF\u53EA\u6709 <code>var</code> \u548C <code>function</code> \u4E24\u79CD\u5F62\u5F0F\uFF0C\u5E76\u4E14\u76F8\u5BF9\u5176\u4ED6\u8BED\u8A00\u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u53EA\u6709\u5168\u5C40/\u51FD\u6570\u4F5C\u7528\u57DF\u3002\u8FD9\u5BFC\u81F4\u4E86\u4E00\u4E9B\u4E0D\u5408\u7406\u7684\u73B0\u8C61\uFF1A</p><ul><li>\u5728\u53D8\u91CF\u58F0\u660E\u524D\u4F7F\u7528\u53D8\u91CF\u4E0D\u4F1A\u62A5\u9519</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(a); // undefined
var a = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F5C\u7528\u57DF\u5185\u5916\u53D8\u91CF\u6570\u636E\u51B2\u7A81</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var a = 1;

function fn() {
  if (false) {
    var a = 2; // \u58F0\u660E\u53D8\u91CF\u63D0\u5347\uFF0C\u800C\u8D4B\u503C\u64CD\u4F5C\u4E0D\u4F1A\u88AB\u6267\u884C
  }
  // \u53D8\u91CF\u63D0\u5347\u4EC5\u63D0\u5347\u5230\u5F53\u524D\u6267\u884C\u4E0A\u4E0B\u6587
  // \u6B64\u65F6 fn \u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u6D3B\u52A8\u5BF9\u8C61\u5B58\u5728\u672A\u8D4B\u503C\u7684 a \u53D8\u91CF
  // fn Context =&gt; AO = { a: undefined } 
  console.log(a);
}
fn(); // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E94\u5C5E\u4E8E\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u6CC4\u6F0F\u4E3A\u5168\u5C40\u53D8\u91CF</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>for (var i = 0; i &lt; 3; i++) {
  console.log(&#39;i in for&#39;, i);
}
console.log(i); // 3

// \u6CA1\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u76F8\u5F53\u4E8E
var i;
for (i = 0; i &lt; 3; i++) {
  console.log(&#39;i in for&#39;, i);
}
console.log(i); // 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 ES6 \u4E2D\u65B0\u589E\u4E86 <code>let</code> \u4E0E <code>const</code> \u7528\u4E8E\u58F0\u660E\u53D8\u91CF\uFF0C\u5E76\u6709\u4EE5\u4E0B<a href="https://262.ecma-international.org/6.0/#sec-let-and-const-declarations" target="_blank" rel="noopener noreferrer">\u6807\u51C6</a>:</p><p><em>The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable\u2019s LexicalBinding is evaluated</em></p><blockquote><p>\u5728\u5B9E\u4F8B\u5316\u53D8\u91CF\u65F6\uFF0C\u5305\u542B\u53D8\u91CF\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5C06\u521B\u5EFA\u53D8\u91CF\uFF0C\u4F46\u5728\u5177\u4F53\u58F0\u660E\u524D\u4E0D\u5141\u8BB8\u8BBF\u95EE\u4F7F\u7528</p></blockquote><p>\u8BE5\u6807\u51C6\u6307\u660E\u4E24\u70B9\u5185\u5BB9\uFF1A</p><ul><li><code>let</code>\u3001<code>const</code> \u58F0\u660E\u4ECD\u5B58\u5728\u53D8\u91CF\u63D0\u5347</li><li><code>let</code>\u3001<code>const</code> \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5FC5\u987B\u5148\u58F0\u660E\u518D\u4F7F\u7528\uFF0C\u5426\u5219\u5C06\u629B\u51FA\u9519\u8BEF <code>ReferenceError</code></li></ul><p>\u5176\u4E2D\uFF0C\u5728 <code>let</code> \u3001 <code>const</code> \u6240\u5728\u4F5C\u7528\u57DF\u76F4\u5230\u5176\u58F0\u660E\u8BED\u53E5\u524D\u7684\u533A\u57DF\uFF0C\u5728\u8BED\u6CD5\u4E0A\u79F0\u4E3A<strong>\u6682\u65F6\u6027\u6B7B\u533A</strong>\uFF08<em>Temporal Dead Zone</em>, \u7B80\u79F0<strong>TDZ</strong>\uFF09 \u7ED3\u5408\u4F8B\u5B50\u7406\u89E3\u4E0B\u4E0A\u8FF0\u5185\u5BB9\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console.log(a);
let a; // Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u5728\u58F0\u660E\u524D\u4F7F\u7528\u53D8\u91CF\uFF0C\u62A5\u9519</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    let a = 1;

    function fn() {
      console.log(a); // ReferenceError: Cannot access &#39;a&#39; before initialization
      let a = 2;
    }
    fn();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5982\u679C\u4E0D\u5B58\u5728\u53D8\u91CF\u63D0\u5347\uFF0C\u90A3\u4E48\u6267\u884C\u51FD\u6570 <code>fn</code> \u5E94\u8BE5\u65F6\u6253\u5370\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D <code>a = 1</code> \u800C\u4E0D\u662F\u62A5\u9519</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>for (let i = 0; i &lt; 3; i++) {
  console.log(&#39;i in for&#39;, i);
}
console.log(i); // Uncaught ReferenceError: i is not defined 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>let</code> \u58F0\u660E\u7684\u53D8\u91CF\u4EC5\u6240\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u6709\u6548\uFF0C\u4E0D\u4F1A\u63D0\u5347\u5230\u5168\u5C40\u4E0A :::tip <code>const</code> \u58F0\u660E\u7684\u53D8\u91CF\u5E76\u975E\u503C\u4E0D\u53EF\u6539\u53D8\uFF0C\u800C\u662F\u53D8\u91CF\u6307\u5411\u7684\u90A3\u4E2A\u5185\u5B58\u5730\u5740\u6240\u4FDD\u5B58\u7684\u6570\u636E\u4E0D\u5F97\u6539\u52A8 :::</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const a = 1;
a = 2; // Uncaught TypeError: Assignment to constant variable
const obj = {
  a: 1
};
obj.a = 2;
obj; // { a: 2 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h4><p>\u4E86\u89E3\u4E86 \u4F5C\u7528\u57DF \u4E0E \u4F5C\u7528\u57DF\u94FE\uFF0C\u6211\u4EEC\u77E5\u9053\u53D8\u91CF\u5B58\u5728\u4E8E\u4E0A\u4E0B\u6587\u7684\u4F5C\u7528\u57DF\u4E2D\uFF0C\u5F53\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\u79BB\u5F00\u6267\u884C\u4E0A\u4E0B\u6587\u65F6\uFF0C\u8BE5\u4F5C\u7528\u57DF\u5C06\u4E0D\u518D\u5B58\u5728\uFF0C\u7406\u8BBA\u4E0A\u4E5F\u4E0D\u80FD\u518D\u8BBF\u95EE\u5176\u4E2D\u7684\u53D8\u91CF\u3002\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {
  var a = 1;
  console.log(a); // 1
}
fn();
console.log(a); // VM38:5 Uncaught ReferenceError: a is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800C\u5B9E\u9645\u4E0A\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u6709\u4E9B\u65F6\u5019\u5E76\u4E0D\u4E00\u6837\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function fn() {
  var a = 1;

  function log() {
    console.log(a);
  }
  return log;
}

var demo = fn();
demo(); // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5C31\u6210\u529F\u6253\u5370\u51FA\u4E86\u51FD\u6570 <code>fn</code> \u4E2D\u53D8\u91CF <code>a</code> \u7684\u503C\u3002</p><p>\u539F\u56E0\u662F\u6211\u4EEC\u901A\u8FC7\u5728\u51FD\u6570 <code>fn</code> \u5185\u90E8\u5D4C\u5957\u4F7F\u7528 <code>log</code> \u51FD\u6570\uFF0C<strong>\u4FDD\u7559\u4E86\u5BF9\u5176\u7236\u7EA7\u4F5C\u7528\u57DF\u7684\u5F15\u7528</strong>\uFF0C\u5373\u95ED\u5305\u64CD\u4F5C\u3002</p><hr><p><strong>\u95ED\u5305\u7684\u5E94\u7528</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>for (var i = 1; i &lt;= 5; i++) {
  setTimeout(function() {
    console.log(i)
  }, 0)
}
// (5)6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u5728\u6D4F\u89C8\u5668 <strong>EventLoops</strong> \u673A\u5236\u4E2D\uFF0C <code>setTimeout(fn, 0)</code> \u610F\u4E3A\uFF1A</p><p>\u5F53\u4E3B\u7EBF\u7A0B\u6267\u884C\u6808\u5185\u4E3A\u7A7A\u65F6\uFF0C\u5C3D\u5FEB\u6267\u884C\u56DE\u8C03\u51FD\u6570 <code>fn</code> \uFF0C\u800C\u975E\u7B80\u5355\u76840\u6BEB\u79D2\u5EF6\u8FDF\u540E\u6267\u884C</p><p>::: \u4E0A\u4F8B\u4E2D\uFF0C\u7B2C\u4E00\u8F6E\u4E3B\u7EBF\u7A0B\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u5168\u5C40\u4E0A\u4E0B\u6587\u4E0B <code>i = 6</code> \uFF0C\u6B64\u65F6\u518D\u4F9D\u6B21\u6267\u884C <code>setTimeout</code> \u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u6240\u4EE5\u6253\u5370\u7ED3\u679C\u90FD\u662F <code>6</code> \u3002</p><p>\u4E3A\u89E3\u51B3\u8FD9\u7C7B\u95EE\u9898\uFF0C\u53EF\u901A\u8FC7\u521B\u5EFA\u95ED\u5305\u51FD\u6570\uFF0C\u4EE5<strong>\u7ACB\u5373\u6267\u884C\u51FD\u6570\uFF08IIFE\uFF09</strong> \u4E3A\u7ECF\u5178\u793A\u4F8B\uFF0C\u5C06\u6BCF\u6B21\u4E8B\u4EF6\u4E4B\u884C\u540E\u53D8\u91CF <code>i</code> \u7684\u503C\u4FDD\u7559\u5230\u5B9A\u65F6\u5668\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u95ED\u5305 - IIFE
for (var i = 1; i &lt;= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j)
    }, 0)
  })(i)
}

// 1 2 3 4 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7BAD\u5934\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7BAD\u5934\u51FD\u6570" aria-hidden="true">#</a> \u7BAD\u5934\u51FD\u6570</h4><p>ES6 \u5BF9\u4E8E\u51FD\u6570\u6269\u5C55\u65B0\u589E\u4E86\u7BAD\u5934\u51FD\u6570 <code>() =&gt;</code> \uFF0C\u7B80\u5316\u4E86\u51FD\u6570\u8868\u8FBE\u5F0F\u548C\u56DE\u8C03\u51FD\u6570\u7684\u4E66\u5199\u3002 \u4F46\u9700\u8981\u7559\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>\u6CA1\u6709\u81EA\u8EAB\u7684 <code>this</code> \u7ED1\u5B9A\uFF0C\u800C\u662F\u7EE7\u627F\u5176\u6240\u5728\u4E0A\u4E0B\u6587\u7684 <code>this</code> \u503C</li><li>\u6CA1\u6709\u81EA\u8EAB\u7684 <code>this</code> \u7ED1\u5B9A\uFF0C \u56E0\u6B64\u4E0D\u80FD\u4F5C\u4E3A\u6784\u9020\u51FD\u6570</li><li>\u4E0D\u53EF\u4F7F\u7528 <code>arguments</code> \u5BF9\u8C61\uFF0C\u9700\u8981\u7528 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters" target="_blank" rel="noopener noreferrer">rest parameters</a> \u53C2\u6570\u4EE3\u66FF</li><li>\u4E0D\u53EF\u4F7F\u7528 <code>yield</code> \u6307\u4EE4\uFF0C\u56E0\u6B64\u4E0D\u80FD\u4F5C\u4E3A <code>Generator</code> \u51FD\u6570</li><li>\u8FD4\u56DE\u5BF9\u8C61\u65F6\uFF0C<strong>\u5FC5\u987B\u7528\u6263\u53F7\u5305\u88F9</strong></li><li>\u7BAD\u5934\u51FD\u6570\u4E0D\u5B58\u5728\u539F\u578B\uFF08\u6253\u5370\u7ED3\u679C\u4E3A\uFF1A<code>undefined</code>\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const arrowFn = (...rest) =&gt; {
  console.log(this); // window
  // console.log(agruments); throw ReferenceError: agrument is not defined
  console.log(rest); // [1, 2, 3]
}
arrowFn(1, 2, 3);
console.log(arrowFn.prototype); // undefined
new arrowFn(); // TypeError: arrowFn is not a constructor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,114),a=[l];function r(c,o){return i(),n("div",null,a)}var t=e(s,[["render",r],["__file","execution.html.vue"]]);export{t as default};
