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
          tied: 0,
          lost: 0,
          points: 0,
          flag: ""
        }
      }
      if (!acc[awayTeam]) {
        acc[awayTeam] = {
          played: 0,
          won: 0,
          tied: 0,
          lost: 0,
          points: 0,
          flag: ""
        }
      }
      acc[homeTeam].flag = match.homeFlag
      acc[awayTeam].flag = match.awayFlag
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
      acc[homeTeam].points = acc[homeTeam].won*3+acc[homeTeam].tied
      acc[awayTeam].points = acc[awayTeam].won*3+acc[awayTeam].tied
      return acc
    }, {})
    const sortedTeamStats = Object.entries(teamStats).sort((a, b) => b[1].points - a[1].points)
    let currentPlace = 1
    return (
      <div className="stats">
        <h3 className="stats__group">Grupa {group}</h3>
          <div className="stats__titles">
            <p className="stats__title">Drużyna</p>
            <p className="stats__stat">RM</p>
            <p className="stats__stat">W</p>
            <p className="stats__stat">R</p>
            <p className="stats__stat">P</p>
            <p className="stats__stat">Pkt</p>
          </div>
        {sortedTeamStats.map(([team, stats]) => (
          <div className="stats__content" key={team}>
            <p className="stats__title">{currentPlace++} <div className="stats__flag"><img crossOrigin="anonymous" src={`https://countryflagsapi.com/png/${stats.flag}`} alt={`Flaga ${team}`} /></div> {team} </p>
            <p className="stats__stat">{stats.played}</p>
            <p className="stats__stat">{stats.won}</p>
            <p className="stats__stat">{stats.tied}</p>
            <p className="stats__stat">{stats.lost}</p>
            <p className="stats__stat">{stats.points}</p>
          </div>
        ))}
      </div>
    )
  }

export default Stats