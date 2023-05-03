import React from 'react'
import './App.css';
import { Route , Routes} from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useRoutes,
//   } from "react-router-dom";
import Website from './components/website'
import Details from './components/details'

function App() {
  return (
 <>
  <div className="App">
      <Routes>
        <Route path="/" element={  <Website/> } />
        <Route path="/details" element={ <Details/> } />
      </Routes>
    </div>
 </>
  );
}

export default App;
