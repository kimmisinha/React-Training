import React from 'react'
import HOC from '../HOC'

function TeamScore({game,teamAName,teamBName,teamAScore,teamBScore,updateScore}) {
  return (
    <div>
        <h1>{game}</h1>
        <h3>{teamAName}</h3>
        <div>
            {teamAScore}
            <button onClick={()=>updateScore(teamAName)}>Add</button>
        </div>
        <h3>{teamBName}</h3>
        <div>
            {teamBScore}
            <button onClick={()=>updateScore(teamBName)}>Add</button>
        </div>
    </div>
  )
}

export default TeamScore