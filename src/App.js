import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [otp, setOTP] = useState('');
  const [inputOTP, setInputOTP] = useState('');
  const [result, setResult] = useState('');
  const [style, setStyle] = useState('');
  var url = "https://otpgenerator.ishanjirety.repl.co/get-otp?name=";

  const getOTP = () => {
    fetch(url+name)
      .then((res) => res.json())
      .then((data) => {
        setOTP(data.otp)
      })
  }
  const validateOTP = () => {
    if (otp === inputOTP) {
      setStyle('green');
      setResult('Success')
    }else {
      setStyle('red');
      setResult('Error')
    }
    setName('')
    setInputOTP('')
    setOTP('')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OTP <code>Validater</code> App React js with tailwindcss
        </p>

        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required/>
          </div>
          <div>
          <button type="button" onClick={getOTP} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get OTP</button>
          <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">{otp}</span></p>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your OTP</label>
            <input type="password" id="password" onChange={(e) => setInputOTP(e.target.value)}  value={inputOTP} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
          </div>
          <div><span style={{color: style}} class="font-medium"> {result}!</span> </div>
          <button type="button" onClick={validateOTP} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
          
      </header>
    </div>
  );
}

export default App;
