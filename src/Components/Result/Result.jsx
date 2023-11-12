import React from 'react';
import PropTypes from 'prop-types';

import cryImg from '../../Images/cry.png';
import wtfImg from '../../Images/WTF.png';
import normalImg from '../../Images/normal.png';
import smileImg from '../../Images/smile.png';
import excellentImg from '../../Images/excellent.png';

function Result({ score, QuizData }) {
    const smileImages = {
        0: cryImg,
        1: wtfImg,
        2: wtfImg,
        3: normalImg,
        4: smileImg,
        5: excellentImg,
    };

    const smilesImg = smileImages[score];
    return (
        <>
            <img className='QuizResultImg' src={smilesImg} alt={smileImages[score]} data-testid='result-image' />
            <span className='QuizResultText'>
                Your score is {score} of {QuizData.length}.
            </span>
            <a className='QuizResultLink' href='/'>
                Try again
            </a>
        </>
    );
}

Result.propTypes = {
    QuizData: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
};

export default Result;
