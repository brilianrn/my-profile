import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Navbar } from './components';
import { Home, PortoDetail } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path='/porto-detail/:id'>
          <Navbar />
          <PortoDetail />
        </Route> */}
        <Route path='/'>
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
