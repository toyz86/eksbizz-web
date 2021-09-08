exports.ids = [21];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioFilterWrapper.vue?vue&type=template&id=4fc7598c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio-area portfolio-default-area"},[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_c('div',{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list box"},_vm._l((_vm.datas),function(item,index){return _vm._ssrNode("<div class=\"item mix col cat--1 mb-30\">","</div>",[_vm._ssrNode("<div class=\"single-portfolio\">","</div>",[_vm._ssrNode("<div class=\"thumbnail\"><img"+(_vm._ssrAttr("src",item.src))+" alt=\"portfolio\"></div> "),_vm._ssrNode("<div class=\"content\">","</div>",[_vm._ssrNode("<h3 class=\"title\">","</h3>",[_c('n-link',{attrs:{"to":"/portfolio-details"}},[_vm._v(_vm._s(item.title))])],1),_vm._ssrNode(" <p class=\"desc\">"+_vm._ssrEscape(_vm._s(item.description))+"</p>")],2)],2)])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PortfolioFilterWrapper.vue?vue&type=template&id=4fc7598c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PortfolioFilterWrapper.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PortfolioFilterWrappervue_type_script_lang_js_ = ({
  data() {
    return {
      datas: [{
        title: "falken on the pulse",
        src: "/images/portfolio/falken-cover.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "falken on the pulse",
        src: "/images/portfolio/dunlop2021.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "falken on the pulse",
        src: "/images/portfolio/mount.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "Dunlop Leaflet",
        src: "images/portfolio/dunlop-leaflet.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "The Abide Farm",
        src: "images/portfolio/rusa.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "TPPI",
        src: "images/portfolio/tppi.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "Falken",
        src: "images/portfolio/falken2020.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "PJB",
        src: "images/portfolio/pjb.jpg",
        description: "Ini deskripsi Project"
      }, {
        title: "KMI Wire",
        src: "images/portfolio/kmi.jpg",
        description: "Ini deskripsi Project"
      }]
    };
  },

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

  }
});
// CONCATENATED MODULE: ./components/PortfolioFilterWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PortfolioFilterWrappervue_type_script_lang_js_ = (PortfolioFilterWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PortfolioFilterWrapper.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PortfolioFilterWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e2c41064"
  
)

/* harmony default export */ var PortfolioFilterWrapper = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=portfolio-filter-wrapper.js.map