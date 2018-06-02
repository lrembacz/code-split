webpackJsonp([2],{

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("7970288e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33281480\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BarChart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-33281480\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BarChart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "\n.small {\n    max-width: 600px;\n    margin:  150px auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//


var Bar = function Bar() {
    return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 216));
};

/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        'bar': Bar
    },
    data: function data() {
        return {
            labels: [],
            dataSets: [],
            datacollection: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                maxBarThickness: 30,
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: '#333333',
                            zeroLineColor: '#333333'
                        },
                        ticks: {
                            maxRotation: 0
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        gridLines: {
                            color: '#333333',
                            zeroLineColor: '#333333'
                        },
                        stacked: true
                    }]
                }
            }
        };
    },
    mounted: function mounted() {
        this.getData();
    },

    methods: {
        fillData: function fillData() {
            var _this = this;

            var labels = this.labels;
            var datasets = [];

            this.dataSets.forEach(function (value, index) {
                var dataset = {
                    label: 'Success',
                    backgroundColor: '#00cf13',
                    data: _this.dataSets[index]
                };
                datasets.push(dataset);
            });

            this.datacollection = {
                labels: labels,
                datasets: datasets
            };
        },
        getData: function getData() {
            var _this2 = this;

            setTimeout(function () {
                _this2.labels = [10, 20, 30, 40, 50];
                _this2.dataSets = [[13, 14, 15, 18, 25]];
                _this2.fillData();
            });
        }
    }
});

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("bar", {
    attrs: { "chart-data": _vm.datacollection, options: _vm.options }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33281480", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(213)
}
var normalizeComponent = __webpack_require__(13)
/* script */
var __vue_script__ = __webpack_require__(215)
/* template */
var __vue_template__ = __webpack_require__(266)
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
Component.options.__file = "resources\\assets\\js\\components\\chart\\BarChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33281480", Component.options)
  } else {
    hotAPI.reload("data-v-33281480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});