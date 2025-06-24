import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ChatHome from './pages/ChatHome'
import ITTeam from './pages/ITTeam'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatHome />} />
          <Route path="/it-team" element={<ITTeam />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App