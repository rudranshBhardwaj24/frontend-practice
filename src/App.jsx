import { useState } from "react";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(10);
  const handleClick = () => {
    if (percentage < 400) {
      setPercentage((prev) => prev + 10);
    } else {
      setPercentage(0);
    }
  };

  return (
    <>
      <h1 className="text-amber-400">Rudransh Bhardwaj</h1>
      <div className={`h-2 border-amber-400 m-1 border w-[400px]`}>
        <div
          className="bg-amber-200 h-full"
          style={{ width: `${percentage}px` }}
        ></div>
      </div>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default App;
