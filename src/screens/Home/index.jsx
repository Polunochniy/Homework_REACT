import React from 'react'
import styles from './Home.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';


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
                <img src='https://clubdelmotorista.com/wp-content/uploads/2019/03/suzuki-katana-2019-1-1000x640.jpg'></img>
                <button >Детальніше ⟶</button>
            </div>
            <div className={styles.news} onClick={navigateToNews}>
                <h1 className={styles.title}>Новини</h1>
                <img src='https://img1.akspic.ru/crops/7/9/6/5/5/155697/155697-suzuki_katana-suzuki-motocikl-peremeshivat-sportivnyj_motocikl-1366x768.jpg'></img>
                <button >Детальніше ⟶</button>
            </div>
          </div>
          <div className={styles.aboutUs}>
                <h1 className={styles.title} onClick={navigateToAboutUs}>Про нас</h1>
                <img src='https://a.storyblok.com/f/110134/573x573/cfcc5b5ce0/gsx1300ram0_fueltank-1.jpg'></img>
                <button >Детальніше ⟶</button>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home