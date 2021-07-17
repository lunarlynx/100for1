import React, {useState} from 'react';
import errorSound from '../sounds/timer.mp3'

export const Timer = () => {
  return <button onClick={() => {
    setImmediate(() => {
      let sound = new Audio(errorSound);
      sound.play();
    })

  }} className="controlsWrapper__gameButton nextRound">Таймер</button>
}
