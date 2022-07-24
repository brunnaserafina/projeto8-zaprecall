import Finish from './Finish';

let status = [];

export default function Footer({ counter, icon, wrong }) {
  status.push(icon[counter - 1]);

  return (
    <div className="completed">

      <Finish icon={icon} wrong={wrong} />

      <p>{counter}/8 CONCLUÍDOS</p>

      <div>
        <Icons counter={counter}/>
      </div>

    </div>
  );
}

function Icons({counter}){
  if (counter !== 0) {
    return (
      status.map((status, index) => (
        <img key={index} src={status} />
      ))
    );
  }
  return "";
}