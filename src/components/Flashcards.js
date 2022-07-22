import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const questions = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda ____", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes" },
    { question: "Usamos estado(state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
];

const mapeei = (questions.map((question, index) => (
    <Card key={index} question={question.question} answer={question.answer} />
)));

const embaralhei = mapeei.sort(()=> Math.random() - 0.5);

export default function Flashcards({ play, setPlay }) {
    return (
        <div className="flashcards-closed">
            <div className="logo-title">
                <img src="./assets/imgs/logo.png" className="logo2" />
                <span className="title">ZapRecall</span>
            </div>

            <ul>
                {(numbers.map((number, index) => (
                    <Flashcard key={index} number={number} />
                )))}
            </ul>

            <div className="completed">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    );
}

function Flashcard({ number }) {
    const [play, setPlay] = React.useState(true);
    
    if (play === false) {
        return (
            <>
                {embaralhei[number - 1]}
            </>
        );
    }

    return (
        <li className="flashcard" onClick={() => setPlay(!play)}>
            <p>Pergunta {number}</p>
            <ion-icon name="play-outline" ></ion-icon>
        </li>
    );

}

function Card({ question, answer }) {
    return (
        <div className="card-front">
            <h1>{question}</h1>
            <img src="./assets/imgs/setinha.png" className="seta"/>
        </div>
    );
}