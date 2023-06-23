(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78cae297"],{"2df4":function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},s=[],r={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},i=r,n=a("2877"),l=Object(n["a"])(i,o,s,!1,null,null,null);e["a"]=l.exports},"3e79":function(t,e,a){},"3f43":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),e("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("h1",[e("b-icon",{attrs:{icon:"calendar2-week"}}),t._v(" Gestión de Ciclos Académicos")],1)]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"container"},[e("b-row",[e("b-col",[e("PeriodRegister")],1),e("b-col",[e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-input-group-prepend",{attrs:{"is-text":""}},[e("b-icon",{attrs:{icon:"search"}})],1),e("b-form-input",{attrs:{placeholder:"Buscar",type:"text"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)],1)],1)],1),e("div",{staticClass:"container col-12"},[e("div",[e("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:t.items,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage,keyword:t.keyword},scopedSlots:t._u([{key:"cell(modality)",fn:function(a){return[e("em",[t._v(t._s(t.returnModality(a.item.modality)))])]}},{key:"cell(state)",fn:function(a){return[e("b-badge",{attrs:{pill:"",variant:t.returnColor(a.item.state)}},[t._v(t._s(t.returnData(a.item.state)))])]}},{key:"cell(programs)",fn:function(a){return[e("b-icon",{staticClass:"mx-1",attrs:{type:"button",icon:"clipboard-check"},on:{click:function(e){return t.toPrograms(a.item.identifier)}}}),e("span",[t._v(t._s(a.item.countPrograms))])]}},{key:"cell(actions)",fn:function(a){return[e("b-icon-pencil-square",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.dateItem(a.item)}}}),e("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.modalDelete(a.item)}}})]}}])}),e("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Editar Ciclo"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveEditItem(t.data)}}},[t._v(" Editar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"error"}),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Nombre")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese su nombre",required:""},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Año")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.year,expression:"data.year"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese año",required:""},domProps:{value:t.data.year},on:{input:function(e){e.target.composing||t.$set(t.data,"year",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Descripción")]),e("b-form-textarea",{staticClass:"form-control",attrs:{placeholder:"Ingrese descripción",required:""},model:{value:t.data.description,callback:function(e){t.$set(t.data,"description",e)},expression:"data.description"}})],1),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Modalidad")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.modalidad,required:""},model:{value:t.data.modality,callback:function(e){t.$set(t.data,"modality",e)},expression:"data.modality"}})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Estado")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.states,required:""},model:{value:t.data.state,callback:function(e){t.$set(t.data,"state",e)},expression:"data.state"}})],1)],1)])],1)],1),e("div",[e("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteItem(t.dataDelete)}}},[t._v(" Aceptar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar a "),e("b",[t._v(t._s(t.data.name))]),t._v("? ")])])],1)],1)],1)},s=[],r=(a("14d9"),a("9612")),i=a("aedf"),n=(a("31dc"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"PeriodRegister"}},[e("button",{staticClass:"btn mb-3",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.addProgram()}}},[t._v(" Agregar Ciclo Académico ")]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Aperturar Ciclo Académico"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem(t.data)}}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")]),e("b-row",[e("div",{staticClass:"form-group col-7"},[e("label",{attrs:{for:"validationServer01"}},[t._v("Nombre")]),e("b-form-input",{staticClass:"form-control",attrs:{state:""!=t.data.name,type:"text",placeholder:"Ingrese su nombre"},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})],1),e("div",{staticClass:"form-group col-5"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Año")]),e("b-form-input",{staticClass:"form-control",attrs:{state:null!=t.data.year&&""!=t.data.year,type:"number",placeholder:"Ingrese año"},model:{value:t.data.year,callback:function(e){t.$set(t.data,"year",e)},expression:"data.year"}})],1)]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Modalidad")]),e("b-form-select",{staticClass:"form-control",attrs:{options:t.modalidades},model:{value:t.data.modality,callback:function(e){t.$set(t.data,"modality",e)},expression:"data.modality"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"true"===t.data.blockRegistration,expression:"data.blockRegistration === 'true'"}]},[e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Fecha de inicio")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dateOpening,expression:"data.dateOpening"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.data.dateOpening},on:{input:function(e){e.target.composing||t.$set(t.data,"dateOpening",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Fecha de cierre de matricula")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dateClosingEnrollmet,expression:"data.dateClosingEnrollmet"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.data.dateClosingEnrollmet},on:{input:function(e){e.target.composing||t.$set(t.data,"dateClosingEnrollmet",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Fecha de fin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.dateClosing,expression:"data.dateClosing"}],staticClass:"form-control",attrs:{type:"date",required:""},domProps:{value:t.data.dateClosing},on:{input:function(e){e.target.composing||t.$set(t.data,"dateClosing",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Monto matricula")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.payEnrollmet,expression:"data.payEnrollmet"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese monto de dinero",required:""},domProps:{value:t.data.payEnrollmet},on:{input:function(e){e.target.composing||t.$set(t.data,"payEnrollmet",e.target.value)}}})]),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Monto pensión")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.payPension,expression:"data.payPension"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese monto de dinero",required:""},domProps:{value:t.data.payPension},on:{input:function(e){e.target.composing||t.$set(t.data,"payPension",e.target.value)}}})])])],1)])],1)],1)])}),l=[],d={name:"PeriodRegister",data(){return{selected:"",error:"",dismissSecs:2,dismissCountDown:0,showDismissibleAlert:!1,show:!1,data:{name:"",modality:"",year:null,blockRegistration:!1,dateOpening:"",dateClosing:"",dateClosingEnrollmet:"",payEnrollmet:null,payPension:null},modalidades:[{text:"Modalidad Virtual",value:"V"},{text:"Modalidad Presencial",value:"P"}]}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs},exit(){this.show=!1},addProgram(){this.data={name:"Ciclo Académico",modality:"V",year:null,blockRegistration:!1,dateOpening:"",dateClosing:"",dateClosingEnrollmet:"",payEnrollmet:null,payPension:null,weeks:0},this.show=!0},async saveAddItem(){this.data.blockRegistration||(this.data.dateOpening="2000-01-01",this.data.dateClosing="2000-01-01",this.data.dateClosingEnrollmet="2000-01-01",this.data.payEnrollmet=0,this.data.payPension=0),await this.$axios.post("/academic/cycle-register",this.data,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.show=!1,this.$message.success(t.data.content),this.$parent.initialize()}).catch(t=>{console.log(t),this.showAlert(t.response.data.content)})}}},c=d,u=(a("97ed"),a("2877")),m=Object(u["a"])(c,n,l,!1,null,null,null),p=m.exports,h=a("2df4"),f={components:{PeriodRegister:p,AlertError:h["a"]},data:()=>({selected:"",keyword:"",perPage:10,currentPage:1,imageUrl:"",imageData:null,picture:null,uploadValue:0,dataDelete:"",show:!1,showDelete:!1,data:{id:"",identifier:"",year:null,name:"",description:"",modality:"",state:""},modalidad:[{text:"Virtual",value:"V"},{text:"Presencial",value:"P"}],states:[{text:"Activo",value:"A"},{text:"Inactivo",value:"I"}],estados:[{value:!1,name:"Activo"},{value:!0,name:"Inactivo"}],fields:[{key:"name",label:"Nombre"},{key:"year",label:"Año Académico"},{key:"modality",label:"Modalidad"},{key:"programs",label:"Programas"},{key:"state",label:"Estado"},{key:"actions",label:"Acciones"}],desserts:[]}),created(){this.initialize()},computed:{rows(){return this.desserts.length},items(){return this.currentPage=1,this.keyword?this.desserts.filter(t=>t.name.toLowerCase().includes(this.keyword.toLowerCase())||t.year.toString().toLowerCase().includes(this.keyword.toLowerCase())):this.desserts}},methods:{returnModality(t){return"V"===t?"Virtual":"P"===t?"Presencial":void 0},previewImage(t){this.uploadValue=0,this.picture=null,this.imageData=t.target.files[0]},getFileExtension(t){return t.slice(2+(t.lastIndexOf(".")-1>>>0))},onUpload(){this.picture=null;let t=null;t=""===this.data.image?r["b"].v1():this.data.image;const e=i["a"].storage().ref(t).put(this.imageData);return e.on("state_changed",t=>{this.uploadValue=t.bytesTransferred/t.totalBytes*100},t=>{console.log(t.message)},()=>{this.uploadValue=100,e.snapshot.ref.getDownloadURL().then(t=>{this.picture=t})}),t},toPrograms(t){this.$router.push("/academic/"+t+"/programs")},returnData(t){return"A"===t?"Activo":"I"===t?"Inactivo":void 0},returnColor(t){return"A"===t?"success":"I"===t?"danger":void 0},exit(){this.show=!1},exitDelete(){this.showDelete=!1,this.data.username=""},modalDelete(t){this.showDelete=!0,this.dataDelete=t,this.data.name=t.name},async initialize(){this.selected="circular";await this.$axios.get("/academic",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{var e=[];for(var a in t.data){var o=t.data[a];e.push(o)}this.desserts=e,this.selected=""}).catch(t=>{this.$errorQuery(t)})},async dateItem(t){this.show=!0;let e=await this.$axios.get("/academic/cycle-edit?id="+t.id,{headers:{Authorization:"Bearer "+localStorage.token}});this.data=e.data},async saveEditItem(t){if(this.show=!0,""!=t.id)try{await this.$axios.post("/academic/cycle-edit",this.data,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.show=!1,this.initialize()}).catch(t=>{this.$refs.error.showAlert(t.response.data.content)})}catch(e){console.log(e)}},async deleteItem(t){if(this.showDelete=!1,""!=t)try{await this.$axios.get("/academic/cycle-delete?id="+t.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize()})}catch(e){this.$message.error("Error!"),console.log(e)}}}},g=f,v=(a("797f"),Object(u["a"])(g,o,s,!1,null,null,null));e["default"]=v.exports},"797f":function(t,e,a){"use strict";a("aafb")},"97ed":function(t,e,a){"use strict";a("3e79")},aafb:function(t,e,a){}}]);
//# sourceMappingURL=chunk-78cae297.102b1bab.js.map