import Header from "./components/layout/Header";
import Ribbon from "./components/layout/Ribbon";
import Sidebar from "./components/layout/Sidebar";
import Workspace from "./components/layout/Workspace";

function App() {

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <Ribbon />

      <div className="flex flex-1">

        <Sidebar />

        <Workspace />

      </div>

    </div>
  );
}

export default App;