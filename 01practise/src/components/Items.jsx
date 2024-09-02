import React, { useState } from 'react'
import { useCon } from '../context/Context'

function Items({obj}) {

    const [isObjEditable, setIsObjEditable] = useState(false)
    const [objMsg, setObjMsg] = useState(obj.msg)
    const {deleteObj, updateObj, toggleComplete} = useCon()

    const editObj = () => {
        updateObj(obj.id, {...obj, msg: objMsg})
        setIsObjEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(obj.id)
    }

  return (
    <div>
        <input type="checkbox"
            checked={obj.completed}
            onChange={toggleCompleted}
        />

        <input type="text" 
            value={objMsg}
            className={`${obj.completed ? "line-through" : ""}`}
            onChange={(e) => setObjMsg(e.target.value)}
            readOnly={!isObjEditable}
        />

        <button
            onClick={() => {
                if(isObjEditable){
                    editObj()
                }else{
                    setIsObjEditable((prev) => !prev)
                }
            }}
        >
            {isObjEditable ? "yes" : "no"}
        </button>

        <button 
            onClick={() => deleteObj(obj.id)}
        >Delete</button>
    </div>
  )
}

export default Items