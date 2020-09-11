import React from 'react'
import Item from './Item'
import Grid from '@material-ui/core/Grid';
import '../css/Item.css'
import Button from '@material-ui/core/Button';

function Items(props) {

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listItems = numbers.map(item => <Item
        key={item}
        city="İstanbul"
        title="Motor"
        catagory="Araç"
        price="1000" />)

    return (
        <div>
            <h2>
                <span >Senin için seçtiklerimiz ❤️</span>
            </h2>
            <div className="items_grid">
                {listItems}
            </div>
            <div style={{height: "45px",marginTop: "30px", display:"flex",justifyContent:"center"}}>
                <Button
                style={{width:"20%",height:"100%"}}
                    id="sellButton"
                    variant="contained"
                    color="secondary">
                    Load More
                </Button>
            </div>
        </div>
    )
}

export default Items;