(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50b6ec50"],{"2df4":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},r=[],o={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},n=o,i=a("2877"),l=Object(i["a"])(n,s,r,!1,null,null,null);e["a"]=l.exports},3781:function(t,e,a){},"514b":function(t,e,a){},"7bd0":function(t,e,a){"use strict";a("514b")},d571:function(t,e,a){"use strict";a("3781")},fe4c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"CoursesHorary"}},[e("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-11"},[e("h1",[e("b-icon",{attrs:{icon:"card-checklist"}}),t._v(" Horario de "+t._s(t.desserts.name)+" ")],1)]),e("div",{staticClass:"col-1"},[e("h1",[e("b-icon",{attrs:{type:"button",icon:"arrow-return-left"},on:{click:t.toCourse}})],1)])])]),e("div",{staticClass:"card-body"},[e("b-row",[e("b-col",[e("HoraryRegister",{attrs:{idCourse:t.id}})],1),e("b-col")],1),0!=t.desserts.list.length?e("div",[e("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:t.desserts.list,fields:t.fields},scopedSlots:t._u([{key:"cell(generate)",fn:function(a){return[a.item.containsDates?e("div",[e("b-badge",{attrs:{variant:"success"}},[t._v("Fechas generadas")]),e("b-icon-arrow-clockwise",{staticClass:"ml-2",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.startGenerateDates(a.item.id)}}})],1):e("div",[e("b-button",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.rigth",value:"Esta función generara fechas segun el dia para el cronograma de asistencias.",expression:"\n                    'Esta función generara fechas segun el dia para el cronograma de asistencias.'\n                  ",modifiers:{hover:!0,rigth:!0}}],staticClass:"border border-dark",attrs:{size:"sm",variant:"warning"},on:{click:function(e){return t.startGenerateDates(a.item.id)}}},[t._v("Generar fechas")])],1)]}},{key:"cell(actions)",fn:function(a){return[e("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.modalDelete(a.item)}}})]}}],null,!1,2617160285)})],1):e("div",[e("hr"),t._m(0)])],1)]),e("div",[e("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteItem(t.dataDelete)}}},[t._v(" Aceptar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"text-center"},[t._v("¿Seguro que desea eliminar la hora?")])])],1)],1),e("b-modal",{attrs:{scrollable:"",centered:"",title:"Generar fechas"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.generateDates()}}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitGenerateDates()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showGenerateDates,callback:function(e){t.showGenerateDates=e},expression:"showGenerateDates"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"error"}),e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Fecha de inicio:")])]),e("b-input",{attrs:{state:""!=t.dataGenerate.startDate,type:"date"},model:{value:t.dataGenerate.startDate,callback:function(e){t.$set(t.dataGenerate,"startDate",e)},expression:"dataGenerate.startDate"}})],1),e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Fecha de fin:")])]),e("b-input",{attrs:{state:""!=t.dataGenerate.endDate,type:"date"},model:{value:t.dataGenerate.endDate,callback:function(e){t.$set(t.dataGenerate,"endDate",e)},expression:"dataGenerate.endDate"}})],1)],1)])],1)],1)])},r=[function(){var t=this,e=t._self._c;return e("em",[e("p",{staticClass:"text-center"},[t._v("No hay datos en esta tabla")])])}],o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"HoraryRegister"}},[e("button",{staticClass:"btn mb-3",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.addHorary()}}},[t._v(" Agregar horario ")]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Registra Horario"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:t.saveAddItem}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("AlertError",{ref:"error"}),e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Seleccionar día:")])]),e("b-form-select",{attrs:{state:null!=t.dataSend.day,options:t.options,required:""},model:{value:t.dataSend.day,callback:function(e){t.$set(t.dataSend,"day",e)},expression:"dataSend.day"}})],1)]),e("div",{staticClass:"col-6"})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Hora de inicio:")])]),e("b-form-timepicker",{attrs:{state:null!=t.dataSend.timeStart,locale:"en"},model:{value:t.dataSend.timeStart,callback:function(e){t.$set(t.dataSend,"timeStart",e)},expression:"dataSend.timeStart"}})],1)]),e("div",{staticClass:"col-6"},[e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Hora de fin:")])]),e("b-form-timepicker",{attrs:{state:null!=t.dataSend.timeFinal,locale:"en"},model:{value:t.dataSend.timeFinal,callback:function(e){t.$set(t.dataSend,"timeFinal",e)},expression:"dataSend.timeFinal"}})],1)])])])],1)],1)],1)])},n=[],i=a("2df4"),l={name:"HoraryRegister",components:{AlertError:i["a"]},props:{idCourse:{type:String,default:null}},data(){return{show:!1,dataSend:{},options:[{text:"Lunes",value:"L"},{text:"Martes",value:"M"},{text:"Miércoles",value:"R"},{text:"Jueves",value:"J"},{text:"Viernes",value:"V"},{text:"Sábado",value:"S"},{text:"Domingo",value:"D"}]}},methods:{async saveAddItem(){null!=this.dataSend.day&&null!=this.dataSend.timeStart&&null!=this.dataSend.timeFinal?await this.$axios.post("/academic/course/"+this.idCourse+"/horary-register",this.dataSend,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.show=!1,this.$message.success(t.data.content),this.$parent.initialize()}).catch(t=>{console.log(t),this.$refs.error.showAlert(t.response.data.content)}):this.$refs.error.showAlert("Ingrese todos los datos")},addHorary(){this.show=!0,this.dataSend={}},exit(){this.show=!1}}},c=l,d=(a("d571"),a("2877")),u=Object(d["a"])(c,o,n,!1,null,null,null),h=u.exports,b={name:"CoursesHorary",components:{HoraryRegister:h,AlertError:i["a"]},props:{id:{type:String,default:null}},data(){return{dataDelete:"",data:{},dataGenerate:{startDate:"",endDate:""},showDelete:!1,showGenerateDates:!1,rowId:null,desserts:{list:[]},fields:[{key:"day",label:"Dia"},{key:"startTime",label:"Hora de inicio"},{key:"finalTime",label:"Hora de fin"},{key:"generate",label:"Generación"},{key:"actions",label:"Acciones"}]}},created(){this.initialize()},methods:{async generateDates(){await this.$axios.post("/academic/horary/"+this.rowId+"/all-date-register",this.dataGenerate,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize(),this.showGenerateDates=!1}).catch(t=>{this.showGenerateDates=!1,this.$errorQuery(t)})},async startGenerateDates(t){this.rowId=t,this.showGenerateDates=!0,this.dataGenerate={startDate:"",endDate:""},await this.$axios.get("/academic/course/"+this.id+"/schedule",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.dataGenerate.startDate=t.data.startDate,this.dataGenerate.endDate=t.data.endDate}).catch(t=>{this.$errorQuery(t)})},async deleteItem(t){if(this.showDelete=!1,""!=t)try{await this.$axios.get("/academic/course/"+this.id+"/horary-delete?id="+t.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize()})}catch(e){this.$message.error(e.response.data.content),console.log(e)}},exitDelete(){this.showDelete=!1},exitGenerateDates(){this.showGenerateDates=!1},modalDelete(t){this.showDelete=!0,this.dataDelete=t,this.data.name=t.name},toCourse(){this.$router.go(-1)},async initialize(){await this.$axios.get("/academic/course/"+this.id+"/horary",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data}).catch(t=>{this.$errorQuery(t)})}}},m=b,f=(a("7bd0"),Object(d["a"])(m,s,r,!1,null,null,null));e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-50b6ec50.ca9b6cd6.js.map