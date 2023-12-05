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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (!isToken) {
      navigate('/');
    } else {
      const startIndex = (currentPage - 1) * itemsPerPage;
      dispatch(getProductsAC(65, startIndex, selectedCategory));
    }
  }, [isToken, selectedCategory, currentPage, navigate]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleAllProductsClick = () => {
    dispatch(setSelectedCategoryAC(null));
    setSearchText('');
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (newCategory) => {
    dispatch(setSelectedCategoryAC(newCategory));
    setCurrentPage(1);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.categories.some((category) => category._id === selectedCategory))
    : products;

  const searchResults = searchText
    ? filteredProducts.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
    : filteredProducts;

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div className={styles.goodsPage}>
        <div className={styles.categories}>
          <a className={styles.allProducts} onClick={handleAllProductsClick}>Усі товари</a>
          <Categories onCategoryChange={handleCategoryChange} />
        </div>
        <div className={styles.searchAndGoods}>
          <div className={styles.searchContainer}>
            <input className={styles.search} placeholder="Введіть назву товару..." onChange={handleSearchChange} />
          </div>
          <div className={styles.products}>
            {searchResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
              <div key={product._id} className={styles.cardContainer}>
                <Card product={product} />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button disabled={currentPage === 1} onClick={handlePrevClick}>❮</button>
              {Array.from({ length: totalPages }, (_, index) => (
                <span key={index} onClick={() => handlePageClick(index + 1)} className={currentPage === index + 1 ? styles.activePage : ''}>
                  {index + 1}
                </span>
              ))}
              <button disabled={currentPage === totalPages} onClick={handleNextClick}>❯</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Goods;