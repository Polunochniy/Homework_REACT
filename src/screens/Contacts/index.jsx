import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link,  } from 'react-router-dom';
import InputWithLabel from '../../components/InputWithLabel';

const Contacts = () => {
  const user = useSelector(state => state.user)

  const [productInfo, setProductInfo] = useState({
    productName: '',
    quantity: 0
  })
  const handleUpdateUserProductName = (value) => {
    setProductInfo({...productInfo, productName: value})
  }
  const handleUpdateProductQuantity = (value) => {
    setProductInfo({...productInfo, quantity: +value})
  }

  return (
    <div className='container' style={{backgroundColor: 'palevioletred'}}>
     <h1>Hello, {user.name}</h1>
    <nav>
      <ul>
        <li>
          <Link to={`/`}>Login</Link>
        </li>
      </ul>
    </nav>

    <div>
      <InputWithLabel hash="productName" onChange={handleUpdateUserProductName}  />
      <InputWithLabel hash="productQuantity" onChange={handleUpdateProductQuantity}/>
    </div>
</div>
  )
}

export default Contacts