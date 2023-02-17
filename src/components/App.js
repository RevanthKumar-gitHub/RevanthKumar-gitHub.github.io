import React from "react";
import "../css/App.css";
import { useState } from "react";

function App() {
    const [value,setValue] = useState(0);

    const handleIncrease = (e) =>{
        setValue(value+1);
    }
    const handleDecrease=() =>{
        setValue(value-1);
    }
    const handleZero= (e) =>{
        setValue(0);
    }
  return (
    <div>
        <div className="buttons">

      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleZero}>Set to Zero</button>
        </div>
      {value<100?<center><h1 className="below">{value}</h1></center>:<center><h1 className="Higher">{value}</h1></center>}
    </div>
  );
}

export default App;
