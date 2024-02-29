import React from "react";

export default function Gameover({ winner,restart}) {
  return (
    <div id="game-over">
      <h2>Game over</h2>
      {winner && <p>{winner} won</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={restart}>Rematch</button>
      </p>
    </div>
  );
}
