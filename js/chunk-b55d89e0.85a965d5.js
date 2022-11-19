(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b55d89e0"],{"100e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("loader",{attrs:{object:"#ffffff",color1:"#ffffff",color2:"#ffffff",time:"100",size:"5",speed:"2",bg:"#5e151d",objectbg:"#999793",opacity:"100",name:e.selected,disableScrolling:"false"}}),r("div",{staticClass:"container",staticStyle:{"min-height":"150px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h1",[r("b-icon",{attrs:{icon:"file-earmark-person"}}),e._v(" "+e._s("Gestión de estudiantes ("+e.elements+")")+" ")],1)]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"container col-12"},[r("div",[r("b-row",[r("b-col",{staticClass:"mb-3",attrs:{lg:"12",sm:"12"}},[r("b-form-select",{attrs:{options:e.periods},on:{change:function(t){return e.changePeriod()}},model:{value:e.selectPeriod,callback:function(t){e.selectPeriod=t},expression:"selectPeriod"}}),r("b-form-select",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectPeriod,expression:"selectPeriod != ''"}],attrs:{options:e.programs},on:{change:function(t){return e.changeProgram()}},model:{value:e.selectProgram,callback:function(t){e.selectProgram=t},expression:"selectProgram"}}),r("b-form-select",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectProgram,expression:"selectProgram != ''"}],attrs:{options:e.turns},on:{change:function(t){return e.changeTurn()}},model:{value:e.selectTurn,callback:function(t){e.selectTurn=t},expression:"selectTurn"}})],1)],1),0!=e.desserts.length?r("div",[r("b-table",{attrs:{striped:"",responsive:"",stacked:"lg",items:e.desserts,fields:e.fields},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[e._v(" "+e._s(t.item.name)+" ")]}},{key:"cell(lastName)",fn:function(t){return[e._v(" "+e._s(t.item.lastnameFather+" "+t.item.lastnameMother)+" ")]}},{key:"cell(paymentPercentage)",fn:function(t){return[e._v(" "+e._s(t.item.paymentPercentage+" %")+" ")]}}],null,!1,3910235223)})],1):r("div",{staticClass:"text-center"},[r("em",[e._v("No hay datos en usando estos filtros")])]),0!=e.desserts.length?r("b-pagination",{staticStyle:{display:"flex","justify-content":"center"},attrs:{pills:"","total-rows":e.elements,"per-page":"10"},on:{input:function(t){return e.changeQueryPagination()}},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e()],1)])])])])],1)},a=[],c=r("1da1"),o=(r("b0c0"),r("99af"),r("96cf"),{data:function(){return{elements:0,currentPage:1,periods:[],programs:[],turns:[],selectPeriod:"",selectProgram:"",selectTurn:"",keyword:"",selected:"",desserts:[],fields:[{key:"index",label:"#",isRowHeader:!0},{key:"identificationDocument",label:"DNI"},{key:"email",label:"Correo"},{key:"lastName",label:"Apellidos"},{key:"name",label:"Nombres"},{key:"phoneNumber",label:"Celular"},{key:"periodName",label:"Ciclo"},{key:"programName",label:"Programa"},{key:"turnName",label:"Turno"},{key:"paymentPercentage",label:"pago(%)"}]}},created:function(){this.initialize(),this.getPeriod()},methods:{changeQueryPagination:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selected="circular",t.next=3,e.$axios.get("/person/student?period="+e.selectPeriod+"&program="+e.selectProgram+"&turn="+e.selectTurn+"&page="+e.currentPage,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.elements=t.data.elements,e.desserts=t.data.allStudent,e.selected=""})).catch((function(t){e.$errorQuery(t)}));case 3:case"end":return t.stop()}}),t)})))()},changeQuery:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.currentPage=1,e.selected="circular",t.next=4,e.$axios.get("/person/student?period="+e.selectPeriod+"&program="+e.selectProgram+"&turn="+e.selectTurn+"&page="+e.currentPage,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.elements=t.data.elements,e.desserts=t.data.allStudent,e.selected=""})).catch((function(t){e.$errorQuery(t)}));case 4:case"end":return t.stop()}}),t)})))()},getPeriod:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selected="circular",t.next=3,e.$axios.get("/academic",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){var r=[{value:"",text:"-- Seleccione Periodo --"}];for(var n in t.data){var a={value:t.data[n].id,text:t.data[n].name};r.push(a)}e.periods=r,e.selected=""})).catch((function(t){e.$errorQuery(t)}));case 3:case"end":return t.stop()}}),t)})))()},getProgram:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.selected="circular",r.next=3,t.$axios.get("/person/program?period="+e,{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){var r=[{value:"",text:"-- Seleccione Programa --"}];t.programs=r.concat(e.data),t.selected=""})).catch((function(e){t.$errorQuery(e)}));case 3:case"end":return r.stop()}}),r)})))()},getTurn:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selected="circular",t.next=3,e.$axios.get("/person/group",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){var r=[{value:"",text:"-- Seleccione Turno --"}];e.turns=r.concat(t.data),e.selected=""})).catch((function(t){e.$errorQuery(t)}));case 3:case"end":return t.stop()}}),t)})))()},changePeriod:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectProgram="",e.selectTurn="",""!=e.selectPeriod&&e.getProgram(e.selectPeriod),e.changeQuery();case 4:case"end":return t.stop()}}),t)})))()},changeProgram:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.selectTurn="",""!=e.selectProgram&&e.getTurn(),e.changeQuery();case 3:case"end":return t.stop()}}),t)})))()},changeTurn:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.changeQuery();case 1:case"end":return t.stop()}}),t)})))()},initialize:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.selected="circular",t.next=3,e.$axios.get("/person/student?period=&program=&turn=&page=",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.elements=t.data.elements,e.desserts=t.data.allStudent,e.selected=""})).catch((function(t){e.$errorQuery(t)}));case 3:case"end":return t.stop()}}),t)})))()}}}),s=o,i=(r("5bb0"),r("2877")),u=Object(i["a"])(s,n,a,!1,null,null,null);t["default"]=u.exports},5300:function(e,t,r){},"5bb0":function(e,t,r){"use strict";r("5300")},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("da84"),c=r("d039"),o=r("e8b5"),s=r("861d"),i=r("7b0b"),u=r("07fa"),l=r("8418"),d=r("65f0"),f=r("1dde"),g=r("b622"),m=r("2d00"),h=g("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",v=a.TypeError,w=m>=51||!c((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),P=f("concat"),x=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:o(e)},y=!w||!P;n({target:"Array",proto:!0,forced:y},{concat:function(e){var t,r,n,a,c,o=i(this),s=d(o,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?o:arguments[t],x(c)){if(a=u(c),f+a>p)throw v(b);for(r=0;r<a;r++,f++)r in c&&l(s,f,c[r])}else{if(f>=p)throw v(b);l(s,f++,c)}return s.length=f,s}})},b0c0:function(e,t,r){var n=r("83ab"),a=r("5e77").EXISTS,c=r("e330"),o=r("9bf2").f,s=Function.prototype,i=c(s.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=c(u.exec),d="name";n&&!a&&o(s,d,{configurable:!0,get:function(){try{return l(u,i(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-b55d89e0.85a965d5.js.map