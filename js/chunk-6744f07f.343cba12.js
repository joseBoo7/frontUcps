(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6744f07f"],{"07af":function(t,e,r){},"2df4":function(t,e,r){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},a=[],o={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},i=o,n=r("2877"),c=Object(n["a"])(i,s,a,!1,null,null,null);e["a"]=c.exports},5349:function(t,e,r){},"7a8e":function(t,e,r){"use strict";r("5349")},"9f16":function(t,e,r){"use strict";r("07af")},c948:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-11"},[e("h1",[e("b-icon",{attrs:{icon:"sun"}}),t._v(" Turnos de "+t._s(this.name))],1)]),e("div",{staticClass:"col-1"},[e("h1",[e("b-icon",{attrs:{type:"button",icon:"arrow-return-left"},on:{click:t.toPrograms}})],1)])])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"container"},[e("b-row",[e("b-col",[e("TurnsRegister",{attrs:{id:t.identifier}})],1),e("b-col",{staticClass:"mb-3"},[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"search"}})],1),e("b-form-input",{attrs:{placeholder:"Buscar",type:"text"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1),e("div",{staticClass:"container col-12"},[e("div",[e("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:t.items,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,keyword:t.keyword},scopedSlots:t._u([{key:"cell(state)",fn:function(r){return[e("b-badge",{attrs:{pill:"",variant:t.returnColor(r.item.state)}},[t._v(t._s(t.returnData(r.item.state)))])]}},{key:"cell(actions)",fn:function(r){return[e("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.modalDelete(r.item)}}})]}}])}),e("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])]),e("div",[e("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteItem(t.dataDelete)}}},[t._v(" Aceptar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar a "),e("b",[t._v(t._s(t.data.name))]),t._v("? ")])])],1)],1)])},a=[],o=(r("14d9"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"TurnsRegister"}},[e("button",{staticClass:"btn mb-3",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.add()}}},[t._v(" Agregar Turno ")]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Agregar Turno"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem()}}},[t._v(" Agregar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"error"}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Seleccionar Turno")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.turnos,required:""},model:{value:t.data.idTwo,callback:function(e){t.$set(t.data,"idTwo",e)},expression:"data.idTwo"}})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Cantidad de estudiantes")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.capacity,expression:"capacity"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese cantidad",required:""},domProps:{value:t.capacity},on:{input:function(e){e.target.composing||(t.capacity=e.target.value)}}})])],1)])],1)],1)])}),i=[],n=r("2df4"),c={name:"TurnsRegister",components:{AlertError:n["a"]},props:{id:{type:String,default:null}},data(){return{capacity:null,show:!1,data:{idTwo:null,idOne:null},turnos:[]}},methods:{exit(){this.show=!1},add(){this.listTurns(),this.capacity=null,this.data={idTwo:null,idOne:parseInt(this.id)},this.show=!0},async listTurns(){await this.$axios.get("/configuration/program/program-group/group-register?programId="+this.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.turnos=t.data}).catch(t=>{console.log(t)})},async saveAddItem(){await this.$axios.post("/configuration/program/program-group/group-register?capacity="+this.capacity,this.data,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.show=!1,this.$message.success(t.data.content),this.$parent.initialize()}).catch(t=>{console.log(t),this.show=!1,this.$refs.error.showAlert(t.response.data.content)})}}},l=c,d=(r("9f16"),r("2877")),u=Object(d["a"])(l,o,i,!1,null,null,null),h=u.exports,p={components:{TurnsRegister:h},props:{id:{type:String,default:null}},data:()=>({keyword:"",perPage:10,currentPage:1,dataDelete:"",showDelete:!1,identifier:null,name:"",data:{},fields:[{key:"name",label:"Nombre"},{key:"capacity",label:"Capacidad"},{key:"state",label:"Estado"},{key:"actions",label:"Acciones"}],desserts:[]}),created(){this.initialize()},computed:{rows(){return this.desserts.length},items(){return this.currentPage=1,this.keyword?this.desserts.filter(t=>t.name.toLowerCase().includes(this.keyword.toLowerCase())||t.capacity.toString().toLowerCase().includes(this.keyword.toLowerCase())):this.desserts}},methods:{toPrograms(){this.$router.push("/configuration/program")},toCourses(t){this.$router.push("/modules/"+t+"/courses")},returnData(t){return"A"===t?"Activo":"I"===t?"Inactivo":void 0},returnColor(t){return"A"===t?"success":"I"===t?"danger":void 0},exit(){this.show=!1},exitDelete(){this.showDelete=!1},modalDelete(t){this.showDelete=!0,this.dataDelete=t,this.data.name=t.name},async initialize(){await this.$axios.get("/configuration/program/"+this.id+"/group",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.identifier=t.data.id,this.name=t.data.name,this.desserts=t.data.list}).catch(t=>{this.$errorQuery(t)})},async deleteItem(t){if(this.showDelete=!1,""!=t)try{await this.$axios.get("/configuration/program/program-group/group-delete?programId="+this.identifier+"&groupId="+t.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize()})}catch(e){this.$message.error(e.response.data.content),console.log(e)}}}},m=p,g=(r("7a8e"),Object(d["a"])(m,s,a,!1,null,null,null));e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-6744f07f.343cba12.js.map