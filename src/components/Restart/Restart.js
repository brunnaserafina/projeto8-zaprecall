import './style.css';

export default function Restart({ counter, start, setStart }) {
    if (counter === 8) {
      return (
        <>
          <button className="button-restart" onClick={() => { setStart(!start); }}>REINICIAR RECALL</button>
        </>
      )
    }
    return "";
  }