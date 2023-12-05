import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Contacts.module.css';
import { getImageURLFacebook, getImageURLInstagram, getImageURLYoutube } from '../../utils/helpers';

const Contacts = () => {

  return (
    <>
      <Header />
        <div className={styles.contacts}>
          <a href="tel:+380985554433">+38 (098) 555-44-33</a>
          <a href="mailto:info@dneprmoto.com.ua">info@dneprmoto.com.ua</a>
          <a>Київ, вул. Олександра Довженка, 3а (м. Шулявська)</a>
            <div className={styles.social}>
              <img src={getImageURLInstagram()} alt=''/>
              <img src={getImageURLFacebook()} alt=''/>
              <img src={getImageURLYoutube()} alt=''/>
            </div>
        </div>
      <Footer />
    </>
  )
};

export default Contacts