import React from "react";
import PropTypes from 'prop-types';

function Result({score, QuizData}) {
    const [smileImg, setSmileImg] = React.useState(null);
    React.useEffect(() => {
        if (score == 0) {
            setSmileImg(require('../Images/cry.png'))
        } else if (score == 1 || score == 2) {
            setSmileImg(require('../Images/WTF.png'))
        } else if (score == 3) {
            setSmileImg(require('../Images/normal.png'))
        } else if (score == 4) {
            setSmileImg(require('../Images/smile.png'))
        } else if (score == 5) {
            setSmileImg(require('../Images/excellent.png'))
        }
    }, [score])
    return (
        <>
        <img className="QuizResultImg" src={smileImg} alt="Quiz results" />
        <span className="QuizResultText">Your score is {score} of {QuizData.length}.</span>
        <a className="QuizResultLink" href="/">Try again</a>
        </>
    )
}

Result.propTypes = {
    QuizData: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
};

export default Result;