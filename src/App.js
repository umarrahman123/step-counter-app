
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Arrays for days and months
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "September", "Oct", "Nov", "Dec"];

  // Function to calculate future date based on current count
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + count); // Adjust future date by count days

  // Handler for step increment
  function stepIncrementHandler() {
    setStep(step + 1);
  }

  // Handler for count increment based on step
  function countIncrementHandler() {
    setCount(count + step);
  }

  // Handler for reset
  function resetHandler() {
    setCount(0);
    setStep(0);
  }

  return (
    <div className='container my-5'>
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App with Date Calculation</h1>
          <div className="my-5">
            <h2 className='my-5'>Count: {count}</h2>

            {/* Step Counter */}
            <div className="mb-3">
              <h3>Step: {step}</h3>
              <button className='btn btn-primary mx-3' onClick={stepIncrementHandler}>Increase Step</button>
            </div>

            <button className='btn btn-success mx-3' onClick={countIncrementHandler}>+ (Increase by Step)</button>
            <button className='btn btn-danger mx-3' onClick={() => setCount(count - step)}>- (Decrease by Step)</button>
            <button className='btn btn-secondary mx-3' onClick={resetHandler}>Reset</button>
          </div>

          {/* Date and Day Calculation */}
          <h2>
            Aaj se {count} din baad, din hoga {days[futureDate.getDay()]}, aur tareekh hogi {futureDate.getDate()} {months[futureDate.getMonth()]} {futureDate.getFullYear()}.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;



// import React,{useState} from 'react'

// function App() {
//   const [count, setcount] = useState(0);
//   return (
//     <div className='container my-5'>
//       <div className="card text-center my5">
//         <div className="card-body">
//           <h1>Counter App</h1>
//           <div className="my-5">
//             <h2 className='my-5'>{count}</h2>
          
//             <button className='btn btn-success mx-3' onClick={()=> setcount(count + 1)}>+</button>
//             <button className='btn btn-danger mx-3' onClick={()=> setcount(count - 1)}>-</button>
//             <button className='btn btn-secondary mx-3' onClick={()=> setcount(0)}>Reset</button>
//           </div>
//           <p></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App
