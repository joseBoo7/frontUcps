(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7caf6a74"],{"07c4":function(t,e,r){},2105:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-11"},[r("h1",[r("b-icon",{attrs:{icon:"box-seam"}}),t._v(" Módulos de "+t._s(this.name))],1)]),r("div",{staticClass:"col-1"},[r("h1",[r("b-icon",{attrs:{type:"button",icon:"arrow-return-left"},on:{click:t.toPrograms}})],1)])])]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"container"},[r("b-row",[r("b-col",[r("ModulesRegister",{attrs:{idIdentifier:t.identifier}})],1),r("b-col",{staticClass:"mb-3"},[r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{attrs:{icon:"search"}})],1),r("b-form-input",{attrs:{placeholder:"Buscar",type:"text"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1),r("div",{staticClass:"container col-12"},[r("div",[r("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:t.items,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,keyword:t.keyword},scopedSlots:t._u([{key:"cell(order)",fn:function(e){return[r("p",[t._v("Módulo "+t._s(e.item.order))])]}},{key:"cell(courses)",fn:function(e){return[r("b-icon",{attrs:{type:"button",icon:"credit-card2-front"},on:{click:function(r){return t.toCourses(e.item.identifier)}}})]}},{key:"cell(state)",fn:function(e){return[r("b-badge",{attrs:{pill:"",variant:t.returnColor(e.item.state)}},[t._v(t._s(t.returnData(e.item.state)))])]}},{key:"cell(actions)",fn:function(e){return[r("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(r){return t.modalDelete(e.item)}}})]}}])}),r("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])]),r("div",[r("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[r("div",{staticClass:"w-100"},[r("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteItem(t.dataDelete)}}},[t._v(" Aceptar ")]),r("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[r("b-container",{attrs:{fluid:""}},[r("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar a "),r("b",[t._v(t._s(t.data.name))]),t._v("? ")])])],1)],1)])},o=[],a=r("1da1"),s=(r("96cf"),r("4de4"),r("d3b7"),r("caad"),r("2532"),r("b0c0"),r("25f0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"ModulesRegister"}},[r("button",{staticClass:"btn mb-3",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.add()}}},[t._v(" Añadir Módulo ")]),r("div",[r("b-modal",{attrs:{scrollable:"",centered:"",title:"Añadir módulo"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[r("div",{staticClass:"w-100"},[r("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem(t.data)}}},[t._v(" Enviar ")]),r("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("b-container",{attrs:{fluid:""}},[r("form",[r("AlertError",{ref:"error"}),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"validationServer01"}},[t._v("Nombre")]),r("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese nombre"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Orden "),r("b-icon-info-circle-fill",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.right",value:"Ingresar un número de orden no repetido en los módulos ya creados.",expression:"\n                  'Ingresar un número de orden no repetido en los módulos ya creados.'\n                ",modifiers:{hover:!0,right:!0}}],attrs:{color:"rgb(119, 35, 45)"}})],1),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"Módulo"}},[r("b-form-input",{staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese número de orden"},model:{value:t.data.order,callback:function(e){t.$set(t.data,"order",e)},expression:"data.order"}})],1)],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Descripción")]),r("b-form-textarea",{attrs:{placeholder:"Ingrese descripción"},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}})],1)],1)])],1)],1)])}),i=[],c=r("2df4"),l={name:"ModulesRegister",components:{AlertError:c["a"]},props:{idIdentifier:{type:String,default:null}},data:function(){return{show:!1,data:{}}},methods:{exit:function(){this.show=!1},add:function(){this.data={name:"",order:null,description:""},this.show=!0},saveAddItem:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/configuration/program/"+t.idIdentifier+"/modulus-register",t.data,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.show=!1,t.$message.success(e.data.content),t.$parent.initialize()})).catch((function(e){console.log(e),t.$refs.error.showAlert(e.response.data.content)}));case 2:case"end":return e.stop()}}),e)})))()}}},u=l,d=(r("69ca"),r("2877")),f=Object(d["a"])(u,s,i,!1,null,null,null),m=f.exports,p={components:{ModulesRegister:m},props:{id:{type:String,default:null}},data:function(){return{keyword:"",perPage:10,currentPage:1,dataDelete:"",showDelete:!1,identifier:null,name:"",data:{},fields:[{key:"name",label:"Nombre"},{key:"order",label:"Orden"},{key:"courses",label:"Cursos"},{key:"state",label:"Estado"},{key:"actions",label:"Acciones"}],desserts:[]}},created:function(){this.initialize()},computed:{rows:function(){return this.desserts.length},items:function(){var t=this;return this.currentPage=1,this.keyword?this.desserts.filter((function(e){return e.name.toLowerCase().includes(t.keyword.toLowerCase())||e.identifier.toLowerCase().includes(t.keyword.toLowerCase())||e.order.toString().toLowerCase().includes(t.keyword.toLowerCase())})):this.desserts}},methods:{toModules:function(t){this.$router.push("/program/"+t+"/modulus")},toPrograms:function(){this.$router.push("/configuration/program")},toCourses:function(t){this.$router.push("/modules/"+t+"/courses")},returnData:function(t){return"A"===t?"Activo":"I"===t?"Inactivo":void 0},returnColor:function(t){return"A"===t?"success":"I"===t?"danger":void 0},exit:function(){this.show=!1},exitDelete:function(){this.showDelete=!1},modalDelete:function(t){this.showDelete=!0,this.dataDelete=t,this.data.name=t.name},initialize:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/configuration/program/"+t.id+"/modulus",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.identifier=e.data.id,t.name=e.data.name,t.desserts=e.data.list})).catch((function(e){t.$errorQuery(e)}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.showDelete=!1,""==t){r.next=11;break}return r.prev=2,r.next=5,e.$axios.get("/configuration/program/"+e.id+"/modulus-delete?id="+t.id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.$message.success(t.data.content),e.initialize()}));case 5:r.next=11;break;case 7:r.prev=7,r.t0=r["catch"](2),e.$message.error(r.t0.response.data.content),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()}}},b=p,h=(r("c5a3"),Object(d["a"])(b,n,o,!1,null,null,null));e["default"]=h.exports},2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("e330"),a=r("5a34"),s=r("1d80"),i=r("577e"),c=r("ab13"),l=o("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~l(i(s(this)),i(a(t)),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,r){"use strict";var n=r("e330"),o=r("5e77").PROPER,a=r("6eeb"),s=r("825a"),i=r("3a9b"),c=r("577e"),l=r("d039"),u=r("ad6d"),d="toString",f=RegExp.prototype,m=f[d],p=n(u),b=l((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),h=o&&m.name!=d;(b||h)&&a(RegExp.prototype,d,(function(){var t=s(this),e=c(t.source),r=t.flags,n=c(void 0===r&&i(f,t)&&!("flags"in f)?p(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"2df4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"AlertError"}},[r("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[r("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},o=[],a={name:"AlertError",data:function(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},s=a,i=r("2877"),c=Object(i["a"])(s,n,o,!1,null,null,null);e["a"]=c.exports},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,a=r("1dde"),s=a("filter");n({target:"Array",proto:!0,forced:!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"55da":function(t,e,r){},"5a34":function(t,e,r){var n=r("da84"),o=r("44e7"),a=n.TypeError;t.exports=function(t){if(o(t))throw a("The method doesn't accept regular expressions");return t}},"69ca":function(t,e,r){"use strict";r("55da")},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},b0c0:function(t,e,r){var n=r("83ab"),o=r("5e77").EXISTS,a=r("e330"),s=r("9bf2").f,i=Function.prototype,c=a(i.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=a(l.exec),d="name";n&&!o&&s(i,d,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},c5a3:function(t,e,r){"use strict";r("07c4")}}]);
//# sourceMappingURL=chunk-7caf6a74.2f73aa1f.js.map