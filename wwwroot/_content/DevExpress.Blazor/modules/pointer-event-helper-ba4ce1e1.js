import{A as t,a as e,D as r}from"./constants-58283e53.js";class i{static containsInComposedPath(t,e){const r=t.composedPath();for(const t in r)if(r[t]===e)return!0;return!1}}const n=function(e,r){const i=e.target;s(i,r)&&(i.offsetWidth<i.scrollWidth?(i.setAttribute(t.title,i.innerText),i.setAttribute(t.textTrimmed,"")):(i.removeAttribute(t.title),i.removeAttribute(t.textTrimmed)))},s=function(r,i){return!(!r||!r.matches(i))&&(getComputedStyle(r).textOverflow===e.ellipsis&&(!!o(r)&&!(!r.hasAttribute(t.textTrimmed)&&r.getAttribute(t.title))))},o=function(t){for(let e=0;e<t.children.length;e++)if(getComputedStyle(t.children[e]).display!==r.inline)return!1;return!0};export{i as P,n as c};
