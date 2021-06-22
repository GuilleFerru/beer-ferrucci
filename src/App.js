import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './Router/Router';

const App = props => {
  return <>
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>

  </>
}

export default App;

