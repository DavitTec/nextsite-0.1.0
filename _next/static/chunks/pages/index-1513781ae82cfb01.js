(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},8418:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var l,i=(l=n(7294))&&l.__esModule?l:{default:l},a=n(6273),c=n(387),u=n(7190);var s={};function f(e,r,n,t){if(e&&a.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[r+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=c.useRouter(),l=i.default.useMemo((function(){var r=o(a.resolveHref(t,e.href,!0),2),n=r[0],l=r[1];return{href:n,as:e.as?a.resolveHref(t,e.as):l||n}}),[t,e.href,e.as]),d=l.href,h=l.as,p=e.children,v=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var m=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,j=o(u.useIntersection({rootMargin:"200px"}),2),x=j[0],k=j[1],w=i.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);i.default.useEffect((function(){var e=k&&n&&a.isLocalURL(d),r="undefined"!==typeof g?g:t&&t.locale,o=s[d+"%"+h+(r?"%"+r:"")];e&&!o&&f(t,d,h,{locale:r})}),[h,d,k,g,n,t]);var C={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,l,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),r[o?"replace":"push"](n,t,{shallow:l,locale:c,scroll:i}))}(e,t,d,h,v,y,b,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),a.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var _="undefined"!==typeof g?g:t&&t.locale,E=t&&t.isLocaleDomain&&a.getDomainLocale(h,_,t&&t.locales,t&&t.domainLocales);C.href=E||a.addBasePath(a.addLocale(h,_,t&&t.defaultLocale))}return i.default.cloneElement(r,C)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,l=[],i=!0,a=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(a)throw o}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!a,s=l.useRef(),f=o(l.useState(!1),2),d=f[0],h=f[1],p=o(l.useState(r?r.current:null),2),v=p[0],y=p[1],b=l.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=c.get(t):(r=c.get(n),u.push(n));if(r)return r;var o=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(n,r={id:n,observer:l,elements:o}),r}(n),o=t.id,l=t.observer,i=t.elements;return i.set(e,r),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),c.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:n}))}),[t,v,n,d]);return l.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),l.useEffect((function(){r&&y(r.current)}),[r]),[b,d]};var l=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map,u=[]},3678:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return i},default:function(){return a}});var t=n(5893),o=n(9008),l=n(1664);console.log("foo"),console.log("bar");var i=!0;function a(){var e="Hello",r="World";return(0,t.jsxs)("main",{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Home page"})}),(0,t.jsxs)("header",{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(l.default,{href:"/",children:(0,t.jsx)("a",{children:"Menubar Section: "})}),(0,t.jsx)(l.default,{href:"/posts",children:(0,t.jsx)("a",{children:"Posts: \u25b6"})})]}),(0,t.jsx)("hr",{style:{color:"#063970",backgroundColor:"#063970",height:.1,borderColor:"#063970"}})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h1",{children:[e," ",r,","]}),(0,t.jsx)("p",{children:"Welcome!"}),(0,t.jsx)("p",{children:'Click the button to send me back a "Hello World"'}),(0,t.jsx)("button",{onClick:function(){console.log("Knock knock"),console.log(e+" "+r)},children:"Click"})]}),(0,t.jsx)("section",{children:(0,t.jsxs)("p",{children:[(0,t.jsx)(l.default,{href:"/posts",children:(0,t.jsx)("a",{children:"Posts: \u25b6"})}),"This is a section"," "]})}),(0,t.jsxs)("footer",{children:[(0,t.jsx)("hr",{style:{color:"#063970",backgroundColor:"#063970",height:.1,borderColor:"#063970"}}),(0,t.jsx)("div",{children:"Footer Section"}),(0,t.jsxs)("div",{children:[" ",(0,t.jsx)("ul",{children:(0,t.jsx)(l.default,{href:"/posts",children:(0,t.jsx)("a",{children:"Posts: \u25b6"})})})]})]})]})}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);