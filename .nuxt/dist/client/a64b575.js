(window.webpackJsonp=window.webpackJsonp||[]).push([[29,6,13,14,15,16,18,22,23],{251:function(t,e,o){},252:function(t,e,o){"use strict";o.r(e);var n={components:{},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)},toggleClass:function(t,e){var o=document.querySelector("#search-popup");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header-area header-default",class:{"is-sticky":t.isSticky}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row align-items-center justify-content-between"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-navigation-area d-none"}),t._v(" "),o("div",{staticClass:"header-action-area"},[o("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[t._m(0),t._v(" "),o("span",[t._v("menu")])])])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-logo-area"},[o("n-link",{attrs:{to:"/"}},[o("h1",[t._v("eksbizz")])])],1)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-search"},[o("button",{staticClass:"header-search-toggle",on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[o("i",{staticClass:"icofont-search-1"})])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"toggle"},[o("i",{staticClass:"icon-top"}),t._v(" "),o("i",{staticClass:"icon-middle"}),t._v(" "),o("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(252).default})},253:function(t,e,o){"use strict";o.r(e);var n={},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer-area border-top-style"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"footer-content"},[o("div",{staticClass:"widget-item"},[o("div",{staticClass:"widget-footer-nav"},[o("span",[t._v("© 2021 Eksbizz Design Studio. All Rights Reserved.")])])]),t._v(" "),o("div",{staticClass:"widget-item text-center"},[o("h5",{staticStyle:{"letter-spacing":"8px"}},[t._v("eksbizz")])]),t._v(" "),o("div",{staticClass:"widget-item"},[o("ul",{staticClass:"widget-social"},[o("li",{staticClass:"social-text"},[o("span",[t._v("follow us on social")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-facebook"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-twitter"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-instagram"})])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(253).default})},254:function(t,e,o){"use strict";o(251)},255:function(t,e,o){"use strict";o.r(e);var n={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),o=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),r=n.length,l=0;l<r;l++)n[l].addEventListener("click",(function(t){d(t)}));for(var c=0;c<o.length;c++)o[c].addEventListener("click",(function(){v()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},v=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},r=(o(254),o(49)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-navigation"},[o("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[o("ul",[o("li",[o("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",{staticClass:"has-children"},[o("n-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")]),t._v(" "),o("ul",{staticClass:"sub-menu"},[o("li",[o("n-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/portfolio-details"}},[t._v("Portfolio Details")])],1)])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,o){"use strict";o.r(e);o(19),o(42),o(50);var n={components:{MobileNavigation:function(){return Promise.resolve().then(o.bind(null,255))}},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[o("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),o("div",{staticClass:"inner"},[o("div",{staticClass:"mobile-header"},[o("div",{staticClass:"logo"},[o("n-link",{attrs:{to:"/"}},[o("h1",[t._v("ekxbizz")])])],1),t._v(" "),o("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),o("div",{staticClass:"menu-content"},[o("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:o(255).default})},257:function(t,e,o){"use strict";o.r(e);var n={methods:{toggleClass:function(t,e){var o=document.querySelector("#search-popup");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[o("div",{staticClass:"sidebar-search-icon"},[o("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[o("i",{staticClass:"icofont-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar-search-input"},[o("form",[o("div",{staticClass:"form-search"},[o("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),o("button",[o("i",{staticClass:"icofont-search"})])])]),t._v(" "),o("p",{staticClass:"form-description"},[t._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},261:function(t,e,o){"use strict";o.r(e);var n=o(26),r=(o(19),o(33),o(66),{data:function(){return{datas:[{title:"falken on the pulse",src:"/images/portfolio/falken-cover.jpg",description:"Ini deskripsi Project"},{title:"falken on the pulse",src:"/images/portfolio/dunlop2021.jpg",description:"Ini deskripsi Project"},{title:"falken on the pulse",src:"/images/portfolio/mount.jpg",description:"Ini deskripsi Project"},{title:"Dunlop Leaflet",src:"images/portfolio/dunlop-leaflet.jpg",description:"Ini deskripsi Project"},{title:"The Abide Farm",src:"images/portfolio/rusa.jpg",description:"Ini deskripsi Project"},{title:"TPPI",src:"images/portfolio/tppi.jpg",description:"Ini deskripsi Project"},{title:"Falken",src:"images/portfolio/falken2020.jpg",description:"Ini deskripsi Project"},{title:"PJB",src:"images/portfolio/pjb.jpg",description:"Ini deskripsi Project"},{title:"KMI Wire",src:"images/portfolio/kmi.jpg",description:"Ini deskripsi Project"}]}},mounted:function(){"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry(),this.onLoad()},methods:{onLoad:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sleep(950);case 2:t.$redrawVueMasonry();case 3:case"end":return e.stop()}}),e)})))()},sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))}}}),l=o(49),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-area portfolio-default-area"},[o("div",{staticClass:"container-fluid"},[o("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list box"},t._l(t.datas,(function(e,n){return o("div",{key:n,staticClass:"item mix col cat--1 mb-30"},[o("div",{staticClass:"single-portfolio"},[o("div",{staticClass:"thumbnail"},[o("img",{attrs:{src:e.src,alt:"portfolio"}})]),t._v(" "),o("div",{staticClass:"content"},[o("h3",{staticClass:"title"},[o("n-link",{attrs:{to:"/portfolio-details"}},[t._v(t._s(e.title))])],1),t._v(" "),o("p",{staticClass:"desc"},[t._v(t._s(e.description))])])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{introSlider:{loop:!0,speed:750,spaceBetween:30,slidesPerView:1,pagination:{el:".home1-slider-pagination",clickable:!0}},heroData:[{imgSrc:"/images/hero-slider/Mockup_Leaflet_1.jpg",subTitle:"Inspire 2021",title:"Vouge italia deember campaign",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",btnUrl:"#"},{imgSrc:"/images/hero-slider/hero2.jpg",subTitle:"Inspire 2022",title:"Vouge italia deember campaign",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",btnUrl:"#"}]}}},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"intro-slider-wrap"},[o("div",{staticClass:"intro-slider position-relative"},[o("swiper",{attrs:{options:t.introSlider}},t._l(t.heroData,(function(t,e){return o("div",{key:e,staticClass:"swiper-slide"},[o("div",{staticClass:"intro-section overlay",style:{backgroundImage:"url("+t.imgSrc+")"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row row-cols-lg-1 row-cols-1"},[o("div",{staticClass:"col align-self-center"})])])])])})),0),t._v(" "),o("div",{staticClass:"swiper-pagination home1-slider-pagination"})],1)])}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,o){"use strict";o.r(e);var n={},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-slider-area slider-photographer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12 col-lg-11 col-xl-10 m-auto"},[o("div",{staticClass:"slider-content-area",attrs:{"data-aos":"fade-up"}},[o("h2",[t._v("Eksbizz Design Studio based in Jakarta,"),o("br"),t._v(" Indonesia. We specialises in Branding for print and web design "),o("br")])])])])])])}],!1,null,"3986b482",null);e.default=component.exports},278:function(t,e,o){"use strict";o.r(e);o(19),o(42),o(50);var n={components:{Header:function(){return Promise.resolve().then(o.bind(null,252))},OffCanvasMobileMenu:function(){return Promise.resolve().then(o.bind(null,256))},SearchPopup:function(){return Promise.resolve().then(o.bind(null,257))},Hero:function(){return Promise.resolve().then(o.bind(null,269))},AboutOne:function(){return Promise.resolve().then(o.bind(null,270))},PortfolioFilterWrapper:function(){return Promise.resolve().then(o.bind(null,261))},Footer:function(){return Promise.resolve().then(o.bind(null,253))}},head:function(){return{title:"Home"}}},r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-container"},[o("Header"),t._v(" "),o("OffCanvasMobileMenu"),t._v(" "),o("SearchPopup"),t._v(" "),o("Hero"),t._v(" "),o("AboutOne"),t._v(" "),o("PortfolioFilterWrapper"),t._v(" "),o("Footer"),t._v(" "),o("client-only",[o("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[o("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),o("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(252).default,OffCanvasMobileMenu:o(256).default,SearchPopup:o(257).default,Hero:o(269).default,AboutOne:o(270).default,PortfolioFilterWrapper:o(261).default,Footer:o(253).default})}}]);