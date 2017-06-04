import React from "react";
import { Prompt } from "react-router-dom";

const Board = () =>
  <div>
    <Prompt message="Are you sure you want to leave this game? This will end the game for all the players." />
    Game board
  </div>;

export default Board;
