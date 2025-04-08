import React, { useState } from "react";

const half = (number) => number / 2;
const double = (number) => number * 2;
const increment = (number) => number + 1;
const decrement = (number) => number - 1;

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
    <CustomProgram
      handleClick={handleClick}
      handleOperationClick={handleOperationClick}
      handleClearClick={handleClearClick}
      num={num}
      setNum={setNum}
      operations={operations}
      result={result}
      beforeResult={beforeResult}
    />
  );
}

const CustomProgram = ({
  num,
  setNum,
  handleClick,
  operations,
  handleOperationClick,
  handleClearClick,
  result,
  beforeResult,
}) => {
  const buttonClass = "border-2 px-1 border-gray-500 bg-gray-200  ";

  return (
    <div className="flex flex-col items-center space-y-10  h-[80vh] justify-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <button name="half" onClick={handleClick} className={buttonClass}>
          yarım
        </button>
        <button name="double" onClick={handleClick} className={buttonClass}>
          iki katı
        </button>
        <button name="increment" onClick={handleClick} className={buttonClass}>
          arttır
        </button>
        <button name="decrement" onClick={handleClick} className={buttonClass}>
          azalt
        </button>
        <button onClick={handleClearClick} className={`${buttonClass} ml-5`}>
          Temizle
        </button>
      </form>

      <h2 className="text-2xl font-semibold">Fonksiyonum</h2>

      <ul>
        {operations?.map(({ id, func }) => {
          return <li key={id}>{func}</li>;
        })}
      </ul>

      <div className="flex">
        <input
          type="number"
          className="border-2 w-1/2 border-gray-500 text-center"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <button
          className="border-2 w-1/2 bg-slate-200 border-gray-500"
          onClick={handleOperationClick}
        >
          Gönder
        </button>
      </div>

      <div className="space-y-5">
        <h3 className="text-center">Son yürütme :</h3>
        <p className="space-x-5">
          <span>
            {beforeResult ? beforeResult : "?"}
            {"  ->"}
          </span>
          <span>Fonksiyonum {"->"} </span>
          <span>{result ? result : "?"}</span>
        </p>
      </div>
    </div>
  );
};

export default App;
