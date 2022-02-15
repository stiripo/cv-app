import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Info } from './components/Info';
import { Expertise } from './components/Expertise';
import { Feedback } from './components/Feedback';
import { feedback_data, expertise_data, timeline_data } from './utils/constants';
import { Navigation } from './components/Navigation';
import { PhotoBox } from './components/PhotoBox';
import { Panel } from './components/Panel';
import { Timeline } from './components/Timeline';
import { Address } from './components/Address';
import { About } from './pages/Inner/About';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
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
// navigate through panel
// scroll bar
// portfolio component


