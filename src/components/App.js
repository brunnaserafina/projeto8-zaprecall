import React from "react";
import Welcome from './Welcome';
import Flashcards from './Flashcards';

function App() {
    const [start, setStart] = React.useState(true);

    return (
        <>
            {(start) ? (
                <Welcome start={start} setStart={setStart}/>
            ): (
                <Flashcards />
            )}
        </>
    );
}

export default App;