import React from "react";

let icone = [];

export default function Flashcard({ number, question, answer, counter, setCounter, setIcon, setWrong }) {
    const [flip, setFlip] = React.useState(true);
    const [erro, setErro] = React.useState(false);
    const [quase, setQuase] = React.useState(false);
    const [correto, setCorreto] = React.useState(false);

    if (erro) {
        return (
            <li className="flashcard">
                <p className="vermelho">Pergunta {number}</p>
                <img src="./assets/imgs/error.svg" />
            </li>
        );
    } else if (quase) {
        return (
            <li className="flashcard">
                <p className="laranja">Pergunta {number}</p>
                <img src="./assets/imgs/almost.svg" />
            </li>
        );
    } else if (correto) {
        return (
            <li className="flashcard">
                <p className="verde">Pergunta {number}</p>
                <img src="./assets/imgs/correct.svg" />
            </li>
        );
    }

    return (
        flip ? (
            <div className="card-front">
                <h1>{question}</h1>
                <img src="./assets/imgs/setinha.png" className="seta" onClick={() => setFlip(false)} />
            </div>
        ) : (
            <div className="card-front">
                <h1>{answer}</h1>
                <div className="botoes">
                    <button className="nao-lembrei" onClick={() => { setCounter(counter + 1); setErro(true); icone.push("./assets/imgs/error.svg"); setWrong(1); setIcon(icone); }}>Não lembrei</button>
                    <button className="quase" onClick={() => { setCounter(counter + 1); setQuase(true); icone.push("./assets/imgs/almost.svg"); setIcon(icone); }}>Quase não lembrei</button>
                    <button className="zap" onClick={() => { setCounter(counter + 1); setCorreto(true); icone.push("./assets/imgs/correct.svg"); setIcon(icone); }}>Zap</button>
                </div>
            </div>
        )
    )
}
