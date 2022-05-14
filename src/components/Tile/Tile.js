import React, {useContext} from 'react';
import {AppContext} from '../../App.js';

import './Tile.css';

const Tile = ({rowPosition, tilePosition}) => {
  const {board} = useContext(AppContext);
  const {colorBoard} = useContext(AppContext);
  const letter = board[rowPosition][tilePosition];
  const color = colorBoard[rowPosition][tilePosition];
  return (
    <div className="Tile" style={{background: `${color}`}}>
    {letter}
    </div>
  )
}

export default Tile;
