import React, { useContext } from "react";
import { AppContext } from "./App";

const CustomProgram = () => {
  const {
    num,
    setNum,
    handleClick,
    operations,
    handleOperationClick,
    handleClearClick,
    result,
    beforeResult,
  } = useContext(AppContext);
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

export default CustomProgram;
