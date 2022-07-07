/**********
Navbar
********/

'use strict';
// const hamburger = document.querySelector(".nav-menu__ham");
// const cancel = document.querySelector(".nav-menu__cancel");
// const sidebar = document.querySelector(".sidebar");
// const link = document.querySelector(".nav-links__link");

// const toggleSidebar = function () {
//   sidebar.classList.toggle("hidden");
// };

// [hamburger, cancel, link].forEach((cur) => {
//   cur.addEventListener("click", toggleSidebar);
// });

/*==================== SHOW MENU ====================*/
const navClose = 'bx-x';
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      toggle.classList.toggle(navClose);
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(
  '.faqs__container--right_question'
);

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.question__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.question__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

// Carousels

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   // el: '.swiper-scrollbar',
  // },
});
