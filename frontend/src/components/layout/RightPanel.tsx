import React from "react";
import {
  Search,
  Star,
  Calculator
} from "lucide-react";


const RightPanel = () => {

  return (
    <aside className="w-72 bg-white border-l p-4">

      <h2 className="text-lg font-semibold mb-4">
        Tools
      </h2>


      {/* Search */}
      <div className="
        flex
        items-center
        gap-2
        border
        rounded-lg
        px-3
        py-2
        mb-5
      ">

        <Search size={18}/>

        <input
          type="text"
          placeholder="Search symbols..."
          className="outline-none w-full text-sm"
        />

      </div>


      {/* Quick Tools */}

      <div className="space-y-3">


        <button
          className="
          w-full
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          bg-blue-50
          hover:bg-blue-100
          "
        >

          <Calculator size={20}/>

          Equation Tools

        </button>



        <button
          className="
          w-full
          flex
          items-center
          gap-3
          p-3
          rounded-lg
          bg-yellow-50
          hover:bg-yellow-100
          "
        >

          <Star size={20}/>

          Favorites

        </button>


      </div>


      <div className="
        mt-8
        p-4
        bg-slate-100
        rounded-lg
        text-center
        text-sm
        text-gray-500
      ">

        Symbol Preview

        <br />

        π √ ∑ ∫

      </div>


    </aside>
  );
};


export default RightPanel;