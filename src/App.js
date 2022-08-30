import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, bienvenido a tu nueva tienda favorita"/>
   
    </div>
  );
}

export default App;
