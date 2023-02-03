/* eslint-disable comma-dangle */
const $form = document.getElementById('form')
const $numberOfPeopel = document.getElementById('numberOfPeople')
const $tipPersentage = document.getElementById('tipPersentage')

let inputs = {
  bill: document.getElementById('bill').value,
  tip: document.getElementById('tip').value,
  people: document.getElementById('people').value,
}
const totals = {
  billTotal: document.getElementById('billTotal'),
  tipTotal: document.getElementById('tipTotal'),
  totalAmount: document.getElementById('totalAmount'),
  totalPerPerson: document.getElementById('totalPerPerson'),
}

const updateTotals = ({ bill, tip, people }) => {
  const absBill = Math.abs(Number(bill))
  const finalTip = (Number(tip) * absBill) / 100
  const finalTotal = finalTip + absBill
  const finalPerPerson = finalTotal / Number(people)
  totals.billTotal.textContent = `$${absBill}`
  totals.tipTotal.textContent = `$${finalTip.toFixed(2)}`
  totals.totalAmount.textContent = `$${finalTotal.toFixed(2)}`
  totals.totalPerPerson.textContent = `$${finalPerPerson.toFixed(2)}`
}

const updateLabels = ({ people, tip }) => {
  $numberOfPeopel.textContent = people
  $tipPersentage.textContent = `${tip}%`
}

const loadInitialContent = () => {
  updateLabels(inputs)
}

const handleInputChange = (e) => {
  inputs = { ...inputs, [e.target.id]: e.target.value }
  updateLabels(inputs)
  updateTotals(inputs)
}

$form.addEventListener('input', handleInputChange)
$form.addEventListener('submit', (e) => e.preventDefault())
document.addEventListener('DOMContentLoaded', loadInitialContent)
