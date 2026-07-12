import React from "react";

const Ribbon = () => {

  const menuItems = [
    "File",
    "Home",
    "Insert",
    "Equation",
    "Graph",
    "Geometry",
    "Exam",
    "Export",
    "View",
    "Help",
  ];

  return (
    <nav className="h-12 bg-white border-b flex items-center px-4 shadow-sm">

      <div className="flex gap-6 text-sm font-medium text-gray-700">

        {menuItems.map((item) => (
          <button
            key={item}
            className="hover:text-blue-600 transition"
          >
            {item}
          </button>
        ))}

      </div>

    </nav>
  );
};

export default Ribbon;