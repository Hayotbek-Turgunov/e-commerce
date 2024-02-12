import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBotton from './NavbarBotton'
import { useLocation } from 'react-router-dom'
import { PRODUCTS } from '../../static'

function NavbarMain() {
  const { pathname } = useLocation()
  return pathname.includes('login') ? <></> : (
    <>
      <SubHeader />
      <Navbar data={PRODUCTS} />
      <NavbarBotton />
    </>
  )
}

export default NavbarMain