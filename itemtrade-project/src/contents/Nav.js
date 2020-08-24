import React from 'react';
import '../css/nav.css';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { IconButton } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Nav({ notlogined }) {

    let button

    if (notlogined) {
        button = <Button 
            variant="outlined"
            color="secondary">
            Login
                        </Button>
    }
    else {
       button = <ul className="notlogined_buttons">
            <li className="notlogined_button">
                <IconButton>
                    <MessageIcon />
                </IconButton>
            </li>
            <li className="notlogined_button">
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
            </li>
        </ul>
    }

    return (
        <header className="nav">
            <a href="#"> <h3>letgo</h3></a>
            <ul className="nav_buttons">
                <li className="nav_button">
                    {button}
                </li>
                <li className="nav_button">
                    <Button
                        id="sellButton"
                        variant="contained"
                        color="secondary"
                        startIcon={<CameraAltIcon />}>
                        Sell
                </Button>
                </li>
            </ul>
        </header>
    );
}


export default Nav;