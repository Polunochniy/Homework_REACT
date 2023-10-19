import React from 'react'
import styles from './inputWithLabel.module.css'


const InputWithLabel = ({hash, onChange}) => {
  return (
    <div className={styles.container}>
    <label className={styles.label} htmlFor={hash}>{hash}</label>
    <input type="text" id={hash} onChange={e=>onChange(e.target.value)}/>
  </div>

  )
}

export default InputWithLabel