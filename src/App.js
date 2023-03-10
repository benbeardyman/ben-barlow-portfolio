import { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./container/Home"
import NavBar from "./components/NavBar"
import { Icon } from '@iconify/react'
import MobileNav from "./components/MobileNav"

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 136px 1fr;
  min-height:100%;
  @media screen and (max-width: 767px) {
    grid-template-columns: 0px 1fr;
    .hamburger {
    display: block;
    }
  }
`
const hamburger = {
  height: "2.5em",
  width: "2.5em",
  position: "absolute",
  top: "1rem",
  right: "1rem",
  color: "#f9bc60"
}

const HamButton = styled.div`
  @media screen and (min-width:767px){
    display:none;
  }
`

const MobileNavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 999;
`

const Nav = styled.div`
  grid-area: nav;
  height: 100vh;
`

const Main = styled.div`
  grid-area: main;
  height:100vh;
  overflow: auto;
`
const App = () => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <Wrapper>
      <Router>
        <Nav>
          <NavBar />
        </Nav>
        <Main>
          <HamButton className="hamburger">
            <Icon icon="charm:menu-hamburger" style={hamburger} onClick={toggleMobileNav} />
          </HamButton>
          {isMobileNavOpen && (
            <MobileNavWrapper>
              <MobileNav toggleMobileNav={toggleMobileNav} />
            </MobileNavWrapper>
          )}
          <Switch>
            <Route exact path="/ben-barlow-portfolio" component={Home} />
          </Switch>
        </Main>
      </Router>
    </Wrapper>
  );
}

export default App;
