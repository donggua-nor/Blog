if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const u=s=>l(s,n),o={module:{uri:n},exports:r,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(t(...s),r)))}}define(["./workbox-85077874"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"38b8de6814564289164998d8143991d3"},{url:"assets/404.5118670b.js",revision:null},{url:"assets/404.html.9b42cd8b.js",revision:null},{url:"assets/404.html.e554e2af.js",revision:null},{url:"assets/app.71672501.js",revision:null},{url:"assets/async.html.151d3dd8.js",revision:null},{url:"assets/async.html.c62f0775.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/cjs.html.a3da62da.js",revision:null},{url:"assets/cjs.html.ca9962dd.js",revision:null},{url:"assets/clone.html.42dee69f.js",revision:null},{url:"assets/clone.html.55a6fa83.js",revision:null},{url:"assets/constructor.html.0a2c82e9.js",revision:null},{url:"assets/constructor.html.ade93bc4.js",revision:null},{url:"assets/entry.html.98343190.js",revision:null},{url:"assets/entry.html.d691347f.js",revision:null},{url:"assets/esm.html.96f50a11.js",revision:null},{url:"assets/esm.html.a4f5de83.js",revision:null},{url:"assets/execution.html.57ddc848.js",revision:null},{url:"assets/execution.html.c222db60.js",revision:null},{url:"assets/global-api.html.b718ac5a.js",revision:null},{url:"assets/global-api.html.c339be44.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0c391f8c.js",revision:null},{url:"assets/index.html.4b1bc662.js",revision:null},{url:"assets/index.html.5a0c0fa7.js",revision:null},{url:"assets/index.html.67d51542.js",revision:null},{url:"assets/index.html.6a7feee5.js",revision:null},{url:"assets/index.html.9c15f1a4.js",revision:null},{url:"assets/index.html.e82df937.js",revision:null},{url:"assets/index.html.e94635e1.js",revision:null},{url:"assets/js.html.40983019.js",revision:null},{url:"assets/js.html.682c9196.js",revision:null},{url:"assets/Layout.fb250d4d.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/process.html.948cb4c8.js",revision:null},{url:"assets/process.html.a2bb688f.js",revision:null},{url:"assets/prototype.html.1599e7ef.js",revision:null},{url:"assets/prototype.html.e8b25429.js",revision:null},{url:"assets/recycle.html.42fbde05.js",revision:null},{url:"assets/recycle.html.8fd27683.js",revision:null},{url:"assets/style.948b266c.css",revision:null},{url:"assets/template.html.4397801b.js",revision:null},{url:"assets/template.html.c8477a48.js",revision:null},{url:"assets/ts.html.bf68b3e7.js",revision:null},{url:"assets/ts.html.e1f9bbd2.js",revision:null},{url:"assets/types.html.9bb09ee6.js",revision:null},{url:"assets/types.html.9f56c7d3.js",revision:null},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"0d1c1c2e794b5c72a061fe75f1f29936"},{url:"notes/js/async.html",revision:"6dc1d5df47fd3928a3dd87bc10d6558b"},{url:"notes/js/clone.html",revision:"e64270d671087282ff88b521f88dfabf"},{url:"notes/js/execution.html",revision:"9c887134e5a305af0c35f2898c9db7b6"},{url:"notes/js/prototype.html",revision:"f41f27bf5eb74e9936c57ea4b244d600"},{url:"notes/js/recycle.html",revision:"5446e33c048805fff61319585959e9f0"},{url:"notes/js/types.html",revision:"1926017064695b7c9d6a9794b6e0fd79"},{url:"notes/node/cjs.html",revision:"d25e451e5a778734d64aa203b2bea7bd"},{url:"notes/node/esm.html",revision:"39a8f55dee1648ed4aaa717a5e4a122d"},{url:"notes/ts/index.html",revision:"a846a0f6c06e33d70f1fc5cf5d461549"},{url:"pg/js.html",revision:"9180856cf74d50cf2b418ef51cbbe8a7"},{url:"pg/ts.html",revision:"39d6b2258a271657dbe62801abd274fb"},{url:"vue/components/template.html",revision:"ba871db4268202450dc91989f543ecd6"},{url:"vue/initialization/constructor.html",revision:"458b6789e397ea81ef0eefab414a362f"},{url:"vue/initialization/entry.html",revision:"0af9f6dd8c4c5be985019b2a8de0f7a7"},{url:"vue/initialization/global-api.html",revision:"2350faf5e9340b29385aa042e2650bae"},{url:"vue/initialization/process.html",revision:"61db1bfadab5811879ca992dd22f3361"},{url:"vue/introduction/index.html",revision:"5cc6cebf9f2a9ba8456422c13f73ecb3"},{url:"vue/reactive/index.html",revision:"dffdef740d0b029611bc37860d238adc"}],{})}));
