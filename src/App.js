import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='header'>
      <img src='https://phonoteka.org/uploads/posts/2023-03/1680022972_phonoteka-org-p-nirvana-logotip-art-krasivo-60.png'></img>
      <ul>
        <li className='menu'>
          <a href={'/'}>HOME</a>
          <a href={'/aboutus'}>ABOUT US</a>
          <a href={'/services'}>SERVICES</a>
          <a href={'/projects'}>PROJECTS</a>
          <a href={'/partners'}>PARTNERS</a>
          <a href={'/contacts'}>CONTACTS</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
