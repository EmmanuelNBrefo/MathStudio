import Header from "./components/layout/Header";
import Ribbon from "./components/layout/Ribbon";
import Sidebar from "./components/layout/Sidebar";
import Workspace from "./components/layout/Workspace";
import RightPanel from "./components/layout/RightPanel";


function App() {

  return (

    <div className="min-h-screen flex flex-col">

      <Header />

      <Ribbon />


      <div className="flex flex-1">

        <Sidebar />

        <Workspace />

        <RightPanel />

      </div>


    </div>

  );
}


export default App;