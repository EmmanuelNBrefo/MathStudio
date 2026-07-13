import React from "react";
import type { EquationElement } from "./equationTypes";


interface FormulaBlockProps {
  element: EquationElement;
}


const FormulaBlock = ({
  element
}: FormulaBlockProps) => {


  return (

    <div
      className="
        inline-flex
        items-center
        justify-center
        min-w-10
        h-10
        px-3
        mx-1
        bg-white
        border
        rounded-lg
        shadow-sm
        text-xl
        hover:bg-blue-50
        cursor-pointer
      "
    >

      {element.value}

    </div>

  );

};


export default FormulaBlock;