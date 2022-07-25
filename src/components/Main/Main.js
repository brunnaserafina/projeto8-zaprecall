import React from 'react';
import Header from '../Header/Header';
import Flashcards from '../Flashcards/Flashcards';
import Footer from '../Footer/Footer';
import './style.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Main({ start, setStart }) {
  const [counter, setCounter] = React.useState(0);
  const [icon, setIcon] = React.useState([]);
  const [wrong, setWrong] = React.useState(0);

  return (
    <div className="flashcards-closed">
      <Header />

      <ul>
        {numbers.map((number, index) => (
          <Flashcards key={index} number={number} counter={counter} setCounter={setCounter} icon={icon} setIcon={setIcon} wrong={wrong} setWrong={setWrong} />
        ))}
      </ul>

      <Footer counter={counter} icon={icon} wrong={wrong} start={start} setStart={setStart}/>
    </div>
  );
}

