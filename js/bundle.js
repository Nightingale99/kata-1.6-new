!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10);var n=document.getElementById("menu"),s=document.querySelector(".blur"),a=document.getElementById("close"),c=document.querySelector(".service-aside");n.addEventListener("click",(function(){c.classList.add("service-aside--active"),s.classList.add("blur--active")})),a.addEventListener("click",(function(){c.classList.add("closing"),setTimeout((function(){c.classList.toggle("service-aside--active"),c.classList.remove("closing")}),300),s.classList.remove("blur--active")}));var o=document.querySelector(".service-info__read-next");o.addEventListener("click",(function(){document.querySelector(".service-info__text").classList.toggle("service-info__text--active"),document.querySelector(".service-info__read-next").classList.toggle("service-info__read-next--active"),o.textContent=o.classList.contains("service-info__read-next--active")?"Скрыть":"Читать далее"}));var r=new Swiper(".swiper-brands",{direction:"horizontal",loop:!0,pagination:{el:".swiper-brands__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35}),l=new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,pagination:{el:".swiper-repair__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35}),d=new Swiper(".swiper-price",{direction:"horizontal",loop:!0,pagination:{el:".swiper-price__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35});window.innerWidth>767&&(r.destroy(),r=0,l.destroy(),l=0,d.destroy(),d=0),window.addEventListener("resize",(function(e){e.target.innerWidth>767&&r?(r.destroy(),r=0,l.destroy(),l=0,d.destroy(),d=0):e.target.innerWidth<767&&!r&&(r=new Swiper(".swiper-brands",{direction:"horizontal",loop:!0,pagination:{el:".swiper-brands__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35}),l=new Swiper(".swiper-repair",{direction:"horizontal",loop:!0,pagination:{el:".swiper-repair__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35}),d=new Swiper(".swiper-price",{direction:"horizontal",loop:!0,pagination:{el:".swiper-price__swiper-pagination"},autoplay:{delay:3e3,disableOnInteraction:!0},slidesPerView:"auto",spaceBetween:35}))}),!0);var u=document.querySelector(".brands__show-all");u.addEventListener("click",(function(){var e=document.querySelectorAll(".hidden, .grid-hidden");e[0].classList.contains("visible")?(e.forEach((function(e){e.classList.remove("visible")})),u.textContent="Показать все",u.classList.remove("brands__show-all--active")):(e.forEach((function(e){e.className+=" visible"})),u.textContent="Скрыть",u.className+=" brands__show-all--active")}));var v=document.querySelector(".repair__show-all");v.addEventListener("click",(function(){var e=document.querySelectorAll(".repair-hidden");e[0].classList.contains("visible")?(e.forEach((function(e){e.classList.remove("visible")})),v.textContent="Показать все",v.classList.remove("repair__show-all--active")):(e.forEach((function(e){e.className+=" visible"})),v.textContent="Скрыть",v.className+=" repair__show-all--active")})),document.querySelectorAll("#send, #aside-send").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".send").classList.toggle("send--active"),s.classList.add("blur--active"),s.classList.add("blur--dominate")}))}));var p=document.querySelector("#send-close"),f=document.querySelector(".send");p.addEventListener("click",(function(){f.classList.add("send-closing"),setTimeout((function(){f.classList.remove("send--active"),f.classList.remove("send-closing")}),300),s.classList.remove("blur--active"),s.classList.remove("blur--dominate")})),document.querySelectorAll("#call, #aside-call").forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".call").classList.toggle("call--active"),s.classList.add("blur--active"),s.classList.add("blur--dominate")}))}));var m=document.querySelector("#call-close"),L=document.querySelector(".call");m.addEventListener("click",(function(){L.classList.add("call-closing"),setTimeout((function(){L.classList.remove("call--active"),L.classList.remove("call-closing")}),300),s.classList.remove("blur--active"),s.classList.remove("blur--dominate")})),s.addEventListener("click",(function(){s.classList.contains("blur--active")&&(c.classList.contains("service-aside--active")&&c.classList.add("closing"),f.classList.add("send-closing"),L.classList.add("call-closing"),setTimeout((function(){c.classList.remove("service-aside--active"),c.classList.remove("closing"),f.classList.remove("send--active"),f.classList.remove("send-closing"),L.classList.remove("call--active"),L.classList.remove("call-closing")}),300),s.classList.remove("blur--active"),s.classList.remove("blur--dominate"))}))},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){}]);
//# sourceMappingURL=bundle.js.map