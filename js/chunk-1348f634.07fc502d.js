(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1348f634"],{"0daa":function(e,t,a){},1987:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"dashboard"}},[t("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:e.selected,disableScrolling:"false"}}),t("div",{staticClass:"container"},[t("div",{staticClass:"card"},[t("div",{staticClass:"card-header"},[t("h1",[t("b-icon",{attrs:{icon:"bar-chart"}}),e._v(" Estadísticas ("+e._s(e.rows)+")")],1)]),t("div",{staticClass:"card-body"},[t("div",{staticClass:"container col-12"},[t("div",[t("b-row",{staticClass:"mb-3"},[t("b-col",{attrs:{lg:"5",sm:"12"}},[t("div",[t("label",{attrs:{for:"exampleInputPassword1"}},[t("b",[e._v("Fecha de inicio:")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.startDate,expression:"data.startDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Ingrese fecha nacimiento",required:""},domProps:{value:e.data.startDate},on:{input:function(t){t.target.composing||e.$set(e.data,"startDate",t.target.value)}}})])]),t("b-col",{attrs:{lg:"5",sm:"12"}},[t("div",[t("label",{attrs:{for:"exampleInputPassword1"}},[t("b",[e._v("Fecha de fin:")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.data.endDate,expression:"data.endDate"}],staticClass:"form-control",attrs:{type:"date",placeholder:"Ingrese fecha nacimiento",required:""},domProps:{value:e.data.endDate},on:{input:function(t){t.target.composing||e.$set(e.data,"endDate",t.target.value)}}})])]),t("b-col",{attrs:{lg:"2",sm:"12"}},[t("button",{staticClass:"btn form-control",staticStyle:{"background-color":"#1d425e",border:"none",color:"white","margin-top":"30px"},attrs:{type:"button"},on:{click:function(t){return e.search()}}},[e._v(" Filtrar ")])])],1),""!=e.desserts?t("div",[""!=e.desserts?t("div",[t("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:e.desserts,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage},scopedSlots:e._u([{key:"cell(date)",fn:function(a){return[t("p",{domProps:{textContent:e._s(e.fecha(a.item.date))}})]}},{key:"cell(verify)",fn:function(a){return[t("b-badge",{attrs:{pill:"",variant:e.returnColor(a.item.verify)}},[e._v(e._s(e.returnData(a.item.verify)))])]}}],null,!1,3926150968)}),t("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":e.rows,"per-page":e.perPage,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1):t("div",{staticClass:"text-center"},[t("em",[e._v("No hay pagos de matrícula en este rango de fechas")])])]):e._e()],1)])])])])],1)},s=[],o=(a("14d9"),{data:()=>({selected:"",perPage:10,currentPage:1,desserts:[],data:{startDate:"",endDate:""},dataTotal:[],fields:[{key:"name",label:"Nombre"},{key:"username",label:"Usuario"},{key:"date",label:"Fecha y hora"},{key:"verify",label:"Estado"}]}),computed:{rows(){if(0!=this.desserts.length)return this.desserts.length}},methods:{returnData(e){return!1===e?"Pendiente":"Finalizado"},returnColor(e){return!1===e?"":"primary"},fecha(e){return e.substring(0,10)+" ("+e.substring(11,16)+")"},iconos(e){return"Ingresos en soles"==e?"chevron-double-down":"chevron-double-up"},async search(){""!=this.data.startDate&&""!=this.data.endDate?(this.selected="circular",await this.$axios.post("/documentary/requisition",this.data,{headers:{Authorization:"Bearer "+localStorage.token}}).then(e=>{var t=[];for(var a in e.data){var r=e.data[a];t.push(r)}this.desserts=t,this.selected=""}).catch(e=>{this.$errorQuery(e)})):this.$message.error("Llene los campos")}}}),n=o,i=(a("fead"),a("2877")),l=Object(i["a"])(n,r,s,!1,null,null,null);t["default"]=l.exports},fead:function(e,t,a){"use strict";a("0daa")}}]);
//# sourceMappingURL=chunk-1348f634.07fc502d.js.map