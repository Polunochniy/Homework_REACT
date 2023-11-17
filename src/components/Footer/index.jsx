import React from 'react';
import styles from './Footer.module.css';
import LogoContainer from '../../containers/LogoContainer';
import { useNavigate } from 'react-router-dom';
import { getImageURLFacebook, getImageURLInstagram, getImageURLYoutube } from '../../utils/helpers'

const Footer = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToAboutUS = () => {
        navigate('/about-us');
    };

    const navigateToLoginPage = () => {
        navigate('/login');
    };

    const navigateToRegistrationPage = () => {
        navigate('/registration');
    };

    const navigateToCartPage = () => {
        navigate('/cart');
    };

    const navigateToContacts = () => {
        navigate('/contacts');
    };

    const navigateToGuarantee = () => {
        navigate('/guarantee');
    };

    const navigateToNews = () => {
        navigate('/news');
    };

  return (
    <div className={styles.footer}>
        <LogoContainer />
        <div className={styles.footerLinks}>
            <div className={styles.footerLinksColumn}>
                <a onClick={navigateToHome}>Головна</a>
                <a onClick={navigateToAboutUS}>Про нас</a>
                <a onClick={navigateToLoginPage}>Увійти в систему</a>
                <a onClick={navigateToRegistrationPage}>Зареєструватися</a>
            </div>
            <div className={styles.footerLinksColumn}>
                <a onClick={navigateToCartPage}>Кошик</a>
                <a onClick={navigateToContacts}>Контакти</a>
                <a onClick={navigateToGuarantee}>Гарантія</a>
                <a onClick={navigateToNews}>Новини</a>
            </div>
            <div className={styles.footerLinksColumn}>
                <a href="tel:+380985554433">+38 (098) 555-44-33</a>
                <a href="mailto:info@dneprmoto.com.ua">info@dneprmoto.com.ua</a>
                <a>Київ, вул. Олександра Довженка, 3а (м. Шулявська)</a>
                <div className={styles.social}>
                    <img src={getImageURLInstagram()}>
                        
                    </img>
                    <img src={getImageURLFacebook()}>

                    </img>
                    <img src={getImageURLYoutube()}>

                    </img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer