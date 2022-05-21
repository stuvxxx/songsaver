import React from "react";
import SongOverview from "./Components/SongOverview";
import Nav from "./Components/Nav";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/"/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <SongOverview />
      </Router>
  );
}


export default App;
