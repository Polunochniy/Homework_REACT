import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Goods.module.css'
import { useNavigate } from 'react-router-dom';
import { getProductsAC } from '../../redux/reducers/productReducer';
import Header from '../../components/Header'
import Menu from '../../components/Menu';
import Card from '../../components/Card';

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
        <Menu />
        <div className={styles.products}>
          {products.length > 0 &&
            products.map(product => (
              <Card key={product.id} product={product} />
            ))}
        </div>
    </>
  )
}

export default Goods