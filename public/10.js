(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'infos',
  data: function data() {
    return {
      user: {
        name: '',
        email: '',
        telephone: '',
        password: '',
        image: null,
        ville_id: ''
      },
      villes: [],
      url: ''
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      var _this = this;

      var fd = new FormData();
      if (this.user.image instanceof Blob) fd.append('img', this.user.image, this.user.image.name);
      fd.append('name', this.user.name);
      fd.append('email', this.user.email);
      fd.append('telephone', this.user.telephone);
      fd.append('password', this.user.password);
      fd.append('ville_id', this.user.ville_id);
      this.$store.dispatch('updateProfile', fd).then(function (res) {
        _this.user = res.data.user;
        _this.url = "/images/users/" + _this.user.image;
        console.log(res.data);
      })["catch"](function (err) {//  console.error(err);
      });
    },
    fetchData: function fetchData() {
      var _this2 = this;

      this.$store.dispatch('fetchCities').then(function (res) {
        _this2.villes = res.data;
      })["catch"](function (err) {// console.error(err);
      });
    },
    getUser: function getUser() {
      var _this3 = this;

      this.$store.dispatch('getCurrentUser').then(function (res) {
        _this3.user = res.data;
        _this3.url = _this3.user.image ? "/images/users/" + _this3.user.image : '/images/users/profile.png';
      })["catch"](function (err) {// console.error(err);
      });
    },
    Onselect: function Onselect() {
      var file = this.$refs.file.files[0];
      this.user.image = file; // console.log(file);
    }
  },
  mounted: function mounted() {
    this.fetchData();
    this.getUser();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-md-9" }, [
    _c("div", [
      _c("div", { staticClass: "bg-white p-3 " }, [
        _c("h3", [_vm._v(_vm._s(_vm.$t("usercp.profile.header")))]),
        _vm._v(" "),
        _c("div", { staticClass: "container" }, [
          _c(
            "form",
            {
              staticClass: "form",
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateProfile($event)
                }
              }
            },
            [
              _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticClass: "rounded-circle ",
                  attrs: { width: "200", height: "200", src: _vm.url }
                })
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "file",
                attrs: { name: "img", type: "file" },
                on: { change: _vm.Onselect }
              }),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v(" " + _vm._s(_vm.$t("usercp.profile.username")) + " ")
                ]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.name,
                      expression: "user.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.user.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v(" " + _vm._s(_vm.$t("usercp.profile.email")) + " ")
                ]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email", required: "" },
                  domProps: { value: _vm.user.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v(" " + _vm._s(_vm.$t("usercp.profile.city")) + " ")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.ville_id,
                        expression: "user.ville_id"
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
                        _vm.$set(
                          _vm.user,
                          "ville_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.villes, function(city) {
                    return _c(
                      "option",
                      { key: city.id, domProps: { value: city.id } },
                      [
                        _vm._v(
                          "\n                                " +
                            _vm._s(city.name) +
                            "\n                            "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v(" " + _vm._s(_vm.$t("usercp.profile.tel")) + " ")
                ]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.telephone,
                      expression: "user.telephone"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.user.telephone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "telephone", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c("label", { staticClass: "d-block" }, [
                  _vm._v(" " + _vm._s(_vm.$t("usercp.profile.password")) + " ")
                ]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.password,
                      expression: "user.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password" },
                  domProps: { value: _vm.user.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "password", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-3" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-success", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      " " + _vm._s(_vm.$t("usercp.profile.save_btn")) + " "
                    )
                  ]
                )
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/UserInfos.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/profile/UserInfos.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfos.vue?vue&type=template&id=8f78628e& */ "./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e&");
/* harmony import */ var _UserInfos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfos.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInfos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/UserInfos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserInfos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfos.vue?vue&type=template&id=8f78628e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserInfos.vue?vue&type=template&id=8f78628e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfos_vue_vue_type_template_id_8f78628e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);