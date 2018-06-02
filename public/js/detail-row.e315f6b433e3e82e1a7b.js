webpackJsonp([7],{

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(210)
/* template */
var __vue_template__ = __webpack_require__(211)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\vuetable\\DetailRow.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-babd6828", Component.options)
  } else {
    hotAPI.reload("data-v-babd6828", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        rowData: {
            type: Object,
            required: true
        },
        rowIndex: {
            type: Number
        }
    },
    methods: {
        onClick: function onClick(event) {
            console.log('my-detail-row: on-click', event.target);
        }
    }
});

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { on: { click: _vm.onClick } }, [
    _c("div", { staticClass: "inline field" }, [
      _c("label", [_vm._v("Name: ")]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.rowData.name))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "inline field" }, [
      _c("label", [_vm._v("Email: ")]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.rowData.email))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "inline field" }, [
      _c("label", [_vm._v("Nickname: ")]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.rowData.nickname))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "inline field" }, [
      _c("label", [_vm._v("Birthdate: ")]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.rowData.birthdate))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "inline field" }, [
      _c("label", [_vm._v("Gender: ")]),
      _vm._v(" "),
      _c("span", [_vm._v(_vm._s(_vm.rowData.gender))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-babd6828", module.exports)
  }
}

/***/ })

});