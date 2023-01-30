/* eslint-disable comma-dangle */
const $quote = document.getElementById('quote')
const $cite = document.getElementById('cite')
const $btn = document.getElementById('btn')

const getQuote = async () => {
  // const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=es'

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '4e0d90ce0amshd3e84494cee740bp1c8a41jsn7fc32208c11c',
  //     'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
  //   },
  // }
  // return fetch(url, options)
  //   .then((res) => res.json())
  //   .then((json) => {
  //     return {
  //       content: json.content,
  //       cite: json.originator.name,
  //     }
  //   })
  const url = 'https://type.fit/api/quotes'
  const random = Math.floor(Math.random() * 1643)
  $btn.disabled = true

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data[random])
    .then((result) => {
      return {
        quote: result.text,
        author: result.author,
      }
    })
}

const setQuote = async () => {
  const { quote, author } = await getQuote()
  $btn.disabled = false
  $quote.textContent = quote
  $cite.textContent = author
}

window.addEventListener('DOMContentLoaded', setQuote)
$btn.addEventListener('click', setQuote)
