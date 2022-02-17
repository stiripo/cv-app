import './App.scss';

import { About } from './pages/Inner/About';
import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/home';


export function App() {
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



// scroll bar
// portfolio component
//intersection observer
// nav panel slide out



