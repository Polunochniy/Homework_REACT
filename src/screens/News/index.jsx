import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './News.module.css';

const News = () => {
  return (
    <>
      <Header />
      <div className={styles.news}>
        <h1>NEWS</h1>
      </div>
      <Footer />
    </>
  )
};

export default News