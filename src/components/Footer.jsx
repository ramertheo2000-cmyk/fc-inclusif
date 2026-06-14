import { Link } from 'react-router-dom'
import { clubInfo } from '../data/clubData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">FC Inclusif</h3>
            <p className="text-gray-400 text-sm">{clubInfo.subtitle}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition">Accueil</Link></li>
              <li><Link to="/matchs" className="text-gray-400 hover:text-orange-500 transition">Matchs</Link></li>
              <li><Link to="/actualites" className="text-gray-400 hover:text-orange-500 transition">Actualités</Link></li>
              <li><Link to="/galerie" className="text-gray-400 hover:text-orange-500 transition">Galerie</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 {clubInfo.address}</li>
              <li>📞 {clubInfo.phone}</li>
              <li>✉️ {clubInfo.email}</li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entraînements</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {clubInfo.trainingDays.map((day, index) => (
                <li key={index}>{day.day} - {day.time}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} FC Inclusif. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link to="/mentions-legales" className="text-gray-400 hover:text-orange-500 transition">Mentions légales</Link>
              <Link to="/mentions-legales" className="text-gray-400 hover:text-orange-500 transition">RGPD</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
