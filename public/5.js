(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/exchange.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/exchange.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  data: function data() {
    return {
      selected_book: {},
      desired_book: {},
      user_books: [],
      submitted: false,
      hasError: false,
      alert_message: ''
    };
  },
  methods: {
    getUserBooks: function getUserBooks() {
      var _this = this;

      this.$store.dispatch('getUserActualBooks').then(function (res) {
        _this.user_books = res.data;
        console.log(res.data);
        console.log(JSON.stringify(_this.user_books));
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getDesiredBookInfos: function getDesiredBookInfos() {
      var _this2 = this;

      this.$store.dispatch('getBookInfos', this.$route.params.id).then(function (res) {
        _this2.desired_book = res.data;
        console.log(res.data);
        console.log(JSON.stringify(_this2.desired_book));
      })["catch"](function (err) {
        console.error(err);
      });
    },
    submitExchangeRequest: function submitExchangeRequest() {
      var _this3 = this;

      if (this.selected_book.livre.livre.id === this.desired_book.livre.livre.id) {
        this.alert_message = this.$t("exchange.alerts.same_book_error");
        this.hasError = true;
      } else {
        var fd = new FormData();
        fd.append('my_book', this.selected_book.id);
        fd.append('desired_book', this.desired_book.id);
        this.$store.dispatch('addExchangeRequest', fd).then(function (res) {
          _this3.submitted = true;
          _this3.alert_message = _this3.$t("exchange.alerts.request_sent");
          _this3.hasError = false;
        })["catch"](function (err) {});
      }
    }
  },
  mounted: function mounted() {
    this.getDesiredBookInfos();
    this.getUserBooks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-5 container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", [
          _c("h3", [_vm._v(" " + _vm._s(_vm.$t("exchange.header")) + " ")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "bg-white p-3" },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.submitted || _vm.hasError,
                      expression: "submitted || hasError"
                    }
                  ],
                  staticClass: "alert",
                  class: {
                    "alert-danger": _vm.hasError,
                    "alert-success": !_vm.hasError
                  },
                  attrs: { role: "alert" }
                },
                [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm.alert_message) +
                      "\n                    "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "btn btn-danger mb-3",
                  attrs: { tag: "button", id: "button", to: "/" }
                },
                [_vm._v(_vm._s(_vm.$t("exchange.goback")))]
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.submitExchangeRequest($event)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("exchange.desired_book")))
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _vm.desired_book.livre !== undefined
                          ? _c("div", { staticClass: "form-row" }, [
                              _c("div", { staticClass: "col text-center" }, [
                                _c("img", {
                                  staticClass: "img-fluid",
                                  attrs: {
                                    src:
                                      _vm.desired_book.img.length > 0
                                        ? _vm.desired_book.img[0].image
                                        : "",
                                    alt: ""
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
                                _c("h4", { staticClass: "text-center" }, [
                                  _c("strong", [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.desired_book.livre.livre.titre
                                        ) +
                                        " "
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.$t("exchange.summary")) + " :"
                                    )
                                  ]),
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        _vm.desired_book.livre.livre.resume
                                      ) +
                                      "."
                                  ),
                                  _c("br"),
                                  _c("br"),
                                  _c("br")
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _c("strong", [
                                    _vm._v(
                                      _vm._s(_vm.$t("exchange.owner")) + " :"
                                    )
                                  ]),
                                  _vm._v(
                                    " " + _vm._s(_vm.desired_book.user.name)
                                  )
                                ])
                              ])
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [
                        _vm._v(_vm._s(_vm.$t("exchange.select_one_book")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selected_book,
                              expression: "selected_book"
                            }
                          ],
                          staticClass: "form-control",
                          staticStyle: { height: "42px" },
                          attrs: { required: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.selected_book = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        _vm._l(_vm.user_books, function(book) {
                          return _c(
                            "option",
                            {
                              key: book.id,
                              attrs: { selected: "" },
                              domProps: { value: book }
                            },
                            [_vm._v(" " + _vm._s(book.livre.livre.titre) + " ")]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c(
                        "div",
                        { staticClass: "col offset-xl-10 text-right" },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success",
                              attrs: { type: "submit" }
                            },
                            [_vm._v(_vm._s(_vm.$t("exchange.send_request")))]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ])
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/book/exchange.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/book/exchange.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange.vue?vue&type=template&id=324859ce& */ "./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce&");
/* harmony import */ var _exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchange.vue?vue&type=script&lang=js& */ "./resources/js/components/book/exchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/book/exchange.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/book/exchange.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/book/exchange.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./exchange.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/exchange.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exchange_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./exchange.vue?vue&type=template&id=324859ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/exchange.vue?vue&type=template&id=324859ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exchange_vue_vue_type_template_id_324859ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);