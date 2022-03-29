// calculator

const inputBox = document.querySelector('#display-screen')
const lastAns = document.querySelector('#last-ans')
const checkBox = document.querySelector('#input-mode')
const rad = document.querySelector('#radian')
const deg = document.querySelector('#degree')
const numBtn = document.querySelectorAll('.num-btn')
const evalBtn = document.querySelector('#evaluate')
const clrBtn = document.querySelector('#clear')
const sqrBtn = document.querySelector('#square')
const cubeBtn = document.querySelector('#cube')
const sqrtBtn = document.querySelector('#sqrt')
const cubrtBtn = document.querySelector('#cubrt')
const delBtn = document.querySelector('#del')
const piBtn = document.querySelector('pi')
const logBtn = document.querySelector('#log')
const sinBtn = document.querySelector('#sin')
const cosBtn = document.querySelector('#cos')
const tanBtn = document.querySelector('#tan')
const ansBtn = document.querySelector('#answer')
const themeBtn = document.querySelector('#theme-toggler')
const themeIcon = document.querySelector('#theme-toggler i')
const root = document.querySelector(':root')

// initial values
inputBox.value = ''
lastAns.value = ''
Ans = ''

// formulas
const sin = Math.sin
const cos = Math.cos
const tan = Math.tan
const log = Math.log10
const pi = 3.14159265359

// function to check input mode
function checkMode(){
  if (checkBox.checked === true) {
    rad.style.backgroundColor = 'lightcoral'
    deg.style.backgroundColor = 'transparent'
  } else if (checkBox.checked === false) {
    deg.style.backgroundColor = 'lightcoral'
    rad.style.backgroundColor = 'transparent'
  }
}

// on load function
window.addEventListener('load', checkMode)

// to select the input mode
checkBox.addEventListener('change', checkMode)

// buttons with values
for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener('click', () => {
    console.log(numBtn[i].value)
    if (numBtn[i].value === 'π') {
      inputBox.value += 'pi'
    } else if (numBtn[i].value === 'log10') {
      inputBox.value += 'log'
    } else if (numBtn[i].value === 'x') {
      inputBox.value += '*'
    } else {
      inputBox.value += numBtn[i].value
    }
  })
}

// evaluate button
evalBtn.addEventListener('click', () => {
  try {
    if (inputBox.value === '' || inputBox.value === 'NaN') {
      alert('please enter a number or expression')
      inputBox.value = ''
      lastAns.value = ''
      Ans = ''
    }
    else if (inputBox.value === 'sin' || inputBox.value === 'cos' || inputBox.value === 'tan' || inputBox.value === 'log') {
      alert('please enter a number or expression')
      inputBox.value = ''
      lastAns.value = ''
      Ans = ''
    }
    // for radian mode
    else if (checkBox.checked === true) {
      inputBox.value = eval(inputBox.value)
      lastAns.value = 'Ans: ' + Number(inputBox.value)
      Ans = Number(inputBox.value)
    }
    // for degree mode
    else if (checkBox.checked === false) {
      inputBox.value = eval(inputBox.value) * 0.01745329251
      lastAns.value = 'Ans: ' + Number(inputBox.value)
      Ans = Number(inputBox.value)
    }
  } catch (error) {
    alert('please enter a valid input value')
    inputBox.value = ''
    lastAns.value = ''
    Ans = ''
  }
})

// clear all button
clrBtn.addEventListener('click', () => {
  inputBox.value = ''
})

// square button
sqrBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = Math.pow(inputBox.value, 2)
  }
})

// cube button
cubeBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = Math.pow(inputBox.value, 3)
  }
})

// squareroot button
sqrtBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = Math.sqrt(inputBox.value)
  }
})

// cuberoot button
cubrtBtn.addEventListener('click', () => {
  if (inputBox.value) {
    inputBox.value = Math.cbrt(inputBox.value)
  }
})

// delete button
delBtn.addEventListener('click', () => {
  inputBox.value = inputBox.value.substring(0, inputBox.value.length - 1)
})

// theme toggle
themeBtn.addEventListener('click', () => {
  root.classList.toggle('dark')
  if (themeIcon.classList.contains('bx-bulb')) {
    themeIcon.classList.remove('bx-bulb')
    themeIcon.classList.add('bxs-bulb')
  } else {
    themeIcon.classList.remove('bxs-bulb')
    themeIcon.classList.add('bx-bulb')
  }
})
