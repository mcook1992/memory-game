import React from "react";

function Header({ score, wins }) {
  return (
    <div>
      <p>Welcome to the game</p>
      <p>score:{score}</p>
      <p>wins: {wins}</p>
    </div>
  );
}

export default Header;
