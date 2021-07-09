import './App.css';
import { CartComponentContext } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './Router/Router';

const App = props => {
  return <CartComponentContext>
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
    </CartComponentContext>
}

export default App;

