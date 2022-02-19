import { Switch, Route } from "react-router-dom";
import { Home } from './pages/Home/home';
import { About } from './pages/Inner/About';


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



//intersection observer




