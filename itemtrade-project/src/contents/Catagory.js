import React from 'react'
import CatagoryItem from "./CatagoryItem"
import CatagoriesDatas from '../data/CatagoriesDatas'
import '../css/Catagory.css'
import MostViewed from './MostViewed'


function Catagory() {


    const datas = CatagoriesDatas.map(catagory => <CatagoryItem
        key={catagory.id}
        catagorylabel={catagory.catagoryLabel}
        catagoryicon={catagory.icon}
        catagorybgcolor={catagory.bgcolor} />)

    return (
        <div>
            <div>
                <h2>
                    <span>Katagoriye Göre Ara 👀</span>
                </h2>
                <div className="catagory couresel">
                    {datas}
                </div>
            </div>

            <div >
                <h2>
                    <span>Popüler ürünler ✨</span>
                </h2>
                <div className="most_searched couresel">
                    <MostViewed title="Dizüstü Bilgisayar" image="https://static.letgo.com/site-images/home-page/laptops.png" />
                    <MostViewed title="Dizüstü Bilgisayar" image="https://static.letgo.com/site-images/home-page/cars.png" />
                    <MostViewed title="Dizüstü Bilgisayar" image="https://static.letgo.com/site-images/home-page/phones.png" />
                    <MostViewed title="Dizüstü Bilgisayar" image="https://static.letgo.com/site-images/home-page/bicycles.png" />
                </div>
            </div>

        </div>
    )
}

export default Catagory;