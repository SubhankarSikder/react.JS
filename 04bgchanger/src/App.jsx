import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="mainDiv p-4 bg-white rounded-xl h-fit">
        <button onClick={changeColor} className='bg-red-500 rounded-2xl'>Red</button>
        <button id='green' className='bg-green-500 rounded-2xl'>Green</button>
        <button id='blue' className='bg-blue-500 rounded-2xl'>Blue</button>
        <button id='olive' className='bg-green-700 rounded-2xl'>Olive</button>
        <button id='gray' className='bg-gray-600 rounded-2xl'>Gray</button>
        <button id='yellow' className='bg-yellow-300 text-black rounded-2xl'>Yellow</button>
        <button id='pink' className='bg-pink-400 text-black rounded-2xl'>Pink</button>
        <button id='purple' className='bg-purple-400 rounded-2xl'>Purple</button>
        <button id='lavender' className='bg-blue-200 text-black rounded-2xl'>Lavender</button>
        <button id='white' className='bg-white text-black rounded-2xl'>White</button>
        <button id='black' className='bg-black rounded-2xl'>Black</button>
      </div>
    </>
  )
}

export default App
