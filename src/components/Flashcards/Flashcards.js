import React from "react";
import Card from '../Card/Card';

const deck = [
  { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
  { question: "O React é _____ ", answer: "uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com _____ ", answer: "letra maiúscula" },
  { question: "Podemos colocar _____ dentro do JSX", answer: "expressões" },
  { question: "O ReactDOM nos ajuda ______", answer: "interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para _____ ", answer: "gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para _____", answer: "passar diferentes informações para componentes" },
  { question: "Usamos estado(state) para _____ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
];

const questionsSort = deck.sort(() => Math.random() - 0.5);

export default function Flashcards({ number, counter, setCounter, icon, setIcon, wrong, setWrong }) {
  const [start, setStart] = React.useState(true);

  const question = (questionsSort.map((question, index) => (
    <Card key={index} number={number} question={question.question} answer={question.answer} counter={counter} setCounter={setCounter} icon={icon} setIcon={setIcon} wrong={wrong} setWrong={setWrong} />
  )));

  return (
    start ? (
      <li className="flashcard" onClick={() => setStart(!start)}>
        <p>Pergunta {number}</p>
        <ion-icon name="play-outline" ></ion-icon>
      </li>
    ) : (
      <>
        {question[number - 1]}
      </>
    )
  );
}