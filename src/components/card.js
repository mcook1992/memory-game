import React from "react";

function Card({ number, hasBeenClicked, id, onClick, link }) {
  return (
    <li
      onClick={onClick}
      className="memoryCard"
      data-value={hasBeenClicked}
      // id={id}
    >
      <img src={link} id={id} />
      {/* {number} */}
    </li>
  );
}

export default Card;
