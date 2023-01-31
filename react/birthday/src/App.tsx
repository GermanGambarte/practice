import { useState } from 'react'
import { initialState } from './data/data'

import './App.css'
import { BirthdayItem } from './components/Birthday/BirthdayItem'
import { Button } from './components/ui/Button'

function App() {
  const [birthdayList, setBirthdayList] = useState(initialState)
  const clearBirthdayList = () => setBirthdayList([])
  return (
    <main>
      <div className="list-container">
        <h1 className="list-title">{`${birthdayList.length} birthdays today`}</h1>
        {/* TODO: form to add new Birthday */}
        {birthdayList.map((bd) => (
          <BirthdayItem key={bd.id} data={bd} />
        ))}
        <Button label="Clear All" action={clearBirthdayList} />
      </div>
    </main>
  )
}

export default App
