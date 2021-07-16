import React, {useState} from "react";

const AnswerPanel = ({item, setBankValue}) => {

    //по идее переключает состояние плашечки
    const [answerCover, setAnswerCover] = useState('answersField__answers--answer');

    const [bankT, setBankT] = useState(setBankValue);
    const showAnswerHandler = () => {
        setAnswerCover('answersField__answers--answer unCover');

        setBankT(bankT + item[2]);
    }
    console.log(bankT);


    return (
        <>
            <div className="answersField__answersContainer">
                <button
                    className={answerCover}
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
