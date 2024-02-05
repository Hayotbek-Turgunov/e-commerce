import React from 'react'
import './Navbar.css'
import { IoCardOutline, IoMenu, IoSearch, IoHomeOutline } from 'react-icons/io5'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import nav_logo from '../../assets/uzum logo.png'


function Navbar() {
  return (
    <div className='container'>
      <div className="navbar">
        <NavLink to={'/'} className="navbar__logo">
          <img className='navbar__logo-img' src={nav_logo} alt="" />
        </NavLink>
        <button className="navbar__category-btn">
          <IoMenu />
          <span>Katalog</span>
        </button>

        <div className="navbar__search">
          <input type="text" placeholder='Qidirish..' />
          <button><IoSearch /></button>
        </div>
        <div className='navbar__collection'>
          <NavLink to={'/'} className="navbar__item">
            <IoHomeOutline />
            <span>Asosiy Sahifa</span>
          </NavLink>
          <NavLink to={'/login'} className="navbar__item">
            <FaRegUser />
            <span>Kirish</span>
          </NavLink>
          <NavLink to={'wishes'} className="navbar__item">
            <FaRegHeart />
            <span>Saralangan</span>
          </NavLink>
          <NavLink to={'/cart'} className="navbar__item">
            <FiShoppingCart />
            <span>Savatcha</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar