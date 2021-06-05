//Menu Functionality
const menuButton = document.querySelector('.header__nav__menu-button');
const menuButtonImage = menuButton.querySelector('img')
const menu = document.querySelector('.header__nav__menu');
let menuLinks = document.querySelectorAll('.header__nav__menu__link')

menuButton.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menuButtonImage.src = 'images/icon-close-menu.svg'
        menuButton.setAttribute('aria-expanded', 'true')
    } else {
        menuButtonImage.src = 'images/icon-hamburger.svg'
        menuButton.setAttribute('aria-expanded', 'false')
    }
    menu.classList.toggle('hidden')
})

window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape' && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden')
        menuButtonImage.src = 'images/icon-hamburger.svg'
        menuButton.setAttribute('aria-expanded', 'false')
    }
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener('focusout', (event) => {
        if (event.relatedTarget.classList.contains('header__nav__menu__link')) {
            return
        }
        menu.classList.add('hidden')
        menuButtonImage.src = 'images/icon-hamburger.svg'
        menuButton.setAttribute('aria-expanded', 'false')
    })
})