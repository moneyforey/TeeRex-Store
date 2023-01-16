import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
     <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
