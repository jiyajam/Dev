import useField from './useField'
import './App.css'

const AppWithCustomHook = () => {
  const nameInput = useField('text')
  const bornInput = useField('date')
  const heightInput = useField('number')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      'Form submitted:',
      nameInput.value,
      bornInput.value,
      heightInput.value
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br />
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br />
        <div>
          Height: <input {...heightInput} />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>

      <div>
        <p>{nameInput.value}</p>
        <p>{bornInput.value}</p>
        <p>{heightInput.value}</p>
      </div>
    </div>
  )
}

export default AppWithCustomHook
