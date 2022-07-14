import React from 'react';
import ReactDOM from 'react-dom';
import './Component/style.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import './Component/media.css'
import Left from './Component/Left';
import Navbar from './Component/Navbar';
import Left_test from './Component/Left_test';
import Single_user from './Component/Single_user';
import reportWebVitals from './reportWebVitals';
import SinglePage from './SinglePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/> 
        <Route path="/home" />
        <Route path='/singlepage' element={<SinglePage/>}/>
        <Route path="/about" element={<Navbar/>}/>
        <Route path='/left' element={<Left/>}/>
        {/* <Route path='/left' element={<Left_test/>}/> */}
        <Route path='/single_user' element={<Single_user/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
