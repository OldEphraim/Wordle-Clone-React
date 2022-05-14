import React, {useContext} from 'react';
import {AppContext} from '../../App.js';

import './Keytile.css';

const Keytile = ({position}) => {
  const {colorKeyboard} = useContext(AppContext);
  const {keyboard} = useContext(AppContext);
  const keyArray = [];
  for (let n = 0; n < 26; n++) {
    if (keyboard[n][0] === position) {
      keyArray.push(keyboard[n][1]);
      keyArray.push(keyboard[n][2]);
    }
  }
  const keyColor = colorKeyboard[keyArray[0]][keyArray[1]];
  return (
    <div className="Keytile" style={{background: `${keyColor}`}}>
      {position}
    </div>
  )
}

export default Keytile;
