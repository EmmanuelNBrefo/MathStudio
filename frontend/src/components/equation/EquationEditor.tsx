import React, { useState } from "react";

import FormulaToolbar from "./FormulaToolbar";
import FormulaBlock from "./FormulaBlock";

import type {
  EquationElement
} from "./equationTypes";



const EquationEditor = () => {


  const [elements, setElements] =
    useState<EquationElement[]>([]);



  const insertFormula = (
    value: string
  ) => {


    const newElement: EquationElement = {

      id:
        Date.now().toString(),

      type:
        "symbol",

      value

    };


    setElements([
      ...elements,
      newElement
    ]);

  };



  return (

    <div className="
      h-full
      flex
      flex-col
      bg-slate-100
    ">


      <FormulaToolbar

        onInsert={insertFormula}

      />



      <div className="
        flex-1
        p-8
        bg-white
        m-4
        rounded-xl
        shadow
        flex
        items-center
        justify-center
      ">


        {
          elements.length === 0 ?

          (

            <p className="
              text-gray-400
            ">
              Start creating your equation...
            </p>

          )

          :

          (

            <div>

              {
                elements.map(
                  (element) => (

                    <FormulaBlock

                      key={
                        element.id
                      }

                      element={
                        element
                      }

                    />

                  )
                )
              }

            </div>

          )

        }


      </div>


    </div>

  );

};


export default EquationEditor;