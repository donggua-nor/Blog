import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as c,c as o,b as r,d as i,w as a,a as s,e}from"./app.e85e7de9.js";const t={},v=s(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><ol><li>\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684\u7B80\u5355 JavaScript \u5BF9\u8C61 <code>{}</code>\uFF1B</li><li>\u4E3A\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027<code>__proto__</code>\uFF0C\u5C06\u8BE5\u5C5E\u6027\u94FE\u63A5\u81F3\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61<code>prototype</code>\uFF1B</li><li>\u5C06\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u4F5C\u4E3A <code>this</code> \u7684\u4E0A\u4E0B\u6587\uFF1B</li><li>\u5982\u679C\u8BE5\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE <code>this</code></li></ol><p>:::: code-group ::: code-group-item Achieve</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function New(ctor) {
  if (typeof ctor !== &#39;function&#39;) {
    return
  }
  const obj = {}
  obj.__proto__ = ctor.prototype
  // same as \`const obj = Object.create(ctor.prototype)\`
  const res = ctor.apply(obj, [...arguments].slice(1))
  return isObject(res) ? res : obj
}

function isObject(val) {
  return val !== null &amp;&amp; typeof val === &#39;object&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::: code-group-item Test</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Car(number) {
  this.number = number
}

const car1 = new Car(1)
const car2 = New(Car, 2)

Car.prototype.color = &#39;original color&#39;

console.log(car1.number) // 1
console.log(car2.number) // 2

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><h2 id="call\u3001apply\u3001bind" tabindex="-1"><a class="header-anchor" href="#call\u3001apply\u3001bind" aria-hidden="true">#</a> call\u3001apply\u3001bind</h2><h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2>`,10),u=e("see "),m=e("usage"),b=e("\u3001"),h=e("instanceof"),p=s(`<p>:::: code-group ::: code-group-item Achieve</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Instanceof(instance, ctor) {
  if (typeof ctor !== &#39;function&#39;) {
    throw new Error(\`Right-hand side of &#39;instanceof&#39; is not callable\`)
  }
  if (!isObject(instance)) {
    return false
  }
  let proto = getProto(instance)
  while(true) {
    if (proto === null) {
      return false
    }
    if (proto === ctor.prototype) {
      return true
    }
    proto = getProto(proto)
  }
}

const isSupportProto = &#39;__ptoto__&#39; in {}

function getProto(obj) {
  return isSupportProto ? obj.__proto__ : Object.getPrototypeOf(obj)
}

function isObject(val) {
  return val !== null &amp;&amp; typeof val === &#39;object&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::: code-group-item Test</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car(&#39;Honda&#39;, &#39;Accord&#39;, 1998);

console.log(auto instanceof Car); // true
console.log(auto instanceof Object); // true

console.log(Instanceof(auto, Car)); // true
console.log(Instanceof(auto, Object)); // true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><h2 id="object-create" tabindex="-1"><a class="header-anchor" href="#object-create" aria-hidden="true">#</a> Object.create</h2>`,6),f=e("see "),g=e("Object.create"),_=s(`<p>:::: code-group ::: code-group-item Achieve</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>function ObjectCreate(original) {
  function F() {}
  F.prototype = original
  return new F()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::: code-group-item Test</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>const person = {
  isHuman: false,
  say: function() {
    console.log(&#39;Hello\uFF01&#39;)
  }
};

const me = Object.create(person);
const u = ObjectCreate(person);

me.name = &#39;donggua&#39;;
me.isHuman = true;
me.say(); // Hello\uFF01
console.log(me); // { name: &#39;donggua&#39;, isHuman: true } ==prototype=&gt; person

u.name = &#39;visitor&#39;
u.isHuman = true;
me.say(); // Hello\uFF01
console.log(u); // { name: &#39;visitor&#39;, isHuman: true } ==prototype=&gt; person
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: ::::</p><h2 id="iterator" tabindex="-1"><a class="header-anchor" href="#iterator" aria-hidden="true">#</a> Iterator</h2><h2 id="\u9632\u6296\u3001\u8282\u6D41" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296\u3001\u8282\u6D41" aria-hidden="true">#</a> \u9632\u6296\u3001\u8282\u6D41</h2><h2 id="\u56FE\u7247\u61D2\u52A0\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u56FE\u7247\u61D2\u52A0\u8F7D</h2><h2 id="\u83B7\u53D6-url-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-url-\u53C2\u6570" aria-hidden="true">#</a> \u83B7\u53D6 URL \u53C2\u6570</h2><h2 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h2><h2 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h2><h2 id="\u6570\u7EC4-flat" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-flat" aria-hidden="true">#</a> \u6570\u7EC4 flat</h2><h2 id="\u6570\u7EC4-reduce" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4-reduce" aria-hidden="true">#</a> \u6570\u7EC4 reduce</h2><h2 id="array-tree" tabindex="-1"><a class="header-anchor" href="#array-tree" aria-hidden="true">#</a> Array &lt;=&gt; Tree</h2><h2 id="compose" tabindex="-1"><a class="header-anchor" href="#compose" aria-hidden="true">#</a> compose</h2><h2 id="currying" tabindex="-1"><a class="header-anchor" href="#currying" aria-hidden="true">#</a> Currying</h2><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><h2 id="clonedeep" tabindex="-1"><a class="header-anchor" href="#clonedeep" aria-hidden="true">#</a> cloneDeep</h2><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>`,19);function j(y,x){const n=l("RouterLink");return c(),o("div",null,[v,r("p",null,[u,i(n,{to:"/notes/js/types.html#instanceof"},{default:a(()=>[m]),_:1}),b,i(n,{to:"/notes/js/prototype.html#%E5%8E%9F%E5%9E%8B%E9%93%BE"},{default:a(()=>[h]),_:1})]),p,r("p",null,[f,i(n,{to:"/notes/js/prototype.html#%E5%8E%9F%E5%9E%8B%E5%BC%8F%E7%BB%A7%E6%89%BF"},{default:a(()=>[g]),_:1})]),_])}var C=d(t,[["render",j],["__file","js.html.vue"]]);export{C as default};
