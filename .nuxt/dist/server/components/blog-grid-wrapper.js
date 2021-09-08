exports.ids = [7];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridWrapper.vue?vue&type=template&id=d9ffaa7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"blog-wrapper border-top"},[_vm._ssrNode("<div class=\"page-title-area\"><div class=\"container\"><div class=\"row\"><div data-aos=\"fade-up\" class=\"col-lg-12 text-center\"><div class=\"page-title-content\"><h4 class=\"page-title\">Our Blog</h4> <h2 class=\"title mb-0\">Write &amp; Share</h2></div></div></div></div></div> "),_vm._ssrNode("<div class=\"blog-area blog-masonry-area\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('div',{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"row post-items-style1"},_vm._l((_vm.blogs),function(blog,index){return _vm._ssrNode("<div class=\"col-lg-4 col-sm-6 item\">","</div>",[_vm._ssrNode("<div class=\"post-item\">","</div>",[_vm._ssrNode("<div class=\"thumb\">","</div>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_c('img',{attrs:{"src":blog.imgSrc,"alt":blog.title}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<ul class=\"meta\"><li><i class=\"icofont-calendar\"></i>"+_vm._ssrEscape(_vm._s(blog.postDate))+"</li> <li><i class=\"icofont-eye\"></i>"+_vm._ssrEscape(_vm._s(blog.view)+" Views")+"</li></ul> "),_vm._ssrNode("<h4 class=\"title\">","</h4>",[_c('n-link',{attrs:{"to":"/blog-details"}},[_vm._v(_vm._s(blog.title))])],1),_vm._ssrNode(" "),_c('n-link',{staticClass:"btn-link",attrs:{"to":"/blog-details"}},[_vm._v("Read More")])],2)],2)])}),0)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogGridWrapper.vue?vue&type=template&id=d9ffaa7c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogGridWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogGridWrappervue_type_script_lang_js_ = ({
  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry();
    }

    this.onLoad();
  },

  methods: {
    async onLoad() {
      await this.sleep(950);
      this.$redrawVueMasonry();
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

  },

  data() {
    return {
      blogs: [{
        imgSrc: "/images/blog/01.jpg",
        title: "The desolate beauty  of greenland",
        postDate: "Apr 06, 2021",
        view: 70
      }, {
        imgSrc: "/images/blog/v01.jpg",
        title: "Favorite images of 2019: A retrospective",
        postDate: "Jun 24, 2021",
        view: 46
      }, {
        imgSrc: "/images/blog/02.jpg",
        title: "Canon EOS full frame mirrorless camera",
        postDate: "Mar 12, 2021",
        view: 25
      }, {
        imgSrc: "/images/blog/v02.jpg",
        title: "The photographer platform for all",
        postDate: "Apr 06, 2021",
        view: 70
      }, {
        imgSrc: "/images/blog/03.jpg",
        title: "Tellus adipiscing nibh mattis",
        postDate: "Jun 24, 2021",
        view: 46
      }, {
        imgSrc: "/images/blog/03.jpg",
        title: "Put title for single blog with image format here",
        postDate: "Mar 12, 2021",
        view: 25
      }, {
        imgSrc: "/images/blog/v04.jpg",
        title: "Tellus vulputate fermentum dolor",
        postDate: "Apr 06, 2021",
        view: 70
      }, {
        imgSrc: "/images/blog/02.jpg",
        title: "Single blog with image format here",
        postDate: "Jun 24, 2021",
        view: 46
      }, {
        imgSrc: "/images/blog/01.jpg",
        title: "Fusce mattis euismod ridiculus tortor",
        postDate: "Mar 12, 2021",
        view: 25
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/BlogGridWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogGridWrappervue_type_script_lang_js_ = (BlogGridWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/BlogGridWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogGridWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "60b61ec0"
  
)

/* harmony default export */ var BlogGridWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-grid-wrapper.js.map