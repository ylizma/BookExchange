(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js& ***!
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
      books: [],
      pagination: {}
    };
  },
  methods: {
    getBooks: function getBooks(url) {
      var _this = this;

      this.$store.dispatch('getUserBooks', url).then(function (res) {
        _this.books = res.data.data;

        _this.makepagination(res.data);

        console.log(_this.pagination);
      })["catch"](function (err) {
        console.error(err);
      });
    },
    makepagination: function makepagination(links) {
      var pagination = {
        current_page: links.current_page,
        last_page: links.last_page,
        path: links.path
      };
      this.pagination = pagination;
    }
  },
  mounted: function mounted() {
    this.getBooks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544& ***!
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
      _c(
        "div",
        { staticClass: "bg-white p-3" },
        [
          _c("h3", [_vm._v("My books")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn btn-info mb-3 float-right",
              attrs: { to: "/newBook", type: "button" }
            },
            [_vm._v("Add a new book")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.books, function(book) {
                  return _c("tr", { key: book.id }, [
                    _c("td", { staticClass: "table-light" }, [
                      _c("img", {
                        attrs: {
                          width: "128",
                          height: "160",
                          src: book.photos[0]
                            ? "/images/books/" + book.photos[0].image
                            : "https://dummyimage.com/128x200/000000/ffffff"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "table-light" }, [
                      _vm._v(" " + _vm._s(book.livre.titre) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "table-light" }, [
                      _vm._v(" " + _vm._s(book.created_at) + " ")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "table-light" }, [
                      _vm._v("Available")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "table-light" }, [
                      _c(
                        "div",
                        { staticClass: "row", staticStyle: { width: "120px" } },
                        [
                          _c(
                            "div",
                            { staticClass: "col-auto" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "action-link",
                                  attrs: {
                                    to: {
                                      name: "editBook",
                                      params: { id: book.id }
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-edit mr-3" })]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(1, true)
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("nav", { staticClass: "mt-2" }, [
            _c(
              "ul",
              { staticClass: "pagination" },
              _vm._l(_vm.pagination.last_page, function(i) {
                return _c(
                  "li",
                  {
                    key: i,
                    staticClass: "page-item",
                    class: i == _vm.pagination.current_page ? "active" : ""
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "page-link",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.getBooks(
                              _vm.pagination.path + "?page=" + i
                            )
                          }
                        }
                      },
                      [_vm._v(_vm._s(i))]
                    )
                  ]
                )
              }),
              0
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "table-secondary" }),
        _vm._v(" "),
        _c("th", { staticClass: "table-secondary" }, [_vm._v("title")]),
        _vm._v(" "),
        _c("th", { staticClass: "table-secondary" }, [_vm._v("date")]),
        _vm._v(" "),
        _c("th", { staticClass: "table-secondary" }, [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", { staticClass: "table-secondary" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("a", { staticClass: "action-link", attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-remove" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/UserBooks.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/profile/UserBooks.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBooks.vue?vue&type=template&id=30eab544& */ "./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544&");
/* harmony import */ var _UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserBooks.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/UserBooks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBooks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserBooks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserBooks.vue?vue&type=template&id=30eab544& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/UserBooks.vue?vue&type=template&id=30eab544&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserBooks_vue_vue_type_template_id_30eab544___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);