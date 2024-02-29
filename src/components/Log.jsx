import React from "react";

export default function Log({ Turns }) {
  return (
    <ol id="log">
      {Turns.map((items) => (
        <li key={`${items.squre.row}${items.squre.col}`}>
          {items.player} Slected {items.squre.row},{items.squre.col}
        </li>
      ))}
    </ol>
  );
}
