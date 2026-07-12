import React, { useState } from "react";

import SymbolSearch from "./SymbolSearch";
import SymbolCategory from "./SymbolCategory";

import {
  symbolData
} from "./symbolData";


const SymbolLibrary = () => {

  const [search, setSearch] = useState("");


  const filteredSymbols =
    symbolData.filter((symbol) => {

      const text =
        `${symbol.name}
        ${symbol.symbol}
        ${symbol.category}`
        .toLowerCase();


      return text.includes(
        search.toLowerCase()
      );

    });



  const categories =
    [
      ...new Set(
        filteredSymbols.map(
          (symbol) => symbol.category
        )
      )
    ];



  return (

    <div className="
      p-6
      h-full
      overflow-auto
      bg-slate-100
    ">


      <h1 className="
        text-2xl
        font-bold
        text-blue-700
        mb-6
      ">
        Mathematics Symbol Library
      </h1>



      <SymbolSearch

        value={search}

        onChange={setSearch}

      />



      {
        categories.map((category) => (

          <SymbolCategory

            key={category}

            title={category}

            symbols={
              filteredSymbols.filter(
                (symbol) =>
                  symbol.category === category
              )
            }

          />

        ))
      }


    </div>

  );

};


export default SymbolLibrary;