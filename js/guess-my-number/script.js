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

$checkBtn.addEventListener('click', () => {
  const guessValue = Number($guess.value)
  if (!guessValue) $message.textContent = '🌋 No number!'
  if (guessValue === secretNumber) {
    $message.textContent = '🎉 Correct Number'
    $number.textContent = secretNumber
    $body.style.backgroundColor = '#60b347'
    if (score > highscore) {
      highscore = score
      $highscore.textContent = highscore
    }
  }
  if (score > 1) {
    if (guessValue > secretNumber) {
      $message.textContent = '📈 Too High!'
      decreaseScore()
    }
    if (guessValue < secretNumber) {
      $message.textContent = '📉 Too Low!'
      decreaseScore()
    }
  } else {
    $message.textContent = '👎🏼 You lost the game'
    decreaseScore()
  }
})

$againBtn.addEventListener('click', () => {
  $message.textContent = 'Start guessing...'
  $body.style.backgroundColor = '#222'
  score = 20
  secretNumber = Math.floor(Math.random() * 20) + 1
  $guess.value = ''
  $score.textContent = score
  $number.textContent = '?'
})
