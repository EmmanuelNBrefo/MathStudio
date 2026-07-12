function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-10 w-[600px]">
        <h1 className="text-4xl font-bold text-blue-700 text-center">
          MathStudio
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Professional Mathematics Authoring System
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <button className="rounded-lg bg-blue-600 text-white p-4 hover:bg-blue-700">
            New Project
          </button>

          <button className="rounded-lg bg-green-600 text-white p-4 hover:bg-green-700">
            Open Project
          </button>

          <button className="rounded-lg bg-purple-600 text-white p-4 hover:bg-purple-700">
            Symbol Library
          </button>

          <button className="rounded-lg bg-orange-600 text-white p-4 hover:bg-orange-700">
            Equation Builder
          </button>
        </div>

        <p className="mt-8 text-center text-gray-500">
          Version 0.1.0
        </p>
      </div>
    </div>
  );
}

export default App;