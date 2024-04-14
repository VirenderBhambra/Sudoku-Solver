import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      {[...Array(81)].map((_, ind) => {
        let className = "cell ";
        if(ind+1 == 1 ) className+='left '
        if(ind+1 == 9) className+='right '
        if(ind+1>72 && ind+1<82) className+='bottom '
        if (ind+1 < 10) className += "upper";
        else if ((ind + 1) % 9 === 0) className += "right";
        else if(ind%9 == 0) className+='left';
        
        return <div className={className}>{ind + 1}</div>;
      })}
    </div>
  );
}

export default App;
