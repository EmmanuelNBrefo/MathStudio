import Header from "./components/layout/Header";
import Ribbon from "./components/layout/Ribbon";
import Sidebar from "./components/layout/Sidebar";

function App() {

  return (
    <div className="min-h-screen">

      <Header />

      <Ribbon />

      <div className="flex">

        <Sidebar />

      </div>

    </div>
  );
}

export default App;