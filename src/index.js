import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Css
import './Component/CSS/style.css';
import './Component/CSS/media.css' 
import 'bootstrap/dist/css/bootstrap.css'
//Components
import App from './App';
import Left from './Component/Left';
import Navbar from './Component/Navbar';
import SinglePage from './SinglePage';
import Main from "./Component/Main"
import NewLeft from "./Component/NewLeft"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/about" element={<Navbar/>}/> */}
        <Route path='/' element={<App/>}>
          <Route index element={<Main/>}/>
          {/* <Route index element={<App/>}/>          */}
          <Route path='/singlepage' element={<SinglePage/>}/>
          <Route path='/left' element={<Left/>}/>
          <Route path="/right" element={<NewLeft/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

