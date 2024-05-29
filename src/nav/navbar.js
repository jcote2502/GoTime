import React from "react";
import { useLocation, useNavigate } from "react-router-dom"
import './style.css'

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();


    const isActive = (path) => {
        return location.pathname === path;
    }

    const goTo = (path) => {
        navigate(path)
    }

    return (
        <div className="nav" style={{ fontStyle: 'italic', fontFamily: 'Impact' }}>
            <img onClick={()=>{goTo('/home')}} className='nav-logo' src={process.env.PUBLIC_URL + '/logotran.png'} alt="logo" />
            <div className="nav-container">
            <div className="button-row">
                <button onClick={()=>goTo('/home')} className={isActive('/home')?'nav-item-active':'nav-item'}>HOME</button>
                <button onClick={()=>goTo('/about')} className={isActive('/about')?'nav-item-active':'nav-item'}>ABOUT</button>
                <button onClick={()=>goTo('/clientele')} className={isActive('/clientele')?'nav-item-active':'nav-item'}>CLIENTELE</button>
                <button onClick={()=>goTo('/brands')} className={isActive('/brands')?'nav-item-active':'nav-item'}>BRANDS</button>
                <button onClick={()=>goTo('/services')} className={isActive('/services')?'nav-item-active':'nav-item'}>SERVICES</button>
                <button onClick={()=>goTo('/news')} className={isActive('/news')?'nav-item-active':'nav-item'}>NEWS</button>
                <button onClick={()=>goTo('/contact')} className={isActive('/contact')?'nav-item-active':'nav-item'}>CONTACT</button>
            </div>
            </div>
        </div>
    )
}

export default NavBar;