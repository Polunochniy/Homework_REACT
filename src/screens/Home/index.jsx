import React from 'react'
import styles from './Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { getImageHomePageOne, getImageHomePageThree, getImageHomePageTwo } from '../../utils/helpers';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
      navigate('/login');
  };

  const navigateToRegistration = () => {
      navigate('/registration');
  };

  const navigateToNews = () => {
    navigate('/news');
  };

  const navigateToGuarantee = () => {
    navigate('/guarantee');
  };

  const navigateToAboutUs = () => {
    navigate('/about-us');
  };

  return (
    <div className={styles.home}>
      <Header />
      <h1>Переглядати товари може лише користувач!</h1>
      <button className={styles.buttonLogin} onClick={navigateToLogin}>Увійти до кабінету</button>
      <button className={styles.buttonRegistration} onClick={navigateToRegistration}>Зареєструватися</button>
      <div className={styles.info}>
          <div className={styles.infoColumn}>
            <div className={styles.guarantee} onClick={navigateToGuarantee}>
                <h1 className={styles.title}>Гарантія</h1>
                <img src={getImageHomePageOne()} alt=''/>
                <button >Детальніше ⟶</button>
            </div>
            <div className={styles.news} onClick={navigateToNews}>
                <h1 className={styles.title}>Новини</h1>
                <img src={getImageHomePageTwo()} alt=''/>
                <button >Детальніше ⟶</button>
            </div>
          </div>
          <div className={styles.aboutUs}>
                <h1 className={styles.title} onClick={navigateToAboutUs}>Про нас</h1>
                <img src={getImageHomePageThree()} alt=''/>
                <button >Детальніше ⟶</button>
          </div>
      </div>
      <Footer />
    </div>
  )
};

export default Home