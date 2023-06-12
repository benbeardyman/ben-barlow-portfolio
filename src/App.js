import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./container/Home"

const App = () => {

  return (
    <div className='bg-[url("./images/bground_tile.jpg")]'>
      <Router>
          <Switch>
            <Route exact path="/ben-barlow-portfolio" component={Home} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
