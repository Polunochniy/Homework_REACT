import { useState } from 'react'
import { getImageURL } from '../../utils/helpers'
import styles from './Logo.module.css'

const Logo = ({greeting}) => {
    const [isActive, setIsActive] = useState(false)

    const getStyles = () => isActive ? styles.logoActive : styles.logo

    return (
        <img src={getImageURL()} onClick={()=>setIsActive(!isActive)} alt={greeting} className={getStyles()}/>
    )
}

export default Logo
