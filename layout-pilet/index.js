//@pilet v:2(webpackChunkpr_layoutpilet,{})
System.register(["react","react-router-dom"],(function(e,t){var r={},n={};return{setters:[function(e){r.createElement=e.createElement},function(e){n.Link=e.Link}],execute:function(){e((()=>{var e={907:(e,t,r)=>{const n=r(541).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},541:(e,t,r)=>{function n(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,a=0,o=n.length;a!==t&&o>=0;){"/"===n[--o]&&a++}if(a!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+a+") in the URL path "+e);var i=n.slice(0,o+1);return r.protocol+"//"+r.host+i}t.R=n;var a=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},954:e=>{"use strict";e.exports=r},880:e=>{"use strict";e.exports=n}},a={};function o(t){var r=a[t];if(r!==undefined)return r.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,o),n.exports}o.y=t,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="./";var i,s,c,l={};return(0,o(907).s)(1),i=document,s=o.p+"main.css",(c=i.createElement("link")).setAttribute("data-origin","layout-pilet"),c.type="text/css",c.rel="stylesheet",c.href=s,i.head.appendChild(c),(()=>{"use strict";o.r(l),o.d(l,{setup:()=>c});var e=o(954),t=o(880),r=function(t){var r=t.children;return e.createElement("div",null,e.createElement("h1",null,"Error"),r)},n=function(){return e.createElement("div",null,e.createElement("p",{className:"error"},"Could not find the requested page. Are you sure it exists?"),e.createElement("p",null,"Go back ",e.createElement(t.Link,{to:"/"},"to the dashboard"),"."))},a=function(t){var r=t.notifications,n=t.menu,a=t.children;return e.createElement("div",null,r,n,e.createElement("div",{className:"container"},a))},i=function(t){var r=t.children;return e.createElement("div",{className:"notifications"},r)},s=function(t){var r=t.options,n=t.onClose,a=t.children;return e.createElement("div",{className:"notification-toast ".concat(r.type)},e.createElement("div",{className:"notification-toast-details"},r.title&&e.createElement("div",{className:"notification-toast-title"},r.title),e.createElement("div",{className:"notification-toast-description"},a)),e.createElement("div",{className:"notification-toast-close",onClick:n}))};function c(t){t.registerExtension("layout-general-container",(function(t){var r=t.params;return e.createElement(a,Object.assign({},r))})),t.registerExtension("layout-error-container",(function(t){var n=t.params;return e.createElement(r,Object.assign({},n))})),t.registerExtension("layout-error-not-found-container",(function(t){var r=t.params;return e.createElement(n,Object.assign({},r))})),t.registerExtension("layout-notifications-container",(function(t){var r=t.params;return e.createElement(i,Object.assign({},r))})),t.registerExtension("layout-notifications-toast",(function(t){var r=t.params;return e.createElement(s,Object.assign({},r))}))}})(),l})())}}}));
//# sourceMappingURL=index.js.map