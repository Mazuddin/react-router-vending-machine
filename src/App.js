import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Doritos from './Doritos';
import Chips from './Chips';
import Monster from './Monster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>

         <Routes>
          <Route exact path ="/" element={<VendingMachine />} />
          <Route exact path = "/Soda" element = {<Soda/>}/>
          <Route exact path = "/doritos" element = {<Doritos/>}/>
          <Route exact path = "/Chips" element = {<Chips/>}/>
          <Route exact path = "/Monster" element = {<Monster/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;