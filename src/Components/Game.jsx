import React from 'react';
import PropTypes from 'prop-types';

function Game({ bar, step, QuizData, onClickAnswer }) {
    const currentItem = QuizData[step];
    return (
        <>
            <div className='Progress-bar'>
                <div style={{ width: bar + '%' }} className='Bar'></div>
            </div>
            <div className='QuizTop'>
                <span>
                    <span style={{ fontSize: 14 + 'px' }}>{step + 1}</span>/ {QuizData.length}
                </span>
                <h1 className='QuestionTitle'>{currentItem.question}</h1>
            </div>
            <ul className='QuizList'>
                {currentItem.variants.map((variant, index) => {
                    return (
                        <li className='QuizVariant' key={index} onClick={() => onClickAnswer(index)}>
                            {variant}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

Game.propTypes = {
    bar: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    QuizData: PropTypes.array.isRequired,
    onClickAnswer: PropTypes.func.isRequired,
};

export default Game;
