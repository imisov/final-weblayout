// Burger
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('body').classList.toggle('lock')
  })
})

let menuIcon = document.querySelector('#burger');
menuIcon.addEventListener('click', function() {
  menuIcon.classList.toggle('active');
  let n = 'true' === menuIcon.getAttribute('aria-expanded');
  menuIcon.setAttribute('aria-expanded', !n),
    n
      ? menuIcon.setAttribute('aria-label', 'Открыть меню')
      : menuIcon.setAttribute('aria-label', 'Закрыть меню');
});

// Dropdown
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown__toggle').forEach(item => {
    item.addEventListener('click', function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector('.dropdown');

      document.querySelectorAll('.dropdown__toggle').forEach(el => {
        if (el != btn) {
          el.classList.remove('btn-is-active');
        }
      });

      document.querySelectorAll('.dropdown').forEach(el => {
        if (el != dropdown) {
          el.classList.remove('dropdown-is-active');
        }
      })
      dropdown.classList.toggle('dropdown-is-active');
      btn.classList.toggle('btn-is-active')
    })
  })
})

document.addEventListener('click', function(e) {
  let target = e.target;
  if (!target.closest('.header__bottom-nav-list')) {
    document.querySelectorAll('.dropdown').forEach(el => {
      el.classList.remove('dropdown-is-active');
    })
     document.querySelectorAll('.dropdown__toggle').forEach(el => {
      el.classList.remove('btn-is-active');
    });
  }
})

// Swiper
const gallerySwiper = new Swiper('.gallery__swiper', {
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: '{{index}} слайд из двух',
  },
})

const eventsSwiper = new Swiper('.events__swiper', {

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
    disabledClass: 'events__swiper-button-disabled',
  },

  a11y: {
    paginationBulletMessage: '{{index}} слайд из двух',
  },
});

const projectsSwiper = new Swiper('.projects__swiper', {
  loop: true,
  centerInsufficientSlides: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 33,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: '{{index}} слайд из трёх',
  },
})

// Tooltip
tippy('.projects__tooltip', {
  theme: 'custom',
  maxWidth: 264,
});

// Accordion
$("#accordion").accordion({
  heightStyle: 'content',
  // collapsible: true,
  active: false,
});

$("#accordion").keydown(function(e){
  let n = 0;
  if(e.keyCode === 9){//tab pressed
    if (e.shiftKey) {//shift+tab pressed
      n = 0;
    } else {//only tab pressed
      let index = e.target.id.split('-')[2];
      n = (Number(index) + 1) / 2;
    }
    $("#accordion").accordion('option', 'active' , n);
  }
});

// Tabs
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.catalog__tabs-btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__artist').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__artist-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist-active')

      document.querySelectorAll('.catalog__tabs-btn').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__tabs-btn-active')
      })
      document.querySelector(`[data-tabs="${path}"]`).classList.add('catalog__tabs-btn-active')
    })
  })
})

// Select
const element = document.querySelector('.gallery__filter-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});

// Validation
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
        },
    },
  },
  messages: {
    name: {
      required: 'Укажите ваше имя',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное',
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Номер введён не полностью',
    }
  },
  colorWrong: '#d11616',

});

// Map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}

// Search
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search-mobile-open').addEventListener('click', function() {
    document.querySelector('.header__search-mobile').classList.add('is-active');
    document.querySelector('.header__search-mobile-open').classList.add('is-active');
    document.querySelector('.header__search-mobile-close').classList.add('is-active');
    document.querySelector('.burger').classList.add('none');
  })
  document.querySelector('.header__search-mobile-close').addEventListener('click', function() {
    document.querySelector('.header__search-mobile').classList.remove('is-active')
    document.querySelector('.header__search-mobile-open').classList.remove('is-active')
    document.querySelector('.header__search-mobile-close').classList.remove('is-active')
    document.querySelector('.burger').classList.remove('none')
  })
})
