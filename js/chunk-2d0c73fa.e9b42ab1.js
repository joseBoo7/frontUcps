(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c73fa"],{"508a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-excel-xlsx",{staticClass:"btn btn-primary",attrs:{data:e.data,columns:e.columns,"file-name":"filename","file-type":"xlsx","sheet-name":"sheetname"}},[e._v(" Download ")])],1)},r=[],i=a("1da1"),c=(a("96cf"),{data:function(){return{columns:[],columns2:[{label:"Product",field:"product"},{label:"Price",field:"price",dataFormat:this.priceFormat},{label:"Quantity",field:"quantity"},{label:"Country",field:"address.country"},{label:"City",field:"address.city"}],data:[],data2:[{product:"Beverage",price:10,quantity:2,address:{country:"Armenia",city:"Yerevan"}},{product:"Snack",price:12,quantity:6,address:{country:"Armenia",city:"Yerevan"}},{product:"Beverage",price:10,quantity:5,address:{country:"Armenia",city:"Yerevan"}},{product:"Snack",price:12,quantity:3,address:{country:"Armenia",city:"Yerevan"}}]}},created:function(){this.initialize()},methods:{priceFormat:function(e){return null==e?"-":e},initialize:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/dashboard/course/1647833493011101/assistance-report",{headers:{Authorization:"Bearer ".concat(localStorage.token)}}).then((function(t){e.data=t.data.allAssistancePersonDto,e.addHeader(t.data.allDate)})).catch((function(t){e.$errorQuery(t)}));case 2:case"end":return t.stop()}}),t)})))()},addHeader:function(e){for(var t in this.columns.push({label:"NOMBRES",field:"name"},{label:"APELLIDO PATERNO",field:"lastnameFather"},{label:"APELLIDO MATERNO",field:"lastnameMother"}),e)this.columns.push({label:e[t],field:"allAssistance["+t+"].status",dataFormat:this.priceFormat});console.log("termino")}}}),l=c,s=a("2877"),o=Object(s["a"])(l,n,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0c73fa.e9b42ab1.js.map