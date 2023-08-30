import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'

//compornents
import Header from './compornents/Header/Header.jsx'
import Home from './compornents/Home/Home'
import MovieDetail from './compornents/MovieDetail/MovieDetail'
import Footer from './compornents/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App
