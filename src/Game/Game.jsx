import React, {useState} from 'react';
import questions from '../json/questions.json';
import Controls from './Controls';
import AnswerPanel from './AnswerPanel';
import BigGame from './BigGame';

//todo сделать тайтл (большая игра, игра наоборот в зависимости от значений)
//todo сделать блюр чтобы скрывать ответы в большой игре

const Game = () => {

  const [roundNumber, setRoundNumber] = useState(0);

  const questionsArray = questions.questions;
  const answersArray = questionsArray.map((item) => (item.answers));
  const [totalLeft, setTotalLeft] = useState(0);
  const [totalRight, setTotalRight] = useState(0);

  //считаем очки в банк
  const [roundScore, setRoundScore] = useState(0);

  return (
    roundNumber <= 1 ? (<div className="gameBoard">
      <div className="totalScore">
        <div className="totalScore__window">
          {/*Сюда складываются очки из плашечек*/}
          <span className="totalScore__window--value">{roundScore}</span>
        </div>
      </div>
      <div className="questionsField">
        <div className="leftBandScore">
          <div className="leftBandScore__window">
            {/*Сюда складываются очки первой команды*/}
            <span className="leftBandScore__window--value">{totalLeft}</span>
          </div>
        </div>

        <div className="answersField">
          <div className="leftBandErrors">
            <ul className="errors">
              {/*При промахе первой команды ставь класс active на бочонок*/}
              <li className="errors__error--1"/>
              <li className="errors__error--2 active"/>
              <li className="errors__error--3 active"/>
            </ul>
          </div>
          <div className="answersField__answers">
            {answersArray[roundNumber].map((item, i) => (
              <AnswerPanel key={`${roundNumber}_${i}`} item={item}
                           updateRoundScore={(value) => setRoundScore((roundNumber === 1 ? 0 : roundScore) + value)}/>
            ))}
          </div>
          <div className="rightBandErrors">
            <ul className="errors">
              {/*При промахе второй команды ставь класс active на бочонок*/}
              <li className="errors__error--1"/>
              <li className="errors__error--2"/>
              <li className="errors__error--3 active"/>
            </ul>
          </div>
        </div>

        <div className="rightBandScore">
          <div className="rightBandScore__window">
            {/*Сюда складываются очки второй команды*/}
            <span className="rightBandScore__window--value">{totalRight}</span>
          </div>
        </div>
      </div>
      <Controls storeLeft={() => {
        setTotalLeft(totalLeft + roundScore);
        setRoundScore(0);
      }} storeRight={() => {
        setTotalRight(totalRight + roundScore);
        setRoundScore(0);
      }} next={() => {
        setRoundScore(0);
        setRoundNumber(roundNumber + 1);
      }}/>
    </div>) : <BigGame/>
  )
}

export default Game;
