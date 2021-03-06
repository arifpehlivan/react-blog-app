import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Blog App</h1>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/blogs" activeclassname="active">Blogs</NavLink>
        <NavLink to="/contact" activeclassname="active">Contact</NavLink>
    </header>
  )
}

export default Header