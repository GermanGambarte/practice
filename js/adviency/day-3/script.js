const $form = document.querySelector('.form')
const $input = document.querySelector('.form-input')
const $list = document.querySelector('.list')

const fragment = new DocumentFragment()

let gifts = [
  { id: '0', gift: 'regalo 1' },
  { id: '1', gift: 'regalo 2' },
  { id: '2', gift: 'regalo 3' },
]

const createGift = (gift) => {
  const newGift = document.createElement('li')
  const deleteButton = document.createElement('button')
  deleteButton.classList = 'list-btn'
  deleteButton.textContent = 'delete'
  newGift.classList = 'list-item'
  newGift.textContent = gift.gift
  newGift.setAttribute('id', gift.id)
  newGift.appendChild(deleteButton)
  fragment.appendChild(newGift)
}

const loadGifts = () => {
  gifts.forEach((gift) => createGift(gift))
  $list.append(fragment)
}

const handleSubmit = (evt) => {
  evt.preventDefault()

  if (!$input.value) return $input.classList.add('form-input__error')

  const gift = {
    id: self.crypto.randomUUID(),
    gift: $input.value,
  }
  $input.classList.remove('form-input__error')
  createGift(gift)
  $list.insertBefore(fragment, $list.firstChild)
  $input.value = ''
}

const handleDelete = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.id
    e.target.parentElement.remove()
    const filteredList = gifts.filter((gift) => gift.id !== id)
    gifts = filteredList
  }
}

document.addEventListener('DOMContentLoaded', loadGifts)
$form.addEventListener('submit', handleSubmit)
$list.addEventListener('click', handleDelete)
