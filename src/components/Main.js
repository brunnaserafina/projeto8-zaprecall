import React from 'react';
import Header from './Header';
import Flashcards from './Flashcards';
import Footer from './Footer';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Main() {
  const [counter, setCounter] = React.useState(0);
  const [icon, setIcon] = React.useState("");
  const [wrong, setWrong] = React.useState(0);

  return (
    <div className="flashcards-closed">
      <Header />

      <ul>
        {numbers.map((number, index) => (
          <Flashcards key={index} number={number} counter={counter} setCounter={setCounter} icon={icon} setIcon={setIcon} wrong={wrong} setWrong={setWrong} />
        ))}
      </ul>

      <Footer counter={counter} icon={icon} wrong={wrong} />
    </div>
  );
}

