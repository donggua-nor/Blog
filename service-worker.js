if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const u=s=>l(s,n),o={module:{uri:n},exports:r,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(t(...s),r)))}}define(["./workbox-6da860f9"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"49e85a6e8bd09c76ad8377e973dcee70"},{url:"assets/404.2eb47613.js",revision:null},{url:"assets/404.html.71929186.js",revision:null},{url:"assets/404.html.8ed5a401.js",revision:null},{url:"assets/app.1a600e4b.js",revision:null},{url:"assets/async.html.52fb0125.js",revision:null},{url:"assets/async.html.85b24e58.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/cjs.html.27307daf.js",revision:null},{url:"assets/cjs.html.bb5949a5.js",revision:null},{url:"assets/clone.html.365b4ac8.js",revision:null},{url:"assets/clone.html.9b310e4d.js",revision:null},{url:"assets/constructor.html.6e025bfb.js",revision:null},{url:"assets/constructor.html.daa32ffe.js",revision:null},{url:"assets/entry.html.4e54f8bc.js",revision:null},{url:"assets/entry.html.9385991c.js",revision:null},{url:"assets/esm.html.1b7130c1.js",revision:null},{url:"assets/esm.html.b66239bd.js",revision:null},{url:"assets/execution.html.e7ddff77.js",revision:null},{url:"assets/execution.html.f5083419.js",revision:null},{url:"assets/global-api.html.248a7eb9.js",revision:null},{url:"assets/global-api.html.d6c78f85.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.3c17108d.js",revision:null},{url:"assets/index.html.545bed4e.js",revision:null},{url:"assets/index.html.64226b3c.js",revision:null},{url:"assets/index.html.6d92de04.js",revision:null},{url:"assets/index.html.a155a88a.js",revision:null},{url:"assets/index.html.c4278ce0.js",revision:null},{url:"assets/index.html.c6e95385.js",revision:null},{url:"assets/index.html.cf14182f.js",revision:null},{url:"assets/js.html.b3eda12f.js",revision:null},{url:"assets/js.html.f5c30b30.js",revision:null},{url:"assets/Layout.29c42dff.js",revision:null},{url:"assets/prototype.html.c13fddbb.js",revision:null},{url:"assets/prototype.html.f074d0c3.js",revision:null},{url:"assets/recycle.html.a9436640.js",revision:null},{url:"assets/recycle.html.f687bcae.js",revision:null},{url:"assets/style.706e167f.css",revision:null},{url:"assets/template.html.6bb8a587.js",revision:null},{url:"assets/template.html.fc2949e0.js",revision:null},{url:"assets/ts.html.2a537af0.js",revision:null},{url:"assets/ts.html.e2d6d659.js",revision:null},{url:"assets/types.html.0b285e11.js",revision:null},{url:"assets/types.html.a260a2e3.js",revision:null},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"d7e5d60bf21dfc670bc0488469616af5"},{url:"notes/js/async.html",revision:"0ee8d323f920d0886f5bd9d5e0446874"},{url:"notes/js/clone.html",revision:"944d22e855fdf0de1e08dbd1f3456d99"},{url:"notes/js/execution.html",revision:"c578e60d0b0ab6b6bda6112bef905bb6"},{url:"notes/js/prototype.html",revision:"6a36a5d16689256f12b34504117c6cf7"},{url:"notes/js/recycle.html",revision:"56ea7a33b1a2ab534494b3e3b7ce1a4c"},{url:"notes/js/types.html",revision:"a29826a6439a2f7d081ffb6406b92cd0"},{url:"notes/node/cjs.html",revision:"896ecc573a0329b5f282d31d6bf2bcc3"},{url:"notes/node/esm.html",revision:"08de60da53277c9d81afc3e4f1e1c4e1"},{url:"notes/ts/index.html",revision:"7cca68d3c22a1f9a12559e6fb2cae1c2"},{url:"pg/js.html",revision:"e304a975da33c0b63e9afd09b5a8f584"},{url:"pg/ts.html",revision:"91cec59b929d0f2aaecbeafcbe2831db"},{url:"vue/components/template.html",revision:"8c660cc02298f6d5cd9f156983ae4cbb"},{url:"vue/initialization/constructor.html",revision:"24a4f96ceffbc76eb8c634218618ca28"},{url:"vue/initialization/entry.html",revision:"532c646beb5785122e16830caf3b7b0c"},{url:"vue/initialization/global-api.html",revision:"8ec17a4fe7c69e9a46a38d9b02cd0fc4"},{url:"vue/introduction/index.html",revision:"06414a70d4a55ebf62c220ea39fb93a3"},{url:"vue/reactive/index.html",revision:"bf75eb858542deccd155144b8e4e501f"}],{})}));