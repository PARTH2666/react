import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";
import Gameover from "./components/Gameover";

//initial gameboard
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//All the winning combination or conditions
export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

//root component
function App() {
  //const [gameTurn, setGameTurn] = useState([]); holds the value of rowIndex and colIndex and player_symbol
  const [gameTurn, setGameTurn] = useState([]);

  //const [activePlayer, setActivePlayer] = useState("X"); helps to switch between "X" and "O"
  const [activePlayer, setActivePlayer] = useState("X");

  //copy of initial game board
  let gameBoard = [...initialGameBoard.map((item) => [...item])];
  for (const turn of gameTurn) {
    const { squre, player } = turn;
    const { row, col } = squre;
    gameBoard[row][col] = player;
  }

  //checks about the winner on each click
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    console.log(gameBoard, "gameboard");
    console.log(gameBoard[combination[2].row][2], "data");
    console.log(
      gameBoard[combination[2].row][2],
      "gameBoard[combination[0].row][combination[0].col]"
    );

    const firstSqureSymbol = gameBoard[combination[0].row][0];
    const secondSqureSymbol = gameBoard[combination[1].row][1];
    const thirdSqureSymbol = gameBoard[combination[2].row][2];

    if (
      firstSqureSymbol &&
      firstSqureSymbol === secondSqureSymbol &&
      firstSqureSymbol === thirdSqureSymbol
    ) {
      winner = firstSqureSymbol;
      console.log(winner, "winner");
    }
  }
  // draw variable for draw
  const draw = gameTurn.length == 9 && !winner;

  //called on click on each click
  function handleplayer(rowIndex, colIndex) {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurn((prevTurns) => {
      let curPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player == "X") {
        curPlayer = "O";
      }
      const updatedTurns = [
        { squre: { row: rowIndex, col: colIndex }, player: curPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  //handles the restart clears the trus arr
  function handleStart() {
    setGameTurn([]);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player_name="Player1"
            player_symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            player_name="Player2"
            player_symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {console.log(winner)}
        {(winner || draw) && <Gameover winner={winner} restart={handleStart} />}
        <Gameboard onSlectedPlayer={handleplayer} board={gameBoard} />
      </div>
      <Log Turns={gameTurn} />
    </main>
  );
}

export default App;
