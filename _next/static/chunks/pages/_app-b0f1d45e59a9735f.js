(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return u}});var r=n(7294);const o=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,c=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!==(e=(0,r.useContext)(c))&&void 0!==e?e:l},u=e=>(0,r.useContext)(c)?r.createElement(r.Fragment,null,e.children):r.createElement(d,e),m=["light","dark"],d=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:i=m,defaultTheme:u=(n?"system":"light"),attribute:d="data-theme",value:b,children:g,nonce:p})=>{const[$,w]=(0,r.useState)((()=>f(l,u))),[S,E]=(0,r.useState)((()=>f(l))),T=b?Object.values(b):i,C=(0,r.useCallback)((e=>{let r=e;if(!r)return;"system"===e&&n&&(r=v());const a=b?b[r]:r,c=t?y():null,l=document.documentElement;if("class"===d?(l.classList.remove(...T),a&&l.classList.add(a)):a?l.setAttribute(d,a):l.removeAttribute(d),s){const e=o.includes(u)?u:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==c||c()}),[]),k=(0,r.useCallback)((e=>{w(e);try{localStorage.setItem(l,e)}catch(e){}}),[e]),O=(0,r.useCallback)((t=>{const r=v(t);E(r),"system"===$&&n&&!e&&C("system")}),[$,e]);(0,r.useEffect)((()=>{const e=window.matchMedia(a);return e.addListener(O),O(e),()=>e.removeListener(O)}),[O]),(0,r.useEffect)((()=>{const e=e=>{e.key===l&&k(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[k]),(0,r.useEffect)((()=>{C(null!=e?e:$)}),[e,$]);const _=(0,r.useMemo)((()=>({theme:$,setTheme:k,forcedTheme:e,resolvedTheme:"system"===$?S:$,themes:n?[...i,"system"]:i,systemTheme:n?S:void 0})),[$,k,e,S,n,i]);return r.createElement(c.Provider,{value:_},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:l,themes:i,defaultTheme:u,attribute:d,value:b,children:g,attrs:T,nonce:p}),g)},h=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:c,defaultTheme:l,value:i,attrs:u,nonce:m})=>{const d="system"===l,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=c?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{const a=i?i[e]:e,s=t?e+"|| ''":`'${a}'`;let l="";return c&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||a?`c.add(${s})`:"null":a&&(l+=`d[s](n,${s})`),l},v=e?`!function(){${h}${y(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${i?`var x=${JSON.stringify(i)};`:""}${y(i?"x[e]":"e",!0)}}${d?"":"else{"+y(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${i?`var x=${JSON.stringify(i)};`:""}${y(i?"x[e]":"e",!0)}}else{${y(l,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),(()=>!0)),f=(e,t)=>{if(s)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},y=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},v=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2373)}])},2373:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return c}});var a=n(5893),s=(n(906),n(2010));var c=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(s.f,{defaultTheme:"system",attribute:"class",children:(0,a.jsx)(t,o({},n))})}},906:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);