import React from "react";
import SymbolCard from "./SymbolCard";
import type { MathSymbol } from "./symbolData";


interface SymbolCategoryProps {
  title: string;
  symbols: MathSymbol[];
}


const SymbolCategory = ({
  title,
  symbols
}: SymbolCategoryProps) => {

  return (

    <section className="mb-8">

      <h2 className="
        text-xl
        font-bold
        text-gray-800
        mb-4
      ">
        {title}
      </h2>


      <div className="
        grid
        grid-cols-3
        gap-4
      ">

        {symbols.map((symbol) => (

          <SymbolCard
            key={symbol.id}
            symbol={symbol}
          />

        ))}

      </div>


    </section>

  );

};


export default SymbolCategory;