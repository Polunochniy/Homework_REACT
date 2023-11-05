import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Goods.module.css'
import { useNavigate } from 'react-router-dom';
import { getProductsAC } from '../../redux/reducers/productReducer';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card';
import Categories from '../../components/Categories';

const Goods = () => {

  const isToken = useSelector(store => store.user.token)
  const products = useSelector(store => store.products.data)
  const navigate = useNavigate();
  const dispatch = useDispatch();


    useEffect(() => {
      if (!isToken) {
          navigate('/')
      } else {
          dispatch(getProductsAC(30, 10))
      }
    }, [])

  return (
    <>
        <Header />
        <div className={styles.goodsPage}>
          <Categories />
          <div className={styles.products}>
            {products.length > 0 &&
              products.map(product => (
                <Card key={product.id} product={product} />
              ))}
          </div>
        </div>
        <Footer />
    </>
  )
}

export default Goods