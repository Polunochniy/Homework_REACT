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
        <img src={product.images}></img>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={handleAddToCart}>Добавить в корзину</button>
    </div>
  );
};

export default Card;