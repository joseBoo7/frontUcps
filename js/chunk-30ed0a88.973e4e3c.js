(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30ed0a88"],{1134:function(t,e,a){"use strict";a("1d1b")},"1d1b":function(t,e,a){},"2df4":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},r=[],o={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},i=o,n=a("2877"),l=Object(n["a"])(i,s,r,!1,null,null,null);e["a"]=l.exports},"3a63":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-11"},[e("h1",[e("b-icon",{attrs:{icon:"clipboard-check"}}),t._v(" Programas de "+t._s(t.name))],1)]),e("div",{staticClass:"col-1"},[e("h1",[e("b-icon",{attrs:{type:"button",icon:"arrow-return-left"},on:{click:t.toPeriods}})],1)])])]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"container"},[e("b-row",[e("b-col",[e("ProgramsRegister",{attrs:{id:t.id,idNumber:t.idNumber}})],1),e("b-col",[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"search"}})],1),e("b-form-input",{attrs:{placeholder:"Buscar",type:"text"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1),e("div",{staticClass:"container col-12"},[e("div",[e("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:t.items,fields:this.$checkRole("Administrador")?t.fieldsAdmin:this.$checkRole("Finanzas")?t.fieldsFinance:t.fields,"per-page":t.perPage,"current-page":t.currentPage,keyword:t.keyword},scopedSlots:t._u([{key:"cell(payments)",fn:function(a){return[e("b-icon",{staticClass:"mx-1",attrs:{type:"button",icon:"cash-stack"},on:{click:function(e){return t.toPayments(a.item.identifier)}}})]}},{key:"cell(state)",fn:function(a){return[e("b-badge",{attrs:{pill:"",variant:t.returnColor(a.item.state)}},[t._v(t._s(t.returnData(a.item.state)))])]}},{key:"cell(courses)",fn:function(a){return[e("b-icon",{staticClass:"mx-1",attrs:{type:"button",icon:"card-checklist"},on:{click:function(e){return t.toCourses(a.item.identifier)}}}),e("span",[t._v(t._s(a.item.countCourses))])]}},{key:"cell(people)",fn:function(a){return[e("b-icon",{attrs:{type:"button",icon:"people"},on:{click:function(e){return t.toPeople(a.item.identifier)}}}),e("span",[t._v(" "+t._s(a.item.enrollmentCount))])]}},{key:"cell(actions)",fn:function(a){return[e("b-icon-pencil-square",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.dateItem(a.item)}}}),e("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.modalDelete(a.item)}}})]}}])}),e("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])]),e("div",[e("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteItem(t.dataDelete)}}},[t._v(" Aceptar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar a "),e("b",[t._v(t._s(t.data.description))]),t._v("? ")])])],1)],1)])},r=[],o=(a("14d9"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"ProgramsRegister"}},[e("button",{staticClass:"btn mb-3",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.addRol()}}},[t._v(" Agregar Programa ")]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Registra Programa"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem(t.data)}}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"error"}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Opciones:")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.opciones,required:""},model:{value:t.opcion,callback:function(e){t.opcion=e},expression:"opcion"}})],1),"0"!=t.opcion?e("div",["1"==t.opcion?e("div",{staticClass:"form-group"},[e("label",[t._v("Seleccionar programa")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.programs,required:""},model:{value:t.data.idProgram,callback:function(e){t.$set(t.data,"idProgram",e)},expression:"data.idProgram"}})],1):t._e(),"2"==t.opcion?e("div",[e("b-row",[e("div",{staticClass:"form-group col-8"},[e("label",[t._v("Nombre")]),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese su nombre"},model:{value:t.dataExtra.name,callback:function(e){t.$set(t.dataExtra,"name",e)},expression:"dataExtra.name"}})],1),e("div",{staticClass:"form-group col-4"},[e("label",[t._v("Acrónimo")]),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese"},model:{value:t.dataExtra.acronym,callback:function(e){t.$set(t.dataExtra,"acronym",e)},expression:"dataExtra.acronym"}})],1)]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Área")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.areas},model:{value:t.dataExtra.area,callback:function(e){t.$set(t.dataExtra,"area",e)},expression:"dataExtra.area"}})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Descripción")]),e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese descripción"},model:{value:t.dataExtra.description,callback:function(e){t.$set(t.dataExtra,"description",e)},expression:"dataExtra.description"}})],1)],1):t._e(),e("div",{staticClass:"form-group"},[e("label",[t._v("Fecha de inicio")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dateOpening,expression:"data.dateOpening"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.data.dateOpening},on:{input:function(e){e.target.composing||t.$set(t.data,"dateOpening",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Cantidad de semanas")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.weeks,expression:"data.weeks"}],staticClass:"form-control",attrs:{type:"number",required:""},domProps:{value:t.data.weeks},on:{input:function(e){e.target.composing||t.$set(t.data,"weeks",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Fecha de cierre de matricula")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dateClosingEnrollmet,expression:"data.dateClosingEnrollmet"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.data.dateClosingEnrollmet},on:{input:function(e){e.target.composing||t.$set(t.data,"dateClosingEnrollmet",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Monto matricula")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.payEnrollmet,expression:"data.payEnrollmet"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese monto de dinero",required:""},domProps:{value:t.data.payEnrollmet},on:{input:function(e){e.target.composing||t.$set(t.data,"payEnrollmet",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",[t._v("Monto pensión")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.payPension,expression:"data.payPension"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese monto de dinero",required:""},domProps:{value:t.data.payPension},on:{input:function(e){e.target.composing||t.$set(t.data,"payPension",e.target.value)}}})])]):t._e()],1)])],1)],1)])}),i=[],n=a("2df4"),l={name:"ProgramsRegister",components:{AlertError:n["a"]},props:{id:{type:String,default:null},idNumber:{type:String,default:null}},data(){return{show:!1,opcion:"0",data:{},dataExtra:{},areas:[{text:"Área Técnica",value:"T"},{text:"Área Administrativa",value:"A"}],opciones:[{text:"-- Seleccionar opción --",value:"0"},{text:"Seleccionar programa",value:"1"},{text:"Registrar programa",value:"2"}],programs:[]}},methods:{exit(){this.show=!1},addRol(){this.opcion="0",this.listPrograms(),this.data={idPeriod:null,idProgram:null,dateOpening:"",dateClosingEnrollmet:"",weeks:null,payEnrollmet:null,payPension:null,weeks:0},this.dataExtra={name:"",acronym:"",description:"",area:"T"},this.show=!0},async listPrograms(){await this.$axios.get("/academic/"+this.id+"/program-register",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.programs=t.data}).catch(t=>{console.log(t)})},async saveAddItem(){if(this.data.idPeriod=parseInt(this.idNumber),1==this.opcion&&await this.$axios.post("/academic/"+this.id+"/program-register-select",this.data,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.show=!1,this.$message.success(t.data.content),this.$parent.initialize()}).catch(t=>{console.log(t),this.$refs.error.showAlert(t.response.data.content)}),2==this.opcion){delete this.data.idProgram;var t=Object.assign({},this.data,this.dataExtra);await this.$axios.post("/academic/"+this.id+"/program-register-new",t,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.show=!1,this.$message.success(t.data.content),this.$parent.initialize()}).catch(t=>{console.log(t),this.$refs.error.showAlert(t.response.data.content)})}}}},c=l,d=(a("1134"),a("2877")),u=Object(d["a"])(c,o,i,!1,null,null,null),m=u.exports,p={components:{ProgramsRegister:m},props:{id:{type:String,default:null}},data:()=>({totalPeople:0,keyword:"",perPage:10,currentPage:1,name:"",idPeriod:"",idNumber:null,showDelete:!1,data:{id:-1,index:"",description:"",dateOpening:"",dateClosing:"",state:""},fields:[{key:"description",label:"Nombre descriptivo"},{key:"dateOpening",label:"Fecha Inicio"},{key:"dateClosing",label:"Fecha Fin"},{key:"people",label:"Personas"},{key:"courses",label:"Cursos"},{key:"state",label:"Estado"},{key:"actions",label:"Acciones"}],fieldsAdmin:[{key:"description",label:"Nombre descriptivo"},{key:"dateOpening",label:"Fecha Inicio"},{key:"dateClosing",label:"Fecha Fin"},{key:"people",label:"Personas"},{key:"payments",label:"Pagos"},{key:"courses",label:"Cursos"},{key:"state",label:"Estado"},{key:"actions",label:"Acciones"}],fieldsFinance:[{key:"description",label:"Nombre descriptivo"},{key:"people",label:"Personas"},{key:"payments",label:"Pagos"},{key:"state",label:"Estado"}],desserts:[]}),created(){this.initialize()},computed:{rows(){return this.desserts.length},items(){return this.currentPage=1,this.keyword?this.desserts.filter(t=>t.identifier.toLowerCase().includes(this.keyword.toLowerCase())):this.desserts}},methods:{modalDelete(t){this.showDelete=!0,this.dataDelete=t,this.data.description=t.description},exitDelete(){this.showDelete=!1,this.data.description=""},toPeople(t){this.$router.push("/academic/"+this.idPeriod+"/"+t+"/enrolleds")},toPayments(t){this.$router.push("/"+this.id+"/"+t+"/payments")},toCourses(t){this.$router.push("/"+this.id+"/"+t+"/courses")},toPeriods(){this.$router.push("/academic")},returnData(t){return"A"===t?"Activo":"I"===t?"Inactivo":void 0},returnColor(t){return"A"===t?"success":"I"===t?"danger":void 0},async initialize(){let t=await this.$axios.get("/academic/"+this.id+"/programs",{headers:{Authorization:"Bearer "+localStorage.token}}).catch(t=>{this.$errorQuery(t)});var e=[];this.name=t.data.name,this.idNumber=t.data.id.toString(),this.idPeriod=t.data.identifier;var a=0;for(var s in t.data.programPeriods)a+=t.data.programPeriods[s].enrollmentCount,e.push(t.data.programPeriods[s]);this.desserts=e,this.fields[3].label="Personas ("+a+")",this.fieldsFinance[1].label="Personas ("+a+")"},async deleteItem(t){if(this.showDelete=!1,""!=t)try{await this.$axios.get("/academic/"+this.id+"/program-delete?programId="+t.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize()})}catch(e){this.$message.error("Error!"),console.log(e)}}}},h=p,g=(a("dbea"),Object(d["a"])(h,s,r,!1,null,null,null));e["default"]=g.exports},dbea:function(t,e,a){"use strict";a("e7e2")},e7e2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-30ed0a88.973e4e3c.js.map