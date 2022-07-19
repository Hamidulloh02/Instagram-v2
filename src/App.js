import React from "react";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
