import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 50

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
      console.log('clicked', counter);
    }
    
  }
  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
      console.log('clicked', counter);
    }
    
  }
  return (
    <>
      <h1>ulluck and bholluck</h1>
      <h2>counter value : {counter}</h2>
      <button 
        onClick={addValue}
      >add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  )
}

export default App
