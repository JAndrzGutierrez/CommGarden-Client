import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container id="page-contairner" className="App">
      <LandingPage/>

      <main>
        <Routes>
          <Route path='#home' element={<LandingPage/>}></Route>
        </Routes>
      </main>
    </Container>
  );
}

export default App;
