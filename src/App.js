import React from "react";
import SongOverview from "./Components/SongOverview";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
      <Router>
        <SongOverview />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>

      </Router>
  );
}

const Home = () => {
  <div>
    <h1>Bla</h1>
  </div>
}

export default App;
