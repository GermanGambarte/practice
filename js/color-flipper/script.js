import { HEX, NAMED } from './colors.js'

const $container = document.querySelector('.bg-container')
const $nav = document.querySelector('.nav-wrapper_btn')
const $span = document.querySelector('.bg-color')
const $btn = document.querySelector('.bg-button')
const colorText = document.querySelector('.bg-color')
const randomIdx = (value) => {
  return Math.floor(Math.random() * value)
}
let amount
let type = 'named'

const insertColor = (color) => {
  $container.style.background = `${color}`
  $btn.style.background = `${color}`
  $span.style.color = `${color}`
  colorText.textContent = `${color}`
}

const methods = {
  named: () => {
    amount = NAMED.length
    insertColor(NAMED[randomIdx(amount)])
  },
  hex: () => {
    let color = '#'
    amount = HEX.length
    for (let i = 0; i < 6; i++) {
      color += String(HEX[randomIdx(amount)])
    }
    insertColor(color)
  }
}

window.addEventListener('DOMContentLoaded', methods.named())

$nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    type = e.target.textContent.toLowerCase()
  }
})

$container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // eslint-disable-next-line no-unused-expressions
    methods[type]()
  }
})
