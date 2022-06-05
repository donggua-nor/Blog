import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,a as s}from"./app.8b739d02.js";const r={},a=s(`<h1 id="\u4ECE\u539F\u578B\u5230\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u539F\u578B\u5230\u7EE7\u627F" aria-hidden="true">#</a> \u4ECE\u539F\u578B\u5230\u7EE7\u627F</h1><h2 id="\u6784\u9020\u51FD\u6570\u4E0E\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u4E0E\u5B9E\u4F8B" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u4E0E\u5B9E\u4F8B</h2><p>\u501F\u7528new \u5173\u952E\u8BCD\u4E0E\u6784\u9020\u51FD\u6570\u662F\u5E38\u7528\u7684\u521B\u5EFA\u5BF9\u8C61\u7684\u65B9\u5F0F\u4E4B\u4E00</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person(name) {
  this.name = name;
}
const man = new Person(&#39;man&#39;);

man; // Person { name: &#39;man&#39; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h2><ul><li><code>prototype</code> \u662F\u51FD\u6570\u7684\u4E00\u4E2A\u5BF9\u8C61\u5C5E\u6027\uFF0C\u5176\u6307\u5411\u8C03\u7528\u8BE5\u6784\u9020\u51FD\u6570\u800C\u521B\u5EFA\u7684\u5B9E\u4F8B\u7684<strong>\u539F\u578B</strong></li><li><code>prototype</code> \u4E0A\u5B9A\u4E49\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u53EF\u4EE5\u88AB\u5BF9\u8C61\u5B9E\u4F8B\u5171\u4EAB</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Person.prototype;
// { constructor: f }
// { 
//   constructor: Person(name), 
//    __proto__: Object
// }

Person.prototype.say = function() {
  console.log(&#39;hello&#39;)
};
man.say(); // hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> __proto__</h2><ul><li><code>__proto__</code> \u662F\u5BF9\u8C61\u7684\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5176\u6307\u5411\u8BE5\u5BF9\u8C61\u7684\u539F\u578B</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>man.__proto__ === Person.prototype; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::tip ES5\u4E2D\u65B0\u589E\u7684\u521B\u5EFA\u5BF9\u8C61\u7684\u65B9\u6CD5 <em><code>Object.create()</code></em> \u5C31\u662F\u7ECF\u5178\u7684\u4F8B\u5B50</p><p><em><code>Object.create()</code></em> \u63A5\u6536\u4E00\u4E2A\u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4EE5\u8BE5\u5BF9\u8C61\u4F5C\u4E3A\u539F\u578B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const child = Object.create(man);
child.__proto__ === man; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="object-getprototype" tabindex="-1"><a class="header-anchor" href="#object-getprototype" aria-hidden="true">#</a> Object.getPrototype()</h2><p><code>__proto__</code> \u5C5E\u6027\u5DF2\u4ECE Web \u6807\u51C6\u4E2D\u5220\u9664\uFF0C\u4F46\u6D4F\u89C8\u5668\u6682\u672A\u6B63\u5F0F\u5F03\u7528\u3002\u800CES5\u4EA6\u63D0\u4F9B\u4E86\u66FF\u4EE3\u65B9\u6CD5 <code>Object.getPrototypeOf()</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object.getPrototypeOf(child) === man; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2><p><code>constructor</code> \u662F\u539F\u578B\u5BF9\u8C61\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684\u4E00\u4E2A\u5C5E\u6027 \u4E00\u822C\u662F\u539F\u578B\u5BF9\u8C61\u5BF9\u5176\u6784\u9020\u51FD\u6570\u7684\u5F15\u7528\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> Super.prototype.constructor === Super; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u539F\u578B\u94FE" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE" aria-hidden="true">#</a> \u539F\u578B\u94FE</h2><p>\u5728\u4E86\u89E3 <code>__proto__</code> \u65F6\uFF0C\u6211\u4EEC\u4EE5 man \u4E3A\u539F\u578B\u521B\u5EFA\u4E86\u65B0\u7684\u5BF9\u8C61 <code>child</code> \uFF1A</p><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/js_prototype_proto.png" alt="proto"></p><p><code>child</code> \u5BF9\u8C61\u672C\u8EAB\u5E76\u6CA1\u6709 <code>name</code> \u5C5E\u6027, \u5F53\u8F93\u51FA <code>child.name</code> \u65F6\uFF0C\u5B9E\u9645\u4E0A\u662F\u8F93\u51FA\u4E86 <code>child.__proto__</code> \u6240\u6307\u5411\u7684\u539F\u578B\u4E0A\u7684\u5C5E\u6027\uFF0C\u5373 <code>man.name</code></p><p>\u540C\u65F6\u5728 JavaScript \u4E2D\uFF0C\u51FD\u6570\u4E5F\u662F\u5BF9\u8C61\u7684\u4E00\u79CD\uFF0C\u800C\u6240\u6709\u7684\u5BF9\u8C61\u90FD\u662F\u7531\u57FA\u7C7B <code>Object</code> \u7EE7\u627F\u800C\u6765</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Person instanceof Object; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E14 <code>prototype</code> \u6709\u5171\u4EAB\u5C5E\u6027\u4E0E\u65B9\u6CD5\u7684\u7279\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Person.prototype.__proto__ === Object.prototype; // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u800C\u5F53\u6211\u4EEC\u8FDB\u4E00\u6B65\u6253\u5370\u51FA\u57FA\u7C7B <code>Object</code> \u7684 <code>__proto__</code> \u5C5E\u6027\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object.prototype.__proto__; // null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0A\uFF0C\u5728 JavaScript \u4E2D\uFF0C\u5F53\u8BFB\u53D6\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u67E5\u627E\u5F53\u524D\u5BF9\u8C61\u4E2D\u662F\u5426\u6709\u8BE5\u5C5E\u6027\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5219\u901A\u8FC7 <code>__proto__</code> \u5411\u4E0A\u67E5\u627E\u539F\u578B\u4E2D\u662F\u5426\u5B58\u5728\u8BE5\u5C5E\u6027\u5E76\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u76F4\u5230\u6700\u9876\u5C42\u7684\u539F\u578B\u5BF9\u8C61\u4E3A\u6B62\u3002\u4E14 <code>Object</code> \u57FA\u7C7B\u4E0D\u5B58\u5728\u518D\u5F80\u4E0A\u7684\u539F\u578B\u5BF9\u8C61\uFF0C\u5373\u4E3A <code>null</code></p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5173\u7CFB\u56FE\u8FDB\u884C\u603B\u7ED3\u5F97\u51FA\u539F\u578B\u94FE\u5982\u4E0B\uFF1A</p><p><img src="https://cdn.JsDelivr.net/gh/donggua-nor/picture-lib//blog/js_prototype_inheritance.jpg" alt="inheritance_in_js"></p><h2 id="js\u4E2D\u7684\u7EE7\u627F\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#js\u4E2D\u7684\u7EE7\u627F\u5B9E\u73B0" aria-hidden="true">#</a> JS\u4E2D\u7684\u7EE7\u627F\u5B9E\u73B0</h2><p>:::tip \u5728 JavaScript \u4E2D\uFF0C\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u771F\u6B63\u7684\u7C7B\uFF0C\u5176\u5BF9\u8C61\u7EE7\u627F\u662F\u57FA\u4E8E<strong>\u539F\u578B</strong>\uFF0C\u800C\u975E\u7ECF\u5178\u6A21\u578B\u7684OOP\u6A21\u5F0F\u3002 :::</p><p>JavaScript \u4E2D\u7684\u7EE7\u627F\u5B9E\u9645\u4E0A\u662F\u6E90\u4E8E\u6784\u9020\u51FD\u6570\u4E2D\u7684 <code>prototype</code> \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u4E0A\u5B9A\u4E49\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u53EF\u4EE5\u88AB\u5BF9\u8C61\u5B9E\u4F8B\u5171\u4EAB\u3002 \u800C\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u9690\u5F0F\u5C5E\u6027 <code>__proto__</code> \u5E76\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \uFF0C\u5E76\u53EF\u901A\u8FC7\u6B64\u539F\u578B\u94FE\u8FDB\u884C\u5173\u8054\u8BBF\u95EE\uFF0C\u4ECE\u800C\u5448\u73B0\u51FA\u5B9E\u4F8B\u5BF9\u8C61\u7EE7\u627F\u539F\u578B <code>prototype</code> \u7684\u6837\u5B50</p><h3 id="\u539F\u578B\u94FE\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u94FE\u7EE7\u627F" aria-hidden="true">#</a> \u539F\u578B\u94FE\u7EE7\u627F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person() {
  this.value = 1;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(&#39;JavaScript&#39;)
};

function Child() {}
Child.prototype = new Child();

const boy = new Child();
const girl = new Child();

boy.value; // 1
girl.value; // 1

boy.log(); // JavaScript
girl.log(); // JavaScript

boy.arr.push(2); // [1, 2]
girl.arr; // [1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>prototype</code> \u4E0A\u5C5E\u6027/\u65B9\u6CD5\u53EF\u4EE5\u88AB\u5171\u4EAB\u7684\u6027\u8D28\u5B9E\u73B0\u7EE7\u627F\uFF0C\u4FBF\u662F\u539F\u578B\u94FE\u7EE7\u627F\uFF0C\u4E5F\u662F <strong>ECMAScript</strong> \u4F7F\u7528\u7684\u4E3B\u8981\u7EE7\u627F\u65B9\u5F0F\u3002 \u5F53\u8BBF\u95EE\u5B9E\u4F8B\u5C5E\u6027/\u65B9\u6CD5\u65F6\uFF0C\u5C06\u901A\u8FC7\u539F\u578B\u94FE\u673A\u5236\u8BFB\u53D6\u5230\u7236\u7EA7\u7684\u5C5E\u6027/\u65B9\u6CD5\u3002</p><p>\u4F46\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u5B58\u5728\u4E24\u4E2A\u95EE\u9898\uFF1A</p><ul><li>\u5B9E\u4F8B\u5316\u5B50\u7C7B\u65F6\u65E0\u6CD5\u7ED9\u7236\u7C7B\u6784\u9020\u51FD\u6570\u4F20\u53C2</li><li>\u5B50\u7C7B <code>prototype</code> \u6307\u5411\u540C\u4E00\u4E2A\u539F\u578B\uFF0C\u539F\u578B\u4E2D\u5305\u542B\u7684\u5F15\u7528\u503C\u4F1A\u5728\u6240\u6709\u5B9E\u4F8B\u95F4\u5171\u4EAB</li></ul><h3 id="\u501F\u7528\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u501F\u7528\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u501F\u7528\u6784\u9020\u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex);
}

const boy = new Child(&#39;boy&#39;);
const girl = new Child(&#39;girl&#39;);

boy; // { sex: &#39;boy&#39;, arr: [1] }
girl; // { sex: &#39;girl&#39;, arr: [1] }

boy.arr.push(1); // [1, 2]
girl.arr; // [1]

boy.log; // undefined
girl.log; // undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u5B50\u7C7B\u6784\u9020\u51FD\u6570\u4E2D\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u5999\u7528 <code>Function.prototype.call/apply</code> \uFF0C\u4EE5\u65B0\u7684\u5BF9\u8C61\u4E3A\u4E0A\u4E0B\u6587\u6267\u884C\u6784\u9020\u51FD\u6570\u3002 \u76F8\u6BD4\u539F\u578B\u94FE\u7EE7\u627F\uFF0C\u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u53EF\u4EE5\u5411\u7236\u7C7B\u4F20\u53C2\uFF0C\u4E5F\u4E0D\u5B58\u5728\u5171\u4EAB\u540C\u4E2A\u539F\u578B\u4E0A\u7684\u5F15\u7528\u5C5E\u6027\u3002 \u4F46\u662F\u53EF\u4EE5\u53D1\u73B0\uFF0C<strong>\u5B50\u7C7B\u5B9E\u4F8B\u6CA1\u6709\u7EE7\u627F\u7236\u7C7B\u539F\u578B\u4E0A\u5B9A\u4E49\u7684\u65B9\u6CD5\uFF08<strong>\u4EC5\u539F\u578B\u65B9\u6CD5\u65E0\u6CD5\u7EE7\u627F</strong>\uFF09</strong></p><h3 id="\u7EC4\u5408\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u7EE7\u627F" aria-hidden="true">#</a> \u7EC4\u5408\u7EE7\u627F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex); // \u7EE7\u627F\u5B9E\u4F8B\u5C5E\u6027
}

Child.prototype = new Person(); // \u7EE7\u627F\u5C5E\u6027\u4E0E\u65B9\u6CD5

const boy = new Child(&#39;boy&#39;);
const girl = new Child(&#39;girl&#39;);

boy; // { sex: &#39;boy&#39;, arr: [1] }
girl; // { sex: &#39;girl&#39;, arr: [1] }

boy.arr.push(1); // [1, 2]
girl.arr; // [1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EC4\u5408\u4F7F\u7528 <strong>\u539F\u578B\u94FE\u7EE7\u627F</strong> \u548C <strong>\u501F\u7528\u6784\u9020\u51FD\u6570</strong> \u4E24\u79CD\u65B9\u5F0F\uFF0C\u7EFC\u5408\u5176\u4F18\u70B9\uFF1A</p><ul><li>\u901A\u8FC7\u539F\u578B\u94FE\u7EE7\u627F\u7236\u7C7B\u5C5E\u6027\u4E0E\u65B9\u6CD5</li><li>\u501F\u7528\u6784\u9020\u51FD\u6570\u7EE7\u627F\u5B9E\u4F8B\u5C5E\u6027</li></ul><p>\u4F46\u5F88\u660E\u663E\uFF0C\u6211\u4EEC\u8C03\u7528\u4E86\u4E24\u6B21\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u662F\u9700\u8981\u4F18\u5316\u7684\u3002</p><h3 id="\u539F\u578B\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u539F\u578B\u5F0F\u7EE7\u627F</h3><p>\u7531 JavaScript \u5E03\u9053\u8005 <a href="https://zh.wikipedia.org/wiki/%E9%81%93%E6%A0%BC%E6%8B%89%E6%96%AF%C2%B7%E5%85%8B%E7%BE%85%E5%85%8B%E7%A6%8F%E7%89%B9" target="_blank" rel="noopener noreferrer"><em>Douglas Crockford</em></a> \u4E8E <a href="https://www.crockford.com/javascript/prototypal.html" target="_blank" rel="noopener noreferrer"><em>\u300APrototypal Inheritance in JavaScript\u300B</em></a> \u63D0\u51FA\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u501F\u7528\u4E34\u65F6\u6784\u9020\u51FD\u6570\uFF0C\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u4F5C\u4E3A\u5176\u539F\u578B\u5BF9\u8C61\u5E76\u8FD4\u56DE\u5176\u5B9E\u4F8B\u3002 \u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u66F4\u8D34\u8FD1 JavaScript \u539F\u578B\u6027\u8D28\uFF0C\u65B0\u5BF9\u8C61\u901A\u8FC7\u5171\u4EAB\u57FA\u7840\u5BF9\u8C61\u7684 <code>prototype</code> \u539F\u578B\u5C5E\u6027\uFF0C\u5B9E\u73B0\u539F\u578B\u7EE7\u627F\u3002</p><p>ES5\u5C06\u5176\u89C4\u8303\u5316\u5B9E\u73B0\uFF0C\u589E\u52A0\u4E86 <code>Object.create()</code> \u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>if (typeof Object.create !== &#39;function&#39;) {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}
const newObject = Object.create(oldObject);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u501F\u7528 <code>prototype</code> \u5171\u4EAB\u5C5E\u6027\u4E5F\u5C31\u610F\u5473\u7740\u8FD9\u79CD\u65B9\u5F0F\u4E0E<strong>\u539F\u578B\u94FE\u7EE7\u627F</strong>\u4E00\u6837\u5B58\u5728\u5F15\u7528\u6570\u636E\u4F1A\u5728\u6240\u6709\u5B9E\u4F8B\u95F4\u5171\u4EAB\u7684\u95EE\u9898</p><h3 id="\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u5BC4\u751F\u5F0F\u7EE7\u627F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function createObject(o) {
  const obj = object(o); // \u4EE5\u539F\u578B\u5F0F\u7EE7\u627F\u4E3A\u57FA\u7840
  obj.log = function() {
    console.log(&#39;new object&#39;)
  }; // \u589E\u5F3A\u5BF9\u8C61
  return obj;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<strong>\u539F\u578B\u5F0F\u7EE7\u627F</strong>\u7684\u57FA\u7840\u4E0A\uFF0C\u501F\u7528\u5DE5\u5382\u51FD\u6570\u5E76\u4EE5\u81EA\u5B9A\u4E49\u65B9\u5F0F\u589E\u5F3A\u5BF9\u8C61\u3002 \u8FD9\u79CD\u7EE7\u627F\u65B9\u5F0F\u5C31\u662F<strong>\u539F\u578B\u5F0F\u7EE7\u627F</strong>\u7684\u6269\u5C55\uFF0C\u4F46\u5E76\u6CA1\u6709\u89E3\u51B3\u5B9E\u4F8B\u5171\u4EAB\u5F15\u7528\u6570\u636E\u7684\u95EE\u9898\uFF0C\u4E14\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u589E\u5F3A\u5BF9\u8C61\u96BE\u4EE5\u590D\u7528\u3002 \u76F8\u540C\u7684\u662F\uFF1A<strong>\u539F\u578B\u5F0F\u7EE7\u627F</strong>\u4E0E<strong>\u5BC4\u751F\u5F0F\u7EE7\u627F</strong>\u90FD\u662F\u628A\u91CD\u70B9\u653E\u5728\u5BF9\u8C61\u4E0A\uFF0C\u800C\u4E0D\u7528\u5173\u6CE8\u6784\u9020\u51FD\u6570\u4E0E\u7C7B\u578B\u3002</p><h3 id="\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F</h3><p>\u56DE\u770B<strong>\u7EC4\u5408\u7EE7\u627F</strong>\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5728\u5176\u57FA\u7840\u4E0A\u4F18\u5316\u8C03\u7528\u4E24\u6B21\u7236\u7C7B\u6784\u9020\u51FD\u6570\u7684\u95EE\u9898\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u76EE\u524D\u6700\u4F73\u7684\u7EE7\u627F\u65B9\u5F0F\u3002 \u800C\u4E0A\u8FF0\u591A\u79CD\u7EE7\u627F\u65B9\u5F0F\u4E5F\u660E\u663E\u6307\u51FA\u76F4\u63A5\u6307\u5B9A\u5B50\u7C7B\u539F\u578B\u5BF9\u8C61\u907F\u514D\u4E0D\u4E86\u5F15\u7528\u6570\u636E\u4F1A\u5728\u6240\u6709\u5B9E\u4F8B\u95F4\u5171\u4EAB\u7684\u95EE\u9898\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Child.prototype = new Person();

// \u4E0D\u7528\u591A\u6B21\u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u4F46\u5F15\u7528\u6570\u636E\u4ECD\u5171\u4EAB
Child.prototype = Person.prototype;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u6B64\u9700\u8981\u501F\u7528\u5BC4\u751F\u5F0F\u7EE7\u627F\u6765\u7EE7\u627F\u7236\u7C7B\u539F\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u4EE5\u7236\u7C7B\u539F\u578B\u4E3A\u57FA\u7840\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5E76\u8D4B\u503C\u7ED9\u5B50\u7C7B\u539F\u578B
Child.prototype = Object.create(Person.prototype);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u7531\u4E8E\u6B64\u65F6\u5B50\u7C7B\u539F\u578B\u88AB\u91CD\u5199\u4E3A\u4EE5\u7236\u7C7B\u539F\u578B\u4E3A\u57FA\u7840\u521B\u5EFA\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5176\u539F\u578B\u5BF9\u8C61\u6240\u6307\u5411\u7684\u4E5F\u5C31\u662F\u7236\u7C7B\u6784\u9020\u51FD\u6570\uFF0C\u56E0\u6B64\u9700\u8981\u4FEE\u6B63\u5B50\u7C7B\u539F\u578B\u5BF9\u8C61\u7684\u6B63\u786E\u6307\u5411</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/* prototype is Person cause \`Object.create()\` */
Child.prototype.constructor === Person; // true

/* fix constructor */
Child.prototype.constructor = Child;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5230\u6B64\uFF0C\u7CC5\u5408\u591A\u79CD\u7EE7\u627F\u65B9\u5F0F\u7684\u4F18\u70B9\u800C\u6210\u7684\u6700\u4F73\u7EE7\u627F\u65B9\u5F0F\u5C31\u5B9E\u73B0\u4E86</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Person(sex) {
  this.sex = sex;
  this.arr = [1];
}
Person.prototype.log = function() {
  console.log(this.sex)
};

function Child(sex) {
  Person.call(this, sex); // \u7EE7\u627F\u5B9E\u4F8B\u5C5E\u6027
}

// \u4EE5\u7236\u7C7B\u539F\u578B\u4E3A\u57FA\u7840\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5E76\u8D4B\u503C\u7ED9\u5B50\u7C7B\u539F\u578B
Child.prototype = Object.create(Person.prototype);

// \u4FEE\u6B63\u91CD\u5199\u5B50\u7C7B\u539F\u56E0\u5BFC\u81F4\u7684constructor\u9519\u8BEF\u6307\u5411
Child.prototype.constructor = Child;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6-class" tabindex="-1"><a class="header-anchor" href="#es6-class" aria-hidden="true">#</a> ES6 Class</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>class Person {
  static isSuper = true;
  constructor(sex) {
    this.sex = sex;
  }
}

class Child extends Person {
  constructor() {
    super();
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7 <code>babel</code> \u7F16\u8BD1\u6765\u4E86\u89E3\u5176\u80CC\u540E\u7684\u5B9E\u73B0\u539F\u7406\uFF1A<a href="https://babeljs.io/repl/#?browsers=&amp;build=&amp;builtIns=false&amp;corejs=3.6&amp;spec=false&amp;loose=false&amp;code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtCALmAQJbDQkQDKArgA5LQC80BiN8A3NgJDDqF2wAikQAKCPAAeASiy48rABaUAdJKnN807ngC-2A9lCQYAYRUgAJtGkF4aKzATJ08vgLY1hosXJyK-PRIfrrQBnpAA&amp;debug=false&amp;forceAllTransforms=false&amp;shippedProposals=false&amp;circleciRepo=&amp;evaluate=true&amp;fileSize=false&amp;timeTravel=false&amp;sourceType=module&amp;lineWrap=false&amp;presets=es2015%2Creact%2Cstage-2&amp;prettier=false&amp;targets=&amp;version=7.15.3&amp;externalPlugins=&amp;assumptions=%7B%7D" target="_blank" rel="noopener noreferrer">e.g.</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>// \u5B9E\u73B0\u7EE7\u627F
function _inherits(subClass, superClass) {
  if (typeof superClass !== &quot;function&quot; &amp;&amp; superClass !== null) {
    throw new TypeError(&quot;Super expression must either be null or a function&quot;);
  }
  subClass.prototype = Object.create(superClass &amp;&amp; superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    },
  });
  if (superClass) {
    subClass.__proto__ = superClass;
  }
}

// \u6267\u884C\u6784\u9020\u51FD\u6570
function _createSuper(Derived) {
  // ...
  return Super.apply(this, arguments);
}

// \u907F\u514D\u628A\u6784\u9020\u51FD\u6570\u5F53\u6210\u666E\u901A\u51FD\u6570\u6267\u884C\u7684\u9A8C\u8BC1\uFF0C\u5373\u9700\u8981\u901A\u8FC7 new \u8C03\u7528
function _classCallCheck() {
  if (!instance instanceof Constructor) {
    throw new TypeError(&quot;Cannot call a class as a function&quot;);
  }
}

// \u7236\u7C7B\u6784\u9020\u51FD\u6570
var Person = function Person(sex) {
  _classCallCheck(this, Person);
  this.sex = sex;
};

Object.defineProperty(Person, &quot;isSuper&quot;, true);

// \u5B50\u7C7B\u6784\u9020\u51FD\u6570
var Child = /*#__PURE__*/ (function(_Person) {
  _inherits(Child, _Person);
  var _super = _createSuper(Child);

  function Child() {
    _classCallCheck(this, Child);
    return _super.call(this);
  }
  return Child;
})(Person);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4FBF\u4E8E\u6D4F\u89C8\u5220\u9664\u5E76\u4FEE\u6539\u4E86\u8F85\u52A9\u51FD\u6570\u76F8\u5173\u7684\u4EE3\u7801\uFF0C\u4F46\u4E5F\u53EF\u770B\u51FA <code>ES6 Class</code> \u672C\u8D28\u4E5F\u662F<strong>\u7EC4\u5408\u5BC4\u751F\u5F0F\u7EE7\u627F</strong>\u7684\u5B9E\u73B0</p>`,73),d=[a];function l(c,o){return i(),n("div",null,d)}var u=e(r,[["render",l],["__file","prototype.html.vue"]]);export{u as default};
