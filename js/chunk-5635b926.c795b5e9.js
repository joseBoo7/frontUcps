(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5635b926"],{"2df4":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"AlertError"}},[r("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[r("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},n=[],i={name:"AlertError",data:function(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},o=i,s=r("2877"),c=Object(s["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},"3f35":function(t,e,r){"use strict";r("bced")},a416:function(t,e,r){"use strict";r("cdf7")},bced:function(t,e,r){},cdf7:function(t,e,r){},d8c7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),r("div",{staticClass:"card"},[r("div",{staticClass:"card-header header-blue"},[r("h2",[r("b-icon-list-ol"),t._v(" Lista de notas")],1)]),r("div",{staticClass:"card-body"},[r("b-row",[r("b-col",{attrs:{lg:"3"}},[t.disabledAttendance?r("button",{staticClass:"btn mb-3 font-weight-bold w-100",staticStyle:{"background-color":"#5e151d",color:"white"},on:{click:function(e){return t.endRegister()}}},[t._v(" Finalizar Registro ")]):r("button",{staticClass:"btn mb-3 font-weight-bold w-100",staticStyle:{"background-color":"#5e151d",color:"white"},on:{click:function(e){t.disabledAttendance=!t.disabledAttendance}}},[t._v(" Ingresar notas ")])]),r("b-col",{staticClass:"mb-3",attrs:{lg:"9"}},[t.disabledAttendance?r("CriteriaRegister",{attrs:{id:t.id}}):t._e()],1),r("b-col")],1),r("b-overlay",{attrs:{show:t.showTable,rounded:"sm"}},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-striped"},[r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Nombres")]),t._l(t.desserts.allQualificationDto,(function(e,a){return r("th",{key:a,attrs:{scope:"col"}},[t._v(" "+t._s(e.name+" ("+e.porcentual+"%) ")+" "),t.disabledAttendance?r("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(r){return t.modalDelete(e)}}}):t._e()],1)}))],2)]),r("tbody",t._l(t.desserts.allEnrollQualification,(function(e,a){return r("tr",{key:a},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a+1)+" ")]),r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.lastnameFather+" "+e.lastnameMother+", "+e.name)+" ")]),t._l(e.allQualification,(function(a,n){return r("td",{key:"C"+n},[t.disabledAttendance?r("div",[r("b-input",{staticClass:"inputCell",attrs:{type:"number"},on:{blur:function(r){return t.addValue(e.id,a.id,a.value)}},model:{value:a.value,callback:function(e){t.$set(a,"value",e)},expression:"value.value"}})],1):r("div",[null!=a.status?r("p",{class:"font-weight-bold mb-0 text-"+a.color},[t._v(" "+t._s(a.value)+" ")]):r("p",{staticClass:"font-weight-bold mb-0"},[t._v("-")])])])}))],2)})),0)])])])],1)]),r("div",[r("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[r("div",{staticClass:"w-100"},[r("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteCriteria()}}},[t._v(" Aceptar ")]),r("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[r("b-container",{attrs:{fluid:""}},[r("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar "),r("b",[t._v(t._s(t.dataDelete.name))]),t._v(" ? "),r("p",[r("em",[t._v(" Se eliminarán todas las notas asociadas a este criterio de calificación.")])])])])],1)],1)],1)},n=[],i=r("1da1"),o=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"CriteriaRegister"}},[r("button",{staticClass:"btn font-weight-bold w-100",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.add()}}},[t._v(" Añadir Critero de calificación ")]),r("div",[r("b-modal",{attrs:{scrollable:"",centered:"",title:"Añadir criterio de calificación"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[r("div",{staticClass:"w-100"},[r("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem()}}},[t._v(" Enviar ")]),r("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[r("b-container",{attrs:{fluid:""}},[r("form",[r("AlertError",{ref:"error"}),r("div",{staticClass:"form-group my-3"},[r("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Criterio de Calificación:")]),r("b-form-select",{attrs:{state:null!=t.data.criteria,options:t.criteria,required:""},model:{value:t.data.criteria,callback:function(e){t.$set(t.data,"criteria",e)},expression:"data.criteria"}})],1),r("div",{staticClass:"form-group"},[r("label",[r("b",[t._v("Porcentaje:")])]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"%"}},[r("b-form-input",{attrs:{type:"number",state:null!=t.data.porcentual&&t.verifyPorcentual(t.data.porcentual),placeholder:"Ingresar porcentaje",required:""},model:{value:t.data.porcentual,callback:function(e){t.$set(t.data,"porcentual",e)},expression:"data.porcentual"}})],1)],1)],1)])],1)],1)])}),s=[],c=r("2df4"),l={name:"CriteriaRegister",components:{AlertError:c["a"]},props:{id:{type:String,default:null}},data:function(){return{criteria:[],show:!1,data:{}}},created:function(){this.initialize()},methods:{verifyPorcentual:function(t){return!(t<0||t>100)},exit:function(){this.show=!1},add:function(){this.data={},this.show=!0},initialize:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/dashboard/course/"+t.id+"/qualification-criteria-register",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.criteria=e.data})).catch((function(e){t.$errorQuery(e)}));case 2:case"end":return e.stop()}}),e)})))()},saveAddItem:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.data.criteria&&null!=t.data.porcentual){e.next=3;break}return t.$refs.error.showAlert("Ingrese todos los datos"),e.abrupt("return");case 3:if(t.verifyPorcentual(t.data.porcentual)){e.next=6;break}return t.$refs.error.showAlert("Fuera de los margenes porcentuales"),e.abrupt("return");case 6:return e.next=8,t.$axios.post("/dashboard/course/"+t.id+"/qualification-criteria-register",{id:t.data.criteria,porcentual:t.data.porcentual},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.$message.success(e.data.content),t.$parent.initialize(),t.show=!1})).catch((function(e){console.log(e),t.$refs.error.showAlert(e.response.data.content)}));case 8:case"end":return e.stop()}}),e)})))()}}},u=l,d=(r("3f35"),r("2877")),f=Object(d["a"])(u,o,s,!1,null,null,null),h=f.exports,b={components:{CriteriaRegister:h},props:{id:{type:String,default:null}},data:function(){return{showTable:!1,selected:"",dataDelete:{},showDelete:!1,disabledAttendance:!1,criteriaList:[],desserts:{allQualificationDto:[],allEnrollQualification:[]}}},created:function(){this.initialize()},methods:{alertUpdate:function(){return alert("Mensaje"),"Te estás saliendo del sitio…"},endRegister:function(){this.disabledAttendance=!this.disabledAttendance,this.initialize()},exitDelete:function(){this.showDelete=!1},modalDelete:function(t){this.dataDelete={},this.showDelete=!0,this.dataDelete=t},formatData:function(t){for(var e=0;e<t.allEnrollQualification.length;e++)for(var r=0;r<t.allEnrollQualification[e].allQualification.length;r++)null==t.allEnrollQualification[e].allQualification[r].status&&(t.allEnrollQualification[e].allQualification[r].value=" ")},addValue:function(t,e,r){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.showTable=!0,n.next=3,a.$axios.post("/dashboard/course/"+a.id+"/qualification-edit",{personId:t,qualificationCriteriaId:e,qualificationValue:r},{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){a.initializeUpdate()})).catch((function(t){a.$errorQuery(t)}));case 3:case"end":return n.stop()}}),n)})))()},deleteCriteria:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/dashboard/course/"+t.id+"/qualification-criteria-delete?id="+t.dataDelete.id,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.$message.success(e.data.content),t.initialize(),t.showDelete=!1})).catch((function(e){t.$errorQuery(e)}));case 2:case"end":return e.stop()}}),e)})))()},initialize:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.selected="circular",e.next=3,t.$axios.get("/dashboard/course/"+t.id+"/list-qualification-criteria",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.desserts=e.data,t.formatData(t.desserts),t.selected=""})).catch((function(e){t.$errorQuery(e)}));case 3:case"end":return e.stop()}}),e)})))()},initializeUpdate:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/dashboard/course/"+t.id+"/list-qualification-criteria",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.desserts=e.data,t.formatData(t.desserts),t.showTable=!1})).catch((function(e){t.$errorQuery(e)}));case 2:case"end":return e.stop()}}),e)})))()},listCriterias:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/dashboard/course/"+t.id+"/qualification-criteria-register",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){t.criteriaList=e.data})).catch((function(e){t.$errorQuery(e)}));case 2:case"end":return e.stop()}}),e)})))()}}},p=b,m=(r("a416"),Object(d["a"])(p,a,n,!1,null,"1194da6c",null));e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-5635b926.c795b5e9.js.map