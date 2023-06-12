import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import styled from "styled-components"
import Home from "./container/Home"
import bground from "./images/bground_tile.jpg"

const Wrapper = styled.div`
  background-image: url(${bground});
`

const App = () => {

  return (
    <Wrapper>
      <Router>
          <Switch>
            <Route exact path="/ben-barlow-portfolio" component={Home} />
          </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
