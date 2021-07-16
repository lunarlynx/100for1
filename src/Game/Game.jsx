import React, {useState} from "react";
import questions from "../json/questions.json";
import Controls from "./Controls";
import AnswerPanel from "./AnswerPanel";

const Game = () => {

    const questionsArray = questions.questions;
    const answersArray = questionsArray.map((item) => (item.answers));

    //просто хотела вывести пример ответов
    const answersArray1 = answersArray[0];

    //считаем очки в банк
    const [bankValue, setBankValue] = useState(0);

    return (
        <div className="gameBoard">
            <div className="totalScore">
                <div className="totalScore__window">
                    {/*Сюда складываются очки из плашечек*/}
                    <span className="totalScore__window--value">{bankValue}</span>
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
                    <div className="leftBandErrors">
                        <ul className="errors">
                            {/*При промахе первой команды ставь класс active на бочонок*/}
                            <li className="errors__error--1" />
                            <li className="errors__error--2 active" />
                            <li className="errors__error--3 active" />
                        </ul>
                    </div>
                    <div className="answersField__answers">
                        {/*Сюда выводятся все ответы с цифрами. Если их больше 6, то ничего страшного*/}
                        {answersArray1.map((item) => (
                           <AnswerPanel item={item} setBankValue={bankValue} />
                        ))}
                    </div>
                    <div className="rightBandErrors">
                        <ul className="errors">
                            {/*При промахе второй команды ставь класс active на бочонок*/}
                            <li className="errors__error--1" />
                            <li className="errors__error--2" />
                            <li className="errors__error--3 active" />
                        </ul>
                    </div>
                </div>

                <div className="rightBandScore">
                    <div className="rightBandScore__window">
                        {/*Сюда складываются очки второй команды*/}
                        <span className="rightBandScore__window--value">222</span>
                    </div>
                </div>
            </div>
            <Controls/>
        </div>
    )
}

export default Game;
