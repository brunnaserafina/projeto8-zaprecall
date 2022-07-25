import "./style.css";
import logo from "../assets/imgs/logo.png";

export default function Header() {
  return (
    <div className="logo-title">
      <img src={logo} />
      <span className="title">ZapRecall</span>
    </div>
  );
}
