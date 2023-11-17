import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserTokenAC } from '../../redux/reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    login: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userInfo.login === 'admin' && userInfo.password === '123123') {
        dispatch(setUserTokenAC('token'));
        navigate('/goods');
      } else {
        setError("Невірний логін чи пароль!");
      }
    } catch (error) {
      setError("Помилка при вході! Спробуйте ще раз.");
    }
  };

  const navigateToRegistration = () => {
    navigate('/registration');
  };

  return (
    <div className={styles.login}>
      <div className={styles.formLogin}>
        <h1>Увійти в систему:</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Логін:
              <input type="text" name="login" value={userInfo.login} onChange={handleInputChange} />
            </label>
            <label>
              Пароль:
              <input type="password" name="password" value={userInfo.password} onChange={handleInputChange} />
            </label>
          </div>
          {error && <div style={{ color: 'red'}}>{error}</div>}
          <button type="submit" className={styles.buttonLogin}>Вхід</button>
          <button className={styles.buttonRegistration} onClick={navigateToRegistration}>Зареєструватися</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
