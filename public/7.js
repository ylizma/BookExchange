(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      book: {
        livre: {
          livre: "",
          categorie: ""
        },
        state: "",
        user: "",
        language: "",
        img: ""
      },
      submitted: false,
      hasError: false,
      alert_message: ""
    };
  },
  methods: {
    getBookById: function getBookById(id) {
      var _this = this;

      this.$store.dispatch("getBookInfos", id).then(function (res) {
        return _this.book = res.data;
      })["catch"](function (err) {
        return console.error(err);
      });
    },
    acceptRequest: function acceptRequest(id) {
      var _this2 = this;

      var data = {
        id: id
      };
      this.$store.dispatch("acceptUserRequest", data).then(function (res) {
        _this2.getRequests();

        _this2.submitted = true;
        _this2.alert_message = "the request is accepted";
      })["catch"](function (err) {
        _this2.hasError = true;
        _this2.alert_message = "error !!";
        console.error(err);
      });
    },
    refuseRequest: function refuseRequest(id) {
      var _this3 = this;

      var data = {
        id: id
      };
      this.$store.dispatch("refuseUserRequest", data).then(function (res) {
        _this3.getRequests();

        _this3.submitted = true;
        _this3.alert_message = "the request is refused";
      })["catch"](function (err) {
        _this3.hasError = true;
        _this3.alert_message = "error !!";
        console.error(err);
      });
    },
    getRequests: function getRequests() {
      var _this4 = this;

      this.$store.dispatch("getUserRequests", "receive").then(function (res) {
        _this4.books = res.data.filter(function (res) {
          return res.status != "refused";
        });
        console.log(res.data);
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  },
  created: function created() {
    this.getRequests();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          _vm._v(" " + _vm._s(_vm.$t("usercp.requests.received.header")) + " ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-responsive mt-5" }, [
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
          _c("div", { staticClass: "table-responsive" }, [
            _c("table", { staticClass: "table" }, [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "table-secondary" }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(_vm._s(_vm.$t("usercp.requests.received.sender")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(_vm._s(_vm.$t("usercp.requests.shared.city")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(_vm._s(_vm.$t("usercp.requests.shared.date")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(
                      _vm._s(_vm.$t("usercp.requests.shared.proposal_book"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(_vm._s(_vm.$t("usercp.requests.shared.book_state")))
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(
                      _vm._s(_vm.$t("usercp.requests.shared.desired_book"))
                    )
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "table-secondary" }, [
                    _vm._v(
                      _vm._s(_vm.$t("usercp.requests.received.accept_reject"))
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.books, function(book, index) {
                  return _c("tr", { key: index }, [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v(_vm._s(index + 1))
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(book.user.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(book.user.ville.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(book.requested_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#exampleModalCenter"
                          },
                          on: {
                            click: function($event) {
                              return _vm.getBookById(book.userbook.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(book.userbook.livre.titre) +
                              " (click to\n                                            preview)"
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                                        " +
                          _vm._s(book.userbook.etat) +
                          "\n                                    "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "#",
                            "data-toggle": "modal",
                            "data-target": "#exampleModalCenter"
                          },
                          on: {
                            click: function($event) {
                              return _vm.getBookById(book.desiredbook.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                            " +
                              _vm._s(book.desiredbook.livre.titre) +
                              " (click to\n                                            preview)\n                                        "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    book.status != "accepted"
                      ? _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary sm",
                              on: {
                                click: function($event) {
                                  return _vm.acceptRequest(book.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            accept\n                                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger sm",
                              on: {
                                click: function($event) {
                                  return _vm.refuseRequest(book.id)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            reject\n                                        "
                              )
                            ]
                          )
                        ])
                      : _c("td", [
                          _vm._v(
                            "\n                                        ACCEPTED\n                                    "
                          )
                        ])
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade bd-example-modal-lg",
              attrs: {
                id: "exampleModalCenter",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalCenterTitle",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog modal-dialog-centered modal-lg",
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          attrs: { id: "exampleModalCenterTitle" }
                        },
                        [
                          _vm._v(
                            "\n                                        " +
                              _vm._s(_vm.book.livre.livre.titre || "") +
                              "\n                                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(1)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "div",
                        _vm._l(_vm.book.img, function(img, index) {
                          return _c("img", {
                            key: index,
                            attrs: {
                              src: img.image
                                ? "/images/books/" + img.image
                                : "https://dummyimage.com/128x200/000000/ffffff",
                              alt: " ",
                              width: "200",
                              height: "350"
                            }
                          })
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "book-info" }, [
                        _c("p", [
                          _vm._v(
                            "title: " + _vm._s(_vm.book.livre.livre.titre || "")
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "title: " +
                              _vm._s(_vm.book.livre.categorie.nom || "")
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("state: " + _vm._s(_vm.book.etat || ""))
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Owner : " + _vm._s(_vm.book.user.name || ""))
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("Email : " + _vm._s(_vm.book.user.email || ""))
                        ]),
                        _vm._v(" "),
                        _vm.book.user.telephone
                          ? _c("p", [
                              _vm._v(
                                "\n                                            Telephone : " +
                                  _vm._s(_vm.book.user.telephone || "") +
                                  "\n                                        "
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v("language: " + _vm._s(_vm.book.langue || ""))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "modal fade bd-example-modal-lg",
                        attrs: {
                          id: "exampleModalCenter",
                          tabindex: "-1",
                          role: "dialog",
                          "aria-labelledby": "exampleModalCenterTitle",
                          "aria-hidden": "true"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "modal-dialog modal-dialog-centered modal-lg",
                            attrs: { role: "document" }
                          },
                          [
                            _c("div", { staticClass: "modal-content" }, [
                              _c("div", { staticClass: "modal-header" }, [
                                _c(
                                  "h5",
                                  {
                                    staticClass: "modal-title",
                                    attrs: { id: "exampleModalCenterTitle" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                    " +
                                        _vm._s(
                                          _vm.book.livre.livre.titre || ""
                                        ) +
                                        "\n                                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(2)
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "modal-body" }, [
                                _c(
                                  "div",
                                  _vm._l(_vm.book.img, function(img, index) {
                                    return _c("img", {
                                      key: index,
                                      attrs: {
                                        src: img.image,
                                        alt: " ",
                                        width: "200",
                                        height: "350"
                                      }
                                    })
                                  }),
                                  0
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "book-info" }, [
                                  _c("p", [
                                    _vm._v(
                                      "title: " +
                                        _vm._s(_vm.book.livre.livre.titre || "")
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "title: " +
                                        _vm._s(
                                          _vm.book.livre.categorie.nom || ""
                                        )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "state: " + _vm._s(_vm.book.etat || "")
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Owner : " +
                                        _vm._s(_vm.book.user.name || "")
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "language: " +
                                        _vm._s(_vm.book.langue || "")
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._m(3)
                            ])
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade bd-example-modal-lg",
        attrs: {
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "myLargeModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c("div", { staticClass: "modal-dialog modal-lg" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._v(
              "\n                                ...\n                            "
            )
          ])
        ])
      ]
    )
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
          "data-dismiss": "modal",
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
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
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
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [
          _vm._v(
            "\n                                                    Close\n                                                "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/profile/RecievedRequests.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/profile/RecievedRequests.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecievedRequests.vue?vue&type=template&id=17c5dede& */ "./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede&");
/* harmony import */ var _RecievedRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecievedRequests.vue?vue&type=script&lang=js& */ "./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecievedRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/profile/RecievedRequests.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecievedRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecievedRequests.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/RecievedRequests.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecievedRequests_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecievedRequests.vue?vue&type=template&id=17c5dede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/profile/RecievedRequests.vue?vue&type=template&id=17c5dede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecievedRequests_vue_vue_type_template_id_17c5dede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);