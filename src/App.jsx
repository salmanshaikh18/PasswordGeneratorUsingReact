import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = () => {
    
  }

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App