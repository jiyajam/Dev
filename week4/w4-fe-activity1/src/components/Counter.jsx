import { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [theme, setTheme] = useState('light')
  const [counter, setCounter] = useState(0)
  const toggleTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }
  // console.log(useState('light')) // ['light',BOundFunctionObject]

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      {/* <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button> */}
      <h2>{counter}</h2>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <h3>Toggle</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Counter
