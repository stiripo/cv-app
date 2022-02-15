import './App.scss';

import { About } from './pages/Inner/About';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/home';


function App() {
  return (
    <Switch>
      <Route exact path='/'>
       <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </Switch>

  );
}

export default App;

// css modules
// html tags (sections, figure, dl, h1...)
// unique keys for listitems
// scroll bar
// portfolio component
//intersection observer


