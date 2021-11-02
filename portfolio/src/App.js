import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import Projects from './pages/Projects'
import NavBar from "./components/NavBar";
import Skills from './pages/Skills'
import Resume from './pages/Resume'


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/toolbelt'>
          <Skills />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
