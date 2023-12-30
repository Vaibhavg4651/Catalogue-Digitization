import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/form">form</NavLink>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive ? "active_class":""} to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar