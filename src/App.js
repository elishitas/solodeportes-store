//importar el nombre de nuestro componente from -posicion-
import './App.css';
import NavBar from './components/NavBar/index';
import ItemListContainer from './components/ItemListContainer/index'

function App() {//app es el padre de header
  return (
    <>
      <NavBar /> {/*llamo a ese componente que dentro tiene mini componentes, html -> jsx mayusc*/}
      <ItemListContainer 
        title = 'Productos Destacados'/> 
    </>
  );
}

export default App;