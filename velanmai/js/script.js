document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1200:{
			slidesPerView: 4,
		}
    },
  });

  var radioButtons = document.querySelectorAll('input[name="testimonial"]');
  var paginationBullets = document.querySelectorAll('.swiper-pagination-bullet');

  radioButtons.forEach(function (radio, index) {
    radio.addEventListener('change', function () {
      swiper.slideTo(index);
    });
  });

    //swiper.on('slideChange', function () {
    //var currentIndex = swiper.activeIndex;
    //radioButtons[currentIndex].checked = true;
  //c});

  paginationBullets.forEach(function (bullet, index) {
    bullet.addEventListener('click', function () {
      radioButtons[index].checked = true;
    });
  });
});
