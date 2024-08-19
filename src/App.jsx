import './App.css'
import user from './user.json'

function App() {
    const mail = "mailto:" + user.email

  return (
    <main className='app'>
        <h1>My first app</h1>
        <p>Some things about me</p>
        <div>Name: {user.name}</div>
        <div>Skills: {user.skills.css}</div>
        <ul>
            {user.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
        </ul>
        <a href={mail}>Mail me</a>
    </main>
  )
}

export default App
