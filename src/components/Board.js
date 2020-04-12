import React from "react";
import { useSelector } from "react-redux";
import { Square } from "components/Square";

export const Board = () => {
  const squares = useSelector((store) => store.game.squares);

  return (
    <div className='board'>
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  );
};
