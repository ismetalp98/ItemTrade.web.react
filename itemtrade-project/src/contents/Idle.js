import React from 'react'
import '../css/idle.css'
import SearchIcon from '@material-ui/icons/Search';

function Idle() {
    return (
        <div className="mainIdle">
            <div className="title">
                <h1>
                    <span>Kullanmadığın eşyaları sat, çevrendeki fırsatları keşfet!</span>
                </h1>
                <div className="search_form_div">
                    <form className="search_form">
                        <div className="search_input">
                            <div className = "icon">
                                <SearchIcon />
                            </div>
                            <div className="input">
                                <input  placeholder="Televizyon" autoComplete="off" type="text" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="imagediv">
                <img alt="" src="https://static.letgo.com/site-images/trio_party.svg" width="400px" height="400px" ></img>
            </div>

        </div>
    )
}

export default Idle;