(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1ead"],{"47a5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:t.selected,disableScrolling:"false"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"mx-1 row"},[e("div",{staticClass:"container col-lg-4 col-md-12"},[e("b-img",t._b({staticClass:"my-3 border",attrs:{thumbnail:"",fluid:"",center:"",rounded:"circle",src:"https://picsum.photos/250/250/?image=54",alt:"Image 1"}},"b-img",{width:250,height:250},!1))],1),e("div",{staticClass:"container col-lg-8 col-md-12"},[e("div",{staticClass:"my-3"},[e("h3",[t._v(" "+t._s(t.desserts.names)+" ")]),e("b-button",{staticClass:"my-3",attrs:{variant:"outline-dark",to:"/profile/edit"}},[e("b",[t._v("Editar perfil")])]),e("h4",{staticClass:"pb-2"},[t._v(" "+t._s(t.desserts.username)+" "),e("em",[e("b-badge",{staticStyle:{background:"#397232"}},[t._v("Activo")])],1)]),e("div",[""!=t.desserts.dateBirth?e("p",[t._v(" Fecha de nacimiento: "),e("b",[t._v(t._s(t.desserts.dateBirth))])]):e("p",{staticClass:"text-danger"},[e("em",[t._v("No hay fecha de nacimiento")])])]),e("div",[0!=t.desserts.identifications.length?e("p",[e("b-icon-person-badge"),t._v(" "+t._s(t.stringIdentifications)+" ")],1):e("p",{staticClass:"text-danger"},[e("em",[t._v("No hay número de identificación")])])]),e("div",[0!=t.desserts.phones.length?e("p",[e("b-icon-telephone"),t._v(" "+t._s(t.stringPhone)+" ")],1):e("p",{staticClass:"text-danger"},[e("em",[t._v("No hay número de celular")])])]),t._m(1),e("div",{staticClass:"row mx-1"},t._l(t.desserts.roles,(function(s,i){return e("h5",{key:i,staticClass:"mr-1"},[e("b-badge",{staticStyle:{background:"#1d425e"}},[t._v(t._s(s))])],1)})),0)],1)])])])])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h1",[t._v("Perfil de Usuario")])])},function(){var t=this,e=t._self._c;return e("p",[e("b",[t._v("Roles:")])])}],n={data(){return{selected:"",stringPhone:"",stringIdentifications:"",desserts:{phones:[],identifications:[],roles:[]}}},created(){this.initialize()},methods:{async initialize(){this.selected="circular",await this.$axios.get("/profile",{headers:{Authorization:"Bearer "+localStorage.token}}).then(t=>{this.desserts=t.data;for(let e=0;e<t.data.phones.length;e++)this.stringPhone=e>0?this.stringPhone+" / "+t.data.phones[e].value:this.stringPhone+t.data.phones[e].value;for(let e=0;e<t.data.identifications.length;e++)this.stringIdentifications=e>0?this.stringIdentifications+" / "+t.data.identifications[e].value:this.stringIdentifications+t.data.identifications[e].value;this.selected=""}).catch(t=>{this.$errorQuery(t)})}}},r=n,d=s("2877"),c=Object(d["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0c1ead.5e9464e9.js.map