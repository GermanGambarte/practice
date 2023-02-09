const $message = document.querySelector('.message')
const $number = document.querySelector('.number')
const $score = document.querySelector('.score')
const $highscore = document.querySelector('.highscore')
const $guess = document.querySelector('.guess')
const $checkBtn = document.querySelector('.check')
const $againBtn = document.querySelector('.again')
const $body = document.querySelector('body')

let secretNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highscore = 0
$score.textContent = score
$number.textContent = secretNumber

const decreaseScore = () => {
  score -= 1
  $score.textContent = score
}
const displayMessage = (message) => ($message.textContent = message)
const displayNumber = (value) => ($number.textContent = value)
const setHighscore = () => {
  highscore = score
  $highscore.textContent = highscore
}

$checkBtn.addEventListener('click', () => {
  const guessValue = Number($guess.value)
  if (!guessValue) displayMessage('🌋 No number!')
  if (guessValue === secretNumber) {
    displayMessage('🎉 Correct Number')
    displayNumber(secretNumber)
    $body.style.backgroundColor = '#60b347'
    if (score > highscore) {
      setHighscore()
    }
  }
  if (guessValue !== secretNumber) {
    if (score > 1) {
      const message = guessValue > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      displayMessage(message)
      decreaseScore()
    } else {
      displayMessage('👎🏼 You lost the game')
      decreaseScore()
    }
  }
})

$againBtn.addEventListener('click', () => {
  displayMessage('Start guessing...')
  displayNumber('?')
  $body.style.backgroundColor = '#222'
  score = 20
  secretNumber = Math.floor(Math.random() * 20) + 1
  $guess.value = ''
  $score.textContent = score
})
