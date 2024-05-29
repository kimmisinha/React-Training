import React from 'react';
import HOC from "./HOC/HOC";
import teamAScore from './HOC/Counters/TeamScore';

const Hockey = HOC(teamAScore, "Hockey Game", "Team A", "Team B");
const Football = HOC(teamAScore, "Football Game", "Team C", "Team D");

const GamesComponent = () => {
  return (
    <div>
      <h2>Games</h2>
      <Hockey teamAScore={0} teamBScore={0} />
      <Football teamAScore={0} teamBScore={0} />
    </div>
  );
};

export default GamesComponent;
