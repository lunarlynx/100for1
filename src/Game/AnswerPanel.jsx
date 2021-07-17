import React, {useState} from 'react';
import openSound from '../sounds/success.mp3';
const AnswerPanel = ({item, updateRoundScore}) => {

  //по идее переключает состояние плашечки
  const [open, setOpen] = useState(false);

  const showAnswerHandler = () => {
    if (open) return;
    setOpen(true);
    updateRoundScore(item[2]);
    setImmediate(() => {
      let sound = new Audio(openSound);
      sound.play();
    })
  }

  return (
    <>
      <div className="answersField__answersContainer">
        <button
          className={open ? 'answersField__answers--answer unCover' : 'answersField__answers--answer'}
          onClick={showAnswerHandler}>
          <span className="answerNumber">{item[0]}</span>
          <span className="answerText">
                <span className="answerText__text">{item[1]}</span>
                <span className="answerText__dig">{item[2]}</span>
            </span>
        </button>
      </div>

    </>


  )
}

export default AnswerPanel;
