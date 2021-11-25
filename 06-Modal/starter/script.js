'use strict';

const btnshowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btncloseModal = document.querySelector('.close-modal');

// for (let i = 0; i < btnshowModal.length; i++) {
//   console.log(btnshowModal[i].textContent);
// } Shows text content of each modal btn

// for (let i = 0; i < btnshowModal.length; i++) {
//   btnshowModal[i].addEventListener('click', function () {
//     // console.log('btn clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// } Adds event listener to each modal button

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

// key press events

// an event e occurs when the keydown action takes place on the document. This even is an object containing
//properties of e
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  //if the key press is equal to escape and the modal does not contain the class hidden then close the modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
