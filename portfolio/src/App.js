import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Projects from './pages/Projects'


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          Home
        </Link>
          <Link className="navbar-brand" to="/Projects">
           Projects
          </Link>
      </div>
    </nav>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
    </Switch>
    





    </Router>
  );
}


export default App;
