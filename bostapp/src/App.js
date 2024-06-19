
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Cardapp from './Components/Cardapp';
import Footer from './Components/Footer';
import Footercon from './Components/Footercon';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      {/* <Card/> */}
      <Cardapp/> 
      <Footer/>
      <Footercon/>
    </div>
  );
}

export default App;
