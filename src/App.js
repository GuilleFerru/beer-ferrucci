import { CartComponentContext } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './Router/Router';
import { Footer } from './components/Footer/Footer';

const App = props => {
  return <CartComponentContext>
    <BrowserRouter>
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  </CartComponentContext>
}

export default App;

