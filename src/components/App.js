import React from "react";
import Welcome from "./Welcome";
import Main from "./Main";

export default function App() {
  const [start, setStart] = React.useState(true);

  return (
    <>
      {start ? <Welcome start={start} setStart={setStart} /> : <Main />}
    </>
  );
}