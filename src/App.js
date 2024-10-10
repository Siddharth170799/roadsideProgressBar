import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";
import Body from "./Body2";

function App() {
  // const [value, setValue] = useState(0);
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   setInterval(function () {
  //     setValue((value) => value + 1);
  //   }, 100);
  // }, []);
  return (
    <div className="app">
      <Body/>
      {/* <div>ProgressBar</div>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      {success == true ? <div>Completed</div> : <div>loading...</div>} */}
    </div>
  );
}

export default App;
