import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/reducers/cartReducer';
import styles from './Card.module.css'

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className={styles.productCard}>
        <img src={product.images} />
        <div className={styles.productText}>
          <p className={styles.productName}>{product.name}</p>
          <p>{product.categories._id}</p>
          {/* <p>{product.description}</p> */}
          <div className={styles.productPrice}>
            <p className={styles.priceNumber}>{product.price}</p>
            <p className={styles.productCurrency}>грн.</p>
          </div>
          <button onClick={handleAddToCart}>Додати у кошик</button>
        </div>
    </div>
  );
};

export default Card;