(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c6734d8"],{"0c17":function(t,a,e){"use strict";e("9b9c")},"2df4":function(t,a,e){"use strict";var r=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"AlertError"}},[a("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[a("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},s=[],o={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},i=o,n=e("2877"),l=Object(n["a"])(i,r,s,!1,null,null,null);a["a"]=l.exports},"54fe":function(t,a,e){"use strict";e("8e21")},"66c2":function(t,a,e){},6873:function(t,a,e){},"8e21":function(t,a,e){},"90f1":function(t,a,e){},"91ee":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"dashboard"}},[a("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),a("div",{staticClass:"container"},[a("div",[a("b-jumbotron",{staticClass:"pt-0 pb-3 mb-3",staticStyle:{"background-image":"url(https://firebasestorage.googleapis.com/v0/b/ucps-7d113.appspot.com/o/ImagenDashboard.jpg?alt=media)","background-position":"center center","background-repeat":"no-repeat","background-size":"cover"},attrs:{"text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("UCPS ")]},proxy:!0},{key:"lead",fn:function(){return[a("p",{staticClass:"borderText"},[t._v(" Unidad de Capacitación de Producción y Servicios ")]),a("p",{staticClass:"borderText"},[t._v("Sistema de matrículas")])]},proxy:!0}])}),a("section",{attrs:{id:"workspace"}},[a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-header"},[a("h1",[a("b-icon",{attrs:{icon:"diagram3"}}),t._v(" Espacio de Trabajo")],1)]),a("div",{staticClass:"card-body"},[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.desserts.allEnrollmentProgram.length||0!=t.desserts.allEnrollmentProgramChecking.length,expression:"\n                desserts.allEnrollmentProgram.length != 0 ||\n                desserts.allEnrollmentProgramChecking.length != 0\n              "}],staticClass:"card mt-3"},[a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(119, 35, 45)"}},[a("h3",[a("b-icon",{attrs:{icon:"journal-bookmark"}}),t._v(" Mis programas")],1)]),a("div",{staticClass:"card-body pb-0"},[a("b-button",{staticClass:"mb-3",attrs:{href:"https://canvas.instructure.com/login/google",target:"_blank",variant:"warning"}},[a("b",[t._v("Ingresar al aula virtual Canvas")])]),a("div",{staticClass:"row"},[t._l(t.desserts.allEnrollmentProgram,(function(e,r){return a("div",{key:r,staticClass:"col"},[a("b-jumbotron",{staticClass:"pt-0 pt-3",staticStyle:{"background-image":"url(https://www.ecestaticos.com/imagestatic/clipping/39e/309/39e309dff6a35294c9eae324531ec5c7/los-libros-que-se-han-censurado-o-perseguido-en-estados-unidos-en-2018.jpg?mtime=1622642908)","background-position":"center center","background-repeat":"no-repeat","background-size":"cover","min-width":"300px",height:"90%"},attrs:{"text-variant":"white"},scopedSlots:t._u([{key:"lead",fn:function(){return[a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.program.label))])],1)]},proxy:!0}],null,!0)},[a("b-button",{staticClass:"border-light",attrs:{variant:"warning"},on:{click:function(a){return t.getInfoTurn(e)}}},[a("b-icon",{attrs:{icon:"forward",animation:"cylon"}}),t._v(" Seleccionar turno")],1)],1)],1)})),t._l(t.desserts.allEnrollmentProgramChecking,(function(e,r){return a("div",{key:"A"+r,staticClass:"col"},[a("b-jumbotron",{staticClass:"pt-0 pt-3",staticStyle:{"background-image":"url(https://www.ecestaticos.com/imagestatic/clipping/39e/309/39e309dff6a35294c9eae324531ec5c7/los-libros-que-se-han-censurado-o-perseguido-en-estados-unidos-en-2018.jpg?mtime=1622642908)","background-position":"center center","background-repeat":"no-repeat","background-size":"cover","min-width":"300px",height:"90%"},attrs:{"text-variant":"white"},scopedSlots:t._u([{key:"lead",fn:function(){return[a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.program.label))])],1),a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.groupTeaching.label))])],1)]},proxy:!0}],null,!0)},[a("b-button-group",{attrs:{vertical:""}},[a("ModalCourses",{attrs:{idEnrollment:e.enrollId+""}}),a("ModalPayment",{attrs:{dataProgram:e}}),0x5d93ce379c4e3==e.period.id?a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:"1646240968183181"==e.program.id,expression:"aux.program.id == '1646240968183181'"}]},[a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902166822"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902166822'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/Gaj3bIqakuFBPyYtfGIJBp",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Mañana A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902166989"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902166989'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/JfYG7xDHuBq8UDGDqO3w0h",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Tarde A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902167341"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902167341'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/BneM3nK01e8E3IkfgpO5SL",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902167677"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902167677'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/Fe7wq4fKzgSAiFQJ7HkCan",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Fin de semana A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902168129"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902168129'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/IcTdpwFYxZGGgUdxhw3lgB",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche B")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646427491117583"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646427491117583'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/JqSq8o3NgfM4LFgYAirFhp",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche C")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646240968183181"==e.program.id,expression:"aux.program.id == '1646240968183181'"}]},[a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902166822"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902166822'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_MÑN.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Mañana A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902166989"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902166989'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_TARDE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Tarde A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902167341"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902167341'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_NOCHE_A.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902167677"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902167677'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_FIN_SEMANA.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Fin de semana A")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646425902168129"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646425902168129'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_NOCHE_B.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche B")])]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:"1646427491117583"==e.groupTeaching.id,expression:"\n                                aux.groupTeaching.id == '1646427491117583'\n                              "}],staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"SEGURIDAD_MINERA_NOCHE_C.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche C")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646241400247751"==e.program.id,expression:"aux.program.id == '1646241400247751'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/JngOMw8v9PKI7RJ0MbONqy",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"AMBIENTAL_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646254777371844"==e.program.id,expression:"aux.program.id == '1646254777371844'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/CVtRjvTg0Z143hBvCoPgAm",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"COMPUTACION_INFORMATICA_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263659071415"==e.program.id,expression:"aux.program.id == '1646263659071415'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/KmjMaIHqdve3jDhX57B4eW",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"GESTION_SISTEMAS_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263687314268"==e.program.id,expression:"aux.program.id == '1646263687314268'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/IT5BCbMG5OqLCSru55xZ9X",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"GESTION_LOGISTICA_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263710142486"==e.program.id,expression:"aux.program.id == '1646263710142486'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/LlenvyYbzWu3d9s4k0Bw5P",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"ADUANAS_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263730748779"==e.program.id,expression:"aux.program.id == '1646263730748779'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/JB1iI0kNS29HkqV6yskQKx",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"MARKETING_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263747041395"==e.program.id,expression:"aux.program.id == '1646263747041395'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/K8qaXoy83jo0raRnfamlGs",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"ASISTENTE_ADM_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263768529391"==e.program.id,expression:"aux.program.id == '1646263768529391'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/F9fbbnT0aKVFf4VcuJDXNZ",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"CONTABILIDAD_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1646263785354375"==e.program.id,expression:"aux.program.id == '1646263785354375'"}]},[a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:"https://chat.whatsapp.com/FpXSdCB4kdY7EAFHhYuHM8",variant:"success"}},[a("div",{staticClass:"fab fa-whatsapp"}),t._v(" WhatsApp "),a("b",[t._v("Noche A")])]),a("b-button",{staticClass:"border-light",attrs:{target:"_blank",href:t.$urlFirebaseSchedule+"ADM_BANCARIA_NOCHE.jpeg?alt=media",variant:"warning"}},[t._v(" Horario "),a("b",[t._v("Noche A")])])],1)]):t._e()],1)],1)],1)}))],2)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.desserts.allEnrollmentCourse.length,expression:"desserts.allEnrollmentCourse.length != 0"}],staticClass:"card mt-3"},[a("div",{staticClass:"card-header",staticStyle:{"background-color":"rgb(119, 35, 45)"}},[a("h3",[a("b-icon",{attrs:{icon:"journal-text"}}),t._v(" Mis Cursos")],1)]),a("div",{staticClass:"card-body pb-0"},[a("div",{staticClass:"row"},t._l(t.desserts.allEnrollmentCourse,(function(e,r){return a("div",{key:"B"+r,staticClass:"col"},[a("b-jumbotron",{staticClass:"pt-0 pt-3",staticStyle:{"background-image":"url(https://www.ecestaticos.com/imagestatic/clipping/39e/309/39e309dff6a35294c9eae324531ec5c7/los-libros-que-se-han-censurado-o-perseguido-en-estados-unidos-en-2018.jpg?mtime=1622642908)","background-position":"center center","background-repeat":"no-repeat","background-size":"cover","min-width":"300px",height:"90%"},attrs:{"text-variant":"white"},scopedSlots:t._u([{key:"lead",fn:function(){return[a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.courseName))])],1),a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.cycle))])],1),a("h4",[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.groupTeachingName))])],1)]},proxy:!0}],null,!0)},[a("b-button-group",{attrs:{vertical:""}},[a("b-button",{staticClass:"border-light",attrs:{to:"/course/"+e.courseId}},[t._v("Ver curso")])],1)],1)],1)})),0)])])])])]),a("b-alert",{attrs:{show:"",variant:"primary"}},[a("h5",[t._v("Correos de contacto:")]),a("hr"),a("p",{staticClass:"mb-0"},[a("b",[a("em",[a("u",[t._v("soporte_virtual@ucps.unsa.pe")])])]),t._v(" / "),a("b",[a("em",[a("u",[t._v("cobranza_academica@ucps.unsa.pe")])])]),t._v(" / "),a("b",[a("em",[a("u",[t._v("secretaria_academica@ucps.unsa.pe")])])])])])],1)]),a("div",[a("b-modal",{attrs:{scrollable:"",centered:"",title:"Selección de Turno"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button",disabled:null==t.dataInfo},on:{click:function(a){return t.saveAddItem()}}},[t._v(" Agregar ")]),a("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(a){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showTurn,callback:function(a){t.showTurn=a},expression:"showTurn"}},[a("b-container",{attrs:{fluid:""}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Seleccione un turno:")]),a("b-form-select",{attrs:{state:null!=t.dataInfo,options:t.dataInfoTurn,required:""},model:{value:t.dataInfo,callback:function(a){t.dataInfo=a},expression:"dataInfo"}})],1)])])],1)],1),a("div",[a("b-modal",{attrs:{scrollable:"",centered:"",title:"Actualización de datos"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:t.saveAddPhone}},[t._v(" Enviar ")])])]},proxy:!0}]),model:{value:t.showPhone,callback:function(a){t.showPhone=a},expression:"showPhone"}},[a("b-container",{attrs:{fluid:""}},[a("AlertError",{ref:"error"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[a("b",[t._v("Número celular:")])]),a("b-form-group",{attrs:{description:"Número celular de 9 digitos."}},[a("b-form-input",{staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese celular",state:t.verifyPhone(t.dataOperators),required:""},model:{value:t.dataOperators.number,callback:function(a){t.$set(t.dataOperators,"number",a)},expression:"dataOperators.number"}})],1)],1)]),a("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[a("b",[t._v("Operadora:")])]),a("b-form-select",{attrs:{state:null!=t.dataOperators.operator,options:t.operators},model:{value:t.dataOperators.operator,callback:function(a){t.$set(t.dataOperators,"operator",a)},expression:"dataOperators.operator"}})],1)])])],1)],1)],1)],1)},s=[],o=(e("14d9"),e("2df4")),i=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"ModalCourses"}},[a("b-button",{staticClass:"border-light",on:{click:function(a){return t.add()}}},[t._v("Ver cursos")]),a("div",[a("b-modal",{attrs:{scrollable:"",centered:"",busy:"",title:"Cursos"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("button",{staticClass:"btn form-control",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(a){return t.exit()}}},[t._v(" Aceptar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[a("b-container",{attrs:{fluid:""}},[a("div",{staticClass:"row"},t._l(t.desserts,(function(e,r){return a("div",{key:r,staticClass:"col"},[a("b-jumbotron",{staticClass:"pt-0 pb-3",staticStyle:{"background-color":"#1d425e"},attrs:{type:"button","text-variant":"white"},on:{click:function(a){return t.toCourseDetail(e.courseId)}},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-badge",{attrs:{variant:"light"}},[t._v(t._s(e.acronym))])]},proxy:!0},{key:"lead",fn:function(){return[a("b",[t._v(t._s(e.courseName))])]},proxy:!0}],null,!0)})],1)})),0)])],1)],1)],1)},n=[],l={name:"ModalCourses",props:{idEnrollment:{type:String,default:null}},data(){return{show:!1,desserts:[]}},methods:{toCourseDetail(t){this.$router.push("/course/"+t)},exit(){this.show=!1},add(){this.initialize(),this.show=!0},async initialize(){await this.$axios.get("/dashboard/enrollment/"+this.idEnrollment+"/course",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data}).catch(t=>{this.$errorQuery(t)})}}},c=l,d=e("2877"),h=Object(d["a"])(c,i,n,!1,null,null,null),u=h.exports,p=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"ModalPayment"}},[a("b-button",{staticClass:"border-light",attrs:{variant:"primary"},on:{click:function(a){return t.add()}}},[t._v("Registro de pago de pensión")]),a("div",[a("b-modal",{attrs:{scrollable:"",centered:"",busy:"",title:"Cronograma"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[a("div",{staticClass:"w-100"},[a("button",{staticClass:"btn form-control",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(a){return t.exit()}}},[t._v(" Aceptar ")])])]},proxy:!0}]),model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{lg:"12"}},[a("b-button",{staticStyle:{"background-color":"#5e151d",border:"none",color:"white"},attrs:{to:"/requisition/"+t.dataProgram.requisitionPensionPaymentId+"/"+t.dataProgram.requisitionDetailId}},[t._v(" Pagar pensión ")])],1)],1),a("b-table",{attrs:{striped:"",responsive:"",items:t.desserts,fields:t.fields},scopedSlots:t._u([{key:"cell(month)",fn:function(e){return[a("b",[t._v("Mes "+t._s(e.item.month))])]}},{key:"cell(state)",fn:function(e){return[a("b-badge",{attrs:{pill:"",variant:t.returnColor(e.item.color)}},[t._v(t._s(e.item.name))])]}}])})],1)],1)],1)],1)},b=[],g={name:"ModalPayment",props:{dataProgram:{type:Object,default:null}},data(){return{show:!1,desserts:[],fields:[{key:"month",label:"Mes",class:"text-center"},{key:"state",label:"Estado",class:"text-center"}]}},methods:{returnColor(t){return"green"==t?"success":""},toCourseDetail(t){this.$router.push("/course/"+t)},exit(){this.show=!1},add(){this.initialize(),this.show=!0},async initialize(){await this.$axios.get("/dashboard/enrollment/"+this.dataProgram.enrollId+"/schedule",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data}).catch(t=>{this.$errorQuery(t)})}}},v=g,m=(e("b7eb"),Object(d["a"])(v,p,b,!1,null,"70642ac6",null)),f=m.exports,w={components:{AlertError:o["a"],ModalCourses:u,ModalPayment:f},data:()=>({slide:0,sliding:null,selected:"",count:3,desserts:{allEnrollmentProgramChecking:[],allEnrollmentProgram:[],allEnrollmentCourse:[]},dataInfoTurn:[],dataInfo:null,showTurn:!1,showPhone:!1,dataAddInfo:{},operators:[],dataOperators:{}}),created(){this.initialize(),window.innerWidth<1e3?this.count=1:this.count=3,""+localStorage.checkPhone==="false"&&this.getOperators()},methods:{onSlideStart(t){this.sliding=!0},onSlideEnd(t){this.sliding=!1},verifyPhone(t){return null!=t.number&&9==t.number.length},toCourseDetail(t){this.$router.push("/course/"+t)},exit(){this.showTurn=!1},tamArre(t){return void 0!=t&&0!=t.length},slotControl(t){return void 0!=t&&t.length>1},async saveAddPhone(){null!=this.dataOperators.operator&&this.verifyPhone(this.dataOperators)?await this.$axios.get("/person/phone/register?number="+this.dataOperators.number+"&operator="+this.dataOperators.operator,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.showPhone=!1,this.$message.success(t.data.content),localStorage.setItem("checkPhone",!0)}).catch(t=>{this.showPhone=!1,this.$refs.error.showAlert(t.response.data.content)}):this.$refs.error.showAlert("Ingresar datos correctamente")},async getOperators(){await this.$axios.get("/person/phone/register",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.operators=t.data,this.showPhone=!0}).catch(t=>{this.$errorQuery(t)})},async initialize(){this.selected="circular",await this.$axios.get("/dashboard",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.selected="",this.desserts=t.data,0==this.desserts.allEnrollmentProgramChecking.length&&0==this.desserts.allEnrollmentProgram.length&&0==this.desserts.allEnrollmentCourse.length||(window.location.href="#workspace")}).catch(t=>{this.$errorQuery(t)})},async getInfoTurn(t){this.dataAddInfo={},this.dataAddInfo.programId=t.program.id,this.dataAddInfo.periodId=t.period.id,this.dataAddInfo.enrollmentProgramId=t.enrollId,this.dataInfo=null,this.showTurn=!0,await this.$axios.get("/dashboard/select-group?programId="+t.program.id+"&periodId="+t.period.id,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.dataInfoTurn=t.data}).catch(t=>{this.showTurn=!1,this.$errorQuery(t)})},async saveAddItem(){this.dataAddInfo.groupId=this.dataInfo,await this.$axios.post("/dashboard/select-group",this.dataAddInfo,{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.showTurn=!1,this.$message.success(t.data.content),this.initialize()}).catch(t=>{this.showTurn=!1,this.$message.error(t.response.data.content)})}}},_=w,C=(e("54fe"),e("e24a"),e("9794"),e("0c17"),Object(d["a"])(_,r,s,!1,null,"3127a114",null));a["default"]=C.exports},9794:function(t,a,e){"use strict";e("66c2")},"9b9c":function(t,a,e){},b7eb:function(t,a,e){"use strict";e("6873")},e24a:function(t,a,e){"use strict";e("90f1")}}]);
//# sourceMappingURL=chunk-7c6734d8.1bec65c9.js.map