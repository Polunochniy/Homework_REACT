import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styles from './ProductPage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { addProductToCart } from '../../redux/reducers/cartReducer';

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const products = useSelector((store) => store.products.data);

  const product = products.find((p) => p._id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0]?.url);

  const handleAddToCart = () => {
    dispatch(addProductToCart(product));
  };

  useEffect(() => {
    if (!product) {
      navigate('/404');
    }
  }, [product, navigate]);
  
  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className={styles.productPage}>
      <Header />
      <div className={styles.productContainer}>
          <div className={styles.productImages}>
            <div className={styles.imageContainer}>
              <img src={`http://shop-roles.node.ed.asmer.org.ua/${selectedImage}`} />
            </div>
            <div className={styles.thumbnailContainer}>
              {product?.images &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://shop-roles.node.ed.asmer.org.ua/${image.url}`}
                    onClick={() => handleThumbnailClick(image.url)}
                    className={styles.thumbnail}
                  />
                ))}
            </div>
          </div>
            <div className={styles.text}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.category}>{product.categories.map((category) => category.name).join(', ')} </p>
              <div className={styles.priceContainer}>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.productCurrency}>₴</p>
                <button onClick={handleAddToCart}>Додати у кошик</button>
              </div>
              <p className={styles.description}>{product.description}</p>
            </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage