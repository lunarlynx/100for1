import React, {useState} from 'react';

const BigGame = () => {

  //Большая игра отличается тем, что плашечки не переворачиваются.
  // Игрок дает сразу все ответы на вопросы, а потом мы выводим их на табло списком.
  // Потом сравниваем два списка ответов рядом

  const [hidden, setHidden] = useState(false);

  return (
    <div className="gameBoard">
      <div className="totalScore">
        <div className="totalScore__window">
          {/*Сюда складываются очки из плашечек*/}
          <span className="totalScore__window--value">200</span>
        </div>
      </div>
      <div className="questionsField">
        <div className="leftBandScore">
          <div className="leftBandScore__window">
            {/*Сюда складываются очки первой команды*/}
            <span className="leftBandScore__window--value">111</span>
          </div>
        </div>

        <div className="answersField">
          <div className="answersField__answers bigGameField">

            <div className="answersField__answers--bigGameLeft">
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
            </div>

            <div className="answersField__answers--bigGameLeft">
              {/* Ответы второго игрока */}
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
              <div className="answersField__answersContainer">
                <div className="answersField__answers--answer unCover">
                                    <span className="answerText">
                                        <input className="text"/>
                                        <input className="number"/>
                                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightBandScore">
          <div className="rightBandScore__window">
            {/*Сюда складываются очки второй команды*/}
            <span className="rightBandScore__window--value">222</span>
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
