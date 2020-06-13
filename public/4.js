(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row mt-3" },
    [
      _c("div", { staticClass: "col-md-3 mb-3" }, [
        _c(
          "div",
          { staticClass: "px-3", staticStyle: { "background-color": "white" } },
          [
            _c("h5", [_vm._v("Shortcuts")]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "d-block profile-sidebar-link",
                    staticStyle: { "font-size": "14px" },
                    attrs: { to: "/profile/infos" }
                  },
                  [_vm._v("My profile")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-block profile-sidebar-link",
                    staticStyle: { "font-size": "14px" },
                    attrs: { to: "/profile/books" }
                  },
                  [_vm._v("My books")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-block profile-sidebar-link",
                    staticStyle: { "font-size": "14px" },
                    attrs: { to: "/profile/requests/sent" }
                  },
                  [_vm._v("Sent Requests")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-block profile-sidebar-link",
                    staticStyle: { "font-size": "14px" },
                    attrs: { to: "/profile/requests/received" }
                  },
                  [_vm._v("Received Requests")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "d-block profile-sidebar-link",
                    staticStyle: { "font-size": "14px" },
                    attrs: { to: "/profile/archived" }
                  },
                  [_vm._v("Archived Books")]
                )
              ],
              1
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/profile/UserProfilePage.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/profile/UserProfilePage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfilePage.vue?vue&type=template&id=3283c5ae& */ "./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae&");
/* harmony import */ var _UserProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfilePage.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/UserProfilePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/UserProfilePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfilePage.vue?vue&type=template&id=3283c5ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/UserProfilePage.vue?vue&type=template&id=3283c5ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfilePage_vue_vue_type_template_id_3283c5ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);