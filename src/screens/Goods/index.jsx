import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Goods.module.css'
import { useNavigate } from 'react-router-dom';
import { getProductsAC } from '../../redux/reducers/productReducer';
import Header from '../../components/Header'
import Menu from '../../components/Menu';

const Goods = () => {

  const isToken = useSelector(store => store.user.token)
  const products = useSelector(store => store.products.data)
  const navigate = useNavigate();
  const dispatch = useDispatch();


    useEffect(() => {
      // TO REFRESH TOKEN
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
          {products.length > 0 && products?.map((el, index) => <div key={index}>
                  {console.log(el)}
                  <p>{el.name}</p>
              </div>)}
        </div>
    </>
  )
}

export default Goods