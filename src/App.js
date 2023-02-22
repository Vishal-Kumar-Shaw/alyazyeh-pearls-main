import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Enquire from './components/Enquire/Enquire.jsx';
import Cards from './components/Cards/Cards.jsx';
import Contactus from "./components/Contactus/Contactus";
import About from './components/About/About';
// import about from './components/Gallery/Gallery.jsx';
// import about from './components/Jewellery/Jewellery.jsx';
// import about from './components/';
function App() {
  return (
    <div className="App">
      Alyazyeh Pearls
      <About/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Cards/> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Enquire/>
      <br></br>
      <br></br>
      <br></br>
      <Footer/> 
      <Contactus/>
    </div>
  );
}

export default App;
