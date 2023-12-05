import styles from './Cart.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getImageCart } from '../../utils/helpers';

const Cart = () => {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate('/cart')
    };

    const totalCartItemCount = useSelector(state =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
    );
    
    return (
        <>
            <img src={getImageCart()} onClick={navigateToCart} className={styles.cartImg} alt="" />
            {totalCartItemCount > 0 && (
                <div className={styles.cartCount} onClick={navigateToCart}>
                    {totalCartItemCount}
                </div>
            )}
        </>
    );
};

export default Cart
