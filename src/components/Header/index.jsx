
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { getImageURLSearch } from '../../utils/helpers'
import { getImageURLPhone } from '../../utils/helpers'
import LogoContainer from '../../containers/LogoContainer';
import Cart from '../../components/Cart'

const Header = () => {
    const navigate = useNavigate();

    const navigateToGoods = () => {
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <LogoContainer />                
            <img src={getImageURLSearch()} className={styles.searchImg}/>
            <input className={styles.search} placeholder="Пошук..."/>
            <img src={getImageURLPhone()} className={styles.phoneImg}/>
            <a href="tel:+380985554433" className={styles.phone}>+38 (098) 555-44-33</a>
            <a onClick={navigateToGoods} className={styles.entrance}>ВХІД</a>
            <Cart />
        </div>
    )
}

export default Header


