import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  }

  const getImg = (arr) => {
    let randomImg = 0;
    if(arr.length > 0) {
      randomImg = Math.floor(Math.random() * arr.length)
    }
    return `http://shop-roles.node.ed.asmer.org.ua/` + arr[randomImg].url
  }

  return (
    <div className={styles.productCard}>
        <div className={styles.Image} onClick={() => handleCardClick(product._id)}>
          <img src={getImg(product.images)} />
        </div>
        <div className={styles.productText}>
          <p className={styles.productName} onClick={() => handleCardClick(product._id)}>{product.name}</p>
          <p>{product.categories.map((category) => category.name)}</p>
          <div className={styles.productPrice}>
            <p className={styles.priceNumber}>{product.price}</p>
            <p className={styles.productCurrency}>₴</p>
          </div>
          <button onClick={handleAddToCart}>Додати у кошик</button>
        </div>
    </div>
  );
};

export default Card;