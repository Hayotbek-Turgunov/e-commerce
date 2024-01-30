import React from 'react'
import SubHeader from './SubHeader'
import Navbar from './Navbar'
import NavbarBotton from './NavbarBotton'
import { useLocation } from 'react-router-dom'

function NavbarMain() {
  const { pathname } = useLocation()
  return pathname.includes('login') ? <></> : (
    <>
      <SubHeader />
      <Navbar />
      <NavbarBotton />
    </>
  )
}

export default NavbarMain