import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenAC } from '../../redux/reducers/userReducer';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch();
  const { nextScreen } = useSelector(store => store.navigation)
  const navigation = useNavigate();

  const [userInfo] = useState({
    login: 'admin',
    password: '123123',
  });

  useEffect(() => {
    dispatch(getTokenAC(userInfo));
  }, [dispatch, userInfo])

  useEffect(() => {
    navigation(nextScreen)
  }, [navigation, nextScreen])

  return (
    <>
      
    </>
  )
};

export default Login;
