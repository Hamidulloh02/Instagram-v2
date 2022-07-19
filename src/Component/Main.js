import React from 'react'
//Components
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';
import NewLeft from './NewLeft';
import Left from './Left';
function Main() {
  return (
    <div>
        <NewLeft/>
        <Left/>
    </div>
  )
}

export default Main