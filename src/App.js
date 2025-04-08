import React, { useState, createContext } from "react";
import CustomProgram from "./CustomProgram";

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

export const AppContext = createContext();

function App() {
  const [num, setNum] = useState(0);
  const [operations, setOperations] = useState([]);
  const [result, setResult] = useState(null);
  const [beforeResult, setBeforeResult] = useState(null);

  const handleClick = (e) => {
    setOperations((pre) => [
      ...pre,
      { id: crypto.randomUUID(), func: e.target.name },
    ]);
  };

  const handleOperationClick = () => {
    if (num >= 0 && operations.length === 0) {
      alert("Sayı yada işlem girmeyi unuttunuz");
    } else {
      let currentValue = num;
      operations.forEach(({ func }) => {
        switch (func) {
          case "half":
            currentValue = half(currentValue);
            break;
          case "double":
            currentValue = double(currentValue);
            break;
          case "increment":
            currentValue = increment(currentValue);
            break;
          case "decrement":
            currentValue = decrement(currentValue);
            break;
          default:
            break;
        }
      });

      setOperations([]);
      setNum(0);

      if (result) {
        setBeforeResult(result);
      }
      setResult(currentValue);
    }
  };

  const handleClearClick = () => {
    setNum(0);
    setOperations([]);
  };

  return (
    <AppContext.Provider
      value={{
        handleClick,
        handleOperationClick,
        handleClearClick,
        num,
        setNum,
        operations,
        result,
        beforeResult,
      }}
    >
      <CustomProgram />
    </AppContext.Provider>
  );
}

export default App;
