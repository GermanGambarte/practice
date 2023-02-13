import { reviews } from './data.js'

const imageEl = document.getElementById('image')
const nameEl = document.getElementById('name')
const jobEl = document.getElementById('job')
const textEl = document.getElementById('text')
const btnWrapper = document.getElementById('btn-wrapper')

const getRandomIndex = () => Math.floor(Math.random() * reviews.length)
let currentReview = 1

const checkReviewId = (id) => {
  if (id < 0) return reviews.length - 1
  if (id === reviews.length) return 0
  return id
}

const handleChangeReview = (newId) => {
  const newReview = checkReviewId(newId)
  console.log(newReview)
  const { img, name, job, text } = reviews[newReview]
  currentReview = newReview
  imageEl.src = img
  imageEl.alt = name
  nameEl.textContent = name
  jobEl.textContent = job
  textEl.textContent = text
}

const getRandomReview = () => {
  let newReview = getRandomIndex()
  while (newReview === currentReview) {
    newReview = getRandomIndex()
  }
  handleChangeReview(newReview)
}

const handleClick = ({ target }) => {
  const targetClasses = target.id
  if (targetClasses.includes('left')) {
    return handleChangeReview(currentReview - 1)
  }
  if (targetClasses.includes('right')) {
    return handleChangeReview(currentReview + 1)
  }
  if (targetClasses.includes('surprise')) {
    return getRandomReview()
  }
}

btnWrapper.addEventListener('click', handleClick)
