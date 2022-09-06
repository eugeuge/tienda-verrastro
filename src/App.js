import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>

      <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path="/productos" element={<ItemListContainer />}/>
              <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path='*' element={<ItemListContainer />}/>
      </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
