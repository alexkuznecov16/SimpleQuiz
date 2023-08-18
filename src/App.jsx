import './App.css';

function App() {
    const QuizData = [
        {
            question: '1 question',
            variants: ['1', '2', '3', '4'],
            correct: 0,
        },
        {
            question: '2 question',
            variants: ['4', '3', '2', '1'],
            correct: 0,
        },
        {
            question: '3 question',
            variants: ['1', '2', '3', '4'],
            correct: 0,
        },
        {
            question: '4 question',
            variants: ['1', '2', '3', '4'],
            correct: 0,
        },
        {
            question: '5 question',
            variants: ['4', '3', '2', '1'],
            correct: 0,
        },
    ];
    return (
        <div className='Quiz'>
            <div className='QuizBlock'>
                <div className='Progress-bar'>
                    <div className='Bar'></div>
                </div>
                <h1 className='QuestionTitle'></h1>
            </div>
        </div>
    );
}

export default App;
