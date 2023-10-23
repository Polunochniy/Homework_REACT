import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { setUserNameActionCreator, setUserEmailActionCreator, setUserTokenAC } from '../../redux/reducers/userReducer'
import { useNavigate } from 'react-router-dom';

const GET_TOKEN = gql`
  query getToken {
    login(login: "admin", password: "123123")
  }
`;

const Login = () => {
  const [fetchAuth, { data }] = useQuery(GET_TOKEN);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    login: 'admin',
    password: '123123'
  })

  useEffect(() => {
    if(data) {
      dispatch(setUserTokenAC(data.login))
      setTimeout(() => navigate("/contacts"), 2000)
    }
  }, [data]);

  const handleUpdateLogin = (e) => {
    setUserInfo({...userInfo, login: e.target.value})
  }

  const handleUpdatePassword = (e) => {
    setUserInfo({...userInfo, password: e.target.value})
  }

  const handleGetToken = () => {

  }

  return (
    <div className='container' style={{backgroundColor: 'palevioletred'}}>
      <div style={{display: 'flex'}}>
        <input type='text' value={userInfo.login} onChange={handleUpdateLogin}/>
        <input type='text' value={userInfo.password} onChange={handleUpdatePassword}/>
        <button onClick={handleGetToken}>SEND</button>


      </div>
    </div>
  )
}

export default Login