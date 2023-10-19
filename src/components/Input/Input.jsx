import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue((prev)=> {
      console.log('prev', prev);
      return e.target.value
    });
  }

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e)=>handleInputChange(e)}
      />
    </div>
  );
};

export default Input;
