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

const embaralhei = questions.sort(() => Math.random() - 0.5);

const errou = [];
let array = [];

const erro1 = <img src="./assets/imgs/error.svg" />
const quase1 = <img src="./assets/imgs/almost.svg" />
const acerto1 = <img src="./assets/imgs/correct.svg" />

export default function Flashcards() {
    const [contador, setContador] = React.useState(0)

    const [icon, setIcon] = React.useState("");

    return (
        <div className="flashcards-closed">
            <div className="logo-title">
                <img src="./assets/imgs/logo.png" className="logo2" />
                <span className="title">ZapRecall</span>
            </div>

            <ul>
                {(numbers.map((number, index) => (
                    <Flashcard key={index} number={number} contador={contador} setContador={setContador} icon={icon} setIcon={setIcon} />
                )))}
            </ul>

            <div className="completed">
                <Mensagem />
                <p>{contador}/8 CONCLUÍDOS</p>
                <div>
                    {array}
                </div>
            </div>
        </div>
    );
}

function Mensagem() {
    if (array.length === 8 && errou.length !== 0) {
        return (
            <div className="finished">
                <div>
                    <img src="./assets/imgs/sadd.svg" />
                    <span>Putz...</span>
                </div>
                <p>Ainda faltam alguns... </p>
                <p>Mas não desanime!</p>
            </div>
        )
    } else if (array.length === 8 && errou.length === 0) {
        return (
            <div className="finished">
                <div>
                    <img src="./assets/imgs/partyy.svg" />
                    <span>Parabéns!</span>
                </div>
                <p>Você não esqueceu de </p>
                <p>nenhum flashcard!</p>
            </div>

        )
    } else {
        return ("");
    }
}

function Flashcard({ number, contador, setContador, icon, setIcon }) {
    const [play, setPlay] = React.useState(true);

    const embaralhei = (questions.map((question, index) => (
        <Card key={index} question={question.question} answer={question.answer} number={number} contador={contador} setContador={setContador} icon={icon} setIcon={setIcon} />
    )));


    return (
        ((play) ? (
            <li className="flashcard" onClick={() => setPlay(!play)}>
                <p>Pergunta {number}</p>
                <ion-icon name="play-outline" ></ion-icon>
            </li>
        ) : (
            <>
                {embaralhei[number - 1]}
            </>
        ))
    );
}



function Card({ question, answer, number, contador, setContador, icon, setIcon }) {
    const [virar, setVirar] = React.useState(true);

    const [naoLembrei, setNaoLembrei] = React.useState(false);
    const [quase, setQuase] = React.useState(false);
    const [zap, setZap] = React.useState(false);

    if (naoLembrei === true) {
        return (
            <li className="flashcard">
                <p className="vermelho">Pergunta {number}</p>
                <img src="./assets/imgs/error.svg" />
            </li>
        )
    } else if (quase === true) {
        return (
            <li className="flashcard">
                <p className="laranja">Pergunta {number}</p>
                <img src="./assets/imgs/almost.svg" />
            </li>
        )
    } else if (zap === true) {
        return (
            <li className="flashcard">
                <p className="verde">Pergunta {number}</p>
                <img src="./assets/imgs/correct.svg" />
            </li>
        )
    }

    return (
        <div className="card-front">
            {(virar) ? (
                <>
                    <h1>{question}</h1>
                    <img src="./assets/imgs/setinha.png" className="seta" onClick={() => setVirar(false)} />
                </>

            ) : (
                <>
                    <h1>{answer}</h1>
                    <div className="botoes">
                        <button className="nao-lembrei" onClick={() => { setNaoLembrei(true); setContador(contador + 1); array.push(erro1); errou.push(erro1) }}>Não lembrei</button>
                        <button className="quase" onClick={() => { setQuase(true); setContador(contador + 1); array.push(quase1) }}>Quase não lembrei</button>
                        <button className="zap" onClick={() => { setZap(true); setContador(contador + 1); array.push(acerto1) }}>Zap</button>
                    </div>

                </>
            )}
        </div>
    );
}