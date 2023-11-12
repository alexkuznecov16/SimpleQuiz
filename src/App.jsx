import './App.css';
import React from 'react';
import Game from './Components/Game/Game';
import Result from './Components/Result/Result';

function App() {
    const QuizData = [
        {
            question: 'The largest country in the world?',
            variants: ['USA', 'China', 'Russia', 'Africa'],
            correct: 2,
        },
        {
            question: 'The most used language on the internet?',
            variants: ['Russian', 'English', 'German', 'Spanish'],
            correct: 1,
        },
        {
            question: 'The most difficult language in the world?',
            variants: ['Japanese', 'Arabic', 'Korean', 'Mandarin'],
            correct: 3,
        },
        {
            question: 'The most used programming language',
            variants: ['Python', 'C++', 'JavaScript', 'Java'],
            correct: 2,
        },
        {
            question: 'HTML is?',
            variants: ['Holographic Text Manipulation Lingo', 'Human-Transforming Magical Language', 'Hyper Text Markup Language', 'Hyperdimensional Template Management Lexicon'],
            correct: 2,
        },
    ];

    const [step, setStep] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [bar, setBar] = React.useState(0);

    const onClickAnswer = (variantIndex) => {
        if (variantIndex == QuizData[step].correct) {
            setScore(score + 1);
            console.log('Correct!!!');
        }
        const newStep = step + 1;
        const newBar = Math.round((newStep / QuizData.length) * 100);
        setBar(newBar);
        setStep(newStep);
    };

    return (
        <div className='Quiz'>
            <div className='QuizBlock'>{step < QuizData.length ? <Game bar={bar} step={step} QuizData={QuizData} onClickAnswer={onClickAnswer} /> : <Result data-testid='result' score={score} QuizData={QuizData} />}</div>
        </div>
    );
}

export default App;
