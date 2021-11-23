'use strict';

const btnshowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');

// for (let i = 0; i < btnshowModal.length; i++) {
//   console.log(btnshowModal[i].textContent);
// }

// for (let i = 0; i < btnshowModal.length; i++) {
//   btnshowModal[i].addEventListener('click', function () {
//     // console.log('btn clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// btncloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// Refactored Code

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', openModal);
}
btncloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
