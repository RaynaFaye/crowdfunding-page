//Menu Functionality
const menuButton = document.querySelector('.header__nav__menu-button');
const menuButtonImage = menuButton.querySelector('img');
const menu = document.querySelector('.header__nav__menu');
let menuLinks = document.querySelectorAll('.header__nav__menu__link');
const backgroundFade = document.querySelector('.background-fade');

function hideMenu() {
  menu.classList.add('hidden');
  menuButtonImage.src = 'images/icon-hamburger.svg';
  menuButton.setAttribute('aria-expanded', 'false');
  backgroundFade.style.display = 'none';
}

function showMenu() {
  menu.classList.remove('hidden');
  menuButtonImage.src = 'images/icon-close-menu.svg';
  menuButton.setAttribute('aria-expanded', 'true');
  backgroundFade.style.display = 'block';
}

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    showMenu();
  } else {
    hideMenu();
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
    hideMenu();
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('header__nav__menu__link')) {
      return;
    }
    hideMenu();
  });
});

//Progress bar
const progressBarFiller = document.querySelector('.progress-bar__filler');
const totalBacked = 100000;
const currentBacked = document.querySelector('.numbers .number-bold:first-of-type');

let currentBackedNumber = currentBacked.textContent;
let splitNumbers = currentBackedNumber.substring(1).split(',');
currentBackedNumber = splitNumbers.join('');
let width = (currentBackedNumber / totalBacked) * 100;

progressBarFiller.style.width = width + '%';
