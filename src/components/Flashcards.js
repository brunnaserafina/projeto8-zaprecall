export default function Flashcards() {
    return (
        <div className="flashcards-closed">
            <div className="logo-title">
                <img src="./assets/imgs/logo.png" className="logo2" />
                <span className="title">ZapRecall</span>
            </div>

            <ul>
                <li className="flashcard">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li className="flashcard">
                    <p>Pergunta 2</p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li className="flashcard">
                    <p>Pergunta 3</p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
                <li className="flashcard">
                    <p>Pergunta 4</p>
                    <ion-icon name="play-outline"></ion-icon>
                </li>
            </ul>

            <div className="completed">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    );
}