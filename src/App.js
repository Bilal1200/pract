import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Favoriteproduct from './Component/Favoriteproduct';
import Client from './Component/Client';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <Navbar />
       <Home />
       <About />
       <Product />
       <Favoriteproduct />
       <Client />
      </header>
    </div>
  );
}

export default App;
