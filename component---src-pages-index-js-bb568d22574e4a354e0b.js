(self.webpackChunkmy_personal_site=self.webpackChunkmy_personal_site||[]).push([[678],{3203:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIDAf/aAAwDAQACEAMQAAABrz7pEetYCGQpPcC7/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIRABIhIgMEI//aAAgBAQABBQLtZr0vQFleW5xF4IC3bkbRj//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAICAgMAAAAAAAAAAAAAAAABAhEQUTEyYf/aAAgBAQAGPwJR2cqtCdCpdcJDI+4//8QAGxAAAwEBAAMAAAAAAAAAAAAAAAERMSFBUXH/2gAIAQEAAT8hX6haxeEEd0jXCSsW1nHbRaPCKj7YtJ2qxcOn/9oADAMBAAIAAwAAABBwDz3/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxBNaXP/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAgEBPxBrSp//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhQTFRYcGBobH/2gAIAQEAAT8Qwatv57lVSb1jq+2LBwLrO5xqxFoHKD9S2it88nhY2GNkpBWIUwmsPxF/Yzj1brzLkUqbB9T/2Q=="},"images":{"fallback":{"src":"/personal-site/static/003f74288cf8bc8ec10998995a8cb754/c233b/profile.jpg","srcSet":"/personal-site/static/003f74288cf8bc8ec10998995a8cb754/91a6d/profile.jpg 75w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/e9c81/profile.jpg 150w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/c233b/profile.jpg 300w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/340cf/profile.jpg 600w","sizes":"(min-width: 300px) 300px, 100vw"},"sources":[{"srcSet":"/personal-site/static/003f74288cf8bc8ec10998995a8cb754/18188/profile.webp 75w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/552fc/profile.webp 150w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/bae41/profile.webp 300w,\\n/personal-site/static/003f74288cf8bc8ec10998995a8cb754/fcdc2/profile.webp 600w","type":"image/webp","sizes":"(min-width: 300px) 300px, 100vw"}]},"width":300,"height":302}')},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2601:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r=n(7294),o=n(7151),i=n(9),a=n(410),c=(0,i.ZP)((function(e){var t=e.className,o=e.children;return r.createElement(a.S,{className:t,src:"../images/profile.jpg",alt:"profile image",width:300,placeholder:"blurred",__imageData:n(3203)},o)})).withConfig({displayName:"style__ProfileImage",componentId:"xe0nja-0"})(["border-radius:300px;border:1px solid black;width:300px;margin-top:20px;align-self:center;justify-self:center;"]),u=i.ZP.h1.withConfig({displayName:"style__Title",componentId:"xe0nja-1"})(["font-size:3rem;width:auto;text-align:center;"]),s=i.ZP.section.withConfig({displayName:"style__GalaxyBg",componentId:"xe0nja-2"})(["width:100%;height:calc(100vh - 45px);padding-top:20px;padding-bottom:20px;position:relative;display:flex;flex-direction:column;background-color:",";color:",";"],(function(e){return e.theme.bodyBg}),(function(e){return e.theme.bodyText}));function l(){return r.createElement(s,null,r.createElement(c,null),r.createElement(u,null,"Kevin Pleitez"),r.createElement("h6",null,"Fullstack developer"))}var f,A,p,d,h=n(5130),y=n(5697),b=n.n(y),m=n(4839),g=n.n(m),w=n(2993),T=n.n(w),v=n(6494),E=n.n(v),C="bodyAttributes",j="htmlAttributes",O="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(S).map((function(e){return S[e]})),"charset"),P="cssText",B="href",I="http-equiv",k="innerHTML",N="itemprop",R="name",L="property",Y="rel",M="src",Q="target",D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",F="defer",H="encodeSpecialCharacters",q="onChangeClientState",z="titleTemplate",U=Object.keys(D).reduce((function(e,t){return e[D[t]]=t,e}),{}),G=[S.NOSCRIPT,S.SCRIPT,S.STYLE],K="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ee=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},te=function(e){var t=ae(e,S.TITLE),n=ae(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ae(e,_);return t||r||void 0},ne=function(e){return ae(e,q)||function(){}},re=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},oe=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ie=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&fe("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===Y&&"canonical"===e[n].toLowerCase()||u===Y&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==k&&c!==P&&c!==N||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=E()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ae=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ce=(f=Date.now(),function(e){var t=Date.now();t-f>16?(f=t,e(t)):setTimeout((function(){ce(e)}),0)}),ue=function(e){return clearTimeout(e)},se="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ce:n.g.requestAnimationFrame||ce,le="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:n.g.cancelAnimationFrame||ue,fe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Ae=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,A=e.titleAttributes;ye(S.BODY,r),ye(S.HTML,o),he(f,A);var p={baseTag:be(S.BASE,n),linkTags:be(S.LINK,i),metaTags:be(S.META,a),noscriptTags:be(S.NOSCRIPT,c),scriptTags:be(S.SCRIPT,s),styleTags:be(S.STYLE,l)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),u(e,d,h)},de=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),ye(S.TITLE,t)},ye=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(K),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(K):n.getAttribute(K)!==a.join(",")&&n.setAttribute(K,a.join(","))}},be=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===P)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(K,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)},we=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(o={key:e})[K]=!0,i=ge(n,o),[r.createElement(S.TITLE,i,e)];var e,n,o,i},toString:function(){return function(e,t,n,r){var o=me(n),i=de(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ee(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ee(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case C:case j:return{toComponent:function(){return ge(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var o,i=((o={key:n})[K]=!0,o);return Object.keys(t).forEach((function(e){var n=D[e]||e;if(n===k||n===P){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),r.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===k||e===P)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ee(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,A=e.titleAttributes;return{base:we(S.BASE,t,r),bodyAttributes:we(C,n,r),htmlAttributes:we(j,o,r),link:we(S.LINK,i,r),meta:we(S.META,a,r),noscript:we(S.NOSCRIPT,c,r),script:we(S.SCRIPT,u,r),style:we(S.STYLE,s,r),title:we(S.TITLE,{title:f,titleAttributes:A},r)}},ve=g()((function(e){return{baseTag:oe([B,Q],e),bodyAttributes:re(C,e),defer:ae(e,F),encode:ae(e,H),htmlAttributes:re(j,e),linkTags:ie(S.LINK,[Y,B],e),metaTags:ie(S.META,[R,x,I,L,N],e),noscriptTags:ie(S.NOSCRIPT,[k],e),onChangeClientState:ne(e),scriptTags:ie(S.SCRIPT,[M,k],e),styleTags:ie(S.STYLE,[P],e),title:te(e),titleAttributes:re(O,e)}}),(function(e){Ae&&le(Ae),e.defer?Ae=se((function(){pe(e,(function(){Ae=null}))})):(pe(e),Ae=null)}),Te)((function(){return null})),Ee=(A=ve,d=p=function(e){function t(){return Z(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return X({},r,((t={})[n.type]=[].concat(r[n.type]||[],[X({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return X({},o,((t={})[r.type]=a,t.titleAttributes=X({},i),t));case S.BODY:return X({},o,{bodyAttributes:X({},i)});case S.HTML:return X({},o,{htmlAttributes:X({},i)})}return X({},o,((n={})[r.type]=X({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=X({},t);return Object.keys(e).forEach((function(t){var r;n=X({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,o={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(J(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:o=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:o,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(o,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=J(e,["children"]),o=X({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.createElement(A,o)},V(t,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),t}(r.Component),p.propTypes={base:b().object,bodyAttributes:b().object,children:b().oneOfType([b().arrayOf(b().node),b().node]),defaultTitle:b().string,defer:b().bool,encodeSpecialCharacters:b().bool,htmlAttributes:b().object,link:b().arrayOf(b().object),meta:b().arrayOf(b().object),noscript:b().arrayOf(b().object),onChangeClientState:b().func,script:b().arrayOf(b().object),style:b().arrayOf(b().object),title:b().string,titleAttributes:b().object,titleTemplate:b().string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=A.peek,p.rewind=function(){var e=A.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},d);Ee.renderStatic=Ee.rewind;function Ce(e){return r.createElement(r.Fragment,null,r.createElement(Ee,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("title",null,"kev95p - Home"),r.createElement("link",{rel:"canonical",href:"http://mysite.com/example"})),r.createElement(i.f6,{theme:h.r},r.createElement(o.Z,e),r.createElement(l,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bb568d22574e4a354e0b.js.map