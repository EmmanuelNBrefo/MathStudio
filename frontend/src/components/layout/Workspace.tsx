import React from "react";

const Workspace = () => {
  return (
    <main className="flex-1 bg-slate-100 p-6">

      <div className="
        h-full
        bg-white
        rounded-xl
        shadow
        flex
        items-center
        justify-center
      ">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-blue-700">
            Welcome to MathStudio
          </h1>

          <p className="mt-4 text-gray-600">
            Professional Mathematics Authoring Workspace
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Create equations, graphs, geometry, and examinations.
          </p>

        </div>

      </div>

    </main>
  );
};

export default Workspace;