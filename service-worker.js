if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const a=s=>l(s,n),u={module:{uri:n},exports:r,require:a};e[n]=Promise.all(i.map((s=>u[s]||a(s)))).then((s=>(t(...s),r)))}}define(["./workbox-85077874"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"526d836a13da380e6b0c505ad179a7f1"},{url:"assets/404.57d9a764.js",revision:null},{url:"assets/404.html.9b42cd8b.js",revision:null},{url:"assets/404.html.e554e2af.js",revision:null},{url:"assets/app.8e6ef963.js",revision:null},{url:"assets/async.html.e03b2082.js",revision:null},{url:"assets/async.html.f13b29c2.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/cjs.html.79fca14a.js",revision:null},{url:"assets/cjs.html.c0c2ee6e.js",revision:null},{url:"assets/clone.html.aa33001a.js",revision:null},{url:"assets/clone.html.ace05d1a.js",revision:null},{url:"assets/constructor.html.433f160d.js",revision:null},{url:"assets/constructor.html.55368b02.js",revision:null},{url:"assets/entry.html.113a1f45.js",revision:null},{url:"assets/entry.html.3a67d058.js",revision:null},{url:"assets/esm.html.a7e899f3.js",revision:null},{url:"assets/esm.html.e9705108.js",revision:null},{url:"assets/execution.html.0a6b8074.js",revision:null},{url:"assets/execution.html.a2fa8b47.js",revision:null},{url:"assets/global-api.html.62f82ebc.js",revision:null},{url:"assets/global-api.html.dd1a2f00.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.07856c7a.js",revision:null},{url:"assets/index.html.2689dbeb.js",revision:null},{url:"assets/index.html.41e12de8.js",revision:null},{url:"assets/index.html.701490c8.js",revision:null},{url:"assets/index.html.75fac166.js",revision:null},{url:"assets/index.html.ab651aab.js",revision:null},{url:"assets/index.html.aba4832a.js",revision:null},{url:"assets/index.html.d05e0c24.js",revision:null},{url:"assets/js.html.097c228b.js",revision:null},{url:"assets/js.html.b7dce1ed.js",revision:null},{url:"assets/Layout.97ddfb0c.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/process.html.4012cdee.js",revision:null},{url:"assets/process.html.dd049cea.js",revision:null},{url:"assets/prototype.html.948994cc.js",revision:null},{url:"assets/prototype.html.a2e64151.js",revision:null},{url:"assets/recycle.html.649e006a.js",revision:null},{url:"assets/recycle.html.91d13f54.js",revision:null},{url:"assets/style.d0b8cadb.css",revision:null},{url:"assets/template.html.12a42c50.js",revision:null},{url:"assets/template.html.2f7a0298.js",revision:null},{url:"assets/ts.html.320c1db9.js",revision:null},{url:"assets/ts.html.ff3ffcbf.js",revision:null},{url:"assets/types.html.49732f25.js",revision:null},{url:"assets/types.html.a1529bdf.js",revision:null},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"8ea8912cd5571d22fc81df178286cf8a"},{url:"notes/js/async.html",revision:"26ae410a7f26c1c67550ba1b4603793b"},{url:"notes/js/clone.html",revision:"4ee0611908ab749036f8cd3d35e8ee93"},{url:"notes/js/execution.html",revision:"0261df990c3cb016004fc712bf0c3f8c"},{url:"notes/js/prototype.html",revision:"218ae854af11c87a757ffe85a1b07fc9"},{url:"notes/js/recycle.html",revision:"72c77cba2718ba08752864f82c20e890"},{url:"notes/js/types.html",revision:"e433cbe4cd9e7cf39d208e6d5859f9cb"},{url:"notes/node/cjs.html",revision:"d7dd3f247e7a332803d03a1adab7ae5b"},{url:"notes/node/esm.html",revision:"c94b493af3da6dca9dacd9f025357e40"},{url:"notes/ts/index.html",revision:"12b315649217cbf08034b7bf3142948d"},{url:"pg/js.html",revision:"f7dd285fdc70f27baf4ab17940d5bf8c"},{url:"pg/ts.html",revision:"fdc1d5a96cae6a859211191f1f3d21a1"},{url:"vue/components/template.html",revision:"a6af070dd394a8ce620aa7371562b9eb"},{url:"vue/initialization/constructor.html",revision:"d88410c534c793dd5e0f6c189670db58"},{url:"vue/initialization/entry.html",revision:"f7ca3c5c4db52ab796a5170421f75bc8"},{url:"vue/initialization/global-api.html",revision:"eac18bc1b4011d737c1959648be0375d"},{url:"vue/initialization/process.html",revision:"d457843d6eba554ea8504d1bc0e4801f"},{url:"vue/introduction/index.html",revision:"beca1896356381925c32a01b1bf0cddb"},{url:"vue/reactive/index.html",revision:"834d6f9816332b0db3526f67a813edbc"}],{})}));
