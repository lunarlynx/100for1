import React from 'react';
import {Timer} from './Timer';

const Controls = ({next, storeLeft, storeRight}) => {
  return (
    <div className="controlsWrapper">

      <button onClick={storeLeft} className="controlsWrapper__gameButton">Transfer 1</button>
      <Timer />
      <button onClick={next} className="controlsWrapper__gameButton nextRound">Next round</button>
      <button onClick={storeRight} className="controlsWrapper__gameButton">Transfer 2</button>
    </div>
  )
}

export default Controls;
