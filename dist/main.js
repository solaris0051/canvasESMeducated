(()=>{"use strict";var __webpack_modules__={52:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval('\n;// CONCATENATED MODULE: ./src/modules/defColors.js\n// defining colors.\nvar colors = {\n  "purple": "#800080",\n  "yellow": "#FFFF00",\n  "green": "#008000",\n  "blue": "#0000FF",\n  "red": "#FF0000",\n  "orange": "#FFA500"\n}; // exporing.\n\n/* harmony default export */ const defColors = (colors);\n;// CONCATENATED MODULE: ./src/modules/canvas.js\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\n// preparing canvas.\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas(width, height) {\n    _classCallCheck(this, Canvas);\n\n    this.width = width;\n    this.height = height;\n    this.ctx = null;\n  }\n\n  _createClass(Canvas, [{\n    key: "create",\n    value: function create() {\n      if (this.ctx !== null) {\n        return;\n      } else {\n        var canvasElem = document.getElementById("canvas");\n        canvasElem.width = this.width;\n        canvasElem.height = this.height;\n        this.ctx = canvasElem.getContext("2d");\n      }\n    }\n  }]);\n\n  return Canvas;\n}(); // exporing.\n\n\n\n;// CONCATENATED MODULE: ./src/index.js\n// static import\n //object of color palette\n\n //Class of canvas\n\n\nvar squareBtn = document.querySelector(".square");\nvar circleBtn = document.querySelector(".circle");\nvar triangleBtn = document.querySelector(".triangle"); // creating a canvas.\n\nvar Canv0 = new Canvas(700, 700);\nCanv0.create(); // dynamic import(drawing squares on the canvas)\n\nsquareBtn.addEventListener("click", function () {\n  __webpack_require__.e(/* import() */ 394).then(__webpack_require__.bind(__webpack_require__, 394)).then(function (Module) {\n    var square1 = new Module.Square(Canv0.ctx, 100, 40, 100, defColors.purple);\n    square1.draw();\n    var square2 = new Module.Square(Canv0.ctx, 110, 141, 200, defColors.yellow);\n    square2.draw();\n    var square3 = new Module.Square(Canv0.ctx, 121, 250, 300, defColors.purple);\n    square3.draw();\n    var square4 = new Module.Square(Canv0.ctx, 132, 370, 400, defColors.yellow);\n    square4.draw();\n  });\n}); // dynamic import(drawing circles on the canvas)\n\ncircleBtn.addEventListener("click", function () {\n  __webpack_require__.e(/* import() */ 234).then(__webpack_require__.bind(__webpack_require__, 234)).then(function (Module) {\n    var circle1 = new Module.Circle(Canv0.ctx, 120, 400, 120, defColors.green);\n    circle1.draw();\n    var circle2 = new Module.Circle(Canv0.ctx, 100, 400, 140, defColors.blue);\n    circle2.draw();\n    var circle3 = new Module.Circle(Canv0.ctx, 80, 400, 160, defColors.green);\n    circle3.draw();\n    var circle4 = new Module.Circle(Canv0.ctx, 60, 400, 180, defColors.blue);\n    circle4.draw();\n  });\n}); // dynamic import(drawing triangles on the canvas)\n\ntriangleBtn.addEventListener("click", function () {\n  __webpack_require__.e(/* import() */ 538).then(__webpack_require__.bind(__webpack_require__, 538)).then(function (Module) {\n    var triangle1 = new Module.Triangle(Canv0.ctx, 113, 680, 100, defColors.red);\n    triangle1.draw();\n    var triangle2 = new Module.Triangle(Canv0.ctx, 113, 624, 200, defColors.orange);\n    triangle2.draw();\n    var triangle3 = new Module.Triangle(Canv0.ctx, 113, 556, 300, defColors.red);\n    triangle3.draw();\n    var triangle4 = new Module.Triangle(Canv0.ctx, 113, 500, 400, defColors.orange);\n    triangle4.draw();\n  });\n}); // just another tweak: animation\n\nvar actionBtn = document.querySelector(".action");\nactionBtn.addEventListener("click", function () {\n  __webpack_require__.e(/* import() */ 209).then(__webpack_require__.bind(__webpack_require__, 209)).then(function (Module) {\n    Module.CanvasAnim();\n  });\n});\nvar clearBtn = document.querySelector(".clear");\nclearBtn.addEventListener("click", function () {\n  return window.location.reload();\n});\n\n//# sourceURL=webpack://canvasesmeducated/./src/index.js_+_2_modules?')}},__webpack_module_cache__={},inProgress,dataWebpackPrefix;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.d=(e,r)=>{for(var n in r)__webpack_require__.o(r,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((r,n)=>(__webpack_require__.f[n](e,r),r)),[])),__webpack_require__.u=e=>e+".main.js",__webpack_require__.miniCssF=e=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),inProgress={},dataWebpackPrefix="canvasesmeducated:",__webpack_require__.l=(e,r,n,a)=>{if(inProgress[e])inProgress[e].push(r);else{var t,_;if(void 0!==n)for(var c=document.getElementsByTagName("script"),i=0;i<c.length;i++){var o=c[i];if(o.getAttribute("src")==e||o.getAttribute("data-webpack")==dataWebpackPrefix+n){t=o;break}}t||(_=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,__webpack_require__.nc&&t.setAttribute("nonce",__webpack_require__.nc),t.setAttribute("data-webpack",dataWebpackPrefix+n),t.src=e),inProgress[e]=[r];var s=(r,n)=>{t.onerror=t.onload=null,clearTimeout(u);var a=inProgress[e];if(delete inProgress[e],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((e=>e(n))),r)return r(n)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),_&&document.head.appendChild(t)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var r=__webpack_require__.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),(()=>{var e={179:0};__webpack_require__.f.j=(r,n)=>{var a=__webpack_require__.o(e,r)?e[r]:void 0;if(0!==a)if(a)n.push(a[2]);else{var t=new Promise(((n,t)=>a=e[r]=[n,t]));n.push(a[2]=t);var _=__webpack_require__.p+__webpack_require__.u(r),c=new Error;__webpack_require__.l(_,(n=>{if(__webpack_require__.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var t=n&&("load"===n.type?"missing":n.type),_=n&&n.target&&n.target.src;c.message="Loading chunk "+r+" failed.\n("+t+": "+_+")",c.name="ChunkLoadError",c.type=t,c.request=_,a[1](c)}}),"chunk-"+r,r)}};var r=(r,n)=>{var a,t,[_,c,i]=n,o=0;if(_.some((r=>0!==e[r]))){for(a in c)__webpack_require__.o(c,a)&&(__webpack_require__.m[a]=c[a]);i&&i(__webpack_require__)}for(r&&r(n);o<_.length;o++)t=_[o],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0},n=self.webpackChunkcanvasesmeducated=self.webpackChunkcanvasesmeducated||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__(52)})();