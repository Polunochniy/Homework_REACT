import React from 'react'
import {routes} from './../../App'

const Navigation = () => {
  return (
    <div>
        <ul>
            {console.log('routes', routes)}
           {routes?.map(({path, name}, index)=> <li key={index}><a href={path}>{name}</a></li>)}
        </ul>
    </div>
  )
}

export default Navigation