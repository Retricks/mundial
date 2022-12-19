import React, { useState, useEffect } from 'react'
import allmatches from './assets/allmatches'
import Stats from './Stats'
import Matches from './Matches'

const App = () => {
  const [matches, setMatches] = useState(JSON.parse(localStorage.getItem('matches')) || allmatches)
  const [editingIndex, setEditingIndex] = useState(null)

  const handleScoreChange = (event, index, type) => {
    let value = parseInt(event.target.value)
    if(isNaN(value) || !(value>=0) || (value>100)){
      value=0
    }
    event.target.value=0
    const newMatches = [...matches]
    newMatches[index][type] = value
    newMatches[index].played = true
    setMatches(newMatches)
  }

  const handleScoreClick = index => {
    setEditingIndex(index)
  }

  useEffect(() => {
    localStorage.setItem('matches', JSON.stringify(matches))
  }, [matches])

  return (
    <div className="app">
      <h1>Mundial 2022</h1>
      <div className="container">
        <h2>Mecze</h2>
        <div className="matches-container">
        {matches.map((match, index) => (
          <Matches
            key={`${match.homeTeam}-${match.awayTeam}`}
            match={match}
            index={index}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
            handleScoreChange={handleScoreChange}
            handleScoreClick={handleScoreClick}
          />
        ))}
        </div>
      </div>
      <div className="container">
        <h2>Statystyki</h2>
        <div>
          <Stats group="A" matches={matches} />
          <Stats group="B" matches={matches} />
          <Stats group="C" matches={matches} />
          <Stats group="D" matches={matches} />
          <Stats group="E" matches={matches} />
          <Stats group="F" matches={matches} />
          <Stats group="G" matches={matches} />
          <Stats group="H" matches={matches} />
        </div>
      </div>
    </div>
  )
}

export default App