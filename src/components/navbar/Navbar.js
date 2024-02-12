import React from 'react'
import './Navbar.css'
import { IoCardOutline, IoMenu, IoSearch, IoHomeOutline } from 'react-icons/io5'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser, FaRegHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import nav_logo from '../../assets/uzum logo.png'
import { useState, useEffect } from 'react'


function Navbar({ data }) {

  const [value, setValue] = useState("")
  const [searchData, setsearchData] = useState("")

  useEffect(() => {
    if (value.trim()) {
      let filterData = data.filter(el => el.title.toLowerCase().includes(value.toLowerCase().trim()))
      setsearchData(filterData)
    } else {
      setsearchData([])
    }

  }, [value])

  console.log(data);

  return (

    <div className="navbar__wrapper">
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
            <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Qidirish..' />
            <button><IoSearch /></button>
            {
              value.trim() && <div className="nav__search-drop">
                <p>Natija: {searchData.length} ta</p>
                {
                  searchData?.slice(0, 5)?.map((el) => <div key={el.id} className='nav_search-item'>
                    <img src={el.url} width={40} alt="" />
                    <div>
                      <p>{el.title}</p>
                      <b>{el.price?.brm()} so'm</b>
                    </div>
                  </div>)
                }
                {
                  !searchData.length && <div className='nav_search-notFound'>
                    <h3>Bunday mahsulot topilmadi</h3>
                  </div>
                }
              </div>
              // value.trim() ?  : <div className="nav_search-drop"> </div> <></>
            }
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
    </div>
  )
}

export default Navbar