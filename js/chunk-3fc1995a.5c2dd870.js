(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc1995a"],{"057f":function(t,e,r){var n=r("c6b6"),i=r("fc6a"),o=r("241c").f,a=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?s(t):o(i(t))}},"0616":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"dashboard"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h1",[r("b-icon",{attrs:{icon:"book"}}),t._v(" Control Documental")],1)]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"container col-12"},[r("div",[r("b-tabs",{staticClass:"card",attrs:{card:"",fill:""}},t._l(t.desserts,(function(e,n){return r("b-tab",{key:n,attrs:{title:e.name}},[r("p",[t._v(t._s(e.description))]),r("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:e.documentaries,fields:t.fields}})],1)})),1)],1)])])])])])},i=[],o=r("1da1"),a=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),{data:function(){return{desserts:[],fields:[{key:"username",label:"Nombre usuario"},{key:"typeRequisition",label:"Descripción"},{key:"observation",label:"Observación"}]}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/documentary",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).catch((function(e){t.$errorQuery(e)}));case 2:for(i in r=e.sent,n=[],r.data)o={name:r.data[i].name,description:r.data[i].description,documentaries:r.data[i].documentaries},n.push(o);t.desserts=n;case 6:case"end":return e.stop()}}),e)})))()}}}),c=a,s=(r("4993"),r("2877")),u=Object(s["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},"428f":function(t,e,r){var n=r("da84");t.exports=n},4993:function(t,e,r){"use strict";r("e723")},"746f":function(t,e,r){var n=r("428f"),i=r("1a2d"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("2ba4"),c=r("c65b"),s=r("e330"),u=r("c430"),f=r("83ab"),d=r("4930"),l=r("d039"),b=r("1a2d"),v=r("e8b5"),p=r("1626"),h=r("861d"),y=r("3a9b"),m=r("d9b5"),g=r("825a"),w=r("7b0b"),S=r("fc6a"),O=r("a04b"),k=r("577e"),j=r("5c6c"),P=r("7c73"),x=r("df75"),C=r("241c"),N=r("057f"),_=r("7418"),E=r("06cf"),$=r("9bf2"),J=r("37e8"),z=r("d1e7"),D=r("f36a"),F=r("6eeb"),R=r("5692"),I=r("f772"),Q=r("d012"),T=r("90e3"),q=r("b622"),A=r("e538"),B=r("746f"),W=r("d44e"),X=r("69f3"),G=r("b727").forEach,H=I("hidden"),K="Symbol",L="prototype",M=q("toPrimitive"),U=X.set,V=X.getterFor(K),Y=Object[L],Z=i.Symbol,tt=Z&&Z[L],et=i.TypeError,rt=i.QObject,nt=o("JSON","stringify"),it=E.f,ot=$.f,at=N.f,ct=z.f,st=s([].push),ut=R("symbols"),ft=R("op-symbols"),dt=R("string-to-symbol-registry"),lt=R("symbol-to-string-registry"),bt=R("wks"),vt=!rt||!rt[L]||!rt[L].findChild,pt=f&&l((function(){return 7!=P(ot({},"a",{get:function(){return ot(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=it(Y,e);n&&delete Y[e],ot(t,e,r),n&&t!==Y&&ot(Y,e,n)}:ot,ht=function(t,e){var r=ut[t]=P(tt);return U(r,{type:K,tag:t,description:e}),f||(r.description=e),r},yt=function(t,e,r){t===Y&&yt(ft,e,r),g(t);var n=O(e);return g(r),b(ut,n)?(r.enumerable?(b(t,H)&&t[H][n]&&(t[H][n]=!1),r=P(r,{enumerable:j(0,!1)})):(b(t,H)||ot(t,H,j(1,{})),t[H][n]=!0),pt(t,n,r)):ot(t,n,r)},mt=function(t,e){g(t);var r=S(e),n=x(r).concat(kt(r));return G(n,(function(e){f&&!c(wt,r,e)||yt(t,e,r[e])})),t},gt=function(t,e){return void 0===e?P(t):mt(P(t),e)},wt=function(t){var e=O(t),r=c(ct,this,e);return!(this===Y&&b(ut,e)&&!b(ft,e))&&(!(r||!b(this,e)||!b(ut,e)||b(this,H)&&this[H][e])||r)},St=function(t,e){var r=S(t),n=O(e);if(r!==Y||!b(ut,n)||b(ft,n)){var i=it(r,n);return!i||!b(ut,n)||b(r,H)&&r[H][n]||(i.enumerable=!0),i}},Ot=function(t){var e=at(S(t)),r=[];return G(e,(function(t){b(ut,t)||b(Q,t)||st(r,t)})),r},kt=function(t){var e=t===Y,r=at(e?ft:S(t)),n=[];return G(r,(function(t){!b(ut,t)||e&&!b(Y,t)||st(n,ut[t])})),n};if(d||(Z=function(){if(y(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?k(arguments[0]):void 0,e=T(t),r=function(t){this===Y&&c(r,ft,t),b(this,H)&&b(this[H],e)&&(this[H][e]=!1),pt(this,e,j(1,t))};return f&&vt&&pt(Y,e,{configurable:!0,set:r}),ht(e,t)},tt=Z[L],F(tt,"toString",(function(){return V(this).tag})),F(Z,"withoutSetter",(function(t){return ht(T(t),t)})),z.f=wt,$.f=yt,J.f=mt,E.f=St,C.f=N.f=Ot,_.f=kt,A.f=function(t){return ht(q(t),t)},f&&(ot(tt,"description",{configurable:!0,get:function(){return V(this).description}}),u||F(Y,"propertyIsEnumerable",wt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Z}),G(x(bt),(function(t){B(t)})),n({target:K,stat:!0,forced:!d},{for:function(t){var e=k(t);if(b(dt,e))return dt[e];var r=Z(e);return dt[e]=r,lt[r]=e,r},keyFor:function(t){if(!m(t))throw et(t+" is not a symbol");if(b(lt,t))return lt[t]},useSetter:function(){vt=!0},useSimple:function(){vt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!f},{create:gt,defineProperty:yt,defineProperties:mt,getOwnPropertyDescriptor:St}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:Ot,getOwnPropertySymbols:kt}),n({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(w(t))}}),nt){var jt=!d||l((function(){var t=Z();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:jt},{stringify:function(t,e,r){var n=D(arguments),i=e;if((h(e)||void 0!==t)&&!m(t))return v(e)||(e=function(t,e){if(p(i)&&(e=c(i,this,t,e)),!m(e))return e}),n[1]=e,a(nt,null,n)}})}if(!tt[M]){var Pt=tt.valueOf;F(tt,M,(function(t){return c(Pt,this)}))}W(Z,K),Q[H]=!0},b0c0:function(t,e,r){var n=r("83ab"),i=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,c=Function.prototype,s=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(u.exec),d="name";n&&!i&&a(c,d,{configurable:!0,get:function(){try{return f(u,s(this))[1]}catch(t){return""}}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("e330"),c=r("1a2d"),s=r("1626"),u=r("3a9b"),f=r("577e"),d=r("9bf2").f,l=r("e893"),b=o.Symbol,v=b&&b.prototype;if(i&&s(b)&&(!("description"in v)||void 0!==b().description)){var p={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(v,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[e]=!0),e};l(h,b),h.prototype=v,v.constructor=h;var y="Symbol(test)"==String(b("test")),m=a(v.toString),g=a(v.valueOf),w=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),O=a("".slice);d(v,"description",{configurable:!0,get:function(){var t=g(this),e=m(t);if(c(p,t))return"";var r=y?O(e,7,-1):S(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:h})}},e538:function(t,e,r){var n=r("b622");e.f=n},e723:function(t,e,r){}}]);
//# sourceMappingURL=chunk-3fc1995a.5c2dd870.js.map