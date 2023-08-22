import React from 'react'
import { NavbarContainer,Nav, NavText, NavH1, NavH2 } from './NavbarElements'

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavText>PETFINDER</NavText>
        <NavH1>Sign Up</NavH1>
        <NavH2> Log in </NavH2>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
