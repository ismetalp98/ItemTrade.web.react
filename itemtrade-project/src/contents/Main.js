import React from 'react'
import Idle from './Idle'
import Catagory from './Catagory'
import '../css/main.css'

function Main() {
    return (
        <div className = "main">
           <Idle/>
           <Catagory/>
        </div>
    )
}

export default Main;