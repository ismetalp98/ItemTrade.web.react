import React from 'react'
import CatagoryItem from "./CatagoryItem"
import CatagoriesDatas from '../data/CatagoriesDatas'
import '../css/Catagory.css'


function Catagory (){

    const datas = CatagoriesDatas.map(catagory => <CatagoryItem 
        key = {catagory.id}
         catagorylabel={catagory.catagoryLabel}
         catagoryicon = {catagory.icon}
         catagorybgcolor = {catagory.bgcolor} />)

    return(
        <div>
            <h1>Katagoriye Göre Ara</h1>
            <div className = "catagory_couresel">
                {datas}
            </div>
        </div>
    )
}

export default Catagory;