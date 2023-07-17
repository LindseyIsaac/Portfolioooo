import {BrowserRouter, Routes, Route} from"react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import Start from './pages/start'


function App() {
  return (
      <BrowserRouter>

     <Navbar/>
    
      <Routes>
      <Route path="/" element={<About/>} />

      <Route path="/start" element={<Start/>} />

      <Route path="/portfolio" element={<Portfolio/>}></Route>
      
      <Route path="/contact" element={<Contact/>}></Route> 

      <Route path="/resume" element={<Resume/>}></Route>    
      
      </Routes>  
      
      <Footer/>
       
      </BrowserRouter> 
  );
}

export default App;


/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */