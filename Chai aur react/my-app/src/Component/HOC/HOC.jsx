import React, { useState } from "react";

function HOC(InitialComp, game, teamAName, teamBName) {
  const WithHOC = ({ teamAScore, teamBScore }) => {
    const [teamAS, setTeamAS] = useState(teamAScore);
    const [teamBS, setTeamBS] = useState(teamBScore);

    const updateScore = (teamName) => {
      if (teamAName == teamName) {
        setTeamAS((pre) => pre + 1);
      } else {
        setTeamBS((pre) => pre + 1);
      }
    };

    return (
      <InitialComp
        game={game}
        teamAName={teamAName}
        teamBName={teamBName}
        teamAScore={teamAS}
        teamBScore={teamBS}
        updateScore={updateScore}
      />
    );
  };
  return WithHOC;
}

export default HOC;
