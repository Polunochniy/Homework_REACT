import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.aboutUs}>
        <h1>ABOUT US</h1>
      </div>
      <Footer />
    </>
  )
};

export default AboutUs