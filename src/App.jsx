import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'


//compornents
import Header from './compornents/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  )
}

export default App
