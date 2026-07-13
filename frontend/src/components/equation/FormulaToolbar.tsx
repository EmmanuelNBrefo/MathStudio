import React from "react";


interface FormulaToolbarProps {

  onInsert: (value: string) => void;

}


const FormulaToolbar = ({
  onInsert
}: FormulaToolbarProps) => {


  const tools = [

    {
      label: "+",
      value: "+"
    },

    {
      label: "−",
      value: "-"
    },

    {
      label: "×",
      value: "×"
    },

    {
      label: "÷",
      value: "÷"
    },

    {
      label: "√",
      value: "√"
    },

    {
      label: "x²",
      value: "^2"
    },

    {
      label: "x₁",
      value: "_1"
    },

    {
      label: "∑",
      value: "∑"
    },

    {
      label: "∫",
      value: "∫"
    },

    {
      label: "π",
      value: "π"
    }

  ];



  return (

    <div
      className="
        flex
        gap-2
        p-3
        bg-white
        border-b
        shadow-sm
      "
    >

      {
        tools.map((tool) => (

          <button

            key={tool.label}

            onClick={() =>
              onInsert(tool.value)
            }

            className="
              w-10
              h-10
              rounded-lg
              border
              bg-slate-50
              hover:bg-blue-100
              text-lg
              font-semibold
            "

          >

            {tool.label}

          </button>

        ))
      }


    </div>

  );

};


export default FormulaToolbar;