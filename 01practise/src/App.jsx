import { useState } from 'react'
import './App.css'
import { ProvideContext } from './context/Context'
import { useEffect } from 'react'
import Form from './components/Form'
import Items from './components/Items'

function App() {
  const [objs, setObjs] = useState([])

  const addObj = (obj) => {
    setObjs((prev) => [{id: Date.now(), ...obj}, ...prev])
  }

  const deleteObj = (id) => {
    setObjs((prev) => prev.filter((prevObj) => prevObj.id !== id))
  }

  const updateObj = (id, msg) => {
    setObjs((prev) => prev.map((prevObj) => prevObj.id === id ? msg : prevObj))
  }

  const toggleComplete = (id) => {
    setObjs((prev) => prev.map((prevObj) => prevObj.id === id ? {...prevObj, completed: !prevObj.completed} : prevObj))
  }

  useEffect(() => {
    const objs = JSON.parse(localStorage.getItem('objs'))
    if(objs && objs.length > 0){
      setObjs(objs)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('objs', JSON.stringify(objs))
  }, [objs])

  return (
    <ProvideContext value={{objs, addObj, deleteObj, updateObj, toggleComplete}}>
      <div>
        <h1>Your ToDo's</h1>
        <div>
          {/* Form */}
          <Form />
        </div>

        <div>
          {/* items */}
          {
            objs.map((obj) => (
              <div key={obj.id}>
                <Items obj={obj}/>
              </div>
            ))
          }
        </div>
      </div>
    </ProvideContext>
  )
}

export default App
