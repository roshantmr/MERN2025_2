import React from 'react'
import { Link } from 'react-router-dom' 
import './navbar.css'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/home" className="Link">Home</Link>
        <Link to="/about" className="Link">About</Link>
        <Link to="/contact" className="Link">Contact</Link>
        <Link to="/skills" className="Link">Skills</Link>
        <Link to="/hooks" className="Link">HOOKS</Link>
        <Link to="/login" className="Link">Login</Link>
        <Link to="/signup" className="Link">Signup</Link>
      </nav>
    </div>
  )
}
