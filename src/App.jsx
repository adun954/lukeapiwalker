// make sure your code is organized

import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
// be able to router where the filers people is

// SearchBar
import SearchBar from './components/SearchBar';

// Error
import Error from './components/error';

// components

// importing people.js
import People from "./components/People";
// import planets.js
import Planets from "./components/Planets";

function App() {
  return (
    <div className="App">
      {/* Put search bar abouve router to avoid confusion */}
      <SearchBar />
      {/* put people path */}
      <Routes>
        {/* triggers the people component */}
        <Route path='/People/:id' element={<People/>} />
        {/* triggers the planets component */}
        <Route path='/Planets/:id' element={<Planets/>} />
        {/* triggers the error message and src */}
        <Route path="/error" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
