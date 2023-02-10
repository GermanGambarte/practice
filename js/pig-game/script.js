const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNewGame = document.querySelector('.btn--new')

let currentScore, activePlayer, playing, scores

const setInitialValues = () => {
  currentScore = 0
  activePlayer = 0
  playing = true
  scores = [0, 0]

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
}

const switchActivePlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}

const handleRollClick = () => {
  if (playing) {
    const randomDice = Math.floor(Math.random() * 6) + 1

    diceEl.src = `assets/dice-${randomDice}.png`
    diceEl.classList.remove('hidden')

    if (randomDice !== 1) {
      currentScore += randomDice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore
    } else {
      switchActivePlayer()
    }
  }
}

const handleHoldClick = () => {
  if (playing) {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]
    if (scores[activePlayer] >= 10) {
      playing = false
      diceEl.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    } else {
      switchActivePlayer()
    }
  }
}

btnRoll.addEventListener('click', handleRollClick)
btnHold.addEventListener('click', handleHoldClick)
btnNewGame.addEventListener('click', setInitialValues)
document.addEventListener('DOMContentLoaded', setInitialValues)
