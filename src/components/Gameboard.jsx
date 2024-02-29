
export default function Gameboard({onSlectedPlayer,board}) {

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => {
            //console.log("inside row map", { colIndex, rowIndex });
              return (
                <li key={colIndex}>
                  <button onClick={()=> onSlectedPlayer(rowIndex,colIndex)} disabled={col !==null}>
                    {col}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
