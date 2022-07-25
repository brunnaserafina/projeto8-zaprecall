import Finish from '../Finish/Finish';
import './style.css';

let status = [];

export default function Footer({ counter, icon, wrong }) {
  status.push(icon[counter - 1]);

  return (
    <div className="completed">

      <Finish icon={icon} wrong={wrong} />

      <p>{counter}/8 CONCLUÍDOS</p>

      <Icons counter={counter} />

    </div>
  );
}

function Icons({ counter }) {
  if (counter !== 0) {
    return (
      <div>
        {status.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
    );
  }
  return "";
}