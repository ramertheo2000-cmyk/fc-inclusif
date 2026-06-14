import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-2xl hover:text-orange-500 transition">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              ⚽
            </div>
            <span>FC Inclusif</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/matchs">Matchs</NavLink>
            <NavLink to="/actualites">Actualités</NavLink>
            <NavLink to="/galerie">Galerie</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-800 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Accueil</MobileNavLink>
            <MobileNavLink to="/matchs" onClick={() => setIsOpen(false)}>Matchs</MobileNavLink>
            <MobileNavLink to="/actualites" onClick={() => setIsOpen(false)}>Actualités</MobileNavLink>
            <MobileNavLink to="/galerie" onClick={() => setIsOpen(false)}>Galerie</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-200"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-200"
    >
      {children}
    </Link>
  )
}
