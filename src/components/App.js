import React from "react";
import Welcome from "./Welcome/Welcome";
import Main from "./Main/Main";
import "./assets/css/reset.css"
import "./assets/css/style.css"

export default function App() {
  const [start, setStart] = React.useState(true);

  return (
    <>
      {start ? <Welcome start={start} setStart={setStart} /> : <Main />}
    </>
  );
}