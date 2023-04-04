const registerBtn = document.getElementById('register-btn');
const popupForm = document.querySelector('.popup-form');
const closeBtn = popupForm.querySelector('#close-btn');
const header = document.querySelector('.header');
const middle = document.querySelector('.middle');
const main = document.querySelector('.main');


registerBtn.addEventListener('click', () => {
  popupForm.style.display = 'block';
  header.classList.add("blur");
  middle.classList.add("blur");
  main.classList.add("blur");
});

closeBtn.addEventListener('click', () => {
  popupForm.style.display = 'none';
  header.classList.remove("blur");
  middle.classList.remove("blur");
  main.classList.remove("blur");
});
