import './App.css'
import Hobbies from './Hobbies.jsx'

function App() {
  const hobbies = [
    {name: 'Reading', description: 'Exploring the fantasy through books.' },
    {name: 'Cooking', description: 'Experimenting with delicious recipes.' },
    {name: 'Hiking', description: 'Enjoying the nature and the exercise.' }
  ]

  return (
    <>
      <h1>Hobbies</h1>
      <Hobbies hobbies={hobbies} />
    </>
  )
}

export default App
