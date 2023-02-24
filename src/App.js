import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Enquire from './components/Enquire/Enquire.jsx';
import Cards from './components/Cards/Cards.jsx';
import Contactus from "./components/Contactus/Contactus";
import About from './components/About/About.jsx';
import Ainfo from './components/About/Ainfo.jsx';
import Enquire2 from './components/Enquire/Enquire2.jsx';
// import about from './components/Gallery/Gallery.jsx';
// import about from './components/Jewellery/Jewellery.jsx';
// import about from './components/';
import Acard from './components/About/Acard.jsx';
function App() {
  return (
    <div className="App">
      Alyazyeh Pearls
      <Ainfo/>
      <br></br>
      <br></br>
      <Acard/>
      <br>
      </br>
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
      <br>
      </br>
      <br>
      </br>
      <Enquire2/>
      <br>
      </br>
      <br>
      </br>
      <Contactus/>
    </div>
  );
}

export default App;
