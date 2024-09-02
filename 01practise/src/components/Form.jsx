import React from 'react'
import { useState } from 'react'
import { useCon } from '../context/Context'

function Form() {
  const [msg, setMsg] = useState('')
  const {addObj} = useCon()

  const add = (e) => {
    e.preventDefault()
    if(msg){
      addObj({msg, completed: false})
      setMsg('')
    }
  }

  return (
    
    <form onSubmit={add}>
        <input type="text"
            placeholder='write your todo'
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
        />

        <button type='submit'>Add</button>
    </form>
  )
}

export default Form

