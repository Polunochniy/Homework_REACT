import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Registration.module.css';
import { useNavigate } from 'react-router-dom';
import { createNewUserAC } from '../../redux/reducers/userReducer';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  };

  const handleRegistration = async (e) => {
    try {e.preventDefault();
      const user = {
        login: formData.login,
        password: formData.password,
        email: formData.email,
      };
      if (!user.login || !user.password || !user.email) {
        setError("Введіть усі дані!");
        return;
      };
      dispatch(createNewUserAC(user));
      navigate('/login');
    }
    catch (error) {
      setError("Помилка при вході! Спробуйте ще раз.");
    }
  };

  return (
    <div className={styles.registration}>
      <div className={styles.registrationForm}>
        <h1>Форма реєстрації</h1>
        <form onSubmit={handleRegistration}>
            <div>
              <label>
                Логін*:
                <input type="text" name="login" onChange={handleInputChange} value={formData.login}/>
              </label>
              <label>
                Пароль*:
                <input type="password" name="password" onChange={handleInputChange} value={formData.password}/>
              </label>
              <label>
                Email*:
                <input type="email" name="email" onChange={handleInputChange} value={formData.email} />
              </label>
            </div>
            {error && <div style={{ color: 'red'}}>{error}</div>}
            <button type="submit" className={styles.buttonSubmitRegistration}>Зареєструватися</button>
          </form>
        </div>
    </div>
  )
};

export default Registration;