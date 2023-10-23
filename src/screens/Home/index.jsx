import React from 'react'
import styles from './Home.module.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Menu />
    </div>
  )
}

export default Home