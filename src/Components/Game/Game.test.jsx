import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Game from './Game';

/*
   ! This block is made for check GAME component question and variants to be in the document.
*/

describe('Game component check each question and each variant is correct', () => {
    // Quiz data
    const QuizData = [
        { question: 'The largest country in the world?', variants: ['USA', 'China', 'Russia', 'Africa'], correct: 2 },
        { question: 'The most used language on the internet?', variants: ['Russian', 'English', 'German', 'Spanish'], correct: 1 },
        { question: 'The most difficult language in the world?', variants: ['Japanese', 'Arabic', 'Korean', 'Mandarin'], correct: 3 },
        { question: 'The most used programming language', variants: ['Python', 'C++', 'JavaScript', 'Java'], correct: 2 },
        { question: 'HTML is?', variants: ['Holographic Text Manipulation Lingo', 'Human-Transforming Magical Language', 'Hyper Text Markup Language', 'Hyperdimensional Template Management Lexicon'], correct: 2 },
    ];

    // Function which test our game component with step 0;
    it('First question and variants is correct', () => {
        render(<Game QuizData={QuizData} step={0} bar={0} onClickAnswer={() => {}} />);

        // Find question
        const questionElement = screen.getByRole('heading', { name: /The largest country in the world?/i }); // /i - без учёта регистра
        expect(questionElement).toBeInTheDocument(); // test

        // Find each variants
        QuizData[0].variants.forEach((variant) => {
            const variantElement = screen.getByText(variant); // get each variant
            expect(variantElement).toBeInTheDocument(); // check each variant to be in the document
        });
    });

    // Function which test our game component with step 1;
    it('Second question and variants is correct', () => {
        render(<Game QuizData={QuizData} step={1} bar={Math.round((1 / QuizData.length) * 100)} onClickAnswer={() => {}} />);

        // Find question
        const questionElement = screen.getByRole('heading', { name: /The most used language on the internet?/i }); // /i - без учёта регистра
        expect(questionElement).toBeInTheDocument(); // test

        // Find each variants
        QuizData[1].variants.forEach((variant) => {
            const variantElement = screen.getByText(variant); // get each variant
            expect(variantElement).toBeInTheDocument(); // check each variant to be in the document
        });
    });

    // Function which test our game component with step 2;
    it('Third question and variants is correct', () => {
        render(<Game QuizData={QuizData} step={2} bar={Math.round((2 / QuizData.length) * 100)} onClickAnswer={() => {}} />);

        // Find question
        const questionElement = screen.getByRole('heading', { name: /The most difficult language in the world?/i }); // /i - без учёта регистра
        expect(questionElement).toBeInTheDocument(); // test

        // Find each variants
        QuizData[2].variants.forEach((variant) => {
            const variantElement = screen.getByText(variant); // get each variant
            expect(variantElement).toBeInTheDocument(); // check each variant to be in the document
        });
    });

    // Function which test our game component with step 3;
    it('Fourth question and variants is correct', () => {
        render(<Game QuizData={QuizData} step={3} bar={Math.round((3 / QuizData.length) * 100)} onClickAnswer={() => {}} />);

        // Find question
        const questionElement = screen.getByRole('heading', { name: /The most used programming language?/i }); // /i - без учёта регистра
        expect(questionElement).toBeInTheDocument(); // test

        // Find each variants
        QuizData[3].variants.forEach((variant) => {
            const variantElement = screen.getByText(variant); // get each variant
            expect(variantElement).toBeInTheDocument(); // check each variant to be in the document
        });
    });

    // Function which test our game component with step 4;
    it('Fifth question and variants is correct', () => {
        render(<Game QuizData={QuizData} step={4} bar={Math.round((4 / QuizData.length) * 100)} onClickAnswer={() => {}} />);

        // Find question
        const questionElement = screen.getByRole('heading', { name: /HTML is?/i }); // /i - без учёта регистра
        expect(questionElement).toBeInTheDocument(); // test

        // Find each variants
        QuizData[4].variants.forEach((variant) => {
            const variantElement = screen.getByText(variant); // get each variant
            expect(variantElement).toBeInTheDocument(); // check each variant to be in the document
        });
    });
});
///////////////////////////////////////////////////////////////////////////////////////
