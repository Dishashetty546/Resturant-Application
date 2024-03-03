
import './Assets/css/style.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contacts';
import Menu from './Components/Menu';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Contact/>
    <Menu/>
    <Products/>
    

    </div>
  );
}

export default App;
