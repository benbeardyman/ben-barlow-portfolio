import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./container/Home";
import NavBar from "./components/NavBar";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'nav main';
  grid-template-columns: 136px 1fr;
  min-height:100%;
  @media screen and (max-width: 790px) {
    grid-template-columns: 0px 1fr;
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
          <Switch>
            <Route exact path="/ben-barlow-portfolio" component={Home} />
          </Switch>
        </Main>
      </Router>
    </Wrapper>
  );
}

export default App;
