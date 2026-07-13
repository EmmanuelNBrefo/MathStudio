import React from "react";
import SymbolLibrary from "../symbols/SymbolLibrary";


const RightPanel = () => {

  return (

    <aside className="
      w-96
      border-l
      bg-slate-100
      overflow-hidden
    ">

      <SymbolLibrary />

    </aside>

  );

};


export default RightPanel;