export default function Welcome({ start, setStart }) {
    return (
        <div className="screen-welcome">
            <img src="./assets/imgs/logo.png" className="logo" />
            <h1 className="title">ZapRecall</h1>
            <button className="button-start" onClick={() => setStart(!start)}>Iniciar Recall!</button>
        </div>
    );
}