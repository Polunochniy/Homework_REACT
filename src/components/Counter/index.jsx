import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const clickHandler = () => {
    setCount(prev=> prev+1)
    setCount(prev=> prev+1)
}

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  
    return (
    <div>
        <p>
        Counter: {count}    
        </p>

        <button onClick={increment}>&nbsp; + &nbsp;</button>
        <button onClick={decrement}>&nbsp; - &nbsp;</button>
        <button onClick={clickHandler}> CLICK </button>
    
    </div>
  )
}

export default Counter