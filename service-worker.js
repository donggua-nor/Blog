if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let r={};const u=s=>l(s,t),o={module:{uri:t},exports:r,require:u};e[t]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),r)))}}define(["./workbox-f683aea5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"f27641cded68a28234a6122fe40806ce"},{url:"assets/404.75326d07.js",revision:null},{url:"assets/404.html.9b42cd8b.js",revision:null},{url:"assets/404.html.e554e2af.js",revision:null},{url:"assets/app.82f41677.js",revision:null},{url:"assets/async.html.8416e733.js",revision:null},{url:"assets/async.html.e5f15866.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/cjs.html.0a03942c.js",revision:null},{url:"assets/cjs.html.17537767.js",revision:null},{url:"assets/clone.html.355fe1aa.js",revision:null},{url:"assets/clone.html.907c149d.js",revision:null},{url:"assets/entry.html.195df9c5.js",revision:null},{url:"assets/entry.html.768af057.js",revision:null},{url:"assets/esm.html.d5e8dc39.js",revision:null},{url:"assets/esm.html.db295151.js",revision:null},{url:"assets/execution.html.89089700.js",revision:null},{url:"assets/execution.html.b806578a.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0ca1a2a0.js",revision:null},{url:"assets/index.html.3ed2b5da.js",revision:null},{url:"assets/index.html.40599389.js",revision:null},{url:"assets/index.html.e4e43961.js",revision:null},{url:"assets/js.html.784f40a4.js",revision:null},{url:"assets/js.html.85a63f63.js",revision:null},{url:"assets/Layout.f7836d3e.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/prototype.html.e14e5aa2.js",revision:null},{url:"assets/prototype.html.f120adf1.js",revision:null},{url:"assets/recycle.html.808021d9.js",revision:null},{url:"assets/recycle.html.b3d71a44.js",revision:null},{url:"assets/style.948b266c.css",revision:null},{url:"assets/ts.html.280c501a.js",revision:null},{url:"assets/ts.html.d773e985.js",revision:null},{url:"assets/types.html.1d285574.js",revision:null},{url:"assets/types.html.2207cfcb.js",revision:null},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"9d147a1aa8d8c25a4e23f220f6605f86"},{url:"notes/js/async.html",revision:"1e17c828409111c451c13e10e96231aa"},{url:"notes/js/clone.html",revision:"bedecb3f24db7c92f7a9cdebdd6ba5b6"},{url:"notes/js/execution.html",revision:"a7122a9e693cb9d65ae172cf4a7f07b7"},{url:"notes/js/prototype.html",revision:"1a9d36aea8a68d40bb75d453db36a2d9"},{url:"notes/js/recycle.html",revision:"237bdea5f544fec54c54235eed1abc1e"},{url:"notes/js/types.html",revision:"8df999bcc1ba549ec05dc2fbbdec4806"},{url:"notes/node/cjs.html",revision:"9ef971d7cf3abf7089704bc4fde19644"},{url:"notes/node/esm.html",revision:"cb9115e8cb059c107db0038971f9e794"},{url:"pg/js.html",revision:"20037cf9b77e02b383ec25d8d60d65f8"},{url:"pg/ts.html",revision:"a0f62a2a33d5f48b76b0fda19623cbe7"},{url:"vue/initialization/entry.html",revision:"4960b85ebbad1b1261814eeff9748db7"},{url:"vue/introduction/index.html",revision:"605bf472bebbc1ef205a8fb8775f93b7"}],{})}));
