import Subscript from "./components/equation/Subscript";

function App() {
  return (
    <div className="p-10 space-y-6">
      <Subscript />
      <Subscript base="a" subscript="n" />
      <Subscript base="H" subscript="2" />
      <Subscript base="CO" subscript="2" />
    </div>
  );
}

export default App;