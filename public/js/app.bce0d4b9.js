(function(e){function t(t){for(var a,i,n=t[0],l=t[1],c=t[2],p=0,d=[];p<n.length;p++)i=n[p],s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,n=1;n<o.length;n++){var l=o[n];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},s={app:0},r=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var a=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("v-app",[o("v-container",[o("router-view")],1)],1)],1)},r=[],i=o("2877"),n=o("6544"),l=o.n(n),c=o("7496"),u=o("a523"),p={},d=Object(i["a"])(p,s,r,!1,null,null,null),m=d.exports;l()(d,{VApp:c["a"],VContainer:u["a"]});var f=o("8c4f"),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"soporte"},[o("Soporte")],1)},b=[],h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("loading",{attrs:{active:e.isLoading,"can-cancel":!1,"is-full-page":!0},on:{"update:active":function(t){e.isLoading=t}}}),o("div",{staticClass:"animated fadeIn my-5"},[o("v-layout",[o("v-flex",{attrs:{xs12:""}},[o("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[o("v-flex",{attrs:{xs6:""}},[o("v-form",{ref:"form",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.registrarSoporte(t)}}},[o("v-card",[o("h2",{staticClass:"card-header text-center text-white font-weight-bold text-uppercase py-4 light-green lighten-1"},[e._v("Nuevo Soporte")]),o("div",{staticClass:"mx-5"},[o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Tipo de Servicio",items:e.dataForm.data.dataForm.servicios,rules:e.selectRules,required:""},on:{change:e.getLabores},model:{value:e.soporte.servicio,callback:function(t){e.$set(e.soporte,"servicio",t)},expression:"soporte.servicio"}}),o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Técnico",items:e.dataForm.data.dataForm.tecnicos,rules:e.selectRules,required:""},model:{value:e.soporte.tecnico,callback:function(t){e.$set(e.soporte,"tecnico",t)},expression:"soporte.tecnico"}}),o("v-text-field",{staticClass:"mx-5 my-4",attrs:{label:"Correo Institucional",rules:e.inputCorreo,required:""},model:{value:e.soporte.correo,callback:function(t){e.$set(e.soporte,"correo",t)},expression:"soporte.correo"}}),o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Perfil del Solicitante",items:e.dataForm.data.dataForm.perfiles,rules:e.selectRules,required:""},model:{value:e.soporte.perfil,callback:function(t){e.$set(e.soporte,"perfil",t)},expression:"soporte.perfil"}}),o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Bloque",items:e.dataForm.data.dataForm.bloques,rules:e.selectRules,required:""},model:{value:e.soporte.bloque,callback:function(t){e.$set(e.soporte,"bloque",t)},expression:"soporte.bloque"}}),o("v-text-field",{staticClass:"mx-5 my-4",attrs:{label:"Numero del Salón",rules:e.inputSalon,required:""},model:{value:e.soporte.salon,callback:function(t){e.$set(e.soporte,"salon",t)},expression:"soporte.salon"}}),o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Labor Realizada",loading:e.isLoadingLabores,items:e.labores,disabled:e.statusLabores,rules:e.selectLabores,required:""},model:{value:e.soporte.labor,callback:function(t){e.$set(e.soporte,"labor",t)},expression:"soporte.labor"}}),o("v-select",{staticClass:"mx-5 my-4",attrs:{label:"Incidente Solucionádo",items:e.dataForm.data.dataForm.soluciones,disabled:e.statusIncidente,rules:e.selectIncidente,required:""},model:{value:e.soporte.solucionado,callback:function(t){e.$set(e.soporte,"solucionado",t)},expression:"soporte.solucionado"}})],1),o("v-layout",{attrs:{"align-center":"","justify-center":"","fill-height":""}},[o("v-flex",{attrs:{xs6:""}},[o("v-btn",{staticClass:"orange darken-1 text-white",attrs:{type:"submit",block:""}},[e._v("Registrar")]),o("v-btn",{staticClass:"grey darken-4 my-4 text-white",attrs:{block:""}},[e._v("Cancelar")])],1)],1),o("div",{staticClass:"card-footer text-muted text-center"},[o("h5",{staticClass:"font-weight-bolder"},[e._v("¿Eres Admin? Ingresa "),o("a",{attrs:{href:"http://172.16.58.122:4000/#/"}},[e._v("Aquí!!!")])])])],1)],1)],1)],1)],1)],1)],1)],1)},g=[],y=o("9530"),x=o.n(y),S=o("9062"),q=o.n(S),C=o("3d20"),L=o.n(C);const w={DATA_FORM:"query {\n        dataForm {\n            servicios,\n            tecnicos,\n            perfiles,\n            bloques,\n            soluciones\n        }\n    }",LABORES:"query labores($typeSuport: String!) {\n        labores(typeSuport: $typeSuport) {\n            labores\n        }\n    }",NEW_SUPPORT:"mutation createSoporte($input: SoporteInput) {\n        createSoporte(input: $input) {\n            state\n            message\n        }\n    }",SEND_EMAIL_OPC:"mutation sendEmailAdd($input: Incidente) {\n        sendEmailAdd(input: $input) {\n            state\n            message\n        }\n    }"};var $=w;a["a"].use(q.a);var F={data(){return{dataForm:{},labores:[],isLoading:!0,isLoadingLabores:!1,statusLabores:!0,statusIncidente:!0,soporte:{servicio:"",tecnico:"",correo:"",perfil:"",bloque:"",salon:"",labor:"",solucionado:""},selectRules:[e=>!!e||"El campo es requerido"],inputCorreo:[e=>!!e||"El campo es requerido"],selectLabores:[e=>{if(!this.statusLabores&&0===e.length)return"El campo es requerido"}],selectIncidente:[e=>{if(!this.statusIncidente&&0===e.length)return"El campo es requerido"}],inputSalon:[e=>!!e||"El campo es requerido",e=>{if("Bloque L"!=this.soporte.bloque&&(e.length<=2||e.length>=5))return"Minimo 3, maximo 4 caracteres"}]}},components:{Loading:q.a},async mounted(){await this.getDataForm()},methods:{async getDataForm(){this.dataForm=await this.$apollo.query({query:x.a`${$.DATA_FORM}`}),setInterval(()=>{this.isLoading=!1},1e3)},async getLabores(){if("Soporte"===this.soporte.servicio||"Mantenimiento"===this.soporte.servicio){this.isLoadingLabores=!0;const e=await this.$apollo.query({query:x.a`${$.LABORES}`,variables:{typeSuport:this.soporte.servicio}});this.labores=e.data.labores.labores,this.statusLabores=!1,"Soporte"===this.soporte.servicio?this.statusIncidente=!1:this.statusIncidente=!0,setInterval(()=>{this.isLoadingLabores=!1},1e3)}else this.sendEmailIncidente()},async sendEmailIncidente(){const{value:e}=await L.a.fire({type:"warning",title:"Nuevo Incidente",text:`${this.soporte.servicio}`,input:"textarea",inputPlaceholder:"Registre el incidente....",inputAttributes:{"aria-label":"Registre el incidente...."},confirmButtonText:"Enviar",showCancelButton:!0,inputValidator:e=>{return!e&&"Por favor registre algo!!!"}});if(e){this.isLoading=!0;const t=await this.$apollo.mutate({mutation:x.a`${$.SEND_EMAIL_OPC}`,variables:{input:{type:this.soporte.servicio,desc:e}}});t.data.sendEmailAdd.state?L.a.fire("Correcto!!!",t.data.sendEmailAdd.message,"success").then(()=>{location.reload()}):L.a.fire("Ops!!!",t.data.sendEmailAdd.message,"error").then(()=>{location.reload()})}else location.reload()},async registrarSoporte(){if(this.$refs.form.validate()){this.isLoading=!0;const e=await this.$apollo.mutate({mutation:x.a`${$.NEW_SUPPORT}`,variables:{input:{servicio:this.soporte.servicio,tecnico:this.soporte.tecnico,solicitante:this.soporte.correo,perfil:this.soporte.perfil,bloque:this.soporte.bloque,salon:this.soporte.salon,labor:this.soporte.labor,solucionado:this.soporte.solucionado}}});e.data.createSoporte.state?L.a.fire("Perfecto!!!",e.data.createSoporte.message,"success").then(()=>{this.isLoading=!1,this.$refs.form.reset()}):L.a.fire("Ops!!!",e.data.createSoporte.message,"error")}},resetModel(){this.soporte={servicio:"",tecnico:"",correo:"",perfil:"",bloque:"",salon:"",labor:"",solucionado:""}}}},E=F,_=o("8336"),O=o("b0af"),I=o("0e8f"),A=o("4bd4"),P=o("a722"),k=o("b974"),R=o("8654"),j=Object(i["a"])(E,h,g,!1,null,null,null),M=j.exports;l()(j,{VBtn:_["a"],VCard:O["a"],VFlex:I["a"],VForm:A["a"],VLayout:P["a"],VSelect:k["a"],VTextField:R["a"]});var T={name:"soporte",components:{Soporte:M}},V=T,B=Object(i["a"])(V,v,b,!1,null,null,null),D=B.exports;a["a"].use(f["a"]);const N=new f["a"]({routes:[{path:"/",name:"index",component:D}]});var J=N,U=o("f309");a["a"].use(U["a"]);var W=new U["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#9CCC65",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},icons:{iconfont:"md"}}),z=(o("d5e8"),o("d1e7"),o("2c82")),G=o("522d");const H=new z["a"]({uri:"http://172.16.56.21:3000/graphql"});a["a"].use(G["a"]);const K=new G["a"]({defaultClient:H});a["a"].config.productionTip=!1,new a["a"]({router:J,vuetify:W,apolloProvider:K,render:e=>e(m)}).$mount("#app")}});
//# sourceMappingURL=app.bce0d4b9.js.map