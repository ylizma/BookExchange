(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/NewBook.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/NewBook.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
      book: {
        title: '',
        categorie_id: '',
        author: '',
        resume: '',
        isbn: '',
        status: '',
        imgs: [3],
        lang: ''
      },
      showBooks: false,
      categories: [],
      apiresult: [],
      status: [],
      url: [],
      langs: [],
      saved: false
    };
  },
  methods: {
    getCategories: function getCategories() {
      var _this = this;

      this.$store.dispatch('getCategories').then(function (res) {
        _this.categories = res.data; // console.log(res.data);
      })["catch"](function (err) {
        console.error(err);
      });
    },
    getInfosFromApi: function getInfosFromApi() {
      var _this2 = this;

      if (this.book.title !== '') {
        this.$store.dispatch('getInfoFromGoogleApi', this.book.title).then(function (res) {
          console.log(res.items);
          res.items.forEach(function (el) {
            _this2.apiresult.push({
              title: el.volumeInfo.title,
              authors: el.volumeInfo.authors,
              resume: el.volumeInfo.description,
              isbn: el.volumeInfo.industryIdentifiers,
              pageCount: el.volumeInfo.pageCount
            });
          });
          _this2.showBooks = true;
        })["catch"](function (err) {
          return console.error(err);
        });
      }
    },
    choosedOne: function choosedOne(index) {
      var cbook = this.apiresult[index];
      this.book.title = cbook.title, this.book.author = cbook.authors.join(',');
      this.book.resume = cbook.resume;
      this.book.isbn = cbook.isbn[0].identifier;
      this.showBooks = false;
    },
    onImageSelect: function onImageSelect() {
      for (var i = 0; i < this.$refs.imgs.files.length; i++) {
        this.book.imgs.push(this.$refs.imgs.files[i]);
        this.url.push(URL.createObjectURL(this.$refs.imgs.files[i]));
      }
    },
    onDeleteImage: function onDeleteImage(index) {
      this.$delete(this.book.imgs, index);
      this.$delete(this.url, index);
    },
    saveBook: function saveBook() {
      var _this3 = this;

      var fd = new FormData();
      fd.append('title', this.book.title);
      fd.append('author', this.book.author);
      fd.append('resume', this.book.resume);
      fd.append('isbn', this.book.isbn);
      fd.append('lang', this.book.lang);
      fd.append('status', this.book.status);
      fd.append('categorie_id', this.book.categorie_id);

      for (var i = 0; i < this.book.imgs.length; i++) {
        fd.append('imgs[' + i + ']', this.book.imgs[i]);
      }

      this.$store.dispatch('addNewBook', fd).then(function (res) {
        _this3.saved = true;
      })["catch"](function (err) {});
    }
  },
  mounted: function mounted() {
    this.getCategories();
    this.status = this.$store.getters.bookStatus;
    this.langs = this.$store.getters.langs;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c("h3", [_vm._v(_vm._s(_vm.$t("newBook.header")))]),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white p-3" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.saved,
                expression: "saved"
              }
            ],
            staticClass: "alert alert-success",
            attrs: { role: "alert" }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(_vm.$t("newBook.success")) +
                " !!\n            "
            ),
            _c("router-link", { attrs: { to: "/profile/books" } }, [
              _vm._v(_vm._s(_vm.$t("newBook.preview")))
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.saveBook($event)
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.title")))]),
                _vm._v(" "),
                _c("div", { staticClass: "form-row" }, [
                  _c("div", { staticClass: "col-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.book.title,
                          expression: "book.title"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.book.title },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.book, "title", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-1 ml-3 text-right" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.getInfosFromApi }
                      },
                      [_vm._v(_vm._s(_vm.$t("newBook.search_btn")))]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showBooks,
                        expression: "showBooks"
                      }
                    ],
                    staticClass: "list-group mt-1"
                  },
                  _vm._l(_vm.apiresult, function(item, index) {
                    return _c(
                      "li",
                      { key: index, staticClass: "list-group-item" },
                      [
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                return _vm.choosedOne(index)
                              }
                            }
                          },
                          [
                            _vm._v(
                              " " +
                                _vm._s(item.title) +
                                " ,writen by: " +
                                _vm._s(item.authors) +
                                " ,pages:" +
                                _vm._s(item.pageCount) +
                                " "
                            )
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.isbn")))]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.book.isbn,
                      expression: "book.isbn"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.book.isbn },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.book, "isbn", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.authors")))]),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.book.author,
                      expression: "book.author"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", required: "" },
                  domProps: { value: _vm.book.author },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.book, "author", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.category")))]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.book.categorie_id,
                        expression: "book.categorie_id"
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
                        _vm.$set(
                          _vm.book,
                          "categorie_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.categories, function(cat) {
                    return _c(
                      "option",
                      {
                        key: cat.id,
                        attrs: { selected: "" },
                        domProps: { value: cat.id }
                      },
                      [_vm._v(" " + _vm._s(cat.nom) + " ")]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.status")))]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.book.status,
                        expression: "book.status"
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
                        _vm.$set(
                          _vm.book,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.status, function(st, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: st } },
                      [_vm._v(" " + _vm._s(st) + " ")]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.language")))]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.book.lang,
                        expression: "book.lang"
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
                        _vm.$set(
                          _vm.book,
                          "lang",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.langs, function(l, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: l } },
                      [_vm._v(" " + _vm._s(l) + " ")]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v(_vm._s(_vm.$t("newBook.summary")))]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.book.resume,
                      expression: "book.resume"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { required: "" },
                  domProps: { value: _vm.book.resume },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.book, "resume", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  ref: "imgs",
                  attrs: {
                    required: "required",
                    type: "file",
                    multiple: "multiple"
                  },
                  on: { change: _vm.onImageSelect }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "form-group",
                  staticStyle: { display: "inline" }
                },
                _vm._l(_vm.url, function(pic, index) {
                  return _c("div", { key: index }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            return _vm.onDeleteImage(index)
                          }
                        }
                      },
                      [
                        _c("img", {
                          attrs: { src: pic, width: "100", height: "100" }
                        })
                      ]
                    )
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col offset-xl-10 text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v(_vm._s(_vm.$t("newBook.add_btn")))]
                  )
                ])
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

/***/ "./resources/js/components/book/NewBook.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/book/NewBook.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewBook.vue?vue&type=template&id=1c5b65ae& */ "./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae&");
/* harmony import */ var _NewBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewBook.vue?vue&type=script&lang=js& */ "./resources/js/components/book/NewBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/book/NewBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/book/NewBook.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/book/NewBook.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/NewBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NewBook.vue?vue&type=template&id=1c5b65ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/book/NewBook.vue?vue&type=template&id=1c5b65ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBook_vue_vue_type_template_id_1c5b65ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);