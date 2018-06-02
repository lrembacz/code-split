webpackJsonp([1],{

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("a7df5fd0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4bbfc2b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4bbfc2b2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tab.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.tab-button {\n    padding: 6px 10px;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    border: 1px solid #ccc;\n    cursor: pointer;\n    background: #f0f0f0;\n    margin-bottom: -1px;\n    margin-right: -1px;\n}\n.tab-button:hover {\n    background: #e0e0e0;\n}\n.tab-button.active {\n    background: #e0e0e0;\n}\n.tab {\n    border: 1px solid #ccc;\n    padding: 10px;\n}\n.posts-tab {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.posts-sidebar {\n    max-width: 40vw;\n    margin: 0;\n    padding: 0 10px 0 0;\n    list-style-type: none;\n    border-right: 1px solid #ccc;\n}\n.posts-sidebar li {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    cursor: pointer;\n}\n.posts-sidebar li:hover {\n    background: #eee;\n}\n.posts-sidebar li.selected {\n    background: lightblue;\n}\n.selected-post-container {\n    padding-left: 10px;\n}\n.selected-post > :first-child {\n    margin-top: 0;\n    padding-top: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 269:
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


var TabPosts = function TabPosts() {
    return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 270));
};
var TabArchive = function TabArchive() {
    return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 273));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        TabPosts: TabPosts,
        TabArchive: TabArchive
    },
    data: function data() {
        return {
            currentTab: 'Posts',
            currentTab2: 'Posts',
            tabs: ['Posts', 'Archive']
        };
    },

    computed: {
        currentTabComponent: function currentTabComponent() {
            return 'tab-' + this.currentTab.toLowerCase();
        },
        currentTabComponent2: function currentTabComponent2() {
            return 'tab-' + this.currentTab2.toLowerCase();
        }
    }
});

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("h2", [_vm._v("Z keep alive")]),
      _vm._v(" "),
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "button",
          {
            key: tab + "1",
            class: ["tab-button", { active: _vm.currentTab === tab }],
            on: {
              click: function($event) {
                _vm.currentTab = tab
              }
            }
          },
          [_vm._v(_vm._s(tab))]
        )
      }),
      _vm._v(" "),
      _c(
        "keep-alive",
        [_c(_vm.currentTabComponent, { tag: "component", staticClass: "tab" })],
        1
      ),
      _vm._v(" "),
      _c("h2", [_vm._v("Bez keep alive")]),
      _vm._v(" "),
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "button",
          {
            key: tab + "2",
            class: ["tab-button", { active: _vm.currentTab2 === tab }],
            on: {
              click: function($event) {
                _vm.currentTab2 = tab
              }
            }
          },
          [_vm._v(_vm._s(tab))]
        )
      }),
      _vm._v(" "),
      _c(_vm.currentTabComponent2, { tag: "component", staticClass: "tab" })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4bbfc2b2", module.exports)
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(267)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(269)
/* template */
var __vue_template__ = __webpack_require__(276)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\components\\tab\\Tab.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4bbfc2b2", Component.options)
  } else {
    hotAPI.reload("data-v-4bbfc2b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});