exports.ids = [14];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=e56dd630&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"intro-slider-wrap"},[_vm._ssrNode("<div class=\"intro-slider position-relative\">","</div>",[_c('swiper',{attrs:{"options":_vm.introSlider}},_vm._l((_vm.heroData),function(hero,index){return _c('div',{key:index,staticClass:"swiper-slide"},[_c('div',{staticClass:"intro-section overlay",style:({ backgroundImage: ("url(" + (hero.imgSrc) + ")") })},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"row row-cols-lg-1 row-cols-1"},[_c('div',{staticClass:"col align-self-center"})])])])])}),0),_vm._ssrNode(" <div class=\"swiper-pagination home1-slider-pagination\"></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=e56dd630&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Herovue_type_script_lang_js_ = ({
  data() {
    return {
      introSlider: {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        slidesPerView: 1,
        pagination: {
          el: '.home1-slider-pagination',
          clickable: true
        }
      },
      heroData: [{
        imgSrc: "/images/hero-slider/Mockup_Leaflet_1.jpg",
        subTitle: "Inspire 2021",
        title: "Vouge italia deember campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        btnUrl: "#"
      }, {
        imgSrc: "/images/hero-slider/hero2.jpg",
        subTitle: "Inspire 2022",
        title: "Vouge italia deember campaign",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        btnUrl: "#"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Hero.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4db55516"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero.js.map