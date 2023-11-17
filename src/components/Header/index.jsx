import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { getImageURLPhone } from '../../utils/helpers'
import LogoContainer from '../../containers/LogoContainer';
import Cart from '../../components/Cart'

const Header = () => {
    const navigate = useNavigate();

    const navigateToGoods = () => {
        navigate('/login');
    };

    const navigateToHomePage = () => {
        navigate('/');
    };

    const navigateToAboutUs = () => {
        navigate('/about-us');
    };

    const navigateToGuarantee = () => {
        navigate('/guarantee');
    };

    const navigateToContacts = () => {
        navigate('/contacts');
    };

    const navigateToNews = () => {
        navigate('/news');
    };

    return (
        <div className={styles.container}>
            <LogoContainer />
            <div className={styles.menu}>
                <a onClick={navigateToHomePage}>Головна</a>
                <a onClick={navigateToAboutUs}>Про нас</a>
                <a onClick={navigateToGuarantee}>Гарантія</a>
                <a onClick={navigateToContacts}>Контакти</a>
                <a onClick={navigateToNews}>Новини</a>
            </div>
            <img src={getImageURLPhone()} className={styles.phoneImg}/>
            <a href="tel:+380985554433" className={styles.phone}>+38 (098) 555-44-33</a>
            <a onClick={navigateToGoods} className={styles.entrance}>Вхід / Реєстрація</a>
            <Cart />
        </div>
    )
}

export default Header


