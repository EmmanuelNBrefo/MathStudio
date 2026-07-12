import React from "react";
import { Search } from "lucide-react";


interface SymbolSearchProps {
  value: string;
  onChange: (value: string) => void;
}


const SymbolSearch = ({
  value,
  onChange
}: SymbolSearchProps) => {


  return (

    <div
      className="
        flex
        items-center
        gap-3
        border
        rounded-lg
        px-4
        py-2
        bg-white
        shadow-sm
        mb-6
      "
    >

      <Search
        size={20}
        className="text-gray-500"
      />


      <input

        type="text"

        value={value}

        onChange={(e) =>
          onChange(e.target.value)
        }

        placeholder="Search mathematics symbols..."

        className="
          outline-none
          flex-1
          text-sm
        "

      />


    </div>

  );

};


export default SymbolSearch;