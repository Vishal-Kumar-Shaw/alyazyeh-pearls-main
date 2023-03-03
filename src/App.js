import logo from './logo.svg';
import Header from './components/common main/Header main/Header';
import Corousal from './components/common main/Corousal/Corousal';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home main/Home';
import Service from './components/Services main/service';
import JewelryS from './components/jewelry main/jewelryS';
import About from './components/About main/About';
import Contact from './components/contact us main/Contact';
import Gallery from './components/Gallery main/Gallery';
import Footer from './components/common main/Footer main/Footer';

import { Routes, Route } from 'react-router-dom';
import Enquire from './components/common main/Enquire/Enquire';


function App() {
  return (
    <div className="App">
      <Header/>
      <Corousal/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Service/>} />
        <Route exact path="/jewellery" element={<JewelryS/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
      <Enquire/>
      <Footer/>
    </div>
  );
}

export default App;
