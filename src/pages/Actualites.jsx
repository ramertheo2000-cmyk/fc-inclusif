import { news } from '../data/clubData'

export default function Actualites() {
  const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Actualités</h1>
          <p className="text-gray-200 mt-2">Retrouvez toutes les dernières informations du club</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {sortedNews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Aucune actualité pour le moment</p>
              </div>
            ) : (
              <div className="space-y-8">
                {sortedNews.map(article => (
                  <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                    <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-48 flex items-center justify-center text-6xl">
                      📰
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                          {article.category}
                        </span>
                        <time className="text-gray-500 text-sm">
                          {new Date(article.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 text-blue-900">{article.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{article.content}</p>
                      <button className="mt-4 text-orange-500 hover:text-orange-600 font-semibold transition">
                        Lire la suite →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            {/* Categories */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Catégories</h3>
              <div className="space-y-2">
                {['Annonce', 'Match', 'Infos Pratiques'].map(category => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 rounded hover:bg-blue-50 transition text-blue-900 font-semibold"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Articles Récents</h3>
              <div className="space-y-4">
                {sortedNews.slice(0, 5).map(article => (
                  <div key={article.id} className="border-b pb-4 last:border-b-0">
                    <h4 className="font-semibold text-blue-900 hover:text-orange-500 transition cursor-pointer">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
