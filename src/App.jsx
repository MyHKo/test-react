import './App.css'
import user from './user.json'

function App() {

  return (
    <main className='app'>
        <h1>My first app</h1>
        <p>Some things about me</p>
        <div>Name: {user.name}</div>
        <div>Skills: {user.skills.css}</div>
    </main>
  )
}

export default App
