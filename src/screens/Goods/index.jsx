import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Goods.module.css';
import { useNavigate } from 'react-router-dom';
import { getProductsAC, setSelectedCategoryAC } from '../../redux/reducers/productReducer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import Categories from '../../components/Categories';

const Goods = () => {
  const isToken = useSelector((store) => store.user.token);
  const products = useSelector((store) => store.products.data);
  const selectedCategory = useSelector((store) => store.products.selectedCategory);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!isToken) {
      navigate('/');
    } else {
      dispatch(getProductsAC(65, 0, selectedCategory));
    }
  }, [isToken, selectedCategory]);

  const handleAllProductsClick = () => {
    dispatch(setSelectedCategoryAC(null));
    setSearchText('');
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categories.some((category) => category._id === selectedCategory))
    : products;

  const searchResults = searchText
    ? filteredProducts.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
    : filteredProducts;

  return (
    <>
      <Header />
      <div className={styles.goodsPage}>
        <div className={styles.categories}>
          <a className={styles.allProducts} onClick={handleAllProductsClick}>
            Усі товари
          </a>
          <Categories />
        </div>
        <div className={styles.searchAndGoods}>
          <div className={styles.searchContainer}>
            <input className={styles.search} placeholder="Введіть назву товару..." onChange={handleSearchChange} />
          </div>
          <div className={styles.products}>
            {searchResults.length > 0 &&
              searchResults.map((product) => (
                <div key={product._id} className={styles.cardContainer}>
                  <Card product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Goods;