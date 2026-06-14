import { galleryImages } from '../data/clubData'

export default function Galerie() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Galerie Photos</h1>
          <p className="text-gray-200 mt-2">Revivez les moments forts de FC Inclusif</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-6 py-2 rounded-lg font-semibold bg-blue-900 text-white">
            Tous
          </button>
          <button className="px-6 py-2 rounded-lg font-semibold bg-white text-blue-900 border border-blue-900 hover:bg-blue-50 transition">
            Matchs
          </button>
          <button className="px-6 py-2 rounded-lg font-semibold bg-white text-blue-900 border border-blue-900 hover:bg-blue-50 transition">
            Entraînements
          </button>
          <button className="px-6 py-2 rounded-lg font-semibold bg-white text-blue-900 border border-blue-900 hover:bg-blue-50 transition">
            Événements
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map(image => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 aspect-square flex items-center justify-center text-6xl">
                📸
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="font-bold text-lg">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(image.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {galleryImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Aucune photo pour le moment</p>
          </div>
        )}
      </div>
    </div>
  )
}
