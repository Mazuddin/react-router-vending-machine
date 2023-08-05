import React from 'react'
import './VendingMachine.css';
import img from './VendingMachine.gif';

function VendingMachine() {
  return (
    <div>
        <h1> Vending Machine </h1>

        <img src={img} alt="VendingMachine" />
         
    </div>
  )
}

export default VendingMachine;