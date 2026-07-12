import React from "react";

import Header from "./Header";
import Ribbon from "./Ribbon";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";
import RightPanel from "./RightPanel";
import StatusBar from "./StatusBar";


const Layout = () => {

  return (

    <div className="h-screen flex flex-col overflow-hidden">

      <Header />

      <Ribbon />


      <div className="flex flex-1 overflow-hidden">

        <Sidebar />

        <Workspace />

        <RightPanel />

      </div>


      <StatusBar />

    </div>

  );
};


export default Layout;