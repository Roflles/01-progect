import React from 'react';
import s from './Header.module.css';
import logoPhoto from '../../assets/images/logo/logo.png'
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src={logoPhoto}/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}


export default Header;