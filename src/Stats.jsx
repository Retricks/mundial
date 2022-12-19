import React from 'react'

const Stats = ({ matches, group }) => {
    const groupMatches = matches.filter(match => match.group === group)
    const teamStats = groupMatches.reduce((acc, match) => {
      const homeTeam = match.homeTeam
      const awayTeam = match.awayTeam
  
      if (!acc[homeTeam]) {
        acc[homeTeam] = {
          played: 0,
          won: 0,
          lost: 0,
          tied: 0
        }
      }
      if (!acc[awayTeam]) {
        acc[awayTeam] = {
          played: 0,
          won: 0,
          lost: 0,
          tied: 0
        }
      }
      if (match.played == true){
        acc[homeTeam].played += 1
        acc[awayTeam].played += 1
      }
  
      if (match.homeScore > match.awayScore) {
        acc[homeTeam].won += 1
        acc[awayTeam].lost += 1
      } else if (match.homeScore < match.awayScore) {
        acc[homeTeam].lost += 1
        acc[awayTeam].won += 1
      } else if (match.played == true) {
        acc[homeTeam].tied += 1
        acc[awayTeam].tied += 1
      }
  
      return acc
    }, {})
  
    return (
      <div className="stats">
        <h3 className="stats__group">Grupa {group}</h3>
          <div className="stats__titles">
            <p className="stats__title">Drużyna</p>
            <p className="stats__stat">RM</p>
            <p className="stats__stat">W</p>
            <p className="stats__stat">P</p>
            <p className="stats__stat">R</p>
          </div>
        {Object.entries(teamStats).map(([team, stats]) => (
          <div className="stats__content" key={team}>
            <p className="stats__title">{team}</p>
            <p className="stats__stat">{stats.played}</p>
            <p className="stats__stat">{stats.won}</p>
            <p className="stats__stat">{stats.lost}</p>
            <p className="stats__stat">{stats.tied}</p>
          </div>
        ))}
      </div>
    )
  }

export default Stats