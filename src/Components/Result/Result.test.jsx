import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Result from './Result';

/*
   ! This code is made to check RESULT component all scenes, where score is a value 0 to 5 and for each value is corresponding image which will be on RESULT component page.
*/

describe('Result component check', () => {
    // Quiz data
    const QuizData = [
        { question: 'The largest country in the world?', variants: ['USA', 'China', 'Russia', 'Africa'], correct: 2 },
        { question: 'The most used language on the internet?', variants: ['Russian', 'English', 'German', 'Spanish'], correct: 1 },
        { question: 'The most difficult language in the world?', variants: ['Japanese', 'Arabic', 'Korean', 'Mandarin'], correct: 3 },
        { question: 'The most used programming language', variants: ['Python', 'C++', 'JavaScript', 'Java'], correct: 2 },
        { question: 'HTML is?', variants: ['Holographic Text Manipulation Lingo', 'Human-Transforming Magical Language', 'Hyper Text Markup Language', 'Hyperdimensional Template Management Lexicon'], correct: 2 },
    ];

    it('Result renders', () => {
        render(<Result QuizData={QuizData} score={0} />);

        const resultElement = screen.getByTestId('result-image'); // Добавьте атрибут data-testid="result" к компоненту Result
        expect(resultElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 0;
    it('Results is 0', () => {
        render(<Result score={0} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('cry.png');
        expect(imageElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 1;
    it('Results is 1', () => {
        render(<Result score={1} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('WTF.png');
        expect(imageElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 2;
    it('Results is 2', () => {
        render(<Result score={2} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('WTF.png');
        expect(imageElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 3;
    it('Results is 3', () => {
        render(<Result score={3} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('normal.png');
        expect(imageElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 4;
    it('Results is 4', () => {
        render(<Result score={4} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('smile.png');
        expect(imageElement).toBeInTheDocument();
    });

    // Function which test our result component where score is 5;
    it('Results is 5', () => {
        render(<Result score={5} QuizData={QuizData} />);

        // Find image
        const imageElement = screen.getByAltText('excellent.png');
        expect(imageElement).toBeInTheDocument();
    });
});
///////////////////////////////////////////////////////////////////////////////////////
