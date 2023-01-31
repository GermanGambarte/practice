const $form = document.querySelector('.form')
const $input = document.querySelector('.form-input')
const $list = document.querySelector('.list')

const fragment = new DocumentFragment()

const initialValue = [
  'regalo X',
  'regalo Y',
  'regalo Z'
]

const createGift = (gift) =>{
  const newGift = document.createElement('li')
  newGift.classList = 'list-item'
  newGift.textContent = gift
  fragment.appendChild(newGift)
}

const addInitialGifts = () => {
  initialValue.forEach(gift => createGift(gift))
  $list.append(fragment)
}

const handleSubmit = (evt)=>{
  evt.preventDefault()
  const gift = $input.value
  if(!gift) return $input.classList.add('form-input__error')
  $input.classList.remove('form-input__error')
  createGift(gift)
  $list.insertBefore(fragment,$list.firstChild)
  $input.value = ''
}

document.addEventListener('DOMContentLoaded', addInitialGifts)
$form.addEventListener('submit',handleSubmit)
