(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53d77b6e"],{"2df4":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},r=[],s={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},o=s,l=a("2877"),n=Object(l["a"])(o,i,r,!1,null,null,null);e["a"]=n.exports},"2e8f":function(t,e,a){},3802:function(t,e,a){},"70ce":function(t,e,a){"use strict";a("2e8f")},"9e4e":function(t,e,a){"use strict";a("3802")},d8c7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),e("div",{staticClass:"card"},[e("div",{staticClass:"card-header header-blue"},[e("h2",[e("b-icon-list-ol"),t._v(" Lista de notas")],1)]),e("div",{staticClass:"card-body"},[e("b-row",[e("b-col",{attrs:{lg:"3"}},[t.disabledAttendance?e("button",{staticClass:"btn mb-3 font-weight-bold w-100",staticStyle:{"background-color":"#5e151d",color:"white"},on:{click:function(e){return t.endRegister()}}},[t._v(" Finalizar Registro ")]):e("button",{staticClass:"btn mb-3 font-weight-bold w-100",staticStyle:{"background-color":"#5e151d",color:"white"},on:{click:function(e){t.disabledAttendance=!t.disabledAttendance}}},[t._v(" Ingresar notas ")])]),e("b-col",{staticClass:"mb-3",attrs:{lg:"9"}},[t.disabledAttendance?e("CriteriaRegister",{attrs:{id:t.id}}):t._e()],1),e("b-col")],1),e("b-overlay",{attrs:{show:t.showTable,rounded:"sm"}},[e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-striped"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),e("th",{attrs:{scope:"col"}},[t._v("Nombres")]),t._l(t.desserts.allQualificationDto,(function(a,i){return e("th",{key:i,attrs:{scope:"col"}},[t._v(" "+t._s(a.name+" ("+a.porcentual+"%) ")+" "),t.disabledAttendance?e("b-icon-trash",{staticClass:"mx-1",attrs:{type:"button",size:"sm"},on:{click:function(e){return t.modalDelete(a)}}}):t._e()],1)}))],2)]),e("tbody",t._l(t.desserts.allEnrollQualification,(function(a,i){return e("tr",{key:i},[e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(i+1)+" ")]),e("th",{attrs:{scope:"row"}},[t._v(" "+t._s(a.lastnameFather+" "+a.lastnameMother+", "+a.name)+" ")]),t._l(a.allQualification,(function(i,r){return e("td",{key:"C"+r},[t.disabledAttendance?e("div",[e("b-input",{staticClass:"inputCell",attrs:{type:"number"},on:{blur:function(e){return t.addValue(a.id,i.id,i.value)}},model:{value:i.value,callback:function(e){t.$set(i,"value",e)},expression:"value.value"}})],1):e("div",[null!=i.status?e("p",{class:"font-weight-bold mb-0 text-"+i.color},[t._v(" "+t._s(i.value)+" ")]):e("p",{staticClass:"font-weight-bold mb-0"},[t._v("-")])])])}))],2)})),0)])])])],1)]),e("div",[e("b-modal",{attrs:{centered:"",title:"Mensaje"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.deleteCriteria()}}},[t._v(" Aceptar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exitDelete()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showDelete,callback:function(e){t.showDelete=e},expression:"showDelete"}},[e("b-container",{attrs:{fluid:""}},[e("h5",{staticClass:"text-center"},[t._v(" ¿Seguro que desea eliminar "),e("b",[t._v(t._s(t.dataDelete.name))]),t._v(" ? "),e("p",[e("em",[t._v(" Se eliminarán todas las notas asociadas a este criterio de calificación.")])])])])],1)],1)],1)},r=[],s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"CriteriaRegister"}},[e("button",{staticClass:"btn font-weight-bold w-100",staticStyle:{"background-color":"#1d425e",color:"white"},on:{click:function(e){return t.add()}}},[t._v(" Añadir Critero de calificación ")]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Añadir criterio de calificación"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.saveAddItem()}}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"error"}),e("div",{staticClass:"form-group my-3"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Criterio de Calificación:")]),e("b-form-select",{attrs:{state:null!=t.data.criteria,options:t.criteria,required:""},model:{value:t.data.criteria,callback:function(e){t.$set(t.data,"criteria",e)},expression:"data.criteria"}})],1),e("div",{staticClass:"form-group"},[e("label",[e("b",[t._v("Porcentaje:")])]),e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:"%"}},[e("b-form-input",{attrs:{type:"number",state:null!=t.data.porcentual&&t.verifyPorcentual(t.data.porcentual),placeholder:"Ingresar porcentaje",required:""},model:{value:t.data.porcentual,callback:function(e){t.$set(t.data,"porcentual",e)},expression:"data.porcentual"}})],1)],1)],1)])],1)],1)])},o=[],l=a("2df4"),n={name:"CriteriaRegister",components:{AlertError:l["a"]},props:{id:{type:String,default:null}},data(){return{criteria:[],show:!1,data:{}}},created(){this.initialize()},methods:{verifyPorcentual(t){return!(t<0||t>100)},exit(){this.show=!1},add(){this.data={},this.show=!0},async initialize(){await this.$axios.get("/dashboard/course/"+this.id+"/qualification-criteria-register",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.criteria=t.data}).catch(t=>{this.$errorQuery(t)})},async saveAddItem(){""!=this.data.criteria&&null!=this.data.porcentual?this.verifyPorcentual(this.data.porcentual)?await this.$axios.post("/dashboard/course/"+this.id+"/qualification-criteria-register",{id:this.data.criteria,porcentual:this.data.porcentual},{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.$parent.initialize(),this.show=!1}).catch(t=>{console.log(t),this.$refs.error.showAlert(t.response.data.content)}):this.$refs.error.showAlert("Fuera de los margenes porcentuales"):this.$refs.error.showAlert("Ingrese todos los datos")}}},c=n,d=(a("9e4e"),a("2877")),u=Object(d["a"])(c,s,o,!1,null,null,null),h=u.exports,f={components:{CriteriaRegister:h},props:{id:{type:String,default:null}},data(){return{showTable:!1,selected:"",dataDelete:{},showDelete:!1,disabledAttendance:!1,criteriaList:[],desserts:{allQualificationDto:[],allEnrollQualification:[]}}},created(){this.initialize()},methods:{alertUpdate(){return alert("Mensaje"),"Te estás saliendo del sitio…"},endRegister(){this.disabledAttendance=!this.disabledAttendance,this.initialize()},exitDelete(){this.showDelete=!1},modalDelete(t){this.dataDelete={},this.showDelete=!0,this.dataDelete=t},formatData(t){for(let e=0;e<t.allEnrollQualification.length;e++)for(let a=0;a<t.allEnrollQualification[e].allQualification.length;a++)null==t.allEnrollQualification[e].allQualification[a].status&&(t.allEnrollQualification[e].allQualification[a].value=" ")},async addValue(t,e,a){this.showTable=!0,await this.$axios.post("/dashboard/course/"+this.id+"/qualification-edit",{personId:t,qualificationCriteriaId:e,qualificationValue:a},{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.initializeUpdate()}).catch(t=>{this.$errorQuery(t)})},async deleteCriteria(){await this.$axios.get("/dashboard/course/"+this.id+"/qualification-criteria-delete?id="+this.dataDelete.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.$message.success(t.data.content),this.initialize(),this.showDelete=!1}).catch(t=>{this.$errorQuery(t)})},async initialize(){this.selected="circular",await this.$axios.get("/dashboard/course/"+this.id+"/list-qualification-criteria",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data,this.formatData(this.desserts),this.selected=""}).catch(t=>{this.$errorQuery(t)})},async initializeUpdate(){await this.$axios.get("/dashboard/course/"+this.id+"/list-qualification-criteria",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data,this.formatData(this.desserts),this.showTable=!1}).catch(t=>{this.$errorQuery(t)})},async listCriterias(){await this.$axios.get("/dashboard/course/"+this.id+"/qualification-criteria-register",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.criteriaList=t.data}).catch(t=>{this.$errorQuery(t)})}}},b=f,p=(a("70ce"),Object(d["a"])(b,i,r,!1,null,"1194da6c",null));e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-53d77b6e.ef2ea686.js.map