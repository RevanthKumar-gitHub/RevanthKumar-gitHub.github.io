import React from "react";
import "../css/hello.css";

export default function Hello(props) {
  const planets = [
    { planet: "Mars", isGas: false },
    { planet: "jupiter", isGas: true },
    { planet: "pluto", isGas: true },
    { planet: "earth", isGas:false },

  ];
  return (
    <div className="hello">
      {planets.map((planet, key) => {
        return <center><Planet name={planet} key={key} /></center>;
      })}
    </div>
  );
}

const Planet = (props) => {
  return <div>{props.name.isGas?<h1>{props.name.planet}</h1>:""}</div>;
};
