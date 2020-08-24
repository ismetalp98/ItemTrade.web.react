import React from 'react'

function CatagoryItem(props) {
    const style = {
        backgroundColor: props.catagorybgcolor,
        width: "140px",
        height: "160px"
    }
    const Theicon = props.catagoryicon;

    return (
        <div className = "catagory_item">
            <div style={style} className = "catagory_item_body">
                <Theicon/>
            </div>
            <p className = "catagory_item_title">{props.catagorylabel}</p>
        </div>
    )
}

export default CatagoryItem