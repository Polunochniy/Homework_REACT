import React from 'react'
import { getImageURL } from '../../utils/helpers'
import styles from './Logo.module.css'

const Logo = ({greeting, onLogoClick}) => {
    const handleLogoClick = () => {
        if (onLogoClick) {
            onLogoClick('/about');
        }
    };

    return (
        <img src={getImageURL()} onClick={handleLogoClick} alt={greeting} className={styles.logo}/>
    )
}

export default Logo
