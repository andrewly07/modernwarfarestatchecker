import React from "react";
import Navbar from './Navbar'
import Footer from './Footer'
import styled from 'styled-components'

const MainStyled = styled.main`
  position: relative;
`

const Layout = ({ children }) => {
  return (
      <MainStyled>
          <Navbar />
            { children }
          <Footer />
      </MainStyled>
  )
};

export default Layout;
