import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as s}from"./app.8b739d02.js";const d={},a=s(`<h1 id="\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u7B14\u8BB0" aria-hidden="true">#</a> \u7B14\u8BB0</h1><p><a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener noreferrer">type-challenges</a> \u7684\u524D\u7F6E\u77E5\u8BC6\u56DE\u987E\u7B14\u8BB0\uFF0C\u6E90\u4E8E <a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a> \u4E0E <a href="https://github.com/wangtunan" target="_blank" rel="noopener noreferrer">@wangtunan</a> \u7684\u6177\u6168\u6307\u5BFC</p><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><h3 id="\u539F\u59CB\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u539F\u59CB\u7C7B\u578B" aria-hidden="true">#</a> \u539F\u59CB\u7C7B\u578B</h3><ul><li><code>string</code></li><li><code>number</code></li><li><code>boolean</code></li><li><code>symbol</code></li><li><code>bigint</code></li><li><code>null</code></li><li><code>undefined</code></li></ul><p>:::tip null \u4E0E undefined</p><ul><li>\u975E\u7A7A\u65AD\u8A00</li></ul><p>\u975E\u7A7A\u65AD\u8A00\u91C7\u7528 <code>!.</code> \u64CD\u4F5C\u7B26\uFF0C\u7528\u4EE5\u79FB\u9664 <code>null</code> \u3001 <code>undefined</code> \u7C7B\u578B\uFF0C\u7C7B\u4F3C\u4E8E JavaScript \u53EF\u9009\u94FE\u64CD\u4F5C\u7B26 <code>?.</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>strictNullChecks <code>strictNullChecks</code> \u5F00\u542F\u4E25\u683C\u7A7A\u503C\u68C0\u67E5\u6A21\u5F0F</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>// tsconfig.json
{
  &quot;strictNullChecks&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u6A21\u5F0F\u4E0B\uFF0C <code>null</code> \u3001 <code>undefined</code> \u53EA\u5141\u8BB8\u88AB\u5206\u914D\u7ED9\u81EA\u5DF1\u6216 <code>any</code> \u7C7B\u578B\u7684\u53D8\u91CF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const a: null = null
const b: undefined = undefined
const c: any = null

const err: number = null // Type &#39;null&#39; is not assignable to type &#39;number&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBF\u95EE\u4E00\u4E2A\u53EF\u80FD\u662F <code>null</code> \u3001 <code>undefined</code> \u7C7B\u578B\u7684\u53D8\u91CF\u5C5E\u6027\u6216\u65B9\u6CD5\u65F6\uFF0C\u9700\u5148\u8FDB\u884C<a href="#%E7%B1%BB%E5%9E%8B%E6%94%B6%E7%AA%84">\u7C7B\u578B\u6536\u7A84</a></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function printLength(value?: string | null) {
  if (typeof value === &#39;string&#39;) {
    console.log(value.length);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="\u4EFB\u610F\u503C" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u503C" aria-hidden="true">#</a> \u4EFB\u610F\u503C</h3><p><code>any</code> \u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u7C7B\u578B\uFF0C\u5F53\u4E00\u4E2A\u503C\u662F <code>any</code> \u7C7B\u578B\u7684\u65F6\u5019, TypeScript \u5C06\u4E0D\u4F1A\u5BF9\u5176\u8FDB\u884C\u7C7B\u578B\u68C0\u67E5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u5982\u540C\u5199 js\uFF0C\u4F60\u53EF\u4EE5\u4EFB\u610F\u64CD\u4F5C\u4F60\u7684\u53D8\u91CF\uFF0CTypeScript \u5E76\u4E0D\u4F1A\u629B\u51FA\u76F8\u5173\u7684\u63D0\u793A
let free: any = 1
free = { name: &#39;donggua&#39; }
free.log()
free = &#39;any&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details noImplicitAny <code>noImplicitAny</code> \u4E25\u683C\u68C0\u67E5\u7C7B\u578B\uFF0C\u4E0D\u5141\u8BB8\u4EFB\u4F55\u9690\u5F0F <code>any</code> \u7C7B\u578B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>// tsconfig.json
{
  &quot;noImplicitAny&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function fn(s) {
  // Parameter &#39;s&#39; implicitly has an &#39;any&#39; type
  console.log(s.subtr(3))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::warning \u65E0\u8BBA\u662F\u5F00\u53D1\u8005\u6307\u5B9A\u6216\u662F\u7531 TypeScript \u9690\u5F0F\u63A8\u65AD\u51FA\u7684 <code>any</code> \u7C7B\u578B\uFF0C\u90FD\u4F1A\u5BFC\u81F4 TypeScript \u5931\u53BB\u51C6\u786E\u7684\u7C7B\u578B\u63A8\u65AD\u80FD\u529B\u3002\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9057\u6F0F\u4E00\u4E9B\u8FD0\u884C\u65F6\u9519\u8BEF\uFF0C\u8FDD\u80CC\u4F7F\u7528 TypeScript \u7684\u521D\u8877\u3002 :::</p><h3 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> Unknown</h3><p><code>unknown</code> \u7528\u4E8E\u63CF\u8FF0\u4E00\u4E2A\u6211\u4EEC\u8FD8\u4E0D\u77E5\u9053\u5176\u7C7B\u578B\u7684\u53D8\u91CF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let notSure: unknown = 4;
notSure = &quot;maybe a string instead&quot;;

// OK, definitely a boolean
notSure = false;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip unknown VS any \u76F8\u6BD4\u4E8E <code>any</code> \u4E0D\u4F1A\u5BF9\u53D8\u91CF\u8FDB\u884C\u4EFB\u4F55\u68C0\u67E5\uFF0C\u5BF9\u4E8E <code>unknown</code> \u7C7B\u578B\u7684\u53D8\u91CF\u5728\u6267\u884C\u5927\u591A\u6570\u64CD\u4F5C\u65F6\u5FC5\u987B\u8FDB\u884C\u76F8\u5E94\u7684\u68C0\u67E5\uFF0C\u56E0\u6B64 <code>unknown</code> \u7C7B\u578B\u76F8\u5BF9\u66F4\u52A0\u4E25\u683C :::</p><h3 id="\u5B57\u9762\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5B57\u9762\u91CF" aria-hidden="true">#</a> \u5B57\u9762\u91CF</h3><p>\u9664\u4E86\u5E38\u89C1\u7684\u7C7B\u578B\uFF0C\u8FD8\u53EF\u4EE5\u5C06\u7C7B\u578B\u58F0\u660E\u4E3A\u5177\u4F53\u7684\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32\uFF0C\u5E38\u7528\u4E8E <a href="#%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E4%B8%8E%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B">\u8054\u5408\u7C7B\u578B</a></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const demo: &#39;demo&#39; = &#39;demo&#39;

// \u66F4\u5E38\u7528\u7684\u8054\u5408\u7C7B\u578B
type Alignment = &quot;left&quot; | &quot;right&quot; | &quot;center&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a> \u5BF9\u8C61</h3><p>\u5B9A\u4E49\u5BF9\u8C61\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7F57\u5217\u5C5E\u6027\u548C\u5BF9\u5E94\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const obj: { name: string, job: string } = { 
  name: &#39;donggua&#39;,
  job: &#39;fe&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 JavaScript \u4E2D\u8BBF\u95EE\u5BF9\u8C61\u8FD8\u53EF\u4EE5\u4F7F\u7528\u65B9\u62EC\u53F7 <code>[]</code> \u4F5C\u4E3A\u5C5E\u6027\u8BBF\u95EE\u5668\uFF0CTypeScript\u4E5F\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684 <strong>\u7D22\u5F15\u8BBF\u95EE\u7C7B\u578B</strong>\u3002</p><p>\u5373\u901A\u8FC7 <code>[]</code> \u8FDB\u884C\u7D22\u5F15\u7B7E\u540D\u8BBF\u95EE\uFF0C\u5E76\u4EE5\u6B64\u521B\u5EFA <strong>\u6620\u5C04\u7C7B\u578B</strong>\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const obj: { [key: string]: string } = { 
  name: &#39;donggua&#39;,
  job: &#39;fe&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h3><p>TypeScript \u5141\u8BB8\u6307\u5B9A\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u548C\u8FD4\u56DE\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function sum(a: number, b: number): number {
  return a + b
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7A7A\u503C" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u503C" aria-hidden="true">#</a> \u7A7A\u503C</h4><p>\u5BF9\u4E8E\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570\uFF0C\u7528 <code>void</code> \u8FDB\u884C\u58F0\u660E\u6CE8\u89E3</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function log(): void {
  console.log(&#39;TypeScript is Cool!&#39;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u533F\u540D\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u533F\u540D\u51FD\u6570" aria-hidden="true">#</a> \u533F\u540D\u51FD\u6570</h4><p>\u4E0D\u540C\u4E8E\u51FD\u6570\u58F0\u660E\uFF0CTypeScript \u4F1A\u6839\u636E <strong>\u4E0A\u4E0B\u6587\u63A8\u65AD</strong> \u4E3A\u533F\u540D\u51FD\u6570\u6307\u5B9A\u6B63\u786E\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const names = [&quot;Alice&quot;, &quot;Bob&quot;, &quot;Eve&quot;]; // \u6B64\u5904\u4E0D\u505A\u7C7B\u578B\u6CE8\u89E3
 
names.forEach(function (s) {
  console.log(s.toUppercase());
// Property &#39;toUppercase&#39; does not exist on type &#39;string&#39;. Did you mean &#39;toUpperCase&#39;?
});
 
// \u7BAD\u5934\u51FD\u6570\u540C\u6837\u652F\u6301
names.forEach((s) =&gt; {
  console.log(s.toUppercase());
// Property &#39;toUppercase&#39; does not exist on type &#39;string&#39;. Did you mean &#39;toUpperCase&#39;?
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> Never</h4><p><code>never</code> \u7C7B\u578B\u8868\u793A\u7684\u662F\u90A3\u4E9B\u6C38\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B\uFF0C\u66F4\u591A\u7684\u7528\u4E8E\u8868\u793A\u51FD\u6570\u65E0\u6CD5\u8FBE\u5230\u7EC8\u70B9</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function errorHandler(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u7EC4\u4E0E\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u4E0E\u5143\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4\u4E0E\u5143\u7EC4</h3><ul><li>\u6570\u7EC4\u7C7B\u578B\u58F0\u660E\u6709 <code>\u7C7B\u578B[]</code> \u4EE5\u53CA <a href="#%E6%B3%9B%E5%9E%8B">\u6CDB\u578B</a> \u4E24\u79CD\u5F62\u5F0F</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const queues: number[] = [1, 2, 3]
const stack: Array&lt;number&gt; = [1, 2, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5143\u7EC4\u76F8\u5F53\u4E8E\u56FA\u5B9A\u957F\u5EA6\u7684\u6570\u7EC4\uFF0C\u5E76\u4E14\u5DF2\u77E5\u6570\u7EC4\u6BCF\u9879\u5BF9\u5E94\u7684\u7684\u7C7B\u578B</li></ul><p>\u5BF9\u5143\u7956\u7C7B\u578B\u7684\u6570\u636E\u8FDB\u884C <strong>\u8D8A\u754C\u8BBF\u95EE</strong> \u6216 <strong>\u5206\u914D\u9519\u8BEF\u7684\u7C7B\u578B\u503C</strong> \u65F6\uFF0CTypeScript \u5C06\u62A5\u9519\u63D0\u793A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Tuple = [string, number]
const tuple: Tuple = [&#39;donggua&#39;, 123]
tuple[0] = 666 // Type &#39;number&#39; is not assignable to type &#39;string&#39;
console.log(tuple[2]) // Tuple type &#39;Tuple&#39; of length &#39;2&#39; has no element at index &#39;2&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u522B\u540D\u4E0E\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D\u4E0E\u63A5\u53E3" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D\u4E0E\u63A5\u53E3</h3><ul><li>\u7C7B\u578B\u522B\u540D\u5373\u4F7F\u7528\u5173\u952E\u5B57 <code>type</code> \u6307\u5B9A\u57FA\u7840\u7C7B\u578B\u3001\u5BF9\u8C61\u7C7B\u578B\u3001\u8054\u5408\u7C7B\u578B\u7B49\u4EFB\u610F\u7C7B\u578B\u7684\u547D\u540D\uFF0C\u7C7B\u4F3C\u4E8E JavaScript \u4E2D\u7684 <code>let</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type ID = number;
type Person = {
  name: string;
  age: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u63A5\u53E3\u662F\u6307\u5B9A\u5BF9\u8C61\u7C7B\u578B\u547D\u540D\u7684\u53E6\u4E00\u79CD\u5F62\u5F0F</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Person {
  name: string;
  age: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::details type VS interface</p><ul><li>\u4E8C\u8005\u90FD\u53EF\u4EE5\u7528\u6765\u58F0\u660E\u5BF9\u8C61\u6216\u51FD\u6570\u7B7E\u540D\uFF0C\u4EC5\u8BED\u6CD5\u4E0D\u540C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  // type
  type Person = {
    name: string;
    sex: number;
  }
  type Params = (a: number, b: number) =&gt; void

  // interface
  interface Person {
    name: string;
    sex: number;
  }
  interface Params {
    (a: number, b: number) =&gt; void
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E8C\u8005\u53EF\u4EE5\u76F8\u4E92\u62D3\u5C55\uFF0C<code>type</code> \u501F\u52A9 <code>&amp;</code>\uFF0C<code>interface</code> \u501F\u52A9 <code>extends</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// type extends type
type Parameter = { a: number };
type Result = Parameter &amp; { b: number };

// interface extends interface
interface Parameter = { a: number };
interface Result extends Parameter { 
  b: number;
};
// type extends interface
interface Parameter = { a: number };
type Result = Parameter &amp; { b: number };

// interface extends type
type Parameter = { a: number };
interface Result extends Parameter { 
  b: number;
};
// \u63A5\u53E3\u53EA\u80FD\u6269\u5C55\u5BF9\u8C61\u7C7B\u578B\u6216\u5BF9\u8C61\u7C7B\u578B\u4E0E\u9759\u6001\u5DF2\u77E5\u6210\u5458\u7684\u4EA4\u96C6
type Parameter = { a: number } | { b: number };
// An interface can only extend an object type or intersection of
// object types with statically known members.
interface Result extends Parameter {
  c: number;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>type</code> \u53EF\u7528\u4E8E\u58F0\u660E\u57FA\u7840\u7C7B\u578B\u3001\u8054\u5408\u7C7B\u578B\u3001\u5143\u7EC4\uFF0C\u800C <code>interface</code> \u4E0D\u884C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type str = string
type Union = string | number
type tuple = [string, number]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u63A5\u53E3\u6216\u7C7B\u578B\u522B\u540D\uFF0C\u4F46\u4E0D\u53EF\u5B9E\u73B0\u8054\u5408\u7C7B\u578B\u7684\u7C7B\u578B\u522B\u540D</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>  type UnionAlias = { a: number } | { b: number }
  class Demo implements UnionAlias {}
  // A class can only implement an object type or intersection of object types
  // with statically known members
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>interface</code> \u652F\u6301 <a href="#%E5%A3%B0%E6%98%8E%E5%90%88%E5%B9%B6">\u58F0\u660E\u5408\u5E76</a> :::</li></ul><p>:::tip \u7C7B\u4F3C <code>let</code> \u3001 <code>const</code> \u7684\u9009\u62E9\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u5EFA\u8BAE\u4F7F\u7528 <code>interface</code> \uFF0C\u5728\u4E0D\u652F\u6301\u7684\u60C5\u51B5\u4E0B\u518D\u4F7F\u7528 <code>type</code> \u7C7B\u578B\u522B\u540D :::</p><h3 id="\u7C7B\u578B\u63A8\u65AD\u4E0E\u7C7B\u578B\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD\u4E0E\u7C7B\u578B\u6CE8\u89E3" aria-hidden="true">#</a> \u7C7B\u578B\u63A8\u65AD\u4E0E\u7C7B\u578B\u6CE8\u89E3</h3><ul><li><strong>\u7C7B\u578B\u6CE8\u89E3</strong>\uFF1A\u663E\u5F0F\u6307\u5B9A\u53D8\u91CF\u7684\u7C7B\u578B</li><li><strong>\u7C7B\u578B\u63A8\u65AD</strong>\uFF1A\u7531 TypeScript \u6839\u636E\u4E0A\u4E0B\u6587\u5185\u5BB9\u81EA\u52A8\u63A8\u65AD\u51FA\u53D8\u91CF\u7C7B\u578B</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>let nickname: string = &#39;donggua&#39;
let job = &#39;FE&#39; // TypeScript \u81EA\u52A8\u63A8\u65AD\u4E3A job: string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip</p><ul><li>\u5728\u4E3A\u53D8\u91CF\u8D4B\u503C\u660E\u786E\u7684\u503C\u65F6\uFF0C\u5EFA\u8BAE\u5C3D\u91CF\u4F7F\u7528 <strong>\u7C7B\u578B\u6CE8\u89E3</strong> \u7684\u65B9\u5F0F</li><li>\u5BF9\u4E8E\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u59CB\u7EC8\u663E\u793A\u6307\u660E\u8FD4\u56DE\u7C7B\u578B\u662F\u4E2A\u66F4\u597D\u7684\u4E60\u60EF :::</li></ul><h3 id="\u8054\u5408\u7C7B\u578B\u4E0E\u4EA4\u53C9\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u8054\u5408\u7C7B\u578B\u4E0E\u4EA4\u53C9\u7C7B\u578B" aria-hidden="true">#</a> \u8054\u5408\u7C7B\u578B\u4E0E\u4EA4\u53C9\u7C7B\u578B</h3><ul><li>\u8054\u5408\u7C7B\u578B\u662F\u7531\u4E24\u4E2A\u6216\u8005\u66F4\u591A\u7C7B\u578B\u7EC4\u6210\u7684\u7C7B\u578B\uFF0C\u5E76\u7528 <code>|</code> \u8FDE\u63A5\uFF0C\u8868\u793A\u503C\u53EF\u80FD\u662F\u8FD9\u4E9B\u7C7B\u578B\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function print(value: number | string): void {
  console.log(value)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4EA4\u53C9\u7C7B\u578B\u662F\u7531\u591A\u4E2A\u7C7B\u578B\u7684\u6210\u5458\u5408\u5E76\uFF0C\u7528 <code>&amp;</code> \u8FDE\u63A5\uFF0C\u8868\u793A\u53D6\u6240\u6709\u6210\u5458\u7684\u7C7B\u578B\u4EA4\u96C6</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Bird = {
  fly: () =&gt; void;
}
type Fish = {
  swim: () =&gt; void;
}

type Animal = Bird &amp; Fish
// Animal: {
//   fly: () =&gt; void;
//   swim: () =&gt; void;
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h3><p>\u679A\u4E3E\u8868\u793A\u4E00\u7EC4\u5E38\u91CF\u96C6\u5408\uFF0C\u901A\u8FC7 <code>enum</code> \u5173\u952E\u5B57\u5B9A\u4E49</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>enum FORM_ITEMS {
  INPUT: &#39;input&#39;,
  SELECT: &#39;select&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u6570\u5B57\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u679A\u4E3E" aria-hidden="true">#</a> \u6570\u5B57\u679A\u4E3E</h4><p>\u5F53\u5B9A\u4E49\u6570\u5B57\u679A\u4E3E\u7C7B\u578B\u65F6, TypeScript \u9ED8\u8BA4\u5BF9\u6210\u5458\u8FDB\u884C\u81EA\u52A8\u9012\u589E\uFF0C\u82E5\u521D\u59CB\u9879\u6CA1\u6709\u8D4B\u503C\uFF0C\u5219\u9ED8\u8BA4\u7531 <code>0</code> \u5F00\u59CB</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u9ED8\u8BA4\u7531 0 \u5F00\u59CB\u9012\u589E
enum Queues {
  FIRST,
  SECOND
}
console.log(Queues.FIRST) // 0
console.log(Queues.SECOND) // 1

// \u6309\u5E8F\u9012\u589E
enum Queues {
  FIRST = 1,
  SECOND,
  THIRD = 5,
  FOURTH,
  FIFTH
}
console.log(Queues.FIRST) // 1
console.log(Queues.SECOND) // 2
console.log(Queues.THIRD) // 5
console.log(Queues.FOURTH) // 6
console.log(Queues.FIFTH) // 7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u53CD\u5411\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u53CD\u5411\u6620\u5C04" aria-hidden="true">#</a> \u53CD\u5411\u6620\u5C04</h4><p>\u6570\u5B57\u679A\u4E3E\u6210\u5458\u8FD8\u53EF\u4EE5\u901A\u8FC7\u679A\u4E3E\u503C\u83B7\u53D6\u5BF9\u5E94\u7684\u679A\u4E3E\u540D\u79F0\uFF0C\u79F0\u4E3A <strong>\u53CD\u5411\u6620\u5C04</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>enum Queues {
  FIRST,
  SECOND
}
console.log(Queues[0]) // FIRST
console.log(Queues[1]) // SECOND
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FDB\u9636" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636" aria-hidden="true">#</a> \u8FDB\u9636</h2><h3 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h3><blockquote><p>\u968F\u7740 <code>ECMAScript</code> \u7684\u53D1\u5C55\uFF0CTypeScript \u4E2D\u9488\u5BF9 <a href="https://es6.ruanyifeng.com/#docs/class" target="_blank" rel="noopener noreferrer">ES6 Class</a> \u7684\u7279\u6027\u5DF2\u7ECF\u9010\u6B65\u843D\u5730\u5E76\u4E8E\u4E3B\u6D41\u6D4F\u89C8\u5668/\u5E73\u53F0\u4E0A\u5F97\u5230\u652F\u6301\u3002</p></blockquote><h4 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h4><ul><li><p>\u901A\u8FC7 <code>extends</code> \u5173\u952E\u5B57\u6D3E\u751F\u5B50\u7C7B\u5B9E\u73B0\u7EE7\u627F</p></li><li><p>\u901A\u8FC7 <code>super</code> \u5173\u952E\u5B57\u6267\u884C\u57FA\u7C7B\u6784\u9020\u51FD\u6570\u3001\u8BBF\u95EE\u57FA\u7C7B\u7684\u5C5E\u6027\u6216\u65B9\u6CD5</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const enum SEX {
  UNKNOWN,
  MAN,
  WOMAN
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  introduce() {
    console.log(\`Hello, my name is \${this.name}.\`)
  }
}

class Man extends Person {
  gender = SEX.MAN
  constructor(name: string) {
    super(name)
  }
}

const man = new Man(&#39;donggua&#39;);
console.log(man); // Man { name: &#39;donggua&#39;, gender: 1 }
man.introduce(); // Hello, my name is donggua.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5B58\u53D6\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u5668" aria-hidden="true">#</a> \u5B58\u53D6\u5668</h4><p>\u5728\u7C7B\u4E2D\u53EF\u4EE5\u901A\u8FC7 <code>getters</code> \u3001 <code>setters</code> \u62E6\u622A\u5BF9\u8C61\u6210\u5458\u7684\u5B58\u53D6\u884C\u4E3A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  set name(newName: string) {
    this._name = newName
  }
}

const man = new Person(&#39;donggua&#39;)
man.name = &#39;donggua_nor&#39;
man.name // donggua_nor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip \u4EC5\u8BBE\u7F6E\u4E86 <code>get</code> \u800C\u6CA1\u6709 <code>set</code> \u7684\u5B58\u53D6\u5668\u5C06\u88AB\u63A8\u65AD\u4E3A <code>readonly</code> \uFF0C\u4EE5\u544A\u77E5\u7528\u6237\u8BE5\u5C5E\u6027\u4E0D\u5E94\u8BE5\u88AB\u6539\u53D8</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
}

const man = new Person(&#39;donggua&#39;)
man.name = &#39;donggua_nor&#39;
// Cannot assign to &#39;name&#39; because it is a read-only property
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h4 id="\u5C5E\u6027\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5C5E\u6027\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u5C5E\u6027\u4FEE\u9970\u7B26</h4><p>TypeScript \u63D0\u4F9B\u4E86\u51E0\u79CD\u8BED\u4E49\u5316\u7684\u4FEE\u9970\u7B26\uFF0C\u7528\u4EE5\u63CF\u8FF0\u7C7B\u4E2D\u5404\u79CD\u5C5E\u6027\uFF1A</p><ul><li><code>readonly</code> \u53EA\u8BFB\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const man = new Person(&#39;donggua&#39;)
man.name = &#39;donggua_nor&#39;
// Cannot assign to &#39;name&#39; because it is a read-only property
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>public</code> \u8868\u793A\u516C\u6709\u7684\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF0C\u53EF\u4EE5\u81EA\u7531\u8BBF\u95EE\u7C7B\u4E2D\u7684\u6210\u5458</li><li><code>private</code> \u8868\u793A\u79C1\u6709\u7684\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF0C\u53EA\u80FD\u5728\u7C7B\u5185\u90E8\u4F7F\u7528</li><li><code>protected</code> \u8868\u793A\u53D7\u4FDD\u62A4\u7684\u8BBF\u95EE\u4FEE\u9970\u7B26\uFF0C\u53EA\u80FD\u5728\u57FA\u7C7B\u53CA\u5176\u6D3E\u751F\u7C7B\u5185\u90E8\u4F7F\u7528</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  public name: string
  private age: number
  protected address: string
  constructor(name: string, age: number, address: string) {
    this.name = name
    this.age = age
    this.address = address
  }
}

class Man extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address)
  }
  getAge() {
    console.log(this.age);
    // Property &#39;age&#39; is private and only accessible within class &#39;Person&#39;
  }
  getAddress() {
    return this.address
  }
}

const man = new Man(&#39;donggua&#39;, 26, &#39;guangzhou&#39;)
console.log(man.name) // donggua
man.age
// Property &#39;age&#39; is private and only accessible within class &#39;Person&#39;
man.address
// Property &#39;address&#39; is protected and only accessible within class &#39;Person&#39;
// and its subclasses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip</p><ul><li>\u4E0D\u540C\u4E8E <code>C#</code> \u5FC5\u987B\u660E\u786E\u4F7F\u7528 <code>public</code> \u6307\u5B9A\u6210\u5458\u662F\u516C\u5F00\u7684\uFF0CTypeScript \u9ED8\u8BA4\u6210\u5458\u4E3A <code>public</code> \u5C5E\u6027</li><li><code>ECMAScript</code> <a href="https://github.com/tc39/proposal-private-methods" target="_blank" rel="noopener noreferrer">\u65B0\u63D0\u6848</a> \u4E2D\u5BF9\u4E8E\u79C1\u6709\u5C5E\u6027/\u65B9\u6CD5\u662F\u4F7F\u7528 <code>#</code> \u4FEE\u9970\u7B26</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  #name: string
  constructor(name: string) {
    this.name = name
  }
}
const man = new Person(&#39;donggua&#39;)
man.name
// Property &#39;#name&#39; is not accessible outside class &#39;Person&#39;
// because it has a private identifier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ul><li><code>static</code> \u9759\u6001\u5C5E\u6027\u4E0E\u9759\u6001\u65B9\u6CD5</li></ul><p>\u4E0D\u540C\u4E8E\u5B9E\u4F8B\u5C5E\u6027/\u65B9\u6CD5\uFF0C\u9759\u6001\u5C5E\u6027/\u65B9\u6CD5\u4E0D\u4F1A\u88AB\u5B9E\u4F8B\u6240\u7EE7\u627F\uFF0C\u800C\u5FC5\u987B\u901A\u8FC7\u7C7B\u6765\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class SingleInstance {
  static instance: SingleInstance;
  private constructor(public name: string) {}
  static getInstance(name: string) {
    if (!this.instance) {
      this.instance = new SingleInstance(name);
    }
    return this.instance;
  }
}

const instance1 = SingleInstance.getInstance(&#39;instance1&#39;);
const instance2 = SingleInstance.getInstance(&#39;instance2&#39;);
console.log(instance1 === instance2); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h4><p>\u9664\u4E86\u4E0A\u8FF0\u5173\u952E\u5B57\uFF0CTypeScript \u8FD8\u63D0\u4F9B\u4E86 <code>abstract</code> \u5173\u952E\u5B57\u7528\u4E8E\u5B9A\u4E49\u62BD\u8C61\u7C7B\u4EE5\u53CA\u62BD\u8C61\u7C7B\u5185\u90E8\u7684\u62BD\u8C61\u65B9\u6CD5\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>abstract class Person {
  constructor(public name: string) {}
  abstract introduce(): void
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D\uFF0C\u62BD\u8C61\u7C7B\u5E94\u4F5C\u4E3A\u57FA\u7C7B\u4F7F\u7528\uFF0C\u4E0D\u53EF\u88AB\u5B9E\u4F8B\u5316\u3002\u62BD\u8C61\u7C7B\u4E2D\u7684\u62BD\u8C61\u65B9\u6CD5\u4E0D\u5305\u542B\u5177\u4F53\u5B9E\u73B0\u5E76\u4E14\u5FC5\u987B\u7531\u6D3E\u751F\u7C7B\u5B9E\u73B0\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>abstract class Person {
  constructor(public name: string) {}
  abstract introduce(): void
}

class Man extends Person {
  constructor(name: string) {
    super(name)
  }
  introduce() {
    console.log(\`Hello, my name is \${this.name}.\`)
  }
}

const err = new Person() // Cannot create an instance of an abstract class
const man = new Man(&#39;donggua&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7C7B\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u7C7B\u5B9E\u73B0\u63A5\u53E3</h4><p>\u7C7B\u540C <code>Java</code> \u3001 <code>C#</code> \uFF0CTypeScript \u652F\u6301\u7C7B\u7EE7\u627F\u4E00\u4E2A\u6216\u591A\u4E2A\u63A5\u53E3\u4EE5\u7EA6\u675F\u7C7B\u7684\u884C\u4E3A\uFF0C\u5373\u7C7B\u5FC5\u987B\u62E5\u6709\u63A5\u53E3\u4E2D\u5BF9\u5E94\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u901A\u8FC7 <code>implemenets</code> \u5173\u952E\u5B57\u5B9E\u73B0</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Person {
  name: string
  introduce: () =&gt; void
}

class Man implements Person {
  constructor(public name: string) {}
  introduce() {
    console.log(\`Hello, my name is \${this.name}.\`)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::warning \u7C7B\u5B9E\u73B0\u63A5\u53E3\u65F6\uFF0C\u4EC5\u652F\u6301\u5B9E\u4F8B\u90E8\u5206\u5C5E\u6027/\u65B9\u6CD5\uFF0C\u800C\u4E0D\u5141\u8BB8\u63A5\u53E3\u5B9A\u4E49\u5176\u9759\u6001\u5C5E\u6027/\u65B9\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Person {
  new (name: string): void;
}

class Man implements Person {
  constructor(public name: string) {}
}
// Class &#39;Man&#39; incorrectly implements interface &#39;Person&#39;.
// Type &#39;Man&#39; provides no match for the signature &#39;new (name: string): void&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><p>:::tip \u7C7B\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u7C7B\u578B\u522B\u540D\uFF0C\u4F46\u63A5\u53E3\u66F4\u4E3A\u8D34\u5408\u7C7B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Person = {
  name: string
  introduce: () =&gt; void
}

class Man implements Person {
  constructor(public name: string) {}
  introduce() {
    console.log(\`Hello, my name is \${this.name}.\`)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h4 id="\u63A5\u53E3\u7EE7\u627F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F\u7C7B" aria-hidden="true">#</a> \u63A5\u53E3\u7EE7\u627F\u7C7B</h4><p>\u5728 TypeScript \u4E2D\u652F\u6301\u63A5\u53E3\u7EE7\u627F\u7C7B\uFF0C\u63A5\u53E3\u7EE7\u627F\u7C7B\u540E\uFF0C\u5C06\u62E5\u6709\u7C7B\u4E2D\u6240\u6709\u7684\u5C5E\u6027\u4E0E\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class Person {
  constructor(public name: string, public age: number) {}
}
interface Man extends Person {
  address: string;
}

const donggua: Man = {
  name: &#39;donggua&#39;,
  age: 26,
  address: &#39;guangzhou&#39;
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a> \u6CDB\u578B</h3><p>\u6CDB\u578B\u5C31\u662F\u5C06\u539F\u672C\u5177\u4F53\u7684\u7C7B\u578B\u4F5C\u4E3A\u53C2\u6570\u58F0\u660E\uFF0C\u5728\u4F7F\u7528\u6216\u8C03\u7528\u65F6\u518D\u6307\u5B9A\u4E3A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u5373 <strong>\u53C2\u6570\u5316\u7C7B\u578B</strong>\u3002\u901A\u8FC7\u6CDB\u578B\uFF0C\u53EF\u4EE5\u534F\u52A9\u6211\u4EEC\u5B9A\u4E49\u53EF\u590D\u7528\u7684\u65B9\u6CD5\u3001\u63A5\u53E3\u548C\u7C7B\u3002</p><h4 id="\u6CDB\u578B\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u53D8\u91CF" aria-hidden="true">#</a> \u6CDB\u578B\u53D8\u91CF</h4><p>\u5047\u8BBE\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u4F5C\u7528\u662F\u8FD4\u56DE\u4EFB\u4F55\u4F20\u5165\u7684\u503C\uFF0C\u90A3\u4E48\u6211\u4EEC\u81EA\u7136\u4F1A\u60F3\u5230\u4F7F\u7528 <code>any</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function identity(arg: any): any {
  return arg
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u7ED3\u679C\u662F\u7B26\u5408\u9884\u671F\u7684\uFF0C\u4F46\u4F7F\u7528 <code>any</code> \u5C06\u5931\u53BB\u7C7B\u578B\u68C0\u67E5\uFF0C\u8FDD\u80CC\u4F7F\u7528 TypeScript \u7684\u521D\u8877\u3002\u5373\u4F7F\u573A\u666F\u4E0B\u660E\u786E\u4E0D\u9700\u8981\u7C7B\u578B\u68C0\u67E5\uFF0C\u4F46\u9879\u76EE\u4E2D\u5F00\u542F\u4E86 <code>noImplicitAny</code> \u914D\u7F6E\uFF0C\u5BFC\u81F4\u6211\u4EEC\u65E0\u6CD5\u4F7F\u7528 <code>any</code> \u3002</p><p>\u6B64\u65F6\u6CDB\u578B\u5C31\u6D3E\u4E0A\u4E86\u7528\u573A\uFF1A\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>&lt;&gt;</code> \u5B9A\u4E49\u4E00\u4E2A\u53C2\u6570\u53D8\u91CF <code>Type</code> \u7528\u4E8E\u6355\u83B7\u5B9E\u9645\u4F20\u5165\u7684\u7C7B\u578B\uFF0C\u901A\u8FC7\u8BE5\u53C2\u6570\u53D8\u91CF\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6307\u5B9A\u5B9E\u53C2\u548C\u8FD4\u56DE\u503C\u4E3A\u5BF9\u5E94\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function identity&lt;T&gt;(arg: T): T {
  return arg
}

console.log(identity&lt;string&gt;(&#39;donggua&#39;)) // &#39;donggua&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u610F\u4E3A\uFF0C <code>identity</code> \u51FD\u6570\u63A5\u6536 <strong>\u7C7B\u578B\u53C2\u6570</strong> <code>T</code> \u548C\u53C2\u6570 <code>arg</code> \uFF0C\u53C2\u6570 <code>arg</code> \u548C\u51FD\u6570\u8FD4\u56DE\u503C\u7C7B\u578B\u662F <code>T</code> \u3002\u5F53\u4F20\u5165 <code>string</code> \u7C7B\u578B\u7684\u53C2\u6570\u65F6\uFF0C <code>T</code> \u7684\u5177\u4F53\u7C7B\u578B\u5C31\u662F <code>string</code> \u3002</p><h4 id="\u5404\u7C7B\u6CDB\u578B\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5404\u7C7B\u6CDB\u578B\u5B9A\u4E49" aria-hidden="true">#</a> \u5404\u7C7B\u6CDB\u578B\u5B9A\u4E49</h4><ul><li>\u7BAD\u5934\u51FD\u6570\u548C\u5BF9\u8C61\u5B57\u9762\u91CF</li></ul><p>\u4EE5\u4E0A\u8FF0\u4F8B\u5B50\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6539\u9020\u4E3A\u7BAD\u5934\u51FD\u6570\u5F62\u5F0F</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>const identity: &lt;T&gt;(arg: T) =&gt; T = arg =&gt; arg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u65B9\u4FBF\u7406\u89E3\uFF0C\u53EF\u4EE5\u628A\u4E0A\u8FF0\u4EE3\u7801\u62C6\u89E3\u4E3A\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type GenericFn = &lt;T&gt;(arg: T) =&gt; T
let identity: GenericFn
identity = arg =&gt; arg // identity = (arg) =&gt; { return arg }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u7BAD\u5934\u51FD\u6570\u7684\u6CDB\u578B\u5B9A\u4E49\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5F62\u5F0F\u4E66\u5199</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// type GenericFn = &lt;T&gt;(arg: T) =&gt; T
type GenericFn = { &lt;T&gt;(arg: T): T }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CDB\u578B\u63A5\u53E3</li></ul><p>\u7ED3\u5408\u4E0A\u8FF0\u7C7B\u578B\u522B\u540D\u548C\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u6CDB\u578B\u5B9A\u4E49\uFF0C\u6211\u4EEC\u4E0D\u96BE\u60F3\u5230\u6CDB\u578B\u63A5\u53E3\u7684\u5B9A\u4E49\u5F62\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface GenericFn {
  &lt;T&gt;(arg: T): T
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u6E05\u6670\u7684\u8868\u660E\u5177\u4F53\u7684\u7C7B\u578B\u53C2\u6570\uFF0C\u4E00\u822C\u5C06\u7C7B\u578B\u53C2\u6570\u63D0\u53D6\u51FA\u6765\uFF0C\u4EE5\u8868\u660E\u6CDB\u578B\u53C2\u6570\u4E3A\u6574\u4E2A\u63A5\u53E3\u7684\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface GenericFn&lt;T&gt; {
  (arg: T): T
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6CDB\u578B\u7C7B</li></ul><p>\u6CDB\u578B\u7C7B\u548C\u6CDB\u578B\u63A5\u53E3\u5B9E\u73B0\u76F8\u4F3C\uFF0C\u4F46\u59CB\u7EC8\u5E94\u6CE8\u610F\u7684\u662F\uFF0C\u7C7B\u7684\u9759\u6001\u5C5E\u6027/\u65B9\u6CD5\u4EA6\u4E0D\u80FD\u4F7F\u7528\u6CDB\u578B\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>class GenericNumber&lt;T&gt; {
    zeroValue: T;
    add: (x: T, y: T) =&gt; T;
}

let myGenericNumber = new GenericNumber&lt;number&gt;();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7C7B\u7684\u6784\u9020\u51FD\u6570</li></ul><p>\u5F53\u9700\u8981\u5BF9\u7C7B\u7684\u6784\u9020\u51FD\u6570\u8FDB\u884C\u7C7B\u578B\u58F0\u660E\u65F6\uFF0C\u5E94\u91C7\u7528 <code>new</code> \u5173\u952E\u5B57\u7ED3\u5408 <code>()</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>interface Ctor&lt;T&gt; {
  new (): T;
}
function createInstance&lt;T&gt;(ctor: Ctor&lt;T&gt;): T {
  return new ctor();
}

class Person {
  name: string = &#39;donggua&#39;;
}

const man = createInstance(Person);
console.log(man); // Person { name: &#39;donggua&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u578B\u6536\u7A84" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u6536\u7A84" aria-hidden="true">#</a> \u7C7B\u578B\u6536\u7A84</h3><p>\u9664\u4E86\u4E0A\u4E0B\u6587\u7684\u7C7B\u578B\u63A8\u65AD\uFF0CTypeScript \u8FD8\u63D0\u4F9B <strong>\u7C7B\u578B\u6536\u7A84</strong> \u673A\u5236\uFF0C\u53EF\u534F\u52A9\u7F16\u8F91\u5668\u5C06\u7C7B\u578B\u63A8\u65AD\u4E3A\u66F4\u7CBE\u786E\u7684\u7C7B\u578B\u8303\u56F4\uFF0C\u5373\u5C06\u5BBD\u7C7B\u578B\u7EA6\u675F\u4E3A\u7A84\u7C7B\u578B\u3002</p><h4 id="\u7C7B\u578B\u4FDD\u62A4" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u4FDD\u62A4" aria-hidden="true">#</a> \u7C7B\u578B\u4FDD\u62A4</h4><p>\u7C7B\u578B\u4FDD\u62A4\u901A\u5E38\u4F7F\u7528 JavaScript \u4EE3\u7801\u903B\u8F91\u5224\u65AD\u8FDB\u884C\u7C7B\u578B\u6536\u7A84\uFF1A</p><ul><li><code>typeof</code> \u5224\u65AD\u539F\u59CB\u6570\u636E\u7C7B\u578B</li><li><code>boolean</code> \u7C7B\u578B\u8F6C\u6362</li><li><code>switch</code> \u4E0E <code>===</code>\u3001<code>!==</code> \u7B49\u503C\u5224\u65AD</li><li><code>in</code> \u5224\u65AD\u5BF9\u8C61\u5C5E\u6027\u662F\u5426\u5B58\u5728</li><li><code>instanceof</code> \u5224\u65AD\u6784\u9020\u51FD\u6570\u5B9E\u4F8B</li><li><code>if</code>\u3001<code>while</code> \u7B49\u63A7\u5236\u6D41\u8BED\u53E5</li></ul><h4 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h4><p>\u7C7B\u578B\u65AD\u8A00\u4F7F\u7528 <code>as</code> \u5173\u952E\u5B57\u58F0\u660E\u6307\u5B9A\u4E00\u4E2A\u5177\u4F53\u7684\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Bird = {
  fly: () =&gt; void;
}
type Fish = {
  swim: () =&gt; void;
}

function behavior(pet: Fish | Bird) {
  if ((pet as Fish).swim) {
    (pet as Fish).swim() // pet: Fish
  } else {
    (pet as Bird).fly()  // pet: Bird
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7C7B\u578B\u8C13\u8BCD" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8C13\u8BCD" aria-hidden="true">#</a> \u7C7B\u578B\u8C13\u8BCD</h4><p>\u7C7B\u578B\u8C13\u8BCD\u91C7\u7528 <code>parameterName is Type</code> \u5F62\u5F0F\u8FDB\u884C\u7C7B\u578B\u6536\u7A84\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function behavior(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim() // pet: Fish
  } else {
    pet.fly()  // pet: Bird
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isFish</code> \u51FD\u6570\u4EE5\u7C7B\u578B\u8C13\u8BCD <code>pet is Fish</code> \u4EE3\u66FF <code>boolean</code> \u4F5C\u4E3A\u51FD\u6570\u8FD4\u56DE\u503C\uFF0C\u501F\u52A9 <code>isFish</code> \u51FD\u6570\u4FBF\u53EF\u5C06 <code>pet</code> \u6536\u7A84\u4E3A\u5BF9\u5E94\u7C7B\u578B\u3002</p><h3 id="\u58F0\u660E\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5408\u5E76" aria-hidden="true">#</a> \u58F0\u660E\u5408\u5E76</h3><p><strong>\u58F0\u660E\u5408\u5E76</strong> \u662F\u6307 TypeScript \u7F16\u8BD1\u5668\u4F1A\u9488\u5BF9\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\u7B49\u7684\u540C\u540D\u58F0\u660E\u8FDB\u884C\u5408\u5E76\uFF0C\u5E76\u62E5\u6709\u6240\u6709\u5408\u5E76\u7684\u58F0\u660E\u7684\u7279\u6027</p><p>\u5728 <code>Java</code> \u4E4B\u7C7B\u7684\u8BED\u8A00\u4E2D\uFF0C\u6700\u719F\u6089\u7684\u58F0\u660E\u5408\u5E76\u5C31\u662F <strong>\u51FD\u6570\u91CD\u8F7D</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u6700\u4E3A\u5E38\u89C1\u7684\u63A5\u53E3\u5408\u5E76
interface Person {
  name: string;
  age: number;
}
interface Person {
  gender: number;
}
const person: Person = {
  name: &#39;donggua&#39;,
  age: 26,
  gender: 1
}

// \u51FD\u6570\u91CD\u8F7D
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: number | string, b: number | string): number | string {
  if (typeof a === &#39;number&#39; &amp;&amp; typeof b === &#39;number&#39;) {
    return a + b
  }
  return \`\${a}\${b}\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::tip TypeScript \u4E2D\u91CD\u8F7D\u7684\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u58F0\u660E\u65B9\u5F0F\u4E3A\u8FDE\u7EED\u591A\u4E2A\u58F0\u660E\u540E\u7D27\u8DDF\u5177\u4F53\u5B9E\u73B0\u51FD\u6570\uFF0C\u5426\u5219\u5C06\u62A5\u9519</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function add(a: number, b: number): number
function add(a: number | string, b: number | string): number | string {
  return \`\${a}\${b}\`;
}
function add(a: string, b: string): string;
// Function implementation is missing or not immediately following the declaration.
// \u51FD\u6570\u58F0\u660E\u7F3A\u5C11\u6216\u6CA1\u6709\u7D27\u968F\u4E00\u4E2A\u5B9E\u73B0\u51FD\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6700\u7EC8\u5B9E\u73B0\u5FC5\u987B\u517C\u5BB9\u5DF2\u6709\u7684\u6784\u9020\u58F0\u660E</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>function add(a: number, b: number): number
// This overload signature is not compatible with its implementation signature.
function add(a: string, b: string): string {
  return a + b
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="\u6761\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u6761\u4EF6\u7C7B\u578B</h3><p><strong>\u6761\u4EF6\u7C7B\u578B</strong> \u7C7B\u4F3C\u4E8E JavaScript \u4E2D\u7684\u4E09\u5143\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type IsBoolean&lt;T&gt; = T extends boolean ? true : false
type IsArray&lt;T&gt; = T extends { length: number } ? true : false

type Res1 = IsBoolean&lt;string&gt; // false
type Res2 = IsBoolean&lt;true&gt; // true
type Res3 = IsBoolean&lt;true&gt; // false
type Res4 = IsArray&lt;[1,2]&gt; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="extends" tabindex="-1"><a class="header-anchor" href="#extends" aria-hidden="true">#</a> extends</h4><p>\u5728\u6761\u4EF6\u7C7B\u578B\u4E2D\uFF0C <code>extends</code> \u53F3\u4FA7\u7D27\u968F\u8054\u5408\u7C7B\u578B\uFF0C\u610F\u4E3A\u5C06\u7C7B\u578B\u6536\u7A84\u4E3A\u8BE5\u8054\u5408\u7C7B\u578B\u8303\u56F4\u5185\uFF0C\u79F0\u4E3A <strong>\u7C7B\u578B\u7EA6\u675F</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type GetArrayItem&lt;T&gt; = T extends any[] ? T[number] : T
type Item = GetArrayItem&lt;string[]&gt;
// Item: string
type Arg = GetArrayItem&lt;number&gt;
// Arg\uFF1Anumber
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>GetArrayItem&lt;T&gt;</code> \u7528\u4E8E\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C <code>T extends any[]</code> \u610F\u4E3A\u7EA6\u675F\u4F20\u5165\u7C7B\u578B\u4E3A\u6570\u7EC4\uFF0C\u5F53\u6761\u4EF6\u6210\u7ACB\u65F6\u501F\u7528\u7D22\u5F15\u7C7B\u578B <code>T[number]</code> \u8FD4\u56DE\u6570\u7EC4\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u5426\u5219\u8FD4\u56DE\u4F20\u5165\u7684\u7C7B\u578B\u3002</p><h4 id="infer" tabindex="-1"><a class="header-anchor" href="#infer" aria-hidden="true">#</a> infer</h4><p><code>infer</code> \u5173\u952E\u5B57\u5728\u6761\u4EF6\u7C7B\u578B\u4E2D\u58F0\u660E\u5360\u4F4D\u53D8\u91CF\uFF0C\u8D77\u5230\u5EF6\u8FDF\u63A8\u65AD\u83B7\u53D6\u6B63\u786E\u7C7B\u578B\u7684\u4F5C\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type GetArrayItem&lt;T&gt; = T extends Array[infer Item] ? Item : T
type Item = GetArrayItem&lt;string[]&gt;
// Item: string
type Arg = GetArrayItem&lt;number&gt;
// Arg\uFF1Anumber
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u501F\u52A9 <code>infer</code> \u4FEE\u6539\u4E86 <code>GetArrayItem&lt;T&gt;</code> \u7684\u5B9E\u73B0\uFF0C\u58F0\u660E\u5360\u4F4D\u53D8\u91CF <code>Item</code> \uFF0C\u5F53\u4F20\u5165\u7C7B\u578B\u6EE1\u8DB3\u5BF9\u5E94\u7684\u7C7B\u578B\u6570\u7EC4\u7EA6\u675F\u65F6\uFF0C\u76F4\u63A5\u8FD4\u56DE\u63A8\u65AD\u51FA\u7684\u7C7B\u578B <code>Item</code> \uFF0C\u5426\u5219\u8FD4\u56DE\u4F20\u5165\u7684\u7C7B\u578B\u3002</p><p>\u518D\u4EE5 <code>ReturnType&lt;T&gt;</code> \u4E3A\u4F8B\uFF0C\u7528\u4E8E\u83B7\u53D6\u51FD\u6570\u8FD4\u56DE\u7C7B\u578B:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type ReturnType&lt;T&gt; = T extends (...args: any) =&gt; infer R ? R : any

const add = (a: number, b: number): number =&gt; a + b

type Result = ReturnType&lt;typeof add&gt;
// Result: number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u58F0\u660E\u6CDB\u578B\u53D8\u91CF <code>T</code> \u8868\u793A\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B</li><li>\u58F0\u660E\u5360\u4F4D\u53D8\u91CF <code>R</code>\uFF0C\u6B64\u65F6\u5E76\u4E0D\u786E\u5B9A\u51FD\u6570\u5177\u4F53\u8FD4\u56DE\u7C7B\u578B</li><li>\u82E5 <code>T</code> \u7C7B\u578B\u4E3A\u51FD\u6570\u7C7B\u578B\uFF0C\u5219\u6839\u636E\u51FD\u6570\u7C7B\u578B\u4E0A\u4E0B\u6587\u63A8\u5BFC\u51FA <code>R</code> \u5177\u4F53\u7C7B\u578B\u5E76\u8FD4\u56DE\uFF0C\u5426\u5219\u5219\u8FD4\u56DE <code>any</code> \u7C7B\u578B</li><li>\u5728\u4E0A\u8FF0\u4F8B\u5B50\u4E2D\uFF0C<code>add</code> \u5373\u4E3A\u8FD4\u56DE <code>number</code> \u7C7B\u578B\u7684\u51FD\u6570\uFF0C\u7531\u6B64\u63A8\u65AD\u51FA <code>R</code> \u4E3A <code>number</code></li></ul><h4 id="\u5206\u5E03\u5F0F\u6761\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u6761\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u6761\u4EF6\u7C7B\u578B</h4><p>\u5728\u6761\u4EF6\u7C7B\u578B\u4E2D\uFF0C\u5BF9\u8054\u5408\u7C7B\u578B\u5E94\u7528 <code>extends</code> \u65F6\uFF0C\u4F1A\u904D\u5386\u8054\u5408\u7C7B\u578B\u6210\u5458\u5E76\u4E00\u4E00\u5E94\u7528\u8BE5\u6761\u4EF6\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type FilterStr&lt;T&gt; = T extends string ? never : T
type Union = string | number | boolean
type Result = FilterStr&lt;Union&gt;
// Result: number | boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FilterStr&lt;T&gt;</code> \u7528\u4E8E\u8FC7\u6EE4\u6389 <code>string</code> \u7C7B\u578B\u83B7\u53D6\u65B0\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u5176\u4E2D\u4F20\u5165\u7C7B\u578B <code>T</code> \u4E3A\u8054\u5408\u7C7B\u578B\uFF0C\u5373 <code>string | number | boolean extends string</code> \u5C06\u5BF9\u8054\u5408\u7C7B\u578B\u6240\u6709\u6210\u5458\u8FDB\u884C\u5206\u53D1\u8FD0\u7B97\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>string | number | boolean extends string
=&gt; string extends string   // true
=&gt; number extends string   // false
=&gt; boolean extends string  // false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u7ED3\u679C\u5373\u4E3A\uFF1A <code>never | number | boolean</code> \uFF0C\u5E76\u6839\u636E\u8054\u5408\u7C7B\u578B\u4E2D\u7684 <code>never</code> \u7279\u6027\u5F97\uFF1A <code>number | boolean</code></p><p>:::tip \u901A\u8FC7 <code>[]</code> \u5305\u88F9 <code>extends</code> \u5173\u952E\u8BCD\u6BCF\u4E00\u90E8\u5206\u53EF\u89C4\u907F\u5E94\u7528<strong>\u5206\u5E03\u5F0F\u6761\u4EF6\u7C7B\u578B</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type FilterStr&lt;T&gt; = [T] extends [string] ? never : T
type Union = string | number | boolean
type Result = FilterStr&lt;Union&gt;
// Result: string | number | boolean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h3 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h3><p><code>typeof</code> \u64CD\u4F5C\u7B26\u7528\u4E8E\u5728\u83B7\u53D6\u53D8\u91CF\u6216\u5C5E\u6027\u7684\u7C7B\u578B\uFF0C\u591A\u7528\u4E8E\u83B7\u53D6\u590D\u6742\u6570\u636E\u7C7B\u578B\uFF0C\u6216\u914D\u5408\u5176\u4ED6\u64CD\u4F5C\u7B26\u4F7F\u7528</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u5BF9\u539F\u59CB\u7C7B\u578B\u4F7F\u7528\u65F6\u7B49\u540C\u4E8E JavaScript \u4E2D\u7684 typeof\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7C7B\u578B\uFF0C\u4F46\u5E76\u6CA1\u6709\u4EC0\u4E48\u5FC5\u8981
type name: string = &#39;donggua&#39;
type Base = typeof name
// Base: string

// \u5BF9\u5BF9\u8C61\u4F7F\u7528\u65F6\uFF0C\u5C06\u83B7\u53D6\u5BF9\u8C61\u5B8C\u6574\u7684\u5C5E\u6027\u7C7B\u578B
const person = { name: &quot;donggua&quot;, age: &quot;26&quot; }
type Obj = typeof person;
// Obj: { name: string; age: number }

// \u5BF9\u679A\u4E3E\u7C7B\u578B\u4F7F\u7528\u5F62\u4F3C\u4E8E\u5BF9\u8C61
enum TYPES {
  INPUT,
  SELECT,
}
type Enum = typeof TYPES
// Enum: { INPUT: number; SELECT: number }

// \u5BF9\u51FD\u6570\u4F7F\u7528
function sum(a: number, b: number): number {
  return a + b
}
type Func = typeof sum
// Func: (a: number, b: number) =&gt; number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never-1" tabindex="-1"><a class="header-anchor" href="#never-1" aria-hidden="true">#</a> never</h3><p><code>never</code> \u5173\u952E\u5B57\u9664\u4E86\u5E94\u7528\u4E8E<a href="#never">\u51FD\u6570\u58F0\u660E</a>\uFF0C\u8FD8\u6709\u989D\u5916\u7684\u7279\u6027\uFF1A\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\u4E2D\u5B58\u5728 <code>never</code> \uFF0C\u5176\u5B9E\u9645\u7684\u8054\u5408\u7C7B\u578B\u5E76\u4E0D\u4F1A\u5305\u542B <code>never</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>// \u5B9A\u4E49
type test = &#39;name&#39; | &#39;age&#39; | never
// \u5B9E\u9645
type test = &#39;name&#39; | &#39;age&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof</h3><p><code>keyof</code> \u64CD\u4F5C\u7B26\u7528\u4E8E\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u5C5E\u6027\u952E\u7684\u5B57\u9762\u91CF\u7EC4\u5408\u800C\u6210\u7684\u8054\u5408\u7C7B\u578B\uFF0C\u7C7B\u4F3C\u4E8E JavaScript \u4E2D\u7684 <code>Object.keys()</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Person = {
  name: string;
  age: number;
}
type Result = keyof Person;
// Result: &#39;name&#39; | &#39;age&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5BF9\u4E8E <code>number</code> \u7C7B\u578B\u7684\u7D22\u5F15\u7B7E\u540D\uFF0C\u5C06\u89C6\u4E3A <code>string | number</code> \u8054\u5408\u7C7B\u578B\uFF0C\u56E0\u4E3A JavaScript \u4E2D\u5BF9\u8C61\u5C5E\u6027\u952E\u4F1A\u88AB\u5F3A\u5236\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Mapish = {
  [key: number]: string;
}
type Result = keyof Arrayish;
// Result: &#39;string&#39; | &#39;number&#39;

const obj: Mapish = {}
obj[1] = &#39;donggua&#39; // \u7B49\u540C\u4E8E obj[&#39;1&#39;] = &#39;donggua&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h3><p><code>in</code> \u64CD\u4F5C\u7B26\u53F3\u4FA7\u8DDF\u968F\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\uFF0C\u8868\u793A\u9010\u4E00\u904D\u5386\u8BE5\u8054\u5408\u7C7B\u578B\u7684\u6240\u6709\u5B57\u9762\u91CF\uFF0C\u7C7B\u4F3C\u4E8E JavaScript \u4E2D\u7684 <code>for...in</code> \uFF0C\u901A\u5E38\u7ED3\u5408 <code>keyof</code> \u7528\u4EE5\u521B\u5EFA\u7D22\u5F15\u7B7E\u540D\u7684\u6620\u5C04\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>type Readonly&lt;T&gt; = {
  readonly [K in keyof T]: T[K]
}
type Person = {
  name: string;
  age: number;
}

type Result = Readonly&lt;Person&gt;
// Result\uFF1A{
//   readonly name: string;
//   readonly age: number;
// }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5B9A\u4E49 <code>Readonly</code> \u5DE5\u5177\u51FD\u6570\uFF0C\u63A5\u6536\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570 <code>T</code></li><li><code>keyof T</code> \u83B7\u53D6 <code>T</code> \u7684\u8054\u5408\u7C7B\u578B\uFF0C\u5728\u6B64\u7ED3\u679C\u4E3A <code>&#39;name&#39; | &#39;age&#39;</code></li><li>\u4F7F\u7528 <code>in</code> \u904D\u5386 <code>&#39;name&#39; | &#39;age&#39;</code> \u5E76\u5C06\u6BCF\u6B21\u7684\u53D6\u503C\u8D4B\u503C\u7ED9\u53D8\u91CF <code>K</code></li><li><code>readonly</code> \u5173\u952E\u5B57\u5C06\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u8F6C\u6362\u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u5BF9\u5E94\u503C\u4E3A <code>T[K]</code></li></ul><h2 id="\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#\u62D3\u5C55" aria-hidden="true">#</a> \u62D3\u5C55</h2><h3 id="\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#\u88C5\u9970\u5668" aria-hidden="true">#</a> \u88C5\u9970\u5668</h3><h3 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h3><h3 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h3>`,224),l=[a];function r(c,t){return n(),i("div",null,l)}var o=e(d,[["render",r],["__file","index.html.vue"]]);export{o as default};
