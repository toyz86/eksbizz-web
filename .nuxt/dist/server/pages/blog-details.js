exports.ids = [26,6,8,9,12,13,15,17,22];
exports.modules = {

/***/ 22:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=8e998014&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-area header-default",class:{'is-sticky': _vm.isSticky}},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row align-items-center justify-content-between\">","</div>",[_vm._ssrNode("<div class=\"col-auto\"><div class=\"header-navigation-area d-none\"></div> <div class=\"header-action-area\"><div class=\"mobile-menu-toggle\"><button class=\"toggle\"><i class=\"icon-top\"></i> <i class=\"icon-middle\"></i> <i class=\"icon-bottom\"></i></button> <span>menu</span></div></div></div> "),_vm._ssrNode("<div class=\"col-auto\">","</div>",[_vm._ssrNode("<div class=\"header-logo-area\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('h1',[_vm._v("eksbizz")])])],1)]),_vm._ssrNode(" <div class=\"col-auto\"><div class=\"header-search\"><button class=\"header-search-toggle\"><i class=\"icofont-search-1\"></i></button></div></div>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=8e998014&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {// Navigation: () => import("@/components/Navigation"),
  },

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;

      if (scrollPos >= 200) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },

  methods: {
    // offcanvas mobile-menu
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },

    //offcanvas search 
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56cf79c8"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default})


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=401cb746&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-area border-top-style"},[_vm._ssrNode("<div class=\"container-fluid\"><div class=\"row\"><div class=\"col-sm-12\"><div class=\"footer-content\"><div class=\"widget-item\"><div class=\"widget-footer-nav\"><span>© 2021 Eksbizz Design Studio. All Rights Reserved.</span></div></div> <div class=\"widget-item text-center\"><h5 style=\"letter-spacing: 8px\">eksbizz</h5></div> <div class=\"widget-item\"><ul class=\"widget-social\"><li class=\"social-text\"><span>follow us on social</span></li> <li><a href=\"#\"><i class=\"icofont-facebook\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-twitter\"></i></a></li> <li><a href=\"#\"><i class=\"icofont-instagram\"></i></a></li></ul></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=401cb746&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "359d15d6"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileNavigation_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=template&id=999f427c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mobile-navigation"},[_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">","</nav>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"has-children\">","</li>",[_c('n-link',{attrs:{"to":"/portfolio"}},[_vm._v("Portfolio")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"sub-menu\">","</ul>",[_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio"}},[_vm._v("Portfolio")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/portfolio-details"}},[_vm._v("Portfolio Details")])],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=template&id=999f427c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileNavigationvue_type_script_lang_js_ = ({
  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };

    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu.classList.remove('active');
    };
  }

});
// CONCATENATED MODULE: ./components/MobileNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileNavigationvue_type_script_lang_js_ = (MobileNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MobileNavigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5282cf51"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=template&id=7a49fa7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{"id":"offcanvas-menu"}},[_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "),_vm._ssrNode("<div class=\"inner\">","</div>",[_vm._ssrNode("<div class=\"mobile-header\">","</div>",[_vm._ssrNode("<div class=\"logo\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_c('h1',[_vm._v("ekxbizz")])])],1),_vm._ssrNode(" <button class=\"mobile-close-btn\"></button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu-content\">","</div>",[_c('MobileNavigation')],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=template&id=7a49fa7e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js_ = ({
  components: {
    MobileNavigation: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 26))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_OffCanvasMobileMenuvue_type_script_lang_js_ = (OffCanvasMobileMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OffCanvasMobileMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e432e706"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MobileNavigation: __webpack_require__(26).default})


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=template&id=abb4d852&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-search-active",attrs:{"id":"search-popup"}},[_vm._ssrNode("<div class=\"sidebar-search-icon\"><button class=\"search-close\"><i class=\"icofont-close\"></i></button></div> <div class=\"sidebar-search-input\"><form><div class=\"form-search\"><input id=\"search\" value placeholder type=\"search\" class=\"input-text\"> <button><i class=\"icofont-search\"></i></button></div></form> <p class=\"form-description\">Hit enter to search</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=template&id=abb4d852&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SearchPopup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SearchPopupvue_type_script_lang_js_ = ({
  methods: {
    // offcanvas search close
    toggleClass(addRemoveClass, className) {
      const el = document.querySelector('#search-popup');

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/SearchPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SearchPopupvue_type_script_lang_js_ = (SearchPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SearchPopup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SearchPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e8fe18e"
  
)

/* harmony default export */ var SearchPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=template&id=2c21e774&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-content"},[_vm._ssrNode("<div class=\"single-comment\"><div class=\"author-info\"><div class=\"thumb\"><img src=\"/images/blog/author-01.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><ul><li class=\"name\">Daniel Vandaft <span>-</span></li> <li class=\"meta-date\">Jul 17,2015 at 15 hours ago</li></ul> <p>Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa adipiscing interdum.</p> <button class=\"btn-reply\">Reply</button></div></div></div> <div class=\"single-comment\"><div class=\"author-info\"><div class=\"thumb\"><img src=\"/images/blog/author-02.jpg\" alt=\"Image\"></div> <div class=\"author-details\"><ul><li class=\"name\">Danny Rivera <span>-</span></li> <li class=\"meta-date\">Jul 17,2015 at 15 hours ago</li></ul> <p>Comment example here. Nulla risus lacus, vehicula id mi vitae, auctor accumsan nulla. Sed a mi quam. In euismod urna ac massa adipiscing interdum.</p> <button class=\"btn-reply\">Reply</button></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=template&id=2c21e774&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentListvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/CommentList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentListvue_type_script_lang_js_ = (CommentListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CommentList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3932f272"
  
)

/* harmony default export */ var CommentList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=template&id=cf6ed1ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-form-wrap"},[_vm._ssrNode("<form><div class=\"comment-form-content\"><div class=\"row\"><div class=\"col-md-4\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Name\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-4\"><div class=\"form-group\"><input type=\"email\" placeholder=\"youremail@domain.com\" required=\"required\" class=\"form-control\"></div></div> <div class=\"col-md-4\"><div class=\"form-group\"><input type=\"text\" placeholder=\"Subject (optional)\" class=\"form-control\"></div></div> <div class=\"col-md-12\"><div class=\"form-group\"><textarea name=\"comment\" id=\"comment\" cols=\"45\" rows=\"5\" placeholder=\"Enter message here\" class=\"form-control\"></textarea></div></div></div> <div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group mb-0\"><button type=\"submit\" class=\"btn-submit\">Send Message</button></div></div></div></div></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=template&id=cf6ed1ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentFormvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/CommentForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentFormvue_type_script_lang_js_ = (CommentFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CommentForm.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0539cb98"
  
)

/* harmony default export */ var CommentForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsContent.vue?vue&type=template&id=74576bf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bgcolor-f6"},[_vm._ssrNode("<div class=\"blog-details-area\">","</div>",[_vm._ssrNode("<div class=\"post-details-content\">","</div>",[_vm._ssrNode("<div class=\"swiper-container post-gallery\">","</div>",[_c('swiper',{attrs:{"options":_vm.blogGalleryActive}},[_c('div',{staticClass:"swiper-slide"},[_c('img',{attrs:{"src":"/images/blog/post-detail-01.jpg","alt":"image"}})]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('img',{attrs:{"src":"/images/blog/post-detail-02.jpg","alt":"image"}})]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('img',{attrs:{"src":"/images/blog/post-detail-03.jpg","alt":"image"}})]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('img',{attrs:{"src":"/images/blog/post-detail-04.jpg","alt":"image"}})]),_vm._v(" "),_c('div',{staticClass:"swiper-slide"},[_c('img',{attrs:{"src":"/images/blog/post-detail-05.jpg","alt":"image"}})])]),_vm._ssrNode(" <div class=\"swiper-pagination\"></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"post-details-body\">","</div>",[_vm._ssrNode("<div class=\"bread-crumbs\">","</div>",[_c('n-link',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._ssrNode(" <span>&gt;</span> "),_c('n-link',{attrs:{"to":"/blog"}},[_vm._v("Blog")]),_vm._ssrNode(" <span>&gt;</span> <span class=\"active\">Title of single post with gallery here</span>")],2),_vm._ssrNode(" <div class=\"content\"><h2 class=\"title\">Title of single post with gallery here</h2> <div class=\"meta\"><a href=\"#\" class=\"post-date\"><i class=\"icofont-calendar\"></i> September, 26th, 2016</a> <span>|</span> <a href=\"#\" class=\"author\"><i class=\"icon icofont-user-alt-3\"></i> Admin</a> <span>|</span> <a href=\"#\" class=\"category\"><i class=\"icofont-folder\"></i> Business</a> <span>|</span> <a href=\"#\" class=\"comments-count\"><i class=\"icofont-comment\"></i> 02 Comments</a></div> <p class=\"text-block\">Morbi et accumsan est, non convallis metus. Etiam faucibus, leo et scelerisque facilisis, magna erat Tulo dictum nibh, vel congue tortor massa vitae magna.</p> <p>Quisque sagittis nisl sit amet nulla rutrum ultrices. Vivamus ut sagittis ligula, sit amet fermentum dolor. Mauris to accumsan neque ut odio tempor semper ac vitae ligula. Morbi viverra tincidunt nisl, eget placerat erat. Morbi ornare mollis quam, sit amet vestibulum erat pharetra vitae:</p> <ul><li><i class=\"icofont-disc\"></i> Consectetur adipiscing elit vtae elit libero</li> <li><i class=\"icofont-disc\"></i> Nullam id dolor id eget lacinia odio posuere erat a ante</li> <li><i class=\"icofont-disc\"></i> Integer posuere erat dapibus posuere velit</li></ul> <p class=\"mb-30\">Nulla sed mi leo, sit amet molestie nulla. Phasellus lobortis blandit ipsum, at adipiscing eros porta quis. Dinter Phasellus in nisi ipsum, quis dapibus magna. <span class=\"text-theme-color\">@Phasellus odio dolor</span>, pretium sit amet aliquam a, gravida eget un dui. Pellentesque eu dolu ipsum et quam faucibus scelerisque vitae ut ligula.</p> <p>Morbi viverra tincidunt nisl, eget placerat erat. Morbi ornare mollis quam, sit amet vestibulum e:</p></div> <div class=\"widget-tags\"><span>Tags:</span> <a href=\"#\">Amazing</a>, <a href=\"#\">Envato</a>, <a href=\"#\">Themeforest</a>, <a href=\"#\">Psd</a>, <a href=\"#\">Logan</a></div> <div class=\"social-icons\"><span>Share:</span> <a href=\"#\"><i class=\"icofont-facebook\"></i></a> <a href=\"#\"><i class=\"icofont-twitter\"></i></a> <a href=\"#\"><i class=\"icofont-pinterest\"></i></a> <a href=\"#\"><i class=\"icofont-instagram\"></i></a> <a href=\"#\"><i class=\"icofont-rss\"></i></a></div> "),_vm._ssrNode("<div class=\"comment-area\">","</div>",[_vm._ssrNode("<h4 class=\"title\">02 Comments</h4> "),_c('CommentList'),_vm._ssrNode(" <h4 class=\"title\">Leave a comment</h4> "),_c('CommentForm')],2)],2)],2),_vm._ssrNode(" <div class=\"blog-navigation\"><div class=\"prev\"><a href=\"#\">Newer post <i class=\"icofont-arrow-right\"></i></a></div> <div class=\"next\"><a href=\"#\">Oldest post <i class=\"icofont-arrow-right\"></i></a></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogDetailsContent.vue?vue&type=template&id=74576bf4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogDetailsContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogDetailsContentvue_type_script_lang_js_ = ({
  components: {
    CommentList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 29)),
    CommentForm: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 30))
  },

  data() {
    return {
      blogGalleryActive: {
        slidesPerView: 1,
        speed: 1000,
        loop: true,
        autoplay: true,
        autoplay: {
          delay: 2500
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      }
    };
  }

});
// CONCATENATED MODULE: ./components/BlogDetailsContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogDetailsContentvue_type_script_lang_js_ = (BlogDetailsContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogDetailsContent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogDetailsContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9d870e58"
  
)

/* harmony default export */ var BlogDetailsContent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommentList: __webpack_require__(29).default,CommentForm: __webpack_require__(30).default})


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details.vue?vue&type=template&id=0b899e82&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-details-wrapper"},[_c('Header'),_vm._ssrNode(" "),_c('SearchPopup'),_vm._ssrNode(" "),_c('OffCanvasMobileMenu'),_vm._ssrNode(" "),_c('BlogDetailsContent'),_vm._ssrNode(" "),_c('Footer'),_vm._ssrNode(" "),_c('client-only',[_c('back-to-top',{staticClass:"scroll-top",attrs:{"bottom":"30px"}},[_c('i',{staticClass:"arrow-top icofont-rounded-up"}),_vm._v(" "),_c('i',{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog-details.vue?vue&type=template&id=0b899e82&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog-details.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blog_detailsvue_type_script_lang_js_ = ({
  components: {
    Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 23)),
    OffCanvasMobileMenu: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 27)),
    SearchPopup: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 28)),
    BlogDetailsContent: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 24))
  },

  head() {
    return {
      title: 'Blog Details'
    };
  }

});
// CONCATENATED MODULE: ./pages/blog-details.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blog_detailsvue_type_script_lang_js_ = (blog_detailsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog-details.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blog_detailsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c1c3ff0"
  
)

/* harmony default export */ var blog_details = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(23).default,SearchPopup: __webpack_require__(28).default,OffCanvasMobileMenu: __webpack_require__(27).default,BlogDetailsContent: __webpack_require__(37).default,Footer: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=blog-details.js.map