const $body = document.querySelector('body')
const $container = document.getElementById('container')
const $btn = document.getElementById('btn')
const $btnText = document.getElementById('btnText')

let colors = {
  red: document.getElementById('red').value,
  green: document.getElementById('green').value,
  blue: document.getElementById('blue').value,
}

const setBackground = () => {
  const rgb = `rgb(${colors.red},${colors.green},${colors.blue})`
  $body.style.backgroundColor = rgb
  $btnText.textContent = rgb
}

const handleInputChange = (e) => {
  colors = { ...colors, [e.target.name]: e.target.value }
  setBackground()
}

const handleClick = () => {
  navigator.clipboard.writeText($btnText.textContent)
}

window.addEventListener('DOMContentLoaded', setBackground(colors))
$container.addEventListener('input', handleInputChange)
$btn.addEventListener('click', handleClick)
