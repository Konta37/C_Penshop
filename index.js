var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },  
      mousewheel: true,
});
var swiper3 = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
