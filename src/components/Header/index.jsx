
import { useState } from 'react';
import Logo from '../Logo';
import UserIcon from '../UserIcon';
import styles from './Header.module.css';
import { getImageURLSearch } from '../../utils/helpers'
import { getImageURLPhone } from '../../utils/helpers'

const Header = ({counter, navData}) => {
        // const [isLoggedIn, setLoggedIn] = useState(false)

        // const items = navData ? navData : [];
   
        return (
            <div className={styles.container}>
                <Logo />
                {/* <UserIcon currentStatus={isLoggedIn} setLogged={setLoggedIn}/>
                <p>{counter ? counter : 'No counter'}</p>
                <p>{isLoggedIn ? 'USER IS LOGGED IN' : 'UNAUTHORIZED'}</p>
                <ul className={styles.navigation}>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul> */}
                
                <img src={getImageURLSearch()} className={styles.searchImg}/>
                <input className={styles.search} placeholder="Пошук..."/>
                <img src={getImageURLPhone()} className={styles.phoneImg}/>
                <a href="tel:+380985554433" className={styles.phone}>+38 (098) 555-44-33</a>
            </div>
        )
}

export default Header


