import React, { useState } from "react";

export default function Player({ player_name, player_symbol,isActive}) {
  
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player_name);


 //helps to change isEditing to true to false and false to true 
  function handleEditClick() {
    setIsEditing((prev) => !prev);
  }
   
  //change event for display the updated  player name 
  function change(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">
          {isEditing ? (
            <input
              type="text"
              value={playerName}
              onChange={change}
              required
            />
          ) : (
            playerName
          )}
        </span>
        <span className="player-symbol">{player_symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
