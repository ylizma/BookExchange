(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      books: []
    };
  },
  methods: {
    getArchivedBooks: function getArchivedBooks() {
      var _this = this;

      this.$store.dispatch("getArchivedBooks").then(function (res) {
        console.log(res);
        _this.books = res;
      })["catch"](function (err) {
        console.error(err);
      });
    }
  },
  created: function created() {
    this.getArchivedBooks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "bg-white p-3" }, [
        _c("h3", [
          _vm._v(" " + _vm._s(_vm.$t("usercp.archived_books.header")) + " ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-5" }, [
          _c("table", { staticClass: "table" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "table-secondary" }, [_vm._v("#")]),
                _vm._v(" "),
                _c("th", { staticClass: "table-secondary" }, [
                  _vm._v(
                    _vm._s(_vm.$t("usercp.archived_books.table.book_title"))
                  )
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "table-secondary" }, [
                  _vm._v(_vm._s(_vm.$t("usercp.archived_books.table.image")))
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "table-secondary" }, [
                  _vm._v(_vm._s(_vm.$t("usercp.archived_books.table.date")))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.books, function(book, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index))]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(" " + _vm._s(book.livre.livre.titre) + " ")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    book.img[0]
                      ? _c("img", {
                          attrs: {
                            src: book.img[0].image,
                            alt: "",
                            width: "200",
                            height: "150"
                          }
                        })
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(book.created_at) + " ")])
                ])
              }),
              0
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/ArchivedBooks.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/profile/ArchivedBooks.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArchivedBooks.vue?vue&type=template&id=011857a7& */ "./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7&");
/* harmony import */ var _ArchivedBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArchivedBooks.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArchivedBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/ArchivedBooks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchivedBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchivedBooks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/ArchivedBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchivedBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ArchivedBooks.vue?vue&type=template&id=011857a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/ArchivedBooks.vue?vue&type=template&id=011857a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArchivedBooks_vue_vue_type_template_id_011857a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);