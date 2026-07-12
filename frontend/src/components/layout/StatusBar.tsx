import React from "react";

const StatusBar = () => {

  return (
    <footer
      className="
        h-8
        bg-slate-800
        text-white
        flex
        items-center
        justify-between
        px-4
        text-sm
      "
    >

      <div>
        Ready
      </div>


      <div className="flex gap-6">

        <span>
          Untitled.mst
        </span>

        <span>
          Zoom 100%
        </span>

        <span>
          Version 0.2.0
        </span>

      </div>


    </footer>
  );
};


export default StatusBar;