import React from 'react'
import '../css/Catagory.css'

function CatagoryItem(props) {
    const stylebg = {
        backgroundColor: props.catagorybgcolor,
        width: "140px",
        height: "160px"
    }

    const styleicon = {
        width: "32px",
        height: "32px"
    }

    const Theicon = props.catagoryicon;

    return (
        <div className = "catagory_item">
            <div style={stylebg} className = "catagory_item_body">
                <Theicon style={styleicon} className="catagory_item_icon"/>
            </div>
            <p className = "catagory_item_title">{props.catagorylabel}</p>
        </div>
    )
}

export default CatagoryItem