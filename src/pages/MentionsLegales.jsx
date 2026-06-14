export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold">Mentions Légales</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow p-8 space-y-8">

          {/* Identification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Identification du site</h2>
            <p className="text-gray-700 mb-2"><strong>Nom :</strong> FC Inclusif</p>
            <p className="text-gray-700 mb-2"><strong>Type :</strong> Site web - Club de Football Amateur</p>
            <p className="text-gray-700 mb-2"><strong>Localisation :</strong> Amiens, Somme (80), France</p>
            <p className="text-gray-700"><strong>Statut :</strong> Site à caractère informatif et de présentation</p>
          </section>

          {/* Data Protection / RGPD */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Protection des Données (RGPD)</h2>
            <p className="text-gray-700 mb-4">
              En conformité avec le Règlement Général sur la Protection des Données (RGPD) et la Loi Informatique et Libertés :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pas de données personnelles :</strong> Ce site ne collecte pas d'informations personnelles sur les joueurs</li>
              <li><strong>Confidentialité des visiteurs :</strong> Aucune donnée d'identification personnelle n'est collectée</li>
              <li><strong>Cookies :</strong> Ce site n'utilise pas de cookies de suivi</li>
              <li><strong>Formulaires :</strong> Les données de contact envoyées via le formulaire sont utilisées uniquement pour répondre à votre demande</li>
              <li><strong>Droit d'accès et de suppression :</strong> Vous avez le droit d'accéder, rectifier ou supprimer vos données en contactant le club</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Propriété Intellectuelle</h2>
            <p className="text-gray-700 mb-2">
              L'ensemble du contenu présent sur ce site (textes, images, logos, etc.) est la propriété exclusive de FC Inclusif ou de ses partenaires.
            </p>
            <p className="text-gray-700">
              Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.
            </p>
          </section>

          {/* Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation de Responsabilité</h2>
            <p className="text-gray-700 mb-4">
              FC Inclusif met ses meilleurs efforts pour assurer l'exactitude des informations présentes sur ce site. Cependant :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Les informations peuvent être modifiées sans préavis</li>
              <li>FC Inclusif ne peut être tenu responsable des interruptions de service</li>
              <li>Les liens externes ne sont pas sous le contrôle de FC Inclusif</li>
            </ul>
          </section>

          {/* Regulations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Conformité Réglementaire</h2>
            <p className="text-gray-700 mb-4">
              Ce site respecte les réglementations suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Loi RGPD (Règlement Général sur la Protection des Données)</li>
              <li>Loi Informatique et Libertés française</li>
              <li>Loi pour la Confiance dans l'Économie Numérique (LCEN)</li>
              <li>Normes d'accessibilité numérique</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant ce site ou la protection de vos données :
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email :</strong> contact@fc-inclusif.fr
            </p>
            <p className="text-gray-700">
              <strong>Téléphone :</strong> +33 3 22 XX XX XX
            </p>
          </section>

          {/* Last Update */}
          <div className="pt-8 border-t text-center text-gray-500 text-sm">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
