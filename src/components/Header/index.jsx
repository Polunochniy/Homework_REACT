
import { useState } from 'react';
import Logo from '../Logo';
import UserIcon from '../UserIcon';
import styles from './Header.module.css';


export const Header = ({counter, navData}) => {
        const [isLoggedIn, setLoggedIn] = useState(false)
   
        return (
            <div className={styles.container}>
                <Logo />
                <UserIcon currentStatus={isLoggedIn} setLogged={setLoggedIn}/>
                <p>{counter ? counter : 'No counter'}</p>
                <p>{isLoggedIn ? 'USER IS LOGGED IN' : 'UNAUTHORIZED'}</p>
                <ul className={styles.navigation}>
                    {navData.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        )

   
}


