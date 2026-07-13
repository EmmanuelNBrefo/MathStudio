import React from "react";
import type { EquationElement } from "./equationTypes";

interface FormulaToolbarProps {
  onInsert: (element: EquationElement) => void;
}

const buttonClass = `
  px-4
  py-2
  bg-white
  border
  border-slate-300
  rounded-md
  shadow-sm
  hover:bg-slate-100
  hover:border-blue-500
  transition
  cursor-pointer
  text-sm
  font-medium
`;

const FormulaToolbar = ({ onInsert }: FormulaToolbarProps) => {

  const createElement = (
    type: EquationElement["type"],
    value?: string,
    properties?: EquationElement["properties"]
  ): EquationElement => ({
    id: crypto.randomUUID(),
    type,
    value,
    properties,
  });

  return (

    <div
      className="
        flex
        flex-wrap
        gap-2
        p-3
        bg-white
        border-b
        shadow-sm
      "
    >

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(createElement("operator", "+"))
        }
      >
        +
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(createElement("operator", "−"))
        }
      >
        −
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(createElement("operator", "×"))
        }
      >
        ×
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(createElement("operator", "÷"))
        }
      >
        ÷
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(
            createElement("fraction", undefined, {
              numerator: "a",
              denominator: "b",
            })
          )
        }
      >
        a/b
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(
            createElement("superscript", undefined, {
              base: "x",
              exponent: "2",
            })
          )
        }
      >
        x²
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(
            createElement("subscript", undefined, {
              base: "x",
              subscript: "1",
            })
          )
        }
      >
        x₁
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(
            createElement("root", undefined, {
              degree: "2",
              value: "x",
            })
          )
        }
      >
        √
      </button>

      <button
        className={buttonClass}
        onClick={() =>
          onInsert(
            createElement("matrix")
          )
        }
      >
        Matrix
      </button>

    </div>

  );

};

export default FormulaToolbar;