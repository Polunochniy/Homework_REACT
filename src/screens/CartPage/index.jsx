import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './CartPage.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CartPage = () => {

  const cartItems = useSelector((state) => state.cart.items);

  const getImg = (arr) => {
    let randomImg = 0;
    if(arr.length > 0) {
      randomImg = Math.floor(Math.random() * arr.length)
    }
    return `http://shop-roles.node.ed.asmer.org.ua/` + arr[randomImg].url
  }

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const increaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

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
                <td><img src={getImg(item.images)}/></td>
                <td>{item.name}</td>
                <td>{item.price} грн</td>
                <td>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                {quantities[item.id] || 0}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </td>
              <td>{item.price * (quantities[item.id] || 0)} грн</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Footer />
      </div>
  )
}

export default CartPage