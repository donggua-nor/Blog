if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>a(e,r),f={module:{uri:r},exports:t,require:d};s[r]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f2693b59d3ac44c2b1a687cd1c6fc540"},{url:"assets/404.html-de109a68.js",revision:"3e083f0c0b1b1f54c35da8dadf18b55a"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-71551f69.js",revision:"8797e40efa89b7efdd139c297168282e"},{url:"assets/async.html-1d0f867a.js",revision:"e63b08e06f4e53500d767fb16f7e80e2"},{url:"assets/async.html-67049858.js",revision:"3b9a03b821fa22dbef16f0cacfe9e046"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/cjs.html-835488bc.js",revision:"9db7fb11a835678d2092e0361ee34063"},{url:"assets/cjs.html-f6448050.js",revision:"c64a1cb0b8a9a7a45c6432c51714f8a3"},{url:"assets/clone.html-54072389.js",revision:"0debd82be8c0e1254a9a2612d96093d8"},{url:"assets/clone.html-7404e2a9.js",revision:"8d38823ea0d8f1796934eafa610911a7"},{url:"assets/esm.html-022d00ac.js",revision:"71b7e6dc9a2bec2678986566e6a9a9a3"},{url:"assets/esm.html-0c9a8e77.js",revision:"ef26a6e099888edfb0ecfc46f025e262"},{url:"assets/execution.html-17de1c57.js",revision:"a48b773e6064c754ea947ebd414ef523"},{url:"assets/execution.html-922fd69f.js",revision:"fd31131aec949a073d81974c616f2eaa"},{url:"assets/framework-e93b08cb.js",revision:"b7423dc95dd1aec4a9885512a78aa962"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-4c18472b.js",revision:"6f61360146073e810c12c1406169d8f6"},{url:"assets/index.html-556c96a2.js",revision:"3402dc89dbfeb3f32e5d8413793b63fc"},{url:"assets/index.html-7f65be36.js",revision:"580c32d93af9e6e5b50e8cb70078bbe5"},{url:"assets/index.html-ab85f19a.js",revision:"f600976d215d1d7669d029ba32e4479a"},{url:"assets/js.html-99ed0331.js",revision:"cb6f0802e145d1883f0ee801ef7486c7"},{url:"assets/js.html-c3e8cae3.js",revision:"c4cc30e4a7993720f7889d3602c4e553"},{url:"assets/pkg.html-31be83ee.js",revision:"41d53193ce4851922fbaffa1872a6d9c"},{url:"assets/pkg.html-5abe3aa2.js",revision:"5a5b71929b4343c7e0cf2cbc648b493c"},{url:"assets/prototype.html-0b18234e.js",revision:"0d322fee54bb3339aadbf4a981a77417"},{url:"assets/prototype.html-799db804.js",revision:"a07c23dfe63c4cb4738e7e6473db8c9b"},{url:"assets/recycle.html-2800375c.js",revision:"307a966511fb77740b5624885a60358d"},{url:"assets/recycle.html-770c44f7.js",revision:"c396376962531366a401eea8fdb5b4a9"},{url:"assets/style-06a17876.css",revision:"c0d746d29a0ed1ead24c9580fa46d079"},{url:"assets/types.html-04c15854.js",revision:"536f1826c8ec6b67689ff34a9242fd2c"},{url:"assets/types.html-3a00d7bc.js",revision:"4981c838c8343e03c0b3507de7b6ce0c"},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"0f10c2ec4b983a45b6c1120913bb55d0"},{url:"notes/js/async.html",revision:"4880faa4ecf7d179eabe1595ce492cff"},{url:"notes/js/clone.html",revision:"c67201a9d5cbc8736a17bb59fb65bdfa"},{url:"notes/js/execution.html",revision:"7710c6a6e1076538538af5c7049004dd"},{url:"notes/js/prototype.html",revision:"7add9a89c06e13869d9244e99946e4a3"},{url:"notes/js/recycle.html",revision:"e9e1d5225dd9c898ff83b262610bbcd9"},{url:"notes/js/types.html",revision:"c2ff0cf47afcafe3c2159289ebafcdac"},{url:"notes/node/cjs.html",revision:"aa9a640da27842b87c1c3ed20a95b10e"},{url:"notes/node/esm.html",revision:"3b0cb3a122f4c697b98a53f556642db6"},{url:"notes/node/pkg.html",revision:"885d9251d772a5f5c69d22a0d8408568"},{url:"notes/ts/index.html",revision:"3a9b41791daaf833f6cc5fab2124cdfd"},{url:"pg/js.html",revision:"1018da1f1e32f93aa9dda0a47353ced4"}],{})}));
