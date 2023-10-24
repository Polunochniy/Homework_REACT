import React from 'react'
import styles from './Home.module.css';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Slider from '../../components/Slider';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <Menu />
      <Slider />
      <div className={styles.info}>
          <div className={styles.infoColumn}>
            <div className={styles.guarantee}>
                <img src='https://clubdelmotorista.com/wp-content/uploads/2019/03/suzuki-katana-2019-1-1000x640.jpg'></img>
                <button >Детальніше ⟶</button>
            </div>
            <div className={styles.news}>
                <img src='https://img1.akspic.ru/crops/7/9/6/5/5/155697/155697-suzuki_katana-suzuki-motocikl-peremeshivat-sportivnyj_motocikl-1366x768.jpg'></img>
                <button >Детальніше ⟶</button>
            </div>
          </div>
          <div className={styles.aboutUs}>
                <img src='https://a.storyblok.com/f/110134/573x573/cfcc5b5ce0/gsx1300ram0_fueltank-1.jpg'></img>
                <button >Детальніше ⟶</button>
          </div>
      </div>
    </div>
  )
}

export default Home