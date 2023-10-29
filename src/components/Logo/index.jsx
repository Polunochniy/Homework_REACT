import React from 'react'
import { getImageURL } from '../../utils/helpers'
import styles from './Logo.module.css'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };


    return (
        <img src={getImageURL()} onClick={navigateToHome} className={styles.logo}/>
    )
}

export default Logo
