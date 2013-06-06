var requirejs,require,define;(function(Y){function I(e){return"[object Function]"===L.call(e)}function J(e){return"[object Array]"===L.call(e)}function x(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function M(e,t){if(e){var n;for(n=e.length-1;-1<n&&(!e[n]||!t(e[n],n,e));n-=1);}}function r(e,t){return da.call(e,t)}function i(e,t){return r(e,t)&&e[t]}function E(e,t){for(var n in e)if(r(e,n)&&t(e[n],n))break}function Q(e,t,n,i){return t&&E(t,function(t,s){if(n||!r(e,s))i&&"string"!=typeof t?(e[s]||(e[s]={}),Q(e[s],t,n,i)):e[s]=t}),e}function t(e,t){return function(){return t.apply(e,arguments)}}function Z(e){if(!e)return e;var t=Y;return x(e.split("."),function(e){t=t[e]}),t}function F(e,t,n,r){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=r,n&&(t.originalError=n),t}function ea(e){function n(e,t,n){var r,s,o,u,a,f,l,c=t&&t.split("/");r=c;var h=C.map,p=h&&h["*"];if(e&&"."===e.charAt(0))if(t){r=i(C.pkgs,t)?c=[t]:c.slice
(0,c.length-1),t=e=r.concat(e.split("/"));for(r=0;t[r];r+=1)if(s=t[r],"."===s)t.splice(r,1),r-=1;else if(".."===s){if(1===r&&(".."===t[2]||".."===t[0]))break;0<r&&(t.splice(r-1,2),r-=2)}r=i(C.pkgs,t=e[0]),e=e.join("/"),r&&e===t+"/"+r.main&&(e=t)}else 0===e.indexOf("./")&&(e=e.substring(2));if(n&&(c||p)&&h){t=e.split("/");for(r=t.length;0<r;r-=1){o=t.slice(0,r).join("/");if(c)for(s=c.length;0<s;s-=1)if(n=i(h,c.slice(0,s).join("/")))if(n=i(n,o)){u=n,a=r;break}if(u)break;!f&&p&&i(p,o)&&(f=i(p,o),l=r)}!u&&f&&(u=f,a=l),u&&(t.splice(0,a,u),e=t.join("/"))}return e}function s(e){z&&x(document.getElementsByTagName("script"),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===S.contextName)return t.parentNode.removeChild(t),!0})}function o(e){var t=i(C.paths,e);if(t&&J(t)&&1<t.length)return s(e),t.shift(),S.require.undef(e),S.require([e]),!0}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a
(e,t,r,s){var o,a,f=null,l=t?t.name:null,c=e,h=!0,p="";return e||(h=!1,e="_@r"+(D+=1)),e=u(e),f=e[0],e=e[1],f&&(f=n(f,l,s),a=i(M,f)),e&&(f?p=a&&a.normalize?a.normalize(e,function(e){return n(e,l,s)}):n(e,l,s):(p=n(e,l,s),e=u(p),f=e[0],p=e[1],r=!0,o=S.nameToUrl(p))),r=f&&!a&&!r?"_unnormalized"+(H+=1):"",{prefix:f,name:p,parentMap:t,unnormalized:!!r,url:o,originalName:c,isDefine:h,id:(f?f+"!"+p:p)+r}}function f(e){var t=e.id,n=i(k,t);return n||(n=k[t]=new S.Module(e)),n}function c(e,t,n){var s=e.id,o=i(k,s);r(M,s)&&(!o||o.defineEmitComplete)?"defined"===t&&n(M[s]):f(e).on(t,n)}function h(e,t){var n=e.requireModules,r=!1;t?t(e):(x(n,function(t){if(t=i(k,t))t.error=e,t.events.error&&(r=!0,t.emit("error",e))}),!r)&&l.onError(e)}function p(){R.length&&(fa.apply(A,[A.length-1,0].concat(R)),R=[])}function d(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,x(e.depMaps,function(r,s){var o=r.id,u=i(k,o);u&&!e.depMatched[s]&&!n[o]&&(i(t,o)?(e.defineDep(s,M[o]),e.check()):d(u,t,n))}),n
[r]=!0)}function v(){var e,t,n,r,i=(n=1e3*C.waitSeconds)&&S.startTime+n<(new Date).getTime(),u=[],a=[],f=!1,l=!0;if(!b){b=!0,E(k,function(n){e=n.map,t=e.id;if(n.enabled&&(e.isDefine||a.push(n),!n.error))if(!n.inited&&i)o(t)?f=r=!0:(u.push(t),s(t));else if(!n.inited&&n.fetched&&e.isDefine&&(f=!0,!e.prefix))return l=!1});if(i&&u.length)return n=F("timeout","Load timeout for modules: "+u,null,u),n.contextName=S.contextName,h(n);l&&x(a,function(e){d(e,{},{})}),(!i||r)&&f&&(z||$)&&!N&&(N=setTimeout(function(){N=0,v()},50)),b=!1}}function m(e){r(M,e[0])||f(a(e[0],null,!0)).init(e[1],e[2])}function g(e){var e=e.currentTarget||e.srcElement,t=S.onScriptLoad;return e.detachEvent&&!V?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=S.onScriptError,(!e.detachEvent||V)&&e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function y(){var e;for(p();A.length;){e=A.shift();if(null===e[0])return h(F("mismatch","Mismatched anonymous define() module: "+
e[e.length-1]));m(e)}}var b,w,S,T,N,C={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},k={},L={},A=[],M={},_={},D=1,H=1;return T={require:function(e){return e.require?e.require:e.require=S.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?e.exports:e.exports=M[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return C.config&&i(C.config,e.map.id)||{}},exports:M[e.map.id]}}},w=function(e){this.events=i(L,e.id)||{},this.map=e,this.shim=i(C.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},w.prototype={init:function(e,n,r,i){i=i||{},this.inited||(this.factory=n,r?this.on("error",r):this.events.error&&(r=t(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e
]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,S.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();S.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],t(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;_[e]||(_[e]=!0,S.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id;t=this.depExports;var r=this.exports,i=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(1>this.depCount&&!this.defined){if(I(i)){if(this.events.error)try{r=S.execCb(n,i,t,r)}catch(s){e=s}else r=S.execCb(n,i,t,r);this.map.isDefine&&((t=this.module)&&void 0!==t.exports&&t.exports!==this.exports?r=t.exports:void 0===r&&this.usingExports&&(r=this.exports));if(e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define"
,h(this.error=e)}else r=i;this.exports=r,this.map.isDefine&&!this.ignore&&(M[n]=r,l.onResourceLoad)&&l.onResourceLoad(S,this.map,this.depMaps),delete k[n],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,s=e.id,o=a(e.prefix);this.depMaps.push(o),c(o,"defined",t(this,function(o){var u,p;p=this.map.name;var d=this.map.parentMap?this.map.parentMap.name:null,v=S.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){if(o.normalize&&(p=o.normalize(p,function(e){return n(e,d,!0)})||""),o=a(e.prefix+"!"+p,this.map.parentMap),c(o,"defined",t(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),p=i(k,o.id))this.depMaps.push(o),this.events.error&&p.on("error",t(this,function(e){this.emit("error",e)})),p.enable()}else u=t(this,function(e){this.init([],function(){return e},null,{enabled:!0
})}),u.error=t(this,function(e){this.inited=!0,this.error=e,e.requireModules=[s],E(k,function(e){0===e.map.id.indexOf(s+"_unnormalized")&&delete k[e.map.id]}),h(e)}),u.fromText=t(this,function(t,n){var i=e.name,o=a(i),c=O;n&&(t=n),c&&(O=!1),f(o),r(C.config,s)&&(C.config[i]=C.config[s]);try{l.exec(t)}catch(p){return h(F("fromtexteval","fromText eval for "+s+" failed: "+p,p,[s]))}c&&(O=!0),this.depMaps.push(o),S.completeLoad(i),v([i],u)}),o.load(e.name,v,u,C)})),S.enable(o,this),this.pluginMaps[o.id]=o},enable:function(){this.enabling=this.enabled=!0,x(this.depMaps,t(this,function(e,n){var s,o;if("string"==typeof e){e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[n]=e;if(s=i(T,e.id)){this.depExports[n]=s(this);return}this.depCount+=1,c(e,"defined",t(this,function(e){this.defineDep(n,e),this.check()})),this.errback&&c(e,"error",this.errback)}s=e.id,o=k[s],!r(T,s)&&o&&!o.enabled&&S.enable(e,this)})),E(this.pluginMaps,t(this,function(e){var t=i(k,e.id);t&&!
t.enabled&&S.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){x(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},S={config:C,contextName:e,registry:k,defined:M,urlFetched:_,defQueue:A,Module:w,makeModuleMap:a,nextTick:l.nextTick,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=C.pkgs,n=C.shim,r={paths:!0,config:!0,map:!0};E(e,function(e,t){r[t]?"map"===t?Q(C[t],e,!0,!0):Q(C[t],e,!0):C[t]=e}),e.shim&&(E(e.shim,function(e,t){J(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=S.makeShimExports(e)),n[t]=e}),C.shim=n),e.packages&&(x(e.packages,function(e){e="string"==typeof e?{name:e}:e,t[e.name]={name:e.name,location:e.location||e.name,main:(e.main||"main").replace(ga,"").replace(aa,"")}}),C.pkgs=t),E(k,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=a(t))}),(e.deps||e.callback)&&S.require(e.deps||[],e.callback
)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(Y,arguments)),t||e.exports&&Z(e.exports)}},makeRequire:function(t,s){function o(n,i,u){var c,p;return s.enableBuildCallback&&i&&I(i)&&(i.__requireJsBuild=!0),"string"==typeof n?I(i)?h(F("requireargs","Invalid require call"),u):t&&r(T,n)?T[n](k[t.id]):l.get?l.get(S,n,t):(c=a(n,t,!1,!0),c=c.id,r(M,c)?M[c]:h(F("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(y(),S.nextTick(function(){y(),p=f(a(null,t)),p.skipMap=s.skipMap,p.init(n,i,u,{enabled:!0}),v()}),o)}return s=s||{},Q(o,{isBrowser:z,toUrl:function(e){var r,i=e.lastIndexOf("."),s=e.split("/")[0];return-1!==i&&("."!==s&&".."!==s||1<i)&&(r=e.substring(i,e.length),e=e.substring(0,i)),e=S.nameToUrl(n(e,t&&t.id,!0),r||".fake"),r?e:e.substring(0,e.length-5)},defined:function(e){return r(M,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,r(M,e)||r(k,e)}}),t||(o.undef=function(e){p();var n=
a(e,t,!0),r=i(k,e);delete M[e],delete _[n.url],delete L[e],r&&(r.events.defined&&(L[e]=r.events),delete k[e])}),o},enable:function(e){i(k,e.id)&&f(e).enable()},completeLoad:function(e){var t,n,s=i(C.shim,e)||{},u=s.exports;for(p();A.length;){n=A.shift();if(null===n[0]){n[0]=e;if(t)break;t=!0}else n[0]===e&&(t=!0);m(n)}n=i(k,e);if(!t&&!r(M,e)&&n&&!n.inited){if(C.enforceDefine&&(!u||!Z(u)))return o(e)?void 0:h(F("nodefine","No define call for "+e,null,[e]));m([e,s.deps||[],s.exportsFn])}v()},nameToUrl:function(e,t){var n,r,s,o,u,a;if(l.jsExtRegExp.test(e))o=e+(t||"");else{n=C.paths,r=C.pkgs,o=e.split("/");for(u=o.length;0<u;u-=1){if(a=o.slice(0,u).join("/"),s=i(r,a),a=i(n,a)){J(a)&&(a=a[0]),o.splice(0,u,a);break}if(s){n=e===s.name?s.location+"/"+s.main:s.location,o.splice(0,u,n);break}}o=o.join("/"),o+=t||(/\?/.test(o)?"":".js"),o=("/"===o.charAt(0)||o.match(/^[\w\+\.\-]+:/)?"":C.baseUrl)+o}return C.urlArgs?o+((-1===o.indexOf("?")?"?":"&")+C.urlArgs):o},load:function(e,t){l.load(S,e,t)},execCb
:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if("load"===e.type||ha.test((e.currentTarget||e.srcElement).readyState))P=null,e=g(e),S.completeLoad(e.id)},onScriptError:function(e){var t=g(e);if(!o(t.id))return h(F("scripterror","Script error",e,[t.id]))}},S.require=S.makeRequire(),S}var l,w,B,D,s,H,P,K,ba,ca,ia=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,ja=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,aa=/\.js$/,ga=/^\.\//;w=Object.prototype;var L=w.toString,da=w.hasOwnProperty,fa=Array.prototype.splice,z="undefined"!=typeof window&&!!navigator&&!!document,$=!z&&"undefined"!=typeof importScripts,ha=z&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,V="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),C={},q={},R=[],O=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(I(requirejs))return;q=requirejs,requirejs=void 0}"undefined"!=typeof require&&!I(require)&&(q=require,require=void 0),l=requirejs=function(e,t,n,
r){var s,o="_";return!J(e)&&"string"!=typeof e&&(s=e,J(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),(r=i(C,o))||(r=C[o]=l.s.newContext(o)),s&&r.configure(s),r.require(e,t,n)},l.config=function(e){return l(e)},l.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=l),l.version="2.1.4",l.jsExtRegExp=/^\/|:|\?|\.js$/,l.isBrowser=z,w=l.s={contexts:C,newContext:ea},l({}),x(["toUrl","undef","defined","specified"],function(e){l[e]=function(){var t=C._;return t.require[e].apply(t,arguments)}}),z&&(B=w.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0])&&(B=w.head=D.parentNode),l.onError=function(e){throw e},l.load=function(e,t,n){var r=e&&e.config||{},i;if(z)return i=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=r.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute
("data-requiremodule",t),i.attachEvent&&!(i.attachEvent.toString&&0>i.attachEvent.toString().indexOf("[native code"))&&!V?(O=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)):(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)),i.src=n,K=i,D?B.insertBefore(i,D):B.appendChild(i),K=null,i;$&&(importScripts(n),e.completeLoad(t))},z&&M(document.getElementsByTagName("script"),function(e){B||(B=e.parentNode);if(s=e.getAttribute("data-main"))return q.baseUrl||(H=s.split("/"),ba=H.pop(),ca=H.length?H.join("/")+"/":"./",q.baseUrl=ca,s=ba),s=s.replace(aa,""),q.deps=q.deps?q.deps.concat(s):[s],!0}),define=function(e,t,n){var r,i;"string"!=typeof e&&(n=t,t=e,e=null),J(t)||(n=t,t=[]),!t.length&&I(n)&&n.length&&(n.toString().replace(ia,"").replace(ja,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t)),O&&((r=K)||(P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(e){if("interactive"===
e.readyState)return P=e}),r=P),r&&(e||(e=r.getAttribute("data-requiremodule")),i=C[r.getAttribute("data-requirecontext")])),(i?i.defQueue:R).push([e,t,n])},define.amd={jQuery:!0},l.exec=function(b){return eval(b)},l(q)}})(this);