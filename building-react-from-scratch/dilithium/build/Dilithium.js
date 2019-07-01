var Dilithium=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";e.exports={mountComponent:function(e){return e.mountComponent()},receiveComponent:function(e,t){e._currentElement!==t&&e.receiveComponent(t)},unmountComponent:function(e,t){e.unmountComponent()},performUpdateIfNecessary:function(e){e.performUpdateIfNecessary()}}},function(e,t,n){"use strict";e.exports=function(e){if(!e)throw new Error("assertion failure")}},function(e,t,n){"use strict";function o(e,t){e.appendChild(t)}e.exports={setProperty:function(e,t,n){"children"!==t&&e.setAttribute(t,n)},removeProperty:function(e,t){e.removeAttribute(t)},updateStyles:function(e,t){Object.keys(t).forEach(n=>{e.style[n]=t[n]})},empty:function(e){[].slice.call(e.childNodes).forEach(e.removeChild,e)},appendChild:o,appendChildren:function(e,t){Array.isArray(t)?t.forEach(t=>o(e,t)):o(e,t)},insertChildAfter:function(e,t,n){e.insertBefore(t,n?n.nextSibling:e.firstChild)},removeChild:function(e,t){e.removeChild(t)}}},function(e,t,n){"use strict";const o=n(4),r=n(1),i=n(6);e.exports=function(e){r(o.isValidElement(e));let t,n=e.type;return"string"==typeof n?t=i.construct(e):"function"==typeof n?(t=new e.type(e.props))._construct(e):"string"!=typeof e&&"number"!=typeof e||(t=i.constructTextComponent(e)),t}},function(e,t,n){"use strict";e.exports={createElement:function(e,t,n){let o=Object.assign({},t),r=arguments.length-2;return 1===r?o.children=n:r>1&&(o.children=Array.prototype.slice.call(arguments,2)),{type:e,props:o}},isValidElement:function(e){let t=typeof e,n=e.type&&typeof e.type;return"string"===t||"number"===t||"string"===n||"function"===n&&e.type.isDilithiumClass}}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"==typeof e?"string"==typeof t:e.type===t.type}},function(e,t,n){"use strict";const o=n(1);let r;function i(e){return o(r),new r(e)}e.exports={inject:function(e){r=e},construct:i,constructTextComponent:function(e){return i({type:"span",props:{children:e}})}}},function(e,t,n){"use strict";const o=".",r=":";function i(e,t){return t.toString(36)}e.exports=function(e,t,n){return function e(t,n,s,u){if("string"==typeof t||!Array.isArray(t))return s(u,t,n+o+i(0,0)),1;let c=0,d=""===n?o:n+r;return t.forEach((t,n)=>{let o=d+i(0,n);c+=e(t,o,s,u)}),c}(e,"",t,n)}},function(e,t,n){"use strict";var o=n(9),r=n(4),i=n(11),s=n(12);n(6).inject(s),e.exports={Component:o,createElement:r.createElement,render:i.render,unmountComponentAtNode:i.unmountComponentAtNode}},function(e,t,n){"use strict";const o=n(0),r=n(10),i=n(1),s=n(3),u=n(2),c=n(5);class d{constructor(e){this.props=e,this._currentElement=null,this._pendingState=null,this._renderedComponent=null,this._renderedNode=null,i("function"==typeof this.render)}setState(e){this._pendingState=e,r.enqueueSetState(this,e)}_construct(e){this._currentElement=e}mountComponent(){let e=this.render(),t=s(e);return this._renderedComponent=t,o.mountComponent(t)}receiveComponent(e){this.updateComponent(this._currentElement,e)}updateComponent(e,t){this._currentElement=t,this.props=t.props,this.state=this._pendingState,this._pendingState=null;let n=this._renderedComponent._currentElement,r=this.render();if(c(n,r))o.receiveComponent(this._renderedComponent,r);else{o.unmountComponent(this._renderedComponent);let e=s(r),t=o.mountComponent(e);u.replaceNode(this._renderedComponent._domNode,t),this._renderedComponent=e}}performUpdateIfNecessary(){this.updateComponent(this._currentElement,this._currentElement)}unmountComponent(){this._renderedComponent&&o.unmountComponent(this._renderedComponent)}}d.isDilithiumClass=!0,e.exports=d},function(e,t,n){"use strict";const o=n(0);e.exports={enqueueSetState:function(e,t){e._pendingState=Object.assign({},e.state,t),o.performUpdateIfNecessary(e)}}},function(e,t,n){"use strict";const o=n(4),r=n(1),i=n(2),s=n(5),u=n(3),c=n(0),d="dlthmRootId";let p=1;const l={};function m(e){return!!e.dataset[d]}function h(e,t){t.dataset[d]=p;let n=u(e);l[p]=n;let o=c.mountComponent(n,t);i.empty(t),i.appendChild(t,o),p++}function a(e){r(e&&m(e));let t=e.dataset[d],n=l[t];c.unmountComponent(n),delete l[t],i.empty(e),delete e.dataset[d]}e.exports={render:function(e,t){r(o.isValidElement(e)),m(t)?function(e,t){r(t&&m(t));let n=t.dataset[d],o=l[n];s(o,e)||(a(t),h(e,t))}(e,t):h(e,t)},unmountComponentAtNode:a}},function(e,t,n){"use strict";const o=n(13),r=n(2),i=n(1);e.exports=class extends o{constructor(e){super(),this._currentElement=e,this._domNode=null}mountComponent(){let e=document.createElement(this._currentElement.type);return this._domNode=e,this._updateDOMProperties({},this._currentElement.props),this._createInitialDOMChildren(this._currentElement.props),e}unmountComponent(){this.unmountChildren()}receiveComponent(e){this.updateComponent(this._currentElement,e)}updateComponent(e,t){this._currentElement=t,this._updateDOMProperties(e.props,t.props),this._updateDOMChildren(e.props,t.props)}_createInitialDOMChildren(e){if("string"==typeof e.children||"number"==typeof e.children)this._domNode.textContent=e.children;else if(e.children){let t=this.mountChildren(e.children);r.appendChildren(this._domNode,t)}}_updateDOMChildren(e,t){let n=typeof e.children,o=typeof t.children;i(n===o),"undefined"!==o&&("string"===o||"number"===o?this._domNode.textContent=t.children:this.updateChildren(t.children))}_updateDOMProperties(e,t){let n={};Object.keys(e).forEach(o=>{t.hasOwnProperty(o)||null==e[o]||("style"===o?Object.keys(e[o]).forEach(e=>{n[e]=""}):r.removeProperty(this._domNode,o))}),Object.keys(t).forEach(o=>{let i=e[o],s=t[o];Object.is(i,s)||("style"===o?i?(Object.keys(i).forEach(e=>{s&&s.hasOwnProperty(e)||(n[e]="")}),Object.keys(s).forEach(e=>{i[e]!==s[e]&&(n[e]=s[e])})):n=s:r.setProperty(this._domNode,o,s),r.updateStyles(this._domNode,n))})}}},function(e,t,n){"use strict";const o=n(0),r=n(14),i=n(7),s=n(2),u={INSERT:1,MOVE:2,REMOVE:3},c={insert:(e,t,n)=>({type:u.INSERT,content:t,toIndex:e._mountIndex,afterNode:n}),move:(e,t,n)=>({type:u.MOVE,fromIndex:e._mountIndex,toIndex:n,afterNode:t}),remove:(e,t)=>({type:u.REMOVE,fromIndex:e._mountIndex,fromNode:t})};e.exports=class{mountChildren(e){let t=r.instantiateChildren(e);return this._renderedChildren=t,Object.keys(t).map((e,n)=>{let r=t[e];return r._mountIndex=n,o.mountComponent(r)})}unmountChildren(){r.unmountChildren(this._renderedChildren)}updateChildren(e){let t=this._renderedChildren,n=[],o={},d=function(e){let t={};return i(e,(e,t,n)=>e[n]=t,t),t}(e);r.updateChildren(t,d,n,o);let p=[],l=0,m=0,h=null;Object.keys(d).forEach((e,o)=>{let r=t[e],i=d[e];r===i?(r._mountIndex<l&&p.push(c.move(r,h,o)),l=Math.max(r._mountIndex,l),r._mountIndex=o):(r&&(l=Math.max(r._mountIndex,l)),i._mountIndex=o,p.push(c.insert(i,n[m],h)),m++),h=i._domNode}),Object.keys(o).forEach(e=>{p.push(c.remove(t[e],o[e]))}),function(e,t){t.forEach(t=>{switch(t.type){case u.INSERT:s.insertChildAfter(e,t.content,t.afterNode);break;case u.MOVE:s.insertChildAfter(e,e.childNodes[fromIndex],t.afterNode);break;case u.REMOVE:s.removeChild(e,t.fromNode);break;default:assert(!1)}})}(this._domNode,p),this._renderedChildren=d}}},function(e,t,n){"use strict";const o=n(3),r=n(7),i=n(5),s=n(0);function u(e,t,n){void 0===e[n]&&(e[n]=o(t))}e.exports={instantiateChildren:function(e){let t={};return r(e,u,t),t},updateChildren:function(e,t,n,r){e=e||{},Object.keys(t).forEach(u=>{let c=e[u],d=c&&c._currentElement,p=t[u];if(c&&i(d,p))s.receiveComponent(c,p),t[u]=c;else{c&&(r[u]=c._domNode,s.unmountComponent(c));let e=o(p);t[u]=e,n.push(s.mountComponent(e))}}),Object.keys(e).forEach(n=>{t.hasOwnProperty(n)||(prevChild=e[n],r[n]=prevChild._domNode,s.unmountComponent(prevChild))})},unmountChildren:function(e){e&&Object.keys(e).forEach(t=>{s.unmountComponent(e[t])})}}}]);