import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

/*
  !  This block is made for check APP component first question to be correct.
*/

test('Quiz first question is correct', () => {
    const QuizData = [
        { question: 'The largest country in the world?', variants: ['USA', 'China', 'Russia', 'Africa'], correct: 2 },
        { question: 'The most used language on the internet?', variants: ['Russian', 'English', 'German', 'Spanish'], correct: 1 },
        { question: 'The most difficult language in the world?', variants: ['Japanese', 'Arabic', 'Korean', 'Mandarin'], correct: 3 },
        { question: 'The most used programming language', variants: ['Python', 'C++', 'JavaScript', 'Java'], correct: 2 },
        { question: 'HTML is?', variants: ['Holographic Text Manipulation Lingo', 'Human-Transforming Magical Language', 'Hyper Text Markup Language', 'Hyperdimensional Template Management Lexicon'], correct: 2 },
    ];

    render(<App appData={QuizData} />);
    const firstQuestionText = QuizData[0].question;
    const firstQuestion = screen.getByText(firstQuestionText);
    expect(firstQuestion).toBeInTheDocument();
});
///////////////////////////////////////////////////////////////////////////////////////
