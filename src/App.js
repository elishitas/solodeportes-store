import Header from './components/header' //importar el nombre de nuestro componente from -posicion-
import './App.css';

function App() {//app es el padre de header
  return (
    <>
      <Header /> {/*llamo a ese componente que dentro tiene mini componentes, html -> jsx mayusc*/}
    </>
  );
}

export default App;