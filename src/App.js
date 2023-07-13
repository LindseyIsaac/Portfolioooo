import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Resume from './pages/resume';
import {BrowserRouter, Routes, Route} from"react-router-dom"

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Header/> 
      
      <Routes>

      <Route path="/" element={<About/>}></Route>

      <Route path="/Portfolio" element={<Portfolio/>}></Route>
      
      <Route path="/Contact" element={<Contact/>}></Route> 

      <Route path="/Resume" element={<Resume/>}></Route>   
      
      </Routes>  
      
      <Footer/>
      
      </BrowserRouter> 
    
    </div>
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