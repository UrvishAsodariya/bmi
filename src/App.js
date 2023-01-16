import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function BMICalc() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  const calcBMI = () => {
    setBMI(weight / (height * height));
  };

  return (
    <>
      <div className='mainbox'>
        <label className='text'>Height (cm):</label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className='intbox' />

        <br />

        <label className='text'>Weight (kg):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className='intbox' />
    
        <br />

        <button onClick={calcBMI} className='bttn'>Click Here </button>

        <br />

        <label className='text2'>Your BMI: {bmi.toFixed(2)}</label>
      </div>


    </>
  );
}

export default BMICalc;

