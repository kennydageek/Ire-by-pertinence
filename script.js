/**********
Navbar
********/

'use strict';
const hamburger = document.querySelector('.nav-menu__ham');
const cancel = document.querySelector('.nav-menu__cancel');
const sidebar = document.querySelector('.sidebar');
const link = document.querySelector('.nav-links__link');

const toggleSidebar = function () {
  sidebar.classList.toggle('hidden');
};

[hamburger, cancel, link].forEach((cur) => {
  cur.addEventListener('click', toggleSidebar);
});
