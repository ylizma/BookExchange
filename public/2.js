(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Signup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Signup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
      name: '',
      city: '',
      email: '',
      password: '',
      password2: '',
      error: false,
      passwordmsg: '',
      msg: {
        msg: '',
        error: false
      },
      villes: []
    };
  },
  methods: {
    signup: function signup() {
      var _this = this;

      if (this.password !== this.password2) {
        this.passwordmsg = "please check your password";
        this.error = true;
      } else {
        var user = {
          'name': this.name,
          'ville': this.city,
          'email': this.email,
          'password': this.password
        };
        this.$store.dispatch('register', user).then(function (resp) {
          _this.msg.msg = "your account is succesfuly created";
          _this.msg.error = false;
          _this.error = true;
        })["catch"](function (err) {
          _this.msg.msg = "";
          _this.msg.error = true;
          _this.msg.msg = "your credetiels are not correct";
          _this.error = true;
        });
      }
    },
    fetchData: function fetchData() {
      var _this2 = this;

      console.log("erere");
      this.$store.dispatch('fetchCities').then(function (res) {
        _this2.villes = res.data;
        console.log(res.data);
      })["catch"](function (err) {// console.error(err);
      });
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.signup($event)
          }
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "d-flex flex-column justify-content-center",
            attrs: { id: "login-box" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.error,
                    expression: "error"
                  }
                ],
                staticClass: " alert-dismissible fade show",
                class: _vm.msg.error
                  ? "alert alert-danger"
                  : "alert alert-success",
                attrs: { role: "alert" }
              },
              [
                _c("center", [
                  _vm._v(_vm._s(_vm.msg.msg) + "  " + _vm._s(_vm.passwordmsg))
                ]),
                _vm._v(" "),
                _vm._m(1)
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "email-login",
                staticStyle: { "background-color": "#ffffff" }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "text-input form-control",
                  attrs: { type: "text", required: "", placeholder: "Name" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mt-2" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.city,
                          expression: "city"
                        }
                      ],
                      staticClass: "custom-select",
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
                          _vm.city = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.villes, function(city) {
                      return _c(
                        "option",
                        { key: city.id, domProps: { value: city.id } },
                        [_vm._v(_vm._s(city.name))]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  staticClass: "email-input form-control",
                  staticStyle: { "margin-top": "10px" },
                  attrs: {
                    type: "text",
                    required: "",
                    placeholder: "Email",
                    minlength: "6"
                  },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  staticClass: "password-input form-control",
                  staticStyle: { "margin-top": "10px" },
                  attrs: {
                    type: "password",
                    required: "",
                    placeholder: "Password",
                    minlength: ""
                  },
                  domProps: { value: _vm.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password2,
                      expression: "password2"
                    }
                  ],
                  staticClass: "password-input form-control",
                  staticStyle: { "margin-top": "10px" },
                  attrs: {
                    type: "password",
                    required: "",
                    placeholder: "Confirm password",
                    minlength: ""
                  },
                  domProps: { value: _vm.password2 },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password2 = $event.target.value
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  padding: "10px 20px",
                  "padding-bottom": "23px",
                  "padding-top": "18px"
                },
                attrs: { id: "login-box-footer" }
              },
              [
                _c(
                  "p",
                  { staticStyle: { "margin-bottom": "0px" } },
                  [
                    _vm._v("Do you have an account?"),
                    _c("router-link", { attrs: { to: "/login" } }, [
                      _vm._v("Sign In!")
                    ])
                  ],
                  1
                )
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-box-header" }, [
      _c(
        "h4",
        {
          staticStyle: {
            color: "rgb(139,139,139)",
            "margin-bottom": "0px",
            "font-weight": "400",
            "font-size": "27px"
          }
        },
        [_vm._v("Register")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "submit-row",
        staticStyle: { "margin-bottom": "8px", "padding-top": "0px" }
      },
      [
        _c(
          "button",
          {
            staticClass: "btn btn-primary btn-block box-shadow",
            attrs: { type: "submit", id: "submit-id-submit" }
          },
          [_vm._v("Sign up")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/Signup.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/auth/Signup.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=4e709f04& */ "./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/Signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/Signup.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/auth/Signup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=template&id=4e709f04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/Signup.vue?vue&type=template&id=4e709f04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_4e709f04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);