const registerBtn = document.getElementById('register-btn');
const popupForm = document.querySelector('.popup-form');
const closeBtn = popupForm.querySelector('#close-btn');
const header = document.querySelector('.header');
const middle = document.querySelector('.middle');
const main = document.querySelector('.main');


registerBtn.addEventListener('click', () => {
  popupForm.style.display = 'block';
  registerBtn.style.display = 'none';
  header.classList.add("blur");
  middle.classList.add("blur");
  main.classList.add("blur");
});

closeBtn.addEventListener('click', () => {
  popupForm.style.display = 'none';
  header.classList.remove("blur");
  middle.classList.remove("blur");
  main.classList.remove("blur");
  registerBtn.style.display = 'block';
});

window.addEventListener('scroll', function() {
  var footer = document.querySelector('footer');
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollThreshold = bodyHeight - windowHeight - 10; // Adjust threshold value as needed
  if (scrollPosition >= scrollThreshold) {
      footer.classList.remove('fixed-footer');
  } else {
      footer.classList.add('fixed-footer');
  }
});