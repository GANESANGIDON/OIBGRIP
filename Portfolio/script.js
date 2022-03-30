// My portfolio

// variables declaration

// For navbar
const hamburger = document.querySelector('.hamburger'),
  navbar = document.querySelector('#nav-bar'),
  navLinkText = document.querySelectorAll('.nav-link-text'),
  navLinks = document.querySelectorAll('.nav-links'),
  navImg = document.querySelector('#nav-pic-container'),
  main = document.querySelector('#main-section')

// To toggle theme
const theme = document.querySelector('#theme-icon'),
  root = document.querySelector(':root')

// For project information
const projectImg = document.querySelectorAll('.project-img'),
  iIcon = document.querySelectorAll('.info-btn')

// For focusing the name input field
const msgBtn = document.querySelector('#home-btn'),
  feedback = document.querySelector('#feedback'),
  formName = document.querySelector('#input-name')

// For carousel
const slider = document.querySelector('#my-carousel'),
  slideItem = document.querySelectorAll('.carousel-img')
let i = 0

// header starts

// hamburger icon animation
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('opened')
  // To toggle Nav bar collapse
  navbar.classList.toggle('opened')
  // To resize nav bar profile picture
  navImg.classList.toggle('opened')
  // To resize nav links
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('opened')
  }
  // To show or hide nav link texts
  for (var j = 0; j < navLinkText.length; j++) {
    navLinkText[j].classList.toggle('opened')
  }
  // To decrease the brightness of the main section
  main.classList.toggle('opened')
})

// To close nav bar if user selects any nav link
for (var k = 0; k < navLinks.length; k++) {
  navLinks[k].addEventListener('click', function () {
    //To remove hamburger icon animation
    hamburger.classList.remove('opened')
    // To close Nav bar
    navImg.classList.remove('opened')
    // To resize nav bar profile picture
    navbar.classList.remove('opened')
    // To resize nav links
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('opened')
    }
    // To Hide nav link texts
    for (var j = 0; j < navLinkText.length; j++) {
      navLinkText[j].classList.remove('opened')
    }
    // To default the brightness of the main section
    main.classList.remove('opened')
  })
}

// Scroll Spy
window.addEventListener('scroll', () => {
  var windowsX = window.pageYOffset,
    windowsXPlus = windowsX + 200
  // section Top offset values
  const homeSec = document.querySelector('#home-section').offsetTop,
    aboutSec = document.querySelector('#about-section').offsetTop,
    educationSec = document.querySelector('#education-section').offsetTop,
    skillSec = document.querySelector('#skills-section').offsetTop,
    projectSec = document.querySelector('#projects-section').offsetTop,
    certificateSec = document.querySelector('#certificates-section').offsetTop,
    contactSec = document.querySelector('#contact-section').offsetTop,
    // active navlink
    activelink = document.querySelector('.nav-links.active')

  // to toggle active class on nav links
  if (aboutSec <= windowsXPlus && educationSec > windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#about-link').classList.add('active')
  } else if (educationSec <= windowsXPlus && skillSec > windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#education-link').classList.add('active')
  } else if (skillSec <= windowsXPlus && projectSec > windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#skills-link').classList.add('active')
  } else if (projectSec <= windowsXPlus && certificateSec > windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#projects-link').classList.add('active')
  } else if (certificateSec <= windowsXPlus && contactSec > windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#certificates-link').classList.add('active')
  } else if (contactSec <= windowsXPlus) {
    activelink.classList.remove('active')
    document.querySelector('#contact-link').classList.add('active')
  } else {
    activelink.classList.remove('active')
    document.querySelector('#home-link').classList.add('active')
  } 
})

// theme toggler
theme.addEventListener('click', function () {
  // To toggle the root variable values
  root.classList.toggle('dark')
  // To toggle the theme icon
  if (this.classList.contains('fa-sun')) {
    this.classList.remove('fa-sun')
    this.classList.add('fa-moon')
  } else if (this.classList.contains('fa-moon')) {
    this.classList.remove('fa-moon')
    this.classList.add('fa-sun')
  }
})
// header ends

// To show or hide project preview image
for (let i = 0; i < iIcon.length; i++) {
  iIcon[i].addEventListener('click', function () {
    projectImg[i].classList.toggle('slide')
  })
}

// function to navigate to contact form and to focus the name input field
function focused() {
  formName.focus()
  console.log('done')
}

// For contact
msgBtn.addEventListener('click', focused)

// For feedback
feedback.addEventListener('click', focused)

// To slide to next  carousel item
const slideNext = function () {
  slider.append(slideItem[i])
  i++
  if (i === slideItem.length) {
    i = 0
  }
}

// To trigger click event on the slider
slider.addEventListener('click', slideNext)

// For auto carousel
const autoSlide = setInterval(slideNext, 4000)
