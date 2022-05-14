import React from 'react';

import Tile from '../Tile/Tile.js';
import './Board.css';

const Board = () => {
  return (
  <div className="board">
    <div className="row">
      <Tile rowPosition={0} tilePosition={0} />
      <Tile rowPosition={0} tilePosition={1} />
      <Tile rowPosition={0} tilePosition={2} />
      <Tile rowPosition={0} tilePosition={3} />
      <Tile rowPosition={0} tilePosition={4} />
      <Tile rowPosition={0} tilePosition={5} />
    </div>
    <div className="row">
      <Tile rowPosition={1} tilePosition={0} />
      <Tile rowPosition={1} tilePosition={1} />
      <Tile rowPosition={1} tilePosition={2} />
      <Tile rowPosition={1} tilePosition={3} />
      <Tile rowPosition={1} tilePosition={4} />
      <Tile rowPosition={1} tilePosition={5} />
    </div>
    <div className="row">
      <Tile rowPosition={2} tilePosition={0} />
      <Tile rowPosition={2} tilePosition={1} />
      <Tile rowPosition={2} tilePosition={2} />
      <Tile rowPosition={2} tilePosition={3} />
      <Tile rowPosition={2} tilePosition={4} />
      <Tile rowPosition={2} tilePosition={5} />
    </div>
    <div className="row">
      <Tile rowPosition={3} tilePosition={0} />
      <Tile rowPosition={3} tilePosition={1} />
      <Tile rowPosition={3} tilePosition={2} />
      <Tile rowPosition={3} tilePosition={3} />
      <Tile rowPosition={3} tilePosition={4} />
      <Tile rowPosition={3} tilePosition={5} />
    </div>
    <div className="row">
      <Tile rowPosition={4} tilePosition={0} />
      <Tile rowPosition={4} tilePosition={1} />
      <Tile rowPosition={4} tilePosition={2} />
      <Tile rowPosition={4} tilePosition={3} />
      <Tile rowPosition={4} tilePosition={4} />
      <Tile rowPosition={4} tilePosition={5} />
    </div>
    <div className="row">
      <Tile rowPosition={5} tilePosition={0} />
      <Tile rowPosition={5} tilePosition={1} />
      <Tile rowPosition={5} tilePosition={2} />
      <Tile rowPosition={5} tilePosition={3} />
      <Tile rowPosition={5} tilePosition={4} />
      <Tile rowPosition={5} tilePosition={5} />
    </div>
  </div>
  )
}

export default Board;
