import React from "react";


interface SuperscriptProps {

  base?: string;

  exponent?: string;

}



const Superscript = ({

  base = "x",

  exponent = "2",

}: SuperscriptProps) => {


  return (

    <span className="inline-flex items-start mx-2">

      <span className="text-xl">
        {base}
      </span>

      <sup className="text-sm ml-1">
        {exponent}
      </sup>

    </span>

  );

};


export default Superscript;