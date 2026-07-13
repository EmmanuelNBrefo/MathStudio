import React, { useState } from "react";

import FormulaToolbar from "./FormulaToolbar";
import FormulaBlock from "./FormulaBlock";

import Fraction from "./Fraction";
import Superscript from "./Superscript";
import Subscript from "./Subscript";
import Root from "./Root";
import Matrix from "./Matrix";

import type {
  EquationElement
} from "./equationTypes";


const EquationEditor = () => {

  const [elements, setElements] =
    useState<EquationElement[]>([]);



  const insertFormula = (
    element: EquationElement
  ) => {

    setElements((previous) => [
      ...previous,
      element
    ]);

  };



  const renderElement = (
    element: EquationElement
  ) => {

    switch(element.type) {

      case "fraction":

        return (
          <Fraction
            numerator={element.properties?.numerator}
            denominator={element.properties?.denominator}
          />
        );


      case "superscript":

        return (
          <Superscript
            base={element.properties?.base}
            exponent={element.properties?.exponent}
          />
        );


      case "subscript":

        return (
          <Subscript
            base={element.properties?.base}
            subscript={element.properties?.subscript}
          />
        );


      case "root":

        return (
          <Root
            value={element.properties?.value}
            degree={element.properties?.degree}
          />
        );


      case "matrix":

        return (
          <Matrix />
        );


      default:

        return (
          <FormulaBlock
            element={element}
          />
        );

    }

  };



  return (

    <div
      className="
        h-full
        min-h-screen
        flex
        flex-col
        bg-slate-100
      "
    >

      <FormulaToolbar
        onInsert={insertFormula}
      />


      <div
        className="
          flex-1
          p-8
          bg-white
          m-4
          rounded-xl
          shadow
          overflow-auto
        "
      >

        {
          elements.length === 0 ?

          (

            <p
              className="
                text-gray-400
              "
            >
              Start creating your equation...
            </p>

          )

          :

          (

            <div
              className="
                flex
                gap-3
                items-center
              "
            >

              {
                elements.map(
                  (element) => (

                    <div
                      key={element.id}
                    >
                      {
                        renderElement(element)
                      }
                    </div>

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