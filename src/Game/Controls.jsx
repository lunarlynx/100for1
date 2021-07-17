import React from 'react';

const Controls = ({next, storeLeft, storeRight}) => {
  return (
    <div className="controlsWrapper">

      <button onClick={storeLeft} className="controlsWrapper__gameButton">Начислить Лёше</button>
      <button onClick={next} className="controlsWrapper__gameButton nextRound">Следующий раунд</button>
      <button onClick={storeRight} className="controlsWrapper__gameButton">Начислить Маше</button>
    </div>
  )
}

export default Controls;
