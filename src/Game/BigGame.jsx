import React, {useState} from 'react';

const BigGame = () => {

  //Большая игра отличается тем, что плашечки не переворачиваются.
  // Игрок дает сразу все ответы на вопросы, а потом мы выводим их на табло списком.
  // Потом сравниваем два списка ответов рядом

  const [hidden, setHidden] = useState(false);
  const [leftScore, setLeftScope] = useState(0);
  const [rightScore, setRightScope] = useState(0);
  const [leftNumbers, setLeftNumbers] = useState([]);
  const [rightNumbers, setRightNumbers] = useState([]);
  const numberOfQuestions = 6;

  let leftBlocks = [];
  let rightBlocks = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    leftBlocks.push(<div className="answersField__answersContainer">
      <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input onChange={(e) => {
                                          let leftNew = [...leftNumbers];
                                          leftNew[i] = Number(e.target.value);
                                          setLeftNumbers(leftNew);
                                          setLeftScope(leftNew.reduce((a, b) => a + b, 0));
                                        }} className="number"/>
                                    </span>
      </div>
    </div>)

    rightBlocks.push(<div className="answersField__answersContainer">
      <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input onChange={(e) => {
                                          let rightNew = [...rightNumbers];
                                          rightNew[i] = Number(e.target.value);
                                          setRightNumbers(rightNew);
                                          setRightScope(rightNew.reduce((a, b) => a + b, 0));
                                        }} className="number"/>
                                    </span>
      </div>
    </div>)
  }

  return (
    <div className="gameBoard">
      <div className="totalScore">
        <div className="totalScore__window">
          {/*Сюда складываются очки из плашечек*/}
          <span className="totalScore__window--value">{leftScore + rightScore}</span>
        </div>
      </div>
      <div className="questionsField">
        <div className="leftBandScore">
          <div className="leftBandScore__window">
            {/*Сюда складываются очки первой команды*/}
            <span className="leftBandScore__window--value">{leftScore}</span>
          </div>
        </div>

        <div className="answersField">
          <div className="answersField__answers bigGameField">

            <div className="answersField__answers--bigGameLeft">
              {leftBlocks}
            </div>

            <div className="answersField__answers--bigGameLeft">
              {rightBlocks}
            </div>
          </div>
        </div>

        <div className="rightBandScore">
          <div className="rightBandScore__window">
            {/*Сюда складываются очки второй команды*/}
            <span className="rightBandScore__window--value">{rightScore}</span>
          </div>
        </div>
      </div>
      <div className="controlsWrapper">
        <button onClick={() => setHidden(!hidden)}
                className="controlsWrapper__gameButton nextRound">{hidden ? 'Показать' : 'Скрыть'}</button>
      </div>
    </div>
  )
}

export default BigGame;
