import React from 'react'
import '../css/Catagory.css'


function MostViewed(props) {
    return (

        <div className="catagory_most_searched">
            <div className="catagory_most_searched_body">
                <img src={props.image} alt="#" />
            </div>
            <div className="title">
                <span>{props.title}</span>
            </div>
        </div>

    )
}

export default MostViewed;