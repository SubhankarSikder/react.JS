import { useState } from 'react'
import './App.css'
import { ProvideContext } from './context/Context'
import { useEffect } from 'react'

function App() {
  const [objs, setObjs] = useState([])

  const addObj = (msg) => {
    setObjs((prev) => [{id: Date.now(), ...msg}, ...prev])
  }

  useEffect(() => {
    localStorage.setItem('objs', JSON.stringify(objs))
  }, [objs])

  useEffect(() => {
    const objs = JSON.parse(localStorage.getItem('objs'))
    if(objs && objs.length > 0){
      setObjs(objs)
    }
  }, [])

  return (
    <ProvideContext value={{objs, addObj}}>
      <div>
        <h1>Your ToDo's</h1>
        <div>
          {/* Form */}
        </div>

        <div>
          {/* items */}
        </div>
      </div>
    </ProvideContext>
  )
}

export default App
