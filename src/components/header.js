import React from "react";

function Header({ score, wins }) {
  return (
    <div>
      <h1>Welcome to Meme Memory Match! </h1>
      <p>
        Click on a tile to increase your score. But don't click the same tile
        twice!
      </p>
      <p>score:{score}</p>
      <p>wins: {wins}</p>
    </div>
  );
}

export default Header;
