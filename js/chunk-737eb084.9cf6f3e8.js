(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-737eb084"],{"2df4":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"AlertError"}},[e("b-alert",{attrs:{show:t.dismissCountDown,variant:"danger"},on:{"dismiss-count-down":t.countDownChanged}},[e("strong",[t._v("Error. "+t._s(t.error)+",")]),t._v(" ocultando en "+t._s(t.dismissCountDown)+" segundos... ")])],1)},o=[],r={name:"AlertError",data(){return{error:"",dismissSecs:5,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged(t){this.dismissCountDown=t},showAlert(t){this.error=t,this.dismissCountDown=this.dismissSecs}}},n=r,i=a("2877"),l=Object(i["a"])(n,s,o,!1,null,null,null);e["a"]=l.exports},"9cd5":function(t,e,a){},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container col-lg-10 col-md-12 col-sm-12 my-5"},[e("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),e("b-alert",{staticClass:"mb-0",attrs:{show:"",dismissible:"",variant:"success"}},[e("h4",{staticClass:"alert-heading"},[t._v("Cuentas para realizar el pago ⬇")]),e("p",{staticClass:"m-0 mb-1"},[e("em",[t._v("INDICAR QUE ES CUENTA UNSA - CATEGORIA: PAGO VARIOS")])]),e("p",{staticClass:"m-0"},[e("b",[t._v(" Cuenta BCP: ")]),t._v("215-1588792-0-19")]),e("p",{staticClass:"m-0"},[e("b",[t._v(" Cuenta BANCO DE LA NACIÓN: ")]),t._v("101-202992")]),e("p",{staticClass:"m-0 mt-1"},[t._v("* Debes Indicar el Nombre del Rubro: Varios.")]),e("p",{staticClass:"m-0 mt-1"},[t._v("* Si te solicitan código es el número de su DNI.")]),e("p",{staticClass:"m-0"},[t._v(" * Por aplicativo BCP la empresa se llama Universidad Nacional de San Agustín y se van a pago varios. ")]),e("hr",{staticClass:"my-2"}),e("b",{staticClass:"m-0"},[t._v(' Si es tu primera vez deberás registrarte en el sistema con el botón "Registrarse". ')])]),e("div",[e("b-card",{attrs:{"no-body":""}},[e("b-row",{attrs:{"no-gutters":""}},[e("b-col",{attrs:{md:"5"}},[e("b-card-img",{staticClass:"rounded-0 imgCentro",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/ucps-7d113.appspot.com/o/logo ucps.png?alt=media",alt:"Image"}})],1),e("b-col",{attrs:{md:"7"}},[e("div",{attrs:{card:""}},[e("div",{staticClass:"card-header"},[e("h1",{staticClass:"text-center"},[t._v("Inicio de Sesión")])]),e("div",{staticClass:"card-body"},[e("AlertError",{ref:"error"}),t.show?e("b-form",[e("b-form-group",{staticClass:"my-2",attrs:{id:"input-group-1",label:"Correo electrónico:","label-for":"input-1",description:"Ingrese el correo usado para el registro."}},[e("b-form-input",{attrs:{state:t.validEmail(t.form.usuario),autofocus:"autofocus",id:"input-1",type:"text",placeholder:"Ingrese correo",required:""},model:{value:t.form.usuario,callback:function(e){t.$set(t.form,"usuario",e)},expression:"form.usuario"}})],1),e("b-form-group",{staticClass:"my-2",attrs:{label:"Contraseña:",description:"Ingrese al menos 1 letra, al menos 1 número, al menos 1 letra mayúscula, al menos 6 caracteres, no se permite espacios."}},[e("b-input-group",[e("b-form-input",{attrs:{state:""!=t.form.contraseña&&t.form.contraseña.length>5,id:"input-2",type:t.seeContra,placeholder:"Ingrese contraseña",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.form.contraseña,callback:function(e){t.$set(t.form,"contraseña",e)},expression:"form.contraseña"}}),e("b-input-group-append",[e("b-form-checkbox",{attrs:{button:"","button-variant":"tranparent",value:"text","unchecked-value":"password"},model:{value:t.seeContra,callback:function(e){t.seeContra=e},expression:"seeContra"}},["password"==t.seeContra?e("b-icon-eye-slash"):e("b-icon-eye")],1)],1)],1)],1),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"my-3 w-100",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none"},attrs:{type:"button"},on:{click:t.login}},[t._v("Ingresar")]),e("button",{staticClass:"btn btn-secondary w-100",attrs:{type:"button"},on:{click:t.cambio}},[t._v(" Registrarse ")]),e("p",{staticClass:"mb-0 mt-1"},[e("small",{staticStyle:{color:"#1775ce",cursor:"pointer"},on:{click:t.openModal}},[e("u",[t._v("Recuperar contraseña")])])]),e("p",{staticClass:"mb-0"},[e("small",[t._v("Si tiene algún problema contactarse al correo de soporte:")])]),e("p",{staticClass:"mb-0"},[e("small",[e("b",[t._v("soporte_virtual@ucps.unsa.pe")])])])],1)],1):t._e()],1)])])],1)],1)],1),e("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"danger"}},[e("p",{staticClass:"m-0 mb-1"},[e("b",[t._v("*")]),t._v(" El ingreso es con "),e("b",[t._v("su cuenta personal")]),t._v(" @gmail.com, @hotmail, etc y no con su cuenta institucional UCPS. ")]),e("p",{staticClass:"m-0 mb-1"},[e("b",[t._v("*")]),t._v(" Si se olvidan o quieren cambiar de contraseña lo podrán hacer dirigiéndonos a la opción de "),e("b",[t._v("Recuperar contraseña")]),t._v(". ")])]),e("div",[e("b-modal",{attrs:{scrollable:"",centered:"",title:"Recuperar contraseña"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("button",{staticClass:"btn form-control my-2",staticStyle:{"background-color":"#1d425e",border:"none",color:"white"},attrs:{type:"button"},on:{click:t.restore}},[t._v(" Enviar ")]),e("button",{staticClass:"btn form-control",staticStyle:{"background-color":"rgb(119, 35, 45)",border:"none",color:"white"},attrs:{type:"button"},on:{click:function(e){return t.exit()}}},[t._v(" Cancelar ")])])]},proxy:!0}]),model:{value:t.showContra,callback:function(e){t.showContra=e},expression:"showContra"}},[e("b-container",{attrs:{fluid:""}},[e("form",[e("AlertError",{ref:"errorModal"}),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[e("b",[t._v("Correo electrónico:")])]),e("b-form-group",{attrs:{description:"Correo asociado a su cuenta."}},[e("b-form-input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese correo electrónico",state:t.validEmail(t.formContra.username),required:""},model:{value:t.formContra.username,callback:function(e){t.$set(t.formContra,"username",e)},expression:"formContra.username"}})],1)],1)]),e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[e("b",[t._v("DNI:")])]),e("b-form-input",{staticClass:"form-control",attrs:{type:"number",placeholder:"Ingrese DNI",state:null!=t.formContra.dni&&8==t.formContra.dni.length,required:""},model:{value:t.formContra.dni,callback:function(e){t.$set(t.formContra,"dni",e)},expression:"formContra.dni"}})],1)])]),e("hr"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[e("b",[t._v("Nueva contraseña:")])]),e("b-form-group",{attrs:{description:"Ingrese al menos 1 letra, al menos 1 número, al menos 1 letra mayúscula, al menos 6 caracteres, no se permite espacios."}},[e("b-input-group",[e("b-form-input",{staticClass:"form-control",attrs:{type:t.seeContra2,placeholder:"Ingrese contraseña",state:t.validContra(t.formContra.password),required:""},model:{value:t.formContra.password,callback:function(e){t.$set(t.formContra,"password",e)},expression:"formContra.password"}}),e("b-input-group-append",[e("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{button:"","button-variant":"tranparent",value:"text","unchecked-value":"password"},model:{value:t.seeContra2,callback:function(e){t.seeContra2=e},expression:"seeContra2"}},["password"==t.seeContra2?e("b-icon-eye-slash"):e("b-icon-eye")],1)],1)],1)],1)],1)]),e("div",{staticClass:"col-lg-6 col-md-6 col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[e("b",[t._v("Verificar Contraseña:")])]),e("b-input-group",[e("b-form-input",{staticClass:"form-control",attrs:{type:t.seeContra2verify,placeholder:"Verifique contraseña",required:""},model:{value:t.formContra.confirmation,callback:function(e){t.$set(t.formContra,"confirmation",e)},expression:"formContra.confirmation"}}),e("b-input-group-append",[e("b-form-checkbox",{staticClass:"mr-n2 mb-n1",attrs:{button:"","button-variant":"tranparent",value:"text","unchecked-value":"password"},model:{value:t.seeContra2verify,callback:function(e){t.seeContra2verify=e},expression:"seeContra2verify"}},["password"==t.seeContra2verify?e("b-icon-eye-slash"):e("b-icon-eye")],1)],1)],1)],1)])])])],1)])],1)],1),t._e()],1)},o=[],r=(a("14d9"),a("2df4")),n={components:{AlertError:r["a"]},data(){return{seeContra:"password",seeContra2:"password",seeContra2verify:"password",showContra:!1,showMessa:!1,selected:"",form:{email:"",name:"",food:null,checked:[],usuario:"","contraseña":""},formContra:{},foods:[{text:"Select One",value:null},"Carrots","Beans","Tomatoes","Corn"],show:!0}},created(){this.showMessa=!0},methods:{closeModal(){this.showMessa=!1},validEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)},validContra:function(t){var e=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;return e.test(t)},openModal(){this.showContra=!0,this.formContra={}},exit(){this.showContra=!1},validEmail:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)},cambio(){this.$router.push("register")},Ingreso(){window.location.href=window.location.origin},async login(){this.validEmail(this.form.usuario)?(this.selected="circular",await this.$axios.post("/auth/login",{username:this.form.usuario,password:this.form.contraseña}).then(t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("authenticated",!0),localStorage.setItem("username",t.data.username),localStorage.setItem("authorities",JSON.stringify(t.data.authorities)),localStorage.setItem("imageUrl",t.data.imageUrl),localStorage.setItem("checkPhone",t.data.checkPhone),this.$message.success("MUY BIEN HA INGRESO EXITOSAMENTE"),this.Ingreso()}).catch(t=>{this.selected="";try{this.$refs.error.showAlert(t.response.data.content)}catch(t){console.log(t)}})):this.$refs.error.showAlert("Correo invalido")},async restore(){null!=this.formContra.dni&&8==this.formContra.dni.length&&null!=this.formContra.confirmation?this.validEmail(this.formContra.username)?this.validContra(this.formContra.password)?(this.formContra.dateBirth="",this.selected="circular",this.showContra=!1,await this.$axios.post("/auth/recovery-password",this.formContra).then(t=>{this.selected="",this.$message.success(t.data.content)}).catch(t=>{this.selected="",console.log(t),this.$message.error(t.response.data.content)})):this.$refs.errorModal.showAlert("Contraseña invalida"):this.$refs.errorModal.showAlert("Correo invalido"):this.$refs.errorModal.showAlert("Llenar datos")}}},i=n,l=(a("b34a"),a("ac10"),a("2877")),c=Object(l["a"])(i,s,o,!1,null,"166264de",null);e["default"]=c.exports},ac10:function(t,e,a){"use strict";a("9cd5")},b34a:function(t,e,a){"use strict";a("e461")},e461:function(t,e,a){}}]);
//# sourceMappingURL=chunk-737eb084.9cf6f3e8.js.map