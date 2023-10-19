import React from 'react'

const UserIcon = ({setLogged, currentStatus}) => {
  return (
    <div style={{backgroundColor: 'rebeccapurple'}} onClick={()=>setLogged(!currentStatus)}>UserIcon</div>
  )
}

export default UserIcon