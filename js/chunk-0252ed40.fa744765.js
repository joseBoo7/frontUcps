(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0252ed40"],{"73cf":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container col-lg-6 col-md-12 col-sm-12 my-5"},[r("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:e.selected,disableScrolling:"false"}}),r("div",{staticClass:"card"},[e._m(0),r("div",{staticClass:"card-body"},[r("b-alert",{attrs:{show:e.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":e.countDownChanged}},[r("strong",[e._v("Error. "+e._s(e.error)+",")]),e._v(" ocultando en "+e._s(e.dismissCountDown)+" segundos... ")]),e.show?r("b-form",["T"==e.optionDni?r("div",[r("hr"),r("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-1",label:"Número de DNI:","label-for":"input-1",description:"Ingrese DNI real."}},[r("b-form-input",{attrs:{state:null!=e.form.dni&&8==e.form.dni.length,autofocus:"autofocus",id:"input-1",type:"number",placeholder:"Ingrese DNI",required:""},model:{value:e.form.dni,callback:function(t){e.$set(e.form,"dni",t)},expression:"form.dni"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-1",label:"Correo electrónico:","label-for":"input-1"}},[r("b-form-input",{attrs:{state:e.validEmail(e.form.usuario),id:"input-1",type:"email",placeholder:"Ingrese correo",required:""},model:{value:e.form.usuario,callback:function(t){e.$set(e.form,"usuario",t)},expression:"form.usuario"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Contraseña:",description:"Ingrese al menos 1 letra, al menos 1 número, al menos 1 letra mayúscula, al menos 6 caracteres, no se permite espacios."}},[r("b-input-group",[r("b-form-input",{attrs:{state:e.validContra(e.form.contraseña),id:"input-2",type:e.seeContra,placeholder:"Ingrese contraseña",required:""},model:{value:e.form.contraseña,callback:function(t){e.$set(e.form,"contraseña",t)},expression:"form.contraseña"}}),r("b-input-group-append",[r("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{button:"","button-variant":"tranparent",value:"text","unchecked-value":"password"},model:{value:e.seeContra,callback:function(t){e.seeContra=t},expression:"seeContra"}},["password"==e.seeContra?r("b-icon-eye-slash"):r("b-icon-eye")],1)],1)],1)],1),r("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-2",label:"Verificar contraseña:","label-for":"input-2"}},[r("b-input-group",[r("b-form-input",{attrs:{id:"input-2",type:e.seeContraVerify,placeholder:"Ingrese nuevamente la contraseña",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEditItem.apply(null,arguments)}},model:{value:e.form.verificar,callback:function(t){e.$set(e.form,"verificar",t)},expression:"form.verificar"}}),r("b-input-group-append",[r("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{button:"","button-variant":"tranparent",value:"text","unchecked-value":"password"},model:{value:e.seeContraVerify,callback:function(t){e.seeContraVerify=t},expression:"seeContraVerify"}},["password"==e.seeContraVerify?r("b-icon-eye-slash"):r("b-icon-eye")],1)],1)],1)],1),r("vue-recaptcha",{staticClass:"my-3",attrs:{sitekey:"6Le_4HQUAAAAALi-pi9JgbV1iDv7Ix1DMnrEotxj"},on:{render:e.renderMethod,expired:e.expiredMethod,verify:e.handleSuccess,error:e.handleError}}),r("div",{staticClass:"text-center"},[r("b-alert",{attrs:{show:1!=e.selectButton,dismissible:"",variant:"danger"}},[r("b",{staticClass:"mb-0"},[e._v(" Marque la casilla de verificación. ")])]),r("b-button",{staticClass:"mb-3 w-100",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none"},attrs:{type:"button",disabled:1!=e.selectButton,id:"popover-target"},on:{click:e.saveEditItem}},[e._v("Registrarse")]),r("button",{staticClass:"btn btn-danger w-100",staticStyle:{"background-color":"#1d425e",border:"none"},attrs:{type:"button"},on:{click:e.cambio}},[e._v(" Volver ")])],1)],1):"F"==e.optionDni?r("div",[r("b-alert",{attrs:{variant:"warning",show:"",dismissible:"",fade:""}},[r("b",[e._v("Campos adicionales por problema de DNI. Ingrese los datos correctamente, esta información sera usada por el sistema.")])]),r("hr"),r("b-form-group",{staticClass:"my-2",attrs:{label:"Número de DNI:",description:"Ingrese DNI real."}},[r("b-form-input",{attrs:{state:null!=e.form.dni&&8==e.form.dni.length,autofocus:"autofocus",type:"number",placeholder:"Ingrese DNI",required:""},model:{value:e.form.dni,callback:function(t){e.$set(e.form,"dni",t)},expression:"form.dni"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Fecha de nacimiento:"}},[r("b-form-input",{attrs:{state:null!=e.form.date,type:"date",required:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Nombres:"}},[r("b-form-input",{attrs:{state:null!=e.form.name,type:"text",onkeyup:"javascript:this.value=this.value.toUpperCase();",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Apellido paterno:"}},[r("b-form-input",{attrs:{state:null!=e.form.lastnameFather,type:"text",onkeyup:"javascript:this.value=this.value.toUpperCase();",required:""},model:{value:e.form.lastnameFather,callback:function(t){e.$set(e.form,"lastnameFather",t)},expression:"form.lastnameFather"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Apellido materno:"}},[r("b-form-input",{attrs:{state:null!=e.form.lastnameMother,type:"text",onkeyup:"javascript:this.value=this.value.toUpperCase();",required:""},model:{value:e.form.lastnameMother,callback:function(t){e.$set(e.form,"lastnameMother",t)},expression:"form.lastnameMother"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Genero:"}},[r("b-form-select",{attrs:{state:null!=e.form.gender,options:[{text:"Femenino",value:"F"},{text:"Masculino",value:"M"}]},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-1",label:"Correo electrónico:","label-for":"input-1"}},[r("b-form-input",{attrs:{state:e.validEmail(e.form.usuario),id:"input-1",type:"email",placeholder:"Ingrese correo",required:""},model:{value:e.form.usuario,callback:function(t){e.$set(e.form,"usuario",t)},expression:"form.usuario"}})],1),r("b-form-group",{staticClass:"my-2",attrs:{label:"Contraseña:",description:"Ingrese al menos 1 letra, al menos 1 número, al menos 1 letra mayúscula, al menos 6 caracteres, no se permite espacios."}},[r("b-input-group",[r("b-form-input",{attrs:{state:e.validContra(e.form.contraseña),id:"input-2",type:e.seeContra,placeholder:"Ingrese contraseña",required:""},model:{value:e.form.contraseña,callback:function(t){e.$set(e.form,"contraseña",t)},expression:"form.contraseña"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{switch:"",value:"text","unchecked-value":"password"},model:{value:e.seeContra,callback:function(t){e.seeContra=t},expression:"seeContra"}})],1)],1)],1),r("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-2",label:"Verificar contraseña:","label-for":"input-2"}},[r("b-input-group",[r("b-form-input",{attrs:{id:"input-2",type:e.seeContraVerify,placeholder:"Ingrese nuevamente la contraseña",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveEditItem.apply(null,arguments)}},model:{value:e.form.verificar,callback:function(t){e.$set(e.form,"verificar",t)},expression:"form.verificar"}}),r("b-input-group-append",{attrs:{"is-text":""}},[r("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{switch:"",value:"text","unchecked-value":"password"},model:{value:e.seeContraVerify,callback:function(t){e.seeContraVerify=t},expression:"seeContraVerify"}})],1)],1)],1),r("vue-recaptcha",{staticClass:"my-3",attrs:{sitekey:"6Le_4HQUAAAAALi-pi9JgbV1iDv7Ix1DMnrEotxj"},on:{render:e.renderMethod,expired:e.expiredMethod,verify:e.handleSuccess,error:e.handleError}}),r("div",{staticClass:"text-center"},[r("b-alert",{attrs:{show:1!=e.selectButton,dismissible:"",variant:"danger"}},[r("b",{staticClass:"mb-0"},[e._v(" Marque la casilla de verificación. ")])]),r("b-button",{staticClass:"mb-3 w-100",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none"},attrs:{type:"button",disabled:1!=e.selectButton,id:"popover-target"},on:{click:e.saveEditItem2}},[e._v("Registrarse")]),r("button",{staticClass:"btn btn-danger w-100",staticStyle:{"background-color":"#1d425e",border:"none"},attrs:{type:"button"},on:{click:e.cambio}},[e._v(" Volver ")])],1)],1):e._e()]):e._e()],1)])],1)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("h1",{staticClass:"text-center"},[e._v("Registro")])])}],a=r("1da1"),i=(r("96cf"),r("ac1f"),r("00b4"),r("b0c0"),r("2b0e")),s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},s(e,t)};function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u;function l(e){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{while((void 0===t||t-- >0)&&!(n=a.next()).done)i.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=a["return"])&&r.call(a)}finally{if(o)throw o.error}}return i}function d(e,t,r){if(r||2===arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}var p=[],v=function(){function e(e){this.active=!0,this.effects=[],this.cleanups=[],this.vm=e}return e.prototype.run=function(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0},e.prototype.on=function(){this.active&&(p.push(this),u=this)},e.prototype.off=function(){this.active&&(p.pop(),u=p[p.length-1])},e.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach((function(e){return e.stop()})),this.cleanups.forEach((function(e){return e()})),this.active=!1)},e}();(function(e){function t(t){void 0===t&&(t=!1);var r=this,n=void 0;return j((function(){n=Q(S())})),r=e.call(this,n)||this,t||m(r),r}c(t,e)})(v);function m(e,t){var r;if(t=t||u,t&&t.active)t.effects.push(e);else{var n=null===(r=I())||void 0===r?void 0:r.proxy;n&&n.$on("hook:destroyed",(function(){return e.stop()}))}}function b(e){if(!e.scope){var t=new v(e.proxy);e.scope=t,e.proxy.$on("hook:destroyed",(function(){return t.stop()}))}return e.scope}var h=void 0;try{var y=r("2b0e");y&&x(y)?h=y:y&&"default"in y&&x(y.default)&&(h=y.default)}catch(Ge){}var g=null,_=null,w=!0,C="__composition_api_installed__";function x(e){return e&&z(e)&&"Vue"===e.name}function k(e){return g&&q(e,C)}function S(){return g}function $(){var e=g||h;return e}function E(e){g=e,Object.defineProperty(e,C,{configurable:!0,writable:!0,value:!0})}function j(e){var t=w;w=!1;try{e()}finally{w=t}}function O(e){if(w){var t=_;null===t||void 0===t||t.scope.off(),_=e,null===_||void 0===_||_.scope.on()}}function I(){return _}var A=new WeakMap;function M(e){if(A.has(e))return A.get(e);var t={proxy:e,update:e.$forceUpdate,type:e.$options,uid:e._uid,emit:e.$emit.bind(e),parent:null,root:null};b(t);var r=["data","props","attrs","refs","vnode","slots"];return r.forEach((function(r){F(t,r,{get:function(){return e["$".concat(r)]}})})),F(t,"isMounted",{get:function(){return e._isMounted}}),F(t,"isUnmounted",{get:function(){return e._isDestroyed}}),F(t,"isDeactivated",{get:function(){return e._inactive}}),F(t,"emitted",{get:function(){return e._events}}),A.set(e,t),e.$parent&&(t.parent=M(e.$parent)),e.$root&&(t.root=M(e.$root)),t}var D=function(e){return Object.prototype.toString.call(e)};function R(e){return"function"===typeof e&&/native code/.test(e.toString())}var B="undefined"!==typeof Symbol&&R(Symbol)&&"undefined"!==typeof Reflect&&R(Reflect.ownKeys),V=function(e){return e};function F(e,t,r){var n=r.get,o=r.set;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:n||V,set:o||V})}function T(e,t,r,n){Object.defineProperty(e,t,{value:r,enumerable:!!n,writable:!0,configurable:!0})}function q(e,t){return Object.hasOwnProperty.call(e,t)}function N(e){return Array.isArray(e)}Object.prototype.toString;var P=4294967295;function U(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)&&t<=P}function L(e){return null!==e&&"object"===typeof e}function H(e){return"[object Object]"===D(e)}function z(e){return"function"===typeof e}function J(e,t){return t=t||I(),t}function Q(e,t){void 0===t&&(t={});var r=e.config.silent;e.config.silent=!0;var n=new e(t);return e.config.silent=r,n}function W(e){var t=S();return t&&e instanceof t}function G(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e.$scopedSlots[t])return e.$scopedSlots[t].apply(e,r)}}function K(e,t){var r;if(e){if(e._normalized)return e._normalized;for(var n in r={},e)e[n]&&"$"!==n[0]&&(r[n]=!0)}else r={};for(var n in t)n in r||(r[n]=!0);return r}function X(e){return B?Symbol.for(e):e}X("composition-api.preFlushQueue"),X("composition-api.postFlushQueue");var Z="composition-api.refKey",Y=new WeakMap,ee=(new WeakMap,new WeakMap);function te(e,t,r){var n=S(),o=n.util,a=(o.warn,o.defineReactive);var i=e.__ob__;function s(){i&&L(r)&&!q(r,"__ob__")&&pe(r)}if(N(e)){if(U(t))return e.length=Math.max(e.length,t),e.splice(t,1,r),s(),r;if("length"===t&&r!==e.length)return e.length=r,null===i||void 0===i||i.dep.notify(),r}return t in e&&!(t in Object.prototype)?(e[t]=r,s(),r):e._isVue||i&&i.vmCount?r:i?(a(i.value,t,r),fe(e,t,r),s(),i.dep.notify(),r):(e[t]=r,r)}var re=function(){function e(e){var t=e.get,r=e.set;F(this,"value",{get:t,set:r})}return e}();function ne(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=new re(e);r&&(n.effect=!0);var o=Object.seal(n);return t&&ee.set(o,!0),o}function oe(e){var t;if(ae(e))return e;var r=be((t={},t[Z]=e,t));return ne({get:function(){return r[Z]},set:function(e){return r[Z]=e}})}function ae(e){return e instanceof re}function ie(e){if(!H(e))return e;var t={};for(var r in e)t[r]=se(e,r);return t}function se(e,t){t in e||te(e,t,void 0);var r=e[t];return ae(r)?r:ne({get:function(){return e[t]},set:function(r){return e[t]=r}})}function ce(e){var t;return Boolean(e&&q(e,"__ob__")&&"object"===typeof e.__ob__&&(null===(t=e.__ob__)||void 0===t?void 0:t.__raw__))}function ue(e){var t;return Boolean(e&&q(e,"__ob__")&&"object"===typeof e.__ob__&&!(null===(t=e.__ob__)||void 0===t?void 0:t.__raw__))}function le(e){if(!(!H(e)||ce(e)||N(e)||ae(e)||W(e)||Y.has(e))){Y.set(e,!0);for(var t=Object.keys(e),r=0;r<t.length;r++)fe(e,t[r])}}function fe(e,t,r){if("__ob__"!==t&&!ce(e[t])){var n,o,a=Object.getOwnPropertyDescriptor(e,t);if(a){if(!1===a.configurable)return;n=a.get,o=a.set,n&&!o||2!==arguments.length||(r=e[t])}le(r),F(e,t,{get:function(){var o=n?n.call(e):r;return t!==Z&&ae(o)?o.value:o},set:function(a){n&&!o||(t!==Z&&ae(r)&&!ae(a)?r.value=a:o?(o.call(e,a),r=a):r=a,le(a))}})}}function de(e){var t,r=$();if(r.observable)t=r.observable(e);else{var n=Q(r,{data:{$$state:e}});t=n._data.$$state}return q(t,"__ob__")||pe(t),t}function pe(e,t){var r,n;if(void 0===t&&(t=new Set),!t.has(e)&&!q(e,"__ob__")&&Object.isExtensible(e)){T(e,"__ob__",ve(e)),t.add(e);try{for(var o=l(Object.keys(e)),a=o.next();!a.done;a=o.next()){var i=a.value,s=e[i];(H(s)||N(s))&&!ce(s)&&Object.isExtensible(s)&&pe(s,t)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}}}function ve(e){return void 0===e&&(e={}),{value:e,dep:{notify:V,depend:V,addSub:V,removeSub:V}}}function me(){return de({}).__ob__}function be(e){if(!L(e))return e;if(!H(e)&&!N(e)||ce(e)||!Object.isExtensible(e))return e;var t=de(e);return le(t),t}var he=function(e){return"on".concat(e[0].toUpperCase()+e.slice(1))};function ye(e){return function(t,r){var n=J(he(e),r);return n&&ge(S(),n,e,t)}}function ge(e,t,r,n){var o=t.proxy.$options,a=e.config.optionMergeStrategies[r],i=_e(t,n);return o[r]=a(o[r],i),i}function _e(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=I();O(e);try{return t.apply(void 0,d([],f(r),!1))}finally{O(o)}}}ye("beforeMount");var we=ye("mounted");ye("beforeUpdate"),ye("updated"),ye("beforeDestroy"),ye("destroyed"),ye("errorCaptured"),ye("activated"),ye("deactivated"),ye("serverPrefetch");var Ce,xe=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=null===(e=I())||void 0===e?void 0:e.proxy;return n?n.$createElement.apply(n,t):(Ce||(Ce=Q(S()).$createElement),Ce.apply(Ce,t))};function ke(e,t,r){var n=e.__composition_api_state__=e.__composition_api_state__||{};n[t]=r}function Se(e,t){return(e.__composition_api_state__||{})[t]}var $e={set:ke,get:Se};function Ee(e,t,r){var n=e.$options.props;t in e||n&&q(n,t)||(ae(r)?F(e,t,{get:function(){return r.value},set:function(e){r.value=e}}):F(e,t,{get:function(){return ue(r)&&r.__ob__.dep.depend(),r},set:function(e){r=e}}))}function je(e){var t=$e.get(e,"rawBindings")||{};if(t&&Object.keys(t).length){for(var r=e.$refs,n=$e.get(e,"refs")||[],o=0;o<n.length;o++){var a=n[o],i=t[a];!r[a]&&i&&ae(i)&&(i.value=null)}var s=Object.keys(r),c=[];for(o=0;o<s.length;o++){a=s[o],i=t[a];r[a]&&i&&ae(i)&&(i.value=r[a],c.push(a))}$e.set(e,"refs",c)}}function Oe(e){var t=[e._vnode];while(t.length){var r=t.pop();if(r.context&&je(r.context),r.children)for(var n=0;n<r.children.length;++n)t.push(r.children[n])}}function Ie(e,t){var r,n;if(e){var o=$e.get(e,"attrBindings");if(o||t){if(!o){var a=be({});o={ctx:t,data:a},$e.set(e,"attrBindings",o),F(t,"attrs",{get:function(){return null===o||void 0===o?void 0:o.data},set:function(){}})}var i=e.$attrs,s=function(t){q(o.data,t)||F(o.data,t,{get:function(){return e.$attrs[t]}})};try{for(var c=l(Object.keys(i)),u=c.next();!u.done;u=c.next()){var f=u.value;s(f)}}catch(d){r={error:d}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}}}}function Ae(e,t){var r=e.$options._parentVnode;if(r){for(var n=$e.get(e,"slots")||[],o=K(r.data.scopedSlots,e.$slots),a=0;a<n.length;a++){var i=n[a];o[i]||delete t[i]}var s=Object.keys(o);for(a=0;a<s.length;a++){i=s[a];t[i]||(t[i]=G(e,i))}$e.set(e,"slots",s)}}function Me(e,t,r){var n=I();O(e);try{return t(e)}catch(o){if(!r)throw o;r(o)}finally{O(n)}}function De(e){function t(){var e=this,t=e.$options,n=t.setup,o=t.render;if(o&&(t.render=function(){for(var t=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return Me(M(e),(function(){return o.apply(t,r)}))}),n&&z(n)){var a=t.data;t.data=function(){return r(e,e.$props),z(a)?a.call(e,e):a||{}}}}function r(e,t){void 0===t&&(t={});var r,i=e.$options.setup,s=a(e),c=M(e);if(c.setupContext=s,T(t,"__ob__",me()),Ae(e,s.slots),Me(c,(function(){r=i(t,s)})),r)if(z(r)){var u=r;e.$options.render=function(){return Ae(e,s.slots),Me(c,(function(){return u()}))}}else if(L(r)){ue(r)&&(r=ie(r)),$e.set(e,"rawBindings",r);var l=r;Object.keys(l).forEach((function(t){var r=l[t];if(!ae(r))if(ue(r))N(r)&&(r=oe(r));else if(z(r)){var a=r;r=r.bind(e),Object.keys(a).forEach((function(e){r[e]=a[e]}))}else L(r)?o(r)&&n(r):r=oe(r);Ee(e,t,r)}))}else 0}function n(e,t){if(void 0===t&&(t=new Set),!t.has(e)&&H(e)&&!ae(e)&&!ue(e)&&!ce(e)){var r=S(),o=r.util.defineReactive;Object.keys(e).forEach((function(r){var a=e[r];o(e,r,a),a&&(t.add(a),n(a,t))}))}}function o(e,t){return void 0===t&&(t=new Map),t.has(e)?t.get(e):(t.set(e,!1),N(e)&&ue(e)?(t.set(e,!0),!0):!(!H(e)||ce(e)||ae(e))&&Object.keys(e).some((function(r){return o(e[r],t)})))}function a(e){var t={slots:{}},r=["root","parent","refs","listeners","isServer","ssrContext"],n=["emit"];return r.forEach((function(r){var n="$".concat(r);F(t,r,{get:function(){return e[n]},set:function(){}})})),Ie(e,t),n.forEach((function(r){var n="$".concat(r);F(t,r,{get:function(){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e[n];o.apply(e,t)}}})})),t}e.mixin({beforeCreate:t,mounted:function(){Oe(this)},beforeUpdate:function(){Ie(this)},updated:function(){Oe(this)}})}function Re(e,t){if(!e)return t;if(!t)return e;for(var r,n,o,a=B?Reflect.ownKeys(e):Object.keys(e),i=0;i<a.length;i++)r=a[i],"__ob__"!==r&&(n=t[r],o=e[r],q(t,r)?n!==o&&H(n)&&!ae(n)&&H(o)&&!ae(o)&&Re(o,n):t[r]=o);return t}function Be(e){k(e)||(e.config.optionMergeStrategies.setup=function(e,t){return function(r,n){return Re(z(e)?e(r,n)||{}:void 0,z(t)?t(r,n)||{}:void 0)}},E(e),De(e))}var Ve={install:function(e){return Be(e)}};function Fe(e){return e}function Te(e){e=e||i["default"],e&&!e["__composition_api_installed__"]&&i["default"].use(Ve)}"undefined"!==typeof window&&window.Vue&&window.Vue.use(Ve),Te(i["default"]);i["default"],i["default"].version;function qe(){return qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qe.apply(this,arguments)}var Ne=function(){var e=!1,t=[],r=function(){if(!e){e=!0;for(var r=0,n=t.length;r<n;r++)t[r]()}},n=function(r){e?r():t.push(r)},o={resolved:function(){return e},resolve:r,promise:{then:n}};return o},Pe=Object.prototype.hasOwnProperty;function Ue(){var e=Ne();return{notify:function(){e.resolve()},wait:function(){return e.promise},render:function(e,t,r){this.wait().then((function(){r(window.grecaptcha.render(e,t))}))},reset:function(e){"undefined"!==typeof e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){"undefined"!==typeof e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){Pe.call(window,"grecaptcha")&&Pe.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!e.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var Le=Ue();"undefined"!==typeof window&&(window.vueRecaptchaApiLoaded=Le.notify);var He=Fe({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(e,t){var r=t.slots,n=t.emit,o=oe(null),a=oe(null),i=function(e){n("verify",e)},s=function(){n("expired")},c=function(){n("error")};return we((function(){if(Le.checkRecaptchaLoad(),e.loadRecaptchaScript&&!document.getElementById(e.recaptchaScriptId)){var t=document.createElement("script");t.id=e.recaptchaScriptId,t.src="https://"+e.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+e.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}var u=qe({},e,{callback:i,"expired-callback":s,"error-callback":c}),l=o.value,f=r["default"]?l.children[0]:l;Le.render(f,u,(function(e){a.value=e,n("render",e)}))})),{root:o,widgetId:a,reset:function(){Le.reset(a.value)},execute:function(){Le.execute(a.value)}}},render:function(){var e,t=this.$slots["default"];return e="function"===typeof t?t():t,xe("div",{ref:"root"},e)}}),ze={components:{VueRecaptcha:He},data:function(){return{seeContra:"password",seeContraVerify:"password",optionDni:"T",selected:"",selectButton:!1,error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1,form:{email:"",food:null,checked:[],usuario:""},show:!0}},methods:{handleError:function(){this.selectButton=!1},handleSuccess:function(){this.selectButton=!0},expiredMethod:function(){this.selectButton=!1},renderMethod:function(){this.selectButton=!1},validEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},validContra:function(e){var t=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;return t.test(e)},countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(e){this.error=e,this.dismissCountDown=this.dismissSecs},cambio:function(){this.$router.push("/")},Ingreso:function(){this.$router.push("/users")},saveEditItem:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validEmail(e.form.usuario)){t.next=3;break}return e.showAlert("Correo invalido"),t.abrupt("return");case 3:if(e.validContra(e.form.contraseña)){t.next=6;break}return e.showAlert("Contraseña invalida"),t.abrupt("return");case 6:return e.selected="circular",t.next=9,e.$axios.post("/signup",{username:e.form.usuario,password:e.form.contraseña,confirmation:e.form.verificar,email:e.form.correo,dni:e.form.dni,dateBirth:e.form.date}).then((function(t){e.$message.success("MUY BIEN TE HAS REGISTRADO EXITOSAMENTE"),e.cambio()})).catch((function(t){e.selected="",e.selectButton=!0,e.showAlert(t.response.data.content),"Dni incorrecto"==t.response.data.content&&(e.optionDni="F"),console.log(t)}));case 9:case"end":return t.stop()}}),t)})))()},saveEditItem2:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validEmail(e.form.usuario)){t.next=3;break}return e.showAlert("Correo invalido"),t.abrupt("return");case 3:if(e.validContra(e.form.contraseña)){t.next=6;break}return e.showAlert("Contraseña invalida"),t.abrupt("return");case 6:return e.selected="circular",t.next=9,e.$axios.post("/signup/v2",{username:e.form.usuario,password:e.form.contraseña,confirmation:e.form.verificar,email:e.form.correo,dni:e.form.dni,dateBirth:e.form.date,name:e.form.name,lastnameFather:e.form.lastnameFather,lastnameMother:e.form.lastnameMother,gender:e.form.gender}).then((function(t){e.$message.success("MUY BIEN TE HAS REGISTRADO EXITOSAMENTE"),e.cambio()})).catch((function(t){e.selected="",e.selectButton=!0,e.showAlert(t.response.data.content),console.log(t)}));case 9:case"end":return t.stop()}}),t)})))()}}},Je=ze,Qe=(r("82c6"),r("2877")),We=Object(Qe["a"])(Je,n,o,!1,null,"c38b83e8",null);t["default"]=We.exports},"82c6":function(e,t,r){"use strict";r("b2ad")},b0c0:function(e,t,r){var n=r("83ab"),o=r("5e77").EXISTS,a=r("e330"),i=r("9bf2").f,s=Function.prototype,c=a(s.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=a(u.exec),f="name";n&&!o&&i(s,f,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},b2ad:function(e,t,r){}}]);
//# sourceMappingURL=chunk-0252ed40.fa744765.js.map