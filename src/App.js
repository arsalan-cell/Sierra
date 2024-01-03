import {  Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import Feature from "./components/Feature";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Help from "./components/Help";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
       
          <Routes>
            <Route  path="/" element={<Homepage />} />
            <Route  path="/feature" element={<Feature />} />
            <Route path="/price" element={<Price/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
       
        <Footer />
      </div>
    </>
  );
}

export default App;
