if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>a(e,r),b={module:{uri:r},exports:t,require:d};s[r]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(i(...e),t)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"fe963855e7e61d91fa763a52b1e90afb"},{url:"assets/404.html-de109a68.js",revision:"3e083f0c0b1b1f54c35da8dadf18b55a"},{url:"assets/404.html-f9875e7b.js",revision:"5d8337e2f1c2fecfd9b860c861078fb3"},{url:"assets/app-662b5957.js",revision:"29f1d58add5b2467e7afda1a257281ef"},{url:"assets/async.html-1d0f867a.js",revision:"e63b08e06f4e53500d767fb16f7e80e2"},{url:"assets/async.html-acbc4062.js",revision:"0e482e13fd6f4bc275c738bc0352d196"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/cjs.html-688f4d3b.js",revision:"60a244bad77abeeb24e9a62876bc9316"},{url:"assets/cjs.html-f6448050.js",revision:"c64a1cb0b8a9a7a45c6432c51714f8a3"},{url:"assets/clone.html-19ebde6f.js",revision:"5727b9e5befd9612e2c2aa865950dcb5"},{url:"assets/clone.html-54072389.js",revision:"0debd82be8c0e1254a9a2612d96093d8"},{url:"assets/esm.html-0226a723.js",revision:"95fefb15bdb598c8d7a2ea1619486d0b"},{url:"assets/esm.html-022d00ac.js",revision:"71b7e6dc9a2bec2678986566e6a9a9a3"},{url:"assets/execution.html-17de1c57.js",revision:"a48b773e6064c754ea947ebd414ef523"},{url:"assets/execution.html-b22786b1.js",revision:"8c86b04ac8e31e0d68f5c7dc5b67d47d"},{url:"assets/framework-e93b08cb.js",revision:"b7423dc95dd1aec4a9885512a78aa962"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-2fd7329c.js",revision:"73a1771a8355e80669226b21ed20adb7"},{url:"assets/index.html-7f65be36.js",revision:"580c32d93af9e6e5b50e8cb70078bbe5"},{url:"assets/index.html-8a3f9ce7.js",revision:"90dcb34f34b4478c88ee27f9adc8ccfb"},{url:"assets/index.html-a8ea149f.js",revision:"9c1d62753cd921c808f62dd3c3a033ce"},{url:"assets/index.html-f2361e65.js",revision:"2c3a5c9c38d1b537a64a7ee89de32364"},{url:"assets/index.html-ff408963.js",revision:"439fa6bf8be8900850b9410a124ef8d1"},{url:"assets/js.html-c3e8cae3.js",revision:"c4cc30e4a7993720f7889d3602c4e553"},{url:"assets/js.html-dff86365.js",revision:"1eec29a8f0f9f7c61fe97fe6da74b6b6"},{url:"assets/pkg.html-004512b4.js",revision:"5624711e8cc02e22ec4c84c69737bffe"},{url:"assets/pkg.html-31be83ee.js",revision:"41d53193ce4851922fbaffa1872a6d9c"},{url:"assets/prototype.html-098ec1be.js",revision:"bc45a300a1064d91128dce49ee47e00c"},{url:"assets/prototype.html-0b18234e.js",revision:"0d322fee54bb3339aadbf4a981a77417"},{url:"assets/recycle.html-2800375c.js",revision:"307a966511fb77740b5624885a60358d"},{url:"assets/recycle.html-5e70b123.js",revision:"91fd67582017c384c7f24595916b7db9"},{url:"assets/style-06a17876.css",revision:"c0d746d29a0ed1ead24c9580fa46d079"},{url:"assets/types.html-3a00d7bc.js",revision:"4981c838c8343e03c0b3507de7b6ce0c"},{url:"assets/types.html-cc33c01a.js",revision:"f82dea7de9bf4fb31fe1d2a0f179bb71"},{url:"font/Good Brush.woff",revision:"4c91c425ac437b3536162b9f253a25ec"},{url:"images/hero.jpg",revision:"e89ad3287401ef1eee40e35a1cf39c63"},{url:"index.html",revision:"f433954fd2c864a8b87849489b17995f"},{url:"notes/js/async.html",revision:"ccfff4d694dc3459ff2a63aaa8981a92"},{url:"notes/js/clone.html",revision:"a719b3491d7d2b2337471756fe324f6f"},{url:"notes/js/execution.html",revision:"fc6440299b82360be8ac8c0f8a4bf257"},{url:"notes/js/prototype.html",revision:"cda3c11ab2575509b2222f2d3604de41"},{url:"notes/js/recycle.html",revision:"818d50bb0ab8c1a605ace5621c1a94ee"},{url:"notes/js/types.html",revision:"c3000368984ce745d0f51b7942b9dfbd"},{url:"notes/node/cjs.html",revision:"54502bd22ec2e397d4225d95c9d48a76"},{url:"notes/node/esm.html",revision:"13902229681a9a4b359c0c8ddbd62ab8"},{url:"notes/node/pkg.html",revision:"93ebe8c13afecc66cfb141150a40de59"},{url:"notes/ts/index.html",revision:"b7bf91fd252ef605840cbce086e33244"},{url:"pg/js.html",revision:"3a083b1e7c402b9cd95a049a5ff48f71"},{url:"workflow/index.html",revision:"ef5ff65ea1b77770caa768035325c0ae"}],{})}));
