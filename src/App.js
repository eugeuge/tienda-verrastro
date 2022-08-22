import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, bienvenido a tu nueva tienda favorita"></ItemListContainer>
    {/*     <header className="App-header">
      
      
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with coderhouse
        </a>
  </header> */}
    </div>
  );
}

export default App;
