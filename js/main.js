$(function () {

  // $(".form__btn--about").on("click", function (e) {
  //   e.preventDefault();
  //   var leng = $("#form-phone").val().length;

  //   if (leng !== 0) {
      // $("#form-phone").removeClass("error");
      $("#form-about").on("sabmit", function () {
        var th = $(this);
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: th.serialize()
        }).done(function () {
          $(".form__inner").fadeOut();
          $(".form__inner2").fadeIn();
          setTimeout(function () {
          }, 1000);
        });
        return false;
      });
    // }
    // else {
    //     $("#form-phone").addClass("error");
    //     $("#form-error").text("Введите телефон");
    //   }
    // });

  $(".form__btn").on("click", function (e) {
    var leng = $("#phone").val().length;
    if (leng !== 0) {
      $("#phone").removeClass("error");
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
        success: function () {
          $(".form__inner").fadeOut();
          $(".form__inner2").fadeIn();
        },
      });
    }
    else {
      $("#phone").addClass("error");
      $("#error").text("Введите телефон");
    }
    e.preventDefault();
  });

  $(".burger, .nav a").on("click", function () {
    if ($(window).width() < 767) {
      $(".burger__line").toggleClass("burger__line--active")
      $(".nav__list").toggleClass("nav__list--active")
      // $("#body").toggleClass("_lock")
    } else {
      $(".burger__line").toggleClass("burger__line--active")
      $(".nav__list").toggleClass("nav__list--active")
    }
  });

  $('.spoiler-body').hide(300);
  $(document).on('click', '.spoiler-head', function (e) {
    e.preventDefault()
    $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
  });

  $('.news__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<img src="../images/icons/angle-next.svg" alt="next">',
    prevArrow: '<img src="../images/icons/angle-prev.svg" alt="prev">',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $(".nav__link").on("click", function () {
    $(".nav__link").removeClass("nav__link--active")
    $(this).addClass("nav__link--active");
  });


  $('a[href^="#"]').on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 40
    }, 1500);
    e.preventDefault();
  });

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  $(window).on("scroll", function myFunction() {

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  });


  $('.js-button-campaign').on("click", function () {

    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    $("#body").addClass("_lock")
  });

  $('.js-close-campaign').on("click", function () {
    $('.js-overlay-campaign').fadeOut();
    $("#body").removeClass("_lock")
  });

  $(document).on("mouseup", function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-campaign').fadeOut();
      $("#body").removeClass("_lock")
    }
  });

  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  $.mask.definitions['9'] = false;
  $.mask.definitions['_'] = "[0-9]";
  $("#phone, #form-phone").on("click", function () {
    $(this).setCursorPosition(3);
  }).mask("+38(___)-___-__-__");
});