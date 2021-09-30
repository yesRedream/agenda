$(".header-mobile__box--menu").click(function() {
  $(".header-mobile__menu-ico").toggleClass("header-mobile__menu-ico--active");
  $(".header-mobile__close-ico").toggleClass("header-mobile__close-ico--active");
  $(".header-mobile-menu__content").toggleClass("header-mobile-menu__content--active");
  $(".header-mobile-menu__bg").toggleClass("header-mobile-menu__bg--active");
  $(".header-mobile-menu").toggleClass("header-mobile-menu--active");
});