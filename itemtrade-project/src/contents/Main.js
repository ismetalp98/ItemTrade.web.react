import React from 'react'
import Idle from './Idle'
import Catagory from './Catagory'
import Items from './Items'
import '../css/main.css'
import Cities from './Citites'

function Main() {
    return (
        <div className = "main">
           <Idle/>
           <Catagory/>
           <Items/>
           <Cities/>
        </div>
    )
}

export default Main;