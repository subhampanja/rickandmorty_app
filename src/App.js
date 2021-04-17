import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import { Typography } from '@material-ui/core';
import SingleRes from './components/SingleRes';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <Typography color="textSecondary">Rick and Morty Application</Typography>
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/singleres/:id">
              <SingleRes />
            </Route>
          </Switch>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
