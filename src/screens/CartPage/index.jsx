import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CartPage.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { increaseQuantity, decreaseQuantity, removeProductFromCart, sendOrder } from '../../redux/reducers/cartReducer';
import { getImageMinus, getImagePlus, getImageTrash } from '../../utils/helpers';


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };

  const handleIncreaseCount = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseCount = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleOrder = async () => {
    try {
      const orderData = cartItems.map(item => ({
        _id: item._id,
        quantity: item.quantity,
      }));
      dispatch(sendOrder(orderData));
    } catch (error) {
      console.error('Error handling order:', error.message);
    }
  };

  const getImg = (arr) => {
    let randomImg = 0;
    if (arr.length > 0) {
      randomImg = Math.floor(Math.random() * arr.length);
    }
    return `http://shop-roles.node.ed.asmer.org.ua/` + arr[randomImg].url;
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cartPage}>
      <Header />
      <div className={styles.bodyCartPage}>
        <h1>Оформлення замовлення</h1>
        {cartItems.length > 0 ? (
          <>
            <table className={styles.orderList}>
              <thead>
                <tr>
                  <th>Фото</th>
                  <th>Найменування</th>
                  <th>Ціна</th>
                  <th>Кількість</th>
                  <th>Сума</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={getImg(item.images)} alt={item.name} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price} грн</td>
                    <td>
                      <div className={styles.quantityContainer}>
                        <button onClick={() => handleDecreaseCount(item._id)} className={styles.quantityButton}>
                          <img src={getImageMinus()} alt="" />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleIncreaseCount(item._id)} className={styles.quantityButton}>
                          <img src={getImagePlus()} alt="" />
                        </button>
                      </div>
                    </td>
                    <td>{item.price * item.quantity} грн</td>
                    <td>
                      <button onClick={() => removeItem(item._id)} className={styles.removeButton}>
                        <img src={getImageTrash()} alt=""/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.amountContainer}>
              <div>
                <p className={styles.textAmount}>До сплати: </p>
                <p className={styles.totalAmount}>{calculateTotalAmount()} грн</p>
                <button onClick={handleOrder} className={styles.order}>Оформити замовлення</button>
              </div>
            </div>
          </>
        ) : (
          <p className={styles.noneItems}>У кошику відсутні товари</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default CartPage;