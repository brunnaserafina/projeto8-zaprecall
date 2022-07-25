import "./style.css";
import sad from "../assets/imgs/sad.svg";
import party from "../assets/imgs/party.svg";

export default function Finish({ icon, wrong }) {
    if (icon.length === 8 && wrong !== 0) {
        return (
            <div className="finished">
                <div>
                    <img src={sad} />
                    <span>Putz...</span>
                </div>
                <p>Ainda faltam alguns... </p>
                <p>Mas não desanime!</p>
            </div>
        )
    } else if (icon.length === 8 && wrong === 0) {
        return (
            <div className="finished">
                <div>
                    <img src={party}/>
                    <span>Parabéns!</span>
                </div>
                <p>Você não esqueceu de </p>
                <p>nenhum flashcard!</p>
            </div>
        )
    } 
    
    return ("");
    
}