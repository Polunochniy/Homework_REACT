import React from 'react'
import { useSelector } from 'react-redux';
import styles from './CartPage.module.css';
import Header from '../../components/Header';

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
      <div className={styles.cartPage}>
        <Header />
        <h1>Оформлення замовлення</h1>
        <table className={styles.orderList}>
        <thead>
          <tr>
            <th>Фото</th>
            <th>Найменування</th>
            <th>Ціна</th>
            <th>Кількість</th>
            <th>Сума</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image}/></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
  )
}

export default CartPage