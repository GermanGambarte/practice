import { useState } from 'react'

import { ReviewComp } from './components/Review'
import { data } from './data/data'

import './App.css'

function App() {
  const [item, setItem] = useState(0)
  const [reviews] = useState(data)

  const handleNextItem = () => {
    if (item === reviews.length - 1) return setItem(0)

    return setItem(item + 1)
  }
  const handlePrevItem = () => {
    if (item === 0) return setItem(reviews.length - 1)

    return setItem(item - 1)
  }

  const generateRandomItem = () => {
    return Math.floor(Math.random() * reviews.length)
  }

  const handleSurprise = () => {
    let randomItem = generateRandomItem()

    while (randomItem === item) {
      randomItem = generateRandomItem()
    }
    setItem(randomItem)
  }

  return (
    <div className="container">
      <h1>Our Reviews</h1>
      <main>
        <ReviewComp review={reviews[item]} />
        <div className="btn-container">
          <div className="arrows-wrapper">
            <button className="btn arrow-btn" onClick={handlePrevItem}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="btn arrow-btn" onClick={handleNextItem}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className="btn surprise-btn" onClick={handleSurprise}>
            Surprise me
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
