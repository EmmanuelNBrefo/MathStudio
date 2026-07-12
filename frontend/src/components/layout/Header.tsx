import React from "react";

const Header = () => {
  return (
    <header className="h-14 bg-blue-700 text-white flex items-center justify-between px-6 shadow">
      <div className="text-xl font-bold">
        MathStudio
      </div>

      <div className="text-sm">
        Professional Mathematics Authoring System
      </div>

      <div className="text-sm">
        v0.2.0
      </div>
    </header>
  );
};

export default Header;