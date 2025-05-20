import { useState } from "react";
import "./App.css";

function App() {
  const [percentage, setPercentage] = useState(0);
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
          className="bg-amber-200 h-full transition-all duration-300"
          style={{ width: `${percentage}px` }}
        ></div>
      </div>
      <p className="text-sm text-gray-200 mt-1">{Math.ceil(percentage / 4)}%</p>
      <button
        onClick={handleClick}
        className="mt-2 px-4 py-1 bg-amber-400 text-white rounded hover:bg-amber-500"
      >
        Increase
      </button>
    </>
  );
}

export default App;
