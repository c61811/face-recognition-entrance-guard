webpackJsonp([29,60,61],{NGrn:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("SKUv"),l=t("k+/a"),r={name:"dynamicTable",components:{fixedThead:n.default,unfixedThead:l.default}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{staticStyle:{margin:"0 0 5px 20px"}},[e._v(e._s(e.$t("table.dynamicTips1")))]),e._v(" "),t("fixed-thead"),e._v(" "),t("div",{staticStyle:{margin:"30px 0 5px 20px"}},[e._v(e._s(e.$t("table.dynamicTips2")))]),e._v(" "),t("unfixed-thead")],1)},staticRenderFns:[]},c=t("VU/8")(r,o,!1,null,null,null);a.default=c.exports},SKUv:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=["apple","banana"],l={data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],key:1,formTheadOptions:["apple","banana","orange"],checkboxVal:n,formThead:n}},watch:{checkboxVal:function(e){this.formThead=this.formTheadOptions.filter(function(a){return e.indexOf(a)>=0}),this.key=this.key+1}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:e.checkboxVal,callback:function(a){e.checkboxVal=a},expression:"checkboxVal"}},[t("el-checkbox",{attrs:{label:"apple"}},[e._v("apple")]),e._v(" "),t("el-checkbox",{attrs:{label:"banana"}},[e._v("banana")]),e._v(" "),t("el-checkbox",{attrs:{label:"orange"}},[e._v("orange")])],1)],1),e._v(" "),t("el-table",{key:e.key,staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),e._v(" "),e._l(e.formThead,function(a){return t("el-table-column",{key:a,attrs:{label:a},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row[a])+"\n      ")]}}])})})],2)],1)},staticRenderFns:[]},o=t("VU/8")(l,r,!1,null,null,null);a.default=o.exports},"k+/a":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"filter-container"},[t("el-checkbox-group",{model:{value:e.formThead,callback:function(a){e.formThead=a},expression:"formThead"}},[t("el-checkbox",{attrs:{label:"apple"}},[e._v("apple")]),e._v(" "),t("el-checkbox",{attrs:{label:"banana"}},[e._v("banana")]),e._v(" "),t("el-checkbox",{attrs:{label:"orange"}},[e._v("orange")])],1)],1),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",fit:"","highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"name",label:"fruitName",width:"180"}}),e._v(" "),e._l(e.formThead,function(a){return t("el-table-column",{key:a,attrs:{label:a},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row[a])+"\n      ")]}}])})})],2)],1)},staticRenderFns:[]},l=t("VU/8")({data:function(){return{tableData:[{name:"fruit-1",apple:"apple-10",banana:"banana-10",orange:"orange-10"},{name:"fruit-2",apple:"apple-20",banana:"banana-20",orange:"orange-20"}],formThead:["apple","banana"]}}},n,!1,null,null,null);a.default=l.exports}});