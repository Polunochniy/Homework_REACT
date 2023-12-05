import React from 'react';
import Header from '../../components/Header';
import styles from './Guarantee.module.css';
import Footer from '../../components/Footer';

const Guarantee = () => {
  return (
    <>
      <Header />
      <div className={styles.guarantee}>
        <h1>GUARANTEE</h1>
      </div>
      <Footer />
    </>
  )
};

export default Guarantee