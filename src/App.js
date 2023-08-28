import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./HomeNav.css"
import Destination from './Destination';
import Technology from './Technology';
import Crew from './Crew';
import HomeNav from './HomeNav';

function App() {
  return (
      <BrowserRouter>
        <HomeNav/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/destination" element={<Destination/>}/>
          <Route exact path="/crew" element={<Crew/>}/>
          <Route exact path="/technology" element={<Technology/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
