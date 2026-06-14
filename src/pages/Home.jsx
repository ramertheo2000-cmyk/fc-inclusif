import { Link } from 'react-router-dom'
import { clubInfo, matches, news } from '../data/clubData'

export default function Home() {
  const upcomingMatches = matches.filter(m => m.status === 'upcoming').slice(0, 2)
  const latestNews = news.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-4">FC Inclusif</h1>
              <p className="text-2xl text-gray-200 mb-6">{clubInfo.subtitle}</p>
              <p className="text-gray-300 text-lg mb-8">{clubInfo.description}</p>
              <div className="flex space-x-4">
                <Link
                  to="/matchs"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                  Voir les matchs
                </Link>
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-lg transition"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center text-6xl">
                ⚽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard icon="📍" title="Localisation" content={clubInfo.address} />
            <InfoCard icon="📞" title="Contact" content={clubInfo.phone} />
            <InfoCard icon="✉️" title="Email" content={clubInfo.email} />
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Prochains Matchs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {upcomingMatches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/matchs"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-lg transition"
            >
              Voir tous les matchs
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Dernières Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {latestNews.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/actualites"
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-lg transition"
            >
              Toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Training Times */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Horaires d'Entraînement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubInfo.trainingDays.map((day, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                <p className="text-xl text-orange-500 mb-2">{day.time}</p>
                <p className="text-gray-300">{day.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoCard({ icon, title, content }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

function MatchCard({ match }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 text-sm">{match.competition}</p>
          <p className="text-2xl font-bold">{match.opponent}</p>
        </div>
        <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
          À venir
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>📅 {new Date(match.date).toLocaleDateString('fr-FR')}</div>
        <div>🕐 {match.time}</div>
        <div>📍 {match.location}</div>
      </div>
    </div>
  )
}

function NewsCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-32 flex items-center justify-center text-4xl">
        📰
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {article.category}
          </span>
          <span className="text-gray-500 text-sm">{new Date(article.date).toLocaleDateString('fr-FR')}</span>
        </div>
        <h3 className="text-lg font-bold mb-2">{article.title}</h3>
        <p className="text-gray-600 line-clamp-3">{article.content}</p>
      </div>
    </div>
  )
}
