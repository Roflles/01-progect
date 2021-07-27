import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>
                {props.name}
                <div>
                    <img src='https://i.pinimg.com/474x/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg'/>
                </div>

            </NavLink>
        </div>
    )
}


export default DialogItem;