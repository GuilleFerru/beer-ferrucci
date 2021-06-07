//import logo from './logo.svg';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
//import { NotFoundComponent } from './components/NotFoundComponent/NotFoundComponent';
//import imgPageNotFound from './img/imgPageNotFound.jpg';

const App = props => {
  return <>
    <NavBar />
    <ItemListContainer greeting="Birra" />
    {/* <NotFoundComponent titulo='Ups! Pagina incorrecta' 
      img={imgPageNotFound} 
      alt='Imagen de pagina icorrecta' 
      action={()=> console.log('Boton')}
    /> */}
  </>
}

export default App;
