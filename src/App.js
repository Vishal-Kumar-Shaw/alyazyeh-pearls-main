import logo from './logo.svg';
import './App.css';
import Services from './components/Our Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Enquire from './components/Enquire/Enquire';
import Process from './components/Processes/process';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Process/>
      <Enquire/>
      <Footer/>
    </div>
  );
}

export default App;
