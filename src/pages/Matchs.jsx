import { useState } from 'react'
import { matches } from '../data/clubData'

export default function Matchs() {
  const [filter, setFilter] = useState('all')

  const filteredMatches = filter === 'all' 
    ? matches 
    : matches.filter(m => m.status === filter)

  const sortedMatches = [...filteredMatches].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Calendrier des Matchs</h1>
          <p className="text-gray-200 mt-2">Retrouvez tous les matchs de FC Inclusif</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900 border border-blue-900 hover:bg-blue-50'
            }`}
          >
            Tous les matchs
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'upcoming'
                ? 'bg-orange-500 text-white'
                : 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-50'
            }`}
          >
            À venir
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
            }`}
          >
            Passés
          </button>
        </div>

        {/* Matches List */}
        <div className="space-y-6">
          {sortedMatches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Aucun match à afficher</p>
            </div>
          ) : (
            sortedMatches.map(match => (
              <MatchItem key={match.id} match={match} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function MatchItem({ match }) {
  const matchDate = new Date(match.date)
  const isUpcoming = match.status === 'upcoming'

  return (
    <div className={`rounded-lg shadow-lg overflow-hidden border-l-4 ${
      isUpcoming ? 'border-orange-500 bg-orange-50' : 'border-green-600 bg-green-50'
    }`}>
      <div className="bg-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Date & Time */}
          <div className="flex flex-col justify-center">
            <div className="text-sm text-gray-600 font-semibold uppercase">
              {matchDate.toLocaleDateString('fr-FR', { weekday: 'long' })}
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {matchDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}
            </div>
            <div className="text-lg text-orange-500 font-semibold">
              {match.time}
            </div>
          </div>

          {/* Match Info */}
          <div className="flex flex-col justify-center text-center">
            <p className="text-sm text-gray-600 mb-2">{match.competition}</p>
            <p className="text-2xl font-bold">{match.opponent}</p>
            <p className="text-sm text-gray-500 mt-2">vs FC Inclusif</p>
          </div>

          {/* Result or Status */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-600 mb-2">📍 {match.location}</p>
            {isUpcoming ? (
              <div className="bg-orange-500 text-white px-4 py-2 rounded text-center font-bold">
                À venir
              </div>
            ) : (
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">
                  {match.result.homeGoals} - {match.result.awayGoals}
                </p>
                <p className="text-sm text-gray-600 mt-1">Résultat final</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
