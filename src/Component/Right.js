import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'

function Right(props) {
  let location = useLocation()
  console.log(props.data)
  return (
    <div>
      {/* <h2>{props.data}</h2> */}
    <h1>Salom</h1>
    </div>
  )
}

export default Right