import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./container/Home"
import NavBar from "./components/NavBar"
import { Icon } from '@iconify/react'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 136px 1fr;
  min-height:100%;
  @media screen and (max-width: 768px) {
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
  @media screen and (min-width:768px){
    display:none;
  }
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

function App() {
  return (
    <Wrapper>
      <Router>
        <Nav>
          <NavBar />
        </Nav>
        <Main>
          <HamButton className="hamburger">
            <Icon icon="charm:menu-hamburger" style={hamburger}/>
          </HamButton>
          <Switch>
            <Route exact path="/ben-barlow-portfolio" component={Home} />
          </Switch>
        </Main>
      </Router>
    </Wrapper>
  );
}

export default App;
