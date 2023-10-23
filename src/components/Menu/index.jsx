import React from 'react'
import styles from '../../screens/Home/Home.module.css';

const Menu = () => {
  return (
    <div className={styles.containerMenu}>
        <ul>
            <li>ЗАПЧАСТИНИ
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>АКУМУЛЯТОРИ
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>СВІЧКИ ЗАПАЛЮВАННЯ
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>ОБОДА
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>СВІТЛООБЛАДНАННЯ
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
            <li>АКСЕСУАРИ
                <p>▼</p>
                <div className={styles.dropdownContentContainer}>
                    <div className={styles.dropdownContent}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Menu