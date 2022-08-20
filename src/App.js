import logo from './logo.svg';
import './App.css';

import { Switch, Route} from 'react-router-dom'

import Home from './pages/Home'
import MapPage from './pages/MapPage'

function App() {
  return (
      <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/map'>
          <MapPage />
        </Route>
      </Switch>
      </div>
  );
}

export default App;
