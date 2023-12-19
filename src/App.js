import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
  <Route exact path="/" element={<Homepage/>} />
  </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
