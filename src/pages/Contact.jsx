import { useState } from 'react'
import { clubInfo } from '../data/clubData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Nous Contacter</h1>
          <p className="text-gray-200 mt-2">Vous avez une question ? Contactez-nous !</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Informations de Contact</h2>

            {/* Address */}
            <div className="mb-8 bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-gray-700">{clubInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-700">{clubInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8 bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-700">{clubInfo.email}</p>
                </div>
              </div>
            </div>

            {/* Training Schedule */}
            <div className="bg-blue-900 text-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Horaires d'Entraînement</h3>
              <div className="space-y-3">
                {clubInfo.trainingDays.map((day, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-semibold">{day.day}</span>
                    <span className="text-orange-500">{day.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Envoyer un message</h2>

              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✅ Merci ! Votre message a été envoyé avec succès.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nom *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Sujet *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Objet de votre message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Votre message..."
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-200 transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition duration-200"
                >
                  Envoyer le message
                </button>

                <p className="text-xs text-gray-500">
                  * Les champs marqués d'un astérisque sont obligatoires.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
