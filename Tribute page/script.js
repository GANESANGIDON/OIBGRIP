// tribute page

const themeBtn = document.querySelector('#theme')
const themeIcon = document.querySelector('#theme-icon i')
const root = document.querySelector(':root')
const quotes = document.querySelector('#home-section blockquote')
const scrollBtn = document.querySelector('#scroll-top-btn')

// To fetch and display quotes from json file
window.addEventListener('load', async()=>{
  const response = await fetch("./quotes.json")
  const obj = await response.json()

  // to generate a random number
  let randomNum = Math.floor(Math.random() * obj.quotes.length)

  // to display random quotes
  quotes.innerHTML = `❝ ${obj.quotes[randomNum]} ❞`
  console.log(quotes.innerHTML);
})

// to change the theme
themeBtn.addEventListener('click', ()=>{
  // toggle theme icon
  if(themeIcon.classList.contains("bxs-sun")){
    themeIcon.classList.remove("bxs-sun")
    themeIcon.classList.add("bxs-moon")
  }
  else{
    themeIcon.classList.remove("bxs-moon")
    themeIcon.classList.add("bxs-sun")
  }
  // to toggle root values
  root.classList.toggle("dark")
})

// scroll to top button
scrollBtn.addEventListener('click', ()=>{
  window.scrollTo(0,0)
})