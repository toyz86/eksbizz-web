(window.webpackJsonp=window.webpackJsonp||[]).push([[26,8,13,14,16,18,23],{251:function(t,e,o){},252:function(t,e,o){"use strict";o.r(e);var l={components:{},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)},toggleClass:function(t,e){var o=document.querySelector("#search-popup");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},n=o(49),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header-area header-default",class:{"is-sticky":t.isSticky}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row align-items-center justify-content-between"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-navigation-area d-none"}),t._v(" "),o("div",{staticClass:"header-action-area"},[o("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[t._m(0),t._v(" "),o("span",[t._v("menu")])])])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-logo-area"},[o("n-link",{attrs:{to:"/"}},[o("h1",[t._v("eksbizz")])])],1)]),t._v(" "),o("div",{staticClass:"col-auto"},[o("div",{staticClass:"header-search"},[o("button",{staticClass:"header-search-toggle",on:{click:function(e){return t.toggleClass("addClass","search-popup-open")}}},[o("i",{staticClass:"icofont-search-1"})])])])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"toggle"},[o("i",{staticClass:"icon-top"}),t._v(" "),o("i",{staticClass:"icon-middle"}),t._v(" "),o("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(252).default})},253:function(t,e,o){"use strict";o.r(e);var l={},n=o(49),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer-area border-top-style"},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"footer-content"},[o("div",{staticClass:"widget-item"},[o("div",{staticClass:"widget-footer-nav"},[o("span",[t._v("© 2021 Eksbizz Design Studio. All Rights Reserved.")])])]),t._v(" "),o("div",{staticClass:"widget-item text-center"},[o("h5",{staticStyle:{"letter-spacing":"8px"}},[t._v("eksbizz")])]),t._v(" "),o("div",{staticClass:"widget-item"},[o("ul",{staticClass:"widget-social"},[o("li",{staticClass:"social-text"},[o("span",[t._v("follow us on social")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-facebook"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-twitter"})])]),t._v(" "),o("li",[o("a",{attrs:{href:"#"}},[o("i",{staticClass:"icofont-instagram"})])])])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(253).default})},254:function(t,e,o){"use strict";o(251)},255:function(t,e,o){"use strict";o.r(e);var l={mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),o=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var l=t.querySelectorAll(".menu-expand"),n=l.length,r=0;r<n;r++)l[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<o.length;c++)o[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},n=(o(254),o(49)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-navigation"},[o("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[o("ul",[o("li",[o("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),o("li",{staticClass:"has-children"},[o("n-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")]),t._v(" "),o("ul",{staticClass:"sub-menu"},[o("li",[o("n-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/portfolio-details"}},[t._v("Portfolio Details")])],1)])],1),t._v(" "),o("li",[o("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,o){"use strict";o.r(e);o(19),o(42),o(50);var l={components:{MobileNavigation:function(){return Promise.resolve().then(o.bind(null,255))}},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},n=o(49),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[o("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),o("div",{staticClass:"inner"},[o("div",{staticClass:"mobile-header"},[o("div",{staticClass:"logo"},[o("n-link",{attrs:{to:"/"}},[o("h1",[t._v("ekxbizz")])])],1),t._v(" "),o("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),o("div",{staticClass:"menu-content"},[o("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:o(255).default})},257:function(t,e,o){"use strict";o.r(e);var l={methods:{toggleClass:function(t,e){var o=document.querySelector("#search-popup");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},n=o(49),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[o("div",{staticClass:"sidebar-search-icon"},[o("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[o("i",{staticClass:"icofont-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sidebar-search-input"},[o("form",[o("div",{staticClass:"form-search"},[o("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),t._v(" "),o("button",[o("i",{staticClass:"icofont-search"})])])]),t._v(" "),o("p",{staticClass:"form-description"},[t._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},265:function(t,e,o){"use strict";o.r(e);var l=o(26),n=(o(19),o(33),o(66),{mounted:function(){"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry(),this.onLoad()},methods:{onLoad:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.sleep(950);case 2:t.$redrawVueMasonry();case 3:case"end":return e.stop()}}),e)})))()},sleep:function(t){return new Promise((function(e){return setTimeout(e,t)}))}},data:function(){return{blogs:[{imgSrc:"/images/blog/01.jpg",title:"The desolate beauty  of greenland",postDate:"Apr 06, 2021",view:70},{imgSrc:"/images/blog/v01.jpg",title:"Favorite images of 2019: A retrospective",postDate:"Jun 24, 2021",view:46},{imgSrc:"/images/blog/02.jpg",title:"Canon EOS full frame mirrorless camera",postDate:"Mar 12, 2021",view:25},{imgSrc:"/images/blog/v02.jpg",title:"The photographer platform for all",postDate:"Apr 06, 2021",view:70},{imgSrc:"/images/blog/03.jpg",title:"Tellus adipiscing nibh mattis",postDate:"Jun 24, 2021",view:46},{imgSrc:"/images/blog/03.jpg",title:"Put title for single blog with image format here",postDate:"Mar 12, 2021",view:25},{imgSrc:"/images/blog/v04.jpg",title:"Tellus vulputate fermentum dolor",postDate:"Apr 06, 2021",view:70},{imgSrc:"/images/blog/02.jpg",title:"Single blog with image format here",postDate:"Jun 24, 2021",view:46},{imgSrc:"/images/blog/01.jpg",title:"Fusce mattis euismod ridiculus tortor",postDate:"Mar 12, 2021",view:25}]}}}),r=o(49),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-wrapper border-top"},[t._m(0),t._v(" "),o("div",{staticClass:"blog-area blog-masonry-area"},[o("div",{staticClass:"container"},[o("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"row post-items-style1"},t._l(t.blogs,(function(e,l){return o("div",{key:l,staticClass:"col-lg-4 col-sm-6 item"},[o("div",{staticClass:"post-item"},[o("div",{staticClass:"thumb"},[o("n-link",{attrs:{to:"/blog-details"}},[o("img",{attrs:{src:e.imgSrc,alt:e.title}})])],1),t._v(" "),o("div",{staticClass:"content"},[o("ul",{staticClass:"meta"},[o("li",[o("i",{staticClass:"icofont-calendar"}),t._v(t._s(e.postDate))]),t._v(" "),o("li",[o("i",{staticClass:"icofont-eye"}),t._v(t._s(e.view)+" Views")])]),t._v(" "),o("h4",{staticClass:"title"},[o("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(e.title))])],1),t._v(" "),o("n-link",{staticClass:"btn-link",attrs:{to:"/blog-details"}},[t._v("Read More")])],1)])])})),0)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-title-area"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-lg-12 text-center",attrs:{"data-aos":"fade-up"}},[o("div",{staticClass:"page-title-content"},[o("h4",{staticClass:"page-title"},[t._v("Our Blog")]),t._v(" "),o("h2",{staticClass:"title mb-0"},[t._v("Write & Share")])])])])])])}],!1,null,null,null);e.default=component.exports},273:function(t,e,o){"use strict";o.r(e);o(19),o(42),o(50);var l={components:{Header:function(){return Promise.resolve().then(o.bind(null,252))},OffCanvasMobileMenu:function(){return Promise.resolve().then(o.bind(null,256))},SearchPopup:function(){return Promise.resolve().then(o.bind(null,257))},BlogGridWrapper:function(){return Promise.resolve().then(o.bind(null,265))},Footer:function(){return Promise.resolve().then(o.bind(null,253))}},head:function(){return{title:"Blog"}}},n=o(49),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about-page-wrapper"},[o("Header"),t._v(" "),o("SearchPopup"),t._v(" "),o("OffCanvasMobileMenu"),t._v(" "),o("BlogGridWrapper"),t._v(" "),o("Footer"),t._v(" "),o("client-only",[o("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[o("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),o("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:o(252).default,SearchPopup:o(257).default,OffCanvasMobileMenu:o(256).default,BlogGridWrapper:o(265).default,Footer:o(253).default})}}]);