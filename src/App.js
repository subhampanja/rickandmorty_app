import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home"
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        <Typography color="textSecondary">Rick and Morty Application</Typography>
        <br />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
