webpackJsonp([51],{V9V6:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),o=s("NYxO"),r={name:"permission",data:function(){return{switchRoles:""}},computed:i()({},Object(o.b)(["roles"])),watch:{switchRoles:function(e){var t=this;this.$store.dispatch("ChangeRoles",e).then(function(){t.$router.push({path:"/permission/index?"+ +new Date})})}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticStyle:{"margin-bottom":"15px"}},[e._v(e._s(e.$t("permission.roles"))+"： "+e._s(e.roles))]),e._v("\n  "+e._s(e.$t("permission.switchRoles"))+"：\n  "),s("el-radio-group",{model:{value:e.switchRoles,callback:function(t){e.switchRoles=t},expression:"switchRoles"}},[s("el-radio-button",{attrs:{label:"editor"}})],1)],1)},staticRenderFns:[]},a=s("VU/8")(r,l,!1,null,null,null);t.default=a.exports}});