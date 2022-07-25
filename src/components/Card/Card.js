import React from "react";
import "./style.css";
import err from "../assets/imgs/error.svg";
import alm from "../assets/imgs/almost.svg";
import corr from "../assets/imgs/correct.svg";
import arrow from "../assets/imgs/setinha.png";

let icone = [];

export default function Card({ number, question, answer, counter, setCounter, setIcon, setWrong }) {
    const [flip, setFlip] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [almost, setAlmost] = React.useState(false);
    const [correct, setCorrect] = React.useState(false);

    if (error) {
        return (
            <li className="flashcard">
                <p className="red">Pergunta {number}</p>
                <img src={err} />
            </li>
        );
    } else if (almost) {
        return (
            <li className="flashcard">
                <p className="orange">Pergunta {number}</p>
                <img src={alm} />
            </li>
        );
    } else if (correct) {
        return (
            <li className="flashcard">
                <p className="green">Pergunta {number}</p>
                <img src={corr} />
            </li>
        );
    }

    return (
        flip ? (
            <div className="card-front">
                <h1>{question}</h1>
                <img src={arrow} className="arrow" onClick={() => setFlip(false)} />
            </div>
        ) : (
            <div className="card-front">
                <h1>{answer}</h1>
                <div className="buttons">
                    <button className="error" onClick={() => { setCounter(counter + 1); setError(true); icone.push(err); setWrong(1); setIcon(icone); }}>Não lembrei</button>
                    <button className="almost" onClick={() => { setCounter(counter + 1); setAlmost(true); icone.push(alm); setIcon(icone); }}>Quase não lembrei</button>
                    <button className="zap" onClick={() => { setCounter(counter + 1); setCorrect(true); icone.push(corr); setIcon(icone); }}>Zap</button>
                </div>
            </div>
        )
    )
}
