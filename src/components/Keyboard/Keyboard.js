import React from 'react';

import Keytile from '../Keytile/Keytile.js';
import './Keyboard.css';

const Keyboard = () => {
  return (
  <div className="Keyboard">
    <div className="gap"></div>
    <div className="keyRow" id="keyRow1">
      <Keytile position={"Q"} />
      <Keytile position={"W"} />
      <Keytile position={"E"} />
      <Keytile position={"R"} />
      <Keytile position={"T"} />
      <Keytile position={"Y"} />
      <Keytile position={"U"} />
      <Keytile position={"I"} />
      <Keytile position={"O"} />
      <Keytile position={"P"} />
      </div>
    <div className="gap"></div>
    <div className="keyRow" id="keyRow2">
      <Keytile position={"A"} />
      <Keytile position={"S"} />
      <Keytile position={"D"} />
      <Keytile position={"F"} />
      <Keytile position={"G"} />
      <Keytile position={"H"} />
      <Keytile position={"J"} />
      <Keytile position={"K"} />
      <Keytile position={"L"} />
      </div>
    <div className="gap"></div>
    <div className="keyRow" id="keyRow3">
      <Keytile position={"Z"} />
      <Keytile position={"X"} />
      <Keytile position={"C"} />
      <Keytile position={"V"} />
      <Keytile position={"B"} />
      <Keytile position={"N"} />
      <Keytile position={"M"} />
      </div>
  </div>
)
}

export default Keyboard;
