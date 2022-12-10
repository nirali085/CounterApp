import Welcome from "./Welcome";
import "./App.css";
import { render } from "@testing-library/react";
import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);

  function incereament() {
    setcount(count + 1);
  }
  function decreament() {
    setcount(count - 1);
  }
  console.log("render");
  return (
    <div className="hello">
      <div className="">
        <h1>{count}</h1>
        <button onClick={incereament}>incereament</button>
        <button onClick={decreament}>decreament</button>
      </div>
    </div>
  );
};
export default App;
