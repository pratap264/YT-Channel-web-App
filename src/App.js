import "./App.css";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Giveaway} from './pages/Giveaway';
import {About} from './pages/About';
import {Home} from './pages/Home';
import {Header} from "./components/Header"
import {Footer} from "./components/Footer"



function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/giveaway" element={<Giveaway/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
