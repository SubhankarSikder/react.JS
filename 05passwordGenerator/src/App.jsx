import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~!@#$%^&*(){}:|<>?</>[];',./"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
    <div className='w-full text-orange-500 text-5xl bg-gray-700 p-5 m-5'>
      <div className='mb-6'>Password Generator</div>
      <div className='flex justify-evenly m-7'>
        
        <input type="text" value={password} className='w-full' placeholder='password' readOnly  ref={passwordRef}/>
        <button className='ml-2' onClick={copyPasswordToClipboard}>copy</button>
      </div>

      <div className='flex gap-x-8 text-4xl m-5'>
        <div className='flex gap-x-2'>
          <input type="range" min={8} max={25} value={length} className='cursor-pointer'
          onChange={e => {setLength(e.target.value)}} />
          <label>Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} 
            onChange={() => {setNumberAllowed((prev) => !prev)}}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label>Characters</label>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default App
