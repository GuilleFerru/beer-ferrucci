//import logo from './logo.svg';
import './App.css';
// import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
 import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
// import { NotFoundComponent } from './components/NotFoundComponent/NotFoundComponent';
//import imgPageNotFound from './img/imgPageNotFound.jpg';

const App = props => {
  return <>
    <NavBar/>
    {/* <ItemListContainer/> */}
    <ItemDetailContainer/>
    {/* <NotFoundComponent titulo='Ups! Pagina incorrecta' 
      img={imgPageNotFound} 
      alt='Imagen de pagina icorrecta' 
      action={()=> console.log('Boton')}
    /> */}
  </>
}

export default App;

