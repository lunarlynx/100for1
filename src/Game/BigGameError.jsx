import React, {useState} from 'react';
import errorSound from '../sounds/repeat.mp3'

export const BigGameError = () => {
  let [active, setActive] = useState(false);
  return <button onClick={() => {
    setActive(!active);
    setImmediate(() => {
      let sound = new Audio(errorSound);
      sound.play();
    })

  }} className="controlsWrapper__gameButton nextRound">Repeat!</button>
}
