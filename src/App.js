import logo from './logo.svg';
import './App.css';
// import Services from './components/Our Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Enquire from './components/Enquire/Enquire';
import Process from './components/Processes/process';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Our Services/Services';
import Jewellery from './components/Jewellery/Jewellery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/jewellery" element={<Jewellery/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
