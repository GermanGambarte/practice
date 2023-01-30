const $btnWrapper = document.querySelector('.btn-wrapper')
const $counter = document.querySelector('.counter')

const initialValue = 0
let counterValue = Number($counter.textContent)

const methods = {
  decrease: () => {
    counterValue -= 1
  },
  reset: () => {
    counterValue = initialValue
  },
  increase: () => {
    counterValue += 1
  }
}

$btnWrapper.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    methods[e.target.id]()
    $counter.textContent = counterValue
  }
})
