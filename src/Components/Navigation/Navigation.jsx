import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navigation.css'
import {
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtn, 
  NavBtnLink
} from './NavBarElements'

const Navigation = () => {

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/Home' activeStyle>Home</NavLink>
          <NavLink to='/DesignArtworks' activeStyle>Design Artworks</NavLink>
          <NavLink to='/GuitarServices' activeStyle>Guitar Services</NavLink>
          <NavLink to='/SoftwareServices' activeStyle>Software Services</NavLink>
          <NavLink to='/About' activeStyle>About</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navigation