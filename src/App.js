//importar el nombre de nuestro componente from -posicion-
import './App.css';
import NavBar from './components/NavBar';

function App() {//app es el padre de header
  return (
    <>
      <NavBar /> {/*llamo a ese componente que dentro tiene mini componentes, html -> jsx mayusc*/}
    </>
  );
}

export default App;