import styles from './Cart.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart');
    };

    const cartItems = useSelector(state => state.cart.items);
    const cartItemCount = cartItems.length;

    return (
        <>
            <img src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png" onClick={navigateToCart} className={styles.cartImg}></img>
            {cartItemCount > 0 && <div className={styles.cartCount} onClick={navigateToCart}>{cartItemCount}</div>}
        </>
    )
}

export default Cart
