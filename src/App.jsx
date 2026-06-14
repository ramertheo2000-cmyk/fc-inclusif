import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Matchs from './pages/Matchs'
import Actualites from './pages/Actualites'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matchs" element={<Matchs />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
