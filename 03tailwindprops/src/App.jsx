import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "gufu",
    age: 10
  }
  let myArr1 = [1, 5, 10, 7 ]
  let myArr2 = [2, 4, 6, 13 ]

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username='chorni' someObj={myObj} someArr={myArr1} btnText='click me'/>
      <Card username='kut-kut' someObj={myObj} someArr={myArr2}/>
    </>
  )
}

export default App
