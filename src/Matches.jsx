import React from "react"

const Matches = ({ match, index, editingIndex, setEditingIndex, handleScoreChange, handleScoreClick }) => {
    if (editingIndex === index) {
      return (
        <div className="match">
            <div className="match__title-container">
                <div className="match__flag"><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${match.homeFlag}`} alt={`Flaga ${match.homeTeam}`} /></div>
                <p className="match__title">{`${match.homeTeam} - ${match.awayTeam}`}</p>
                <div className="match__flag"><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${match.awayFlag}`} alt={`Flaga ${match.awayTeam}`} /></div>
            </div>
            <div className="match__score-container">
                <input className="match__score-edit"
                type="text"
                value={match.homeScore}
                onChange={event => handleScoreChange(event, index, 'homeScore')}
                />
                <input className="match__score-edit"
                type="text"
                value={match.awayScore}
                onChange={event => handleScoreChange(event, index, 'awayScore')}
                />
            </div>
            <button className="btn" onClick={() => setEditingIndex(null)}>Zapisz</button>
        </div>
      )
    } else {
      return (
        <div className="match">
            <div className="match__title-container">
                <div className="match__flag"><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${match.homeFlag}`} alt={`Flaga ${match.homeTeam}`} /></div>
                <p className="match__title">{`${match.homeTeam} - ${match.awayTeam}`}</p>
                <div className="match__flag"><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${match.awayFlag}`} alt={`Flaga ${match.awayTeam}`} /></div>
            </div>
            <p className={match.played ? `match__score` : `match__score --red`} onClick={() => handleScoreClick(index)}>
                {`${match.homeScore}-${match.awayScore}`}
            </p>
        </div>
      )
    }
  }

export default Matches
