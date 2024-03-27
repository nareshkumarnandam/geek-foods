import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote'
import Restaurants from './components/Restaurants';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import LandingScreen from './screens/LandingScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Quote /> */}
      {/* <Restaurants /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen />} >
            <Route path='' element={<Home />} />
            <Route path='quotes' element={<Quote />} />
            <Route path='restaurants' element={<Restaurants />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
