import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ChatHome from './pages/ChatHome'
import ITTeam from './pages/ITTeam'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <AppShell header={{ height: 60 }} padding={0}>
        <Navigation />
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/it-team" element={<ITTeam />} />
            <Route path="/chat" element={<ChatHome />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Router>
  )
}

export default App