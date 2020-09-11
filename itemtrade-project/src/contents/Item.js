import React from 'react'
import '../css/Item.css'

function Item(props) {
    return (
        <div>
            <div class="field">
                <div>
                    <div class="image">
                        <img src="https://img.letgo.com/images/90/fe/e1/3b/90fee13bba437130963dd35d243d298d.jpeg?impolicy=img_256" />
                    </div>
                </div>
                <div class="item_title">
                    <p class="asd">{props.city} - {props.distancee}</p>
                    <h3 class="asd" > {props.title}</h3>
                    <p class="asd">{props.catagory}</p>
                    <h3 class="asd"> ${props.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Item;