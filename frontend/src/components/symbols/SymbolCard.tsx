import React from "react";
import type { MathSymbol } from "./symbolData";


interface SymbolCardProps {
  symbol: MathSymbol;
}


const SymbolCard = ({ symbol }: SymbolCardProps) => {

  const handleClick = () => {
    console.log("Selected symbol:", symbol.symbol);
  };


  return (

    <button
      onClick={handleClick}
      className="
        w-32
        h-32
        bg-white
        rounded-xl
        shadow
        border
        flex
        flex-col
        items-center
        justify-center
        hover:bg-blue-50
        hover:border-blue-400
        transition
      "
    >

      <div className="
        text-4xl
        font-semibold
        text-blue-700
      ">
        {symbol.symbol}
      </div>


      <div className="
        mt-3
        text-sm
        text-gray-600
        text-center
      ">
        {symbol.name}
      </div>


    </button>

  );
};


export default SymbolCard;