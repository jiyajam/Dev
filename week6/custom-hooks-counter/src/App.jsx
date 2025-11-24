import useLocalStorage from './useLocalStorage'

const App = () => {
  const [name, setName] = useLocalStorage('name', '')

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is stored in localStorage: {name}</p>
    </div>
  )
}

export default App
;/ / / App.jsx
// import SingleCounter from './SingleCounter' // Import the SingleCounter component
// import './App.css' // Import styles for the app

// const App = () => {
//   return (
//     <div className='app-container'>
//       <SingleCounter />
//       <SingleCounter />
//       <SingleCounter />
//     </div>
//   )
// }

// export default App
// import { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState('')
//   const [born, setBorn] = useState('')
//   const [height, setHeight] = useState('')

//   return (
//     <div>
//       <form>
//         <div>
//           Name:
//           <input
//             type='text'
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           Birthdate:
//           <input
//             type='date'
//             value={born}
//             onChange={(event) => setBorn(event.target.value)}
//           />
//         </div>
//         <br />
//         <div>
//           Height:
//           <input
//             type='number'
//             value={height}
//             onChange={(event) => setHeight(event.target.value)}
//           />
//         </div>
//       </form>
//       <div>
//         {name} {born} {height}
//       </div>
//     </div>
//   )
// }

// export default App
