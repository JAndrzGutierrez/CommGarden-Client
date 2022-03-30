import './App.css';
import NavBar from './Components/NavBar/NavBar';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About'
import ApiCall from './Components/ApiCall/ApiCall';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="page-contairner" className="App">
      <NavBar />
      <ApiCall/>
      <main>
        <Routes>
          <Route path='/home' element={<LandingPage/>}></Route>
          <Route path='/about'element={<About/>}></Route>
          <Route path='/thegarden'></Route>
          <Route path='/home'></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
