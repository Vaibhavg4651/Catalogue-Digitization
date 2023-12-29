import React from 'react'
import { NavLink } from 'react-router-dom';
const Selectnav = () => {
  return (
    <div className='selectnav'>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/text-to-image">Text-to-Image</NavLink>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/form-voice">Form-Fill-By-Voice</NavLink>
    </div>
  )
}

export default Selectnav