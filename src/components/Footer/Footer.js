import Finish from '../Finish/Finish';
import Restart from '../Restart/Restart';
import './style.css';


export default function Footer({ counter, icon, wrong, start, setStart }) {
  return (
    <div className="completed">

      <Finish counter={counter} wrong={wrong} />

      <p>{counter}/8 CONCLUÍDOS</p>

      <div>
        {icon.map((i, index) => <img src={i} key={index} />)}
      </div>

      <Restart counter={counter} start={start} setStart={setStart} />
    </div>
  );
}

