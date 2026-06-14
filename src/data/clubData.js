export const clubInfo = {
  name: 'FC Inclusif',
  subtitle: 'Club de Football Amateur - Amiens',
  description: 'Bienvenue sur le site officiel de FC Inclusif, un club de football amateur basé à Amiens, dans la Somme.',
  address: 'Stade Municipal, Avenue des Sportifs, 80000 Amiens',
  phone: '+33 3 22 XX XX XX',
  email: 'contact@fc-inclusif.fr',
  trainingDays: [
    { day: 'Lundi', time: '20h30', location: 'Stade Municipal' },
    { day: 'Mercredi', time: '20h30', location: 'Stade Municipal' },
    { day: 'Samedi', time: '15h00', location: 'Stade Municipal' },
  ],
  colors: {
    primary: '#1e40af',
    secondary: '#f97316',
  }
}

export const matches = [
  {
    id: 1,
    date: '2026-07-15',
    time: '20h30',
    opponent: 'FC Amiens B',
    location: 'Stade Municipal',
    competition: 'Ligue Amateur',
    status: 'upcoming',
    result: null,
  },
  {
    id: 2,
    date: '2026-07-22',
    time: '15h00',
    opponent: 'AS Abbeville',
    location: 'Stade de la Vallée',
    competition: 'Ligue Amateur',
    status: 'upcoming',
    result: null,
  },
  {
    id: 3,
    date: '2026-06-28',
    time: '20h30',
    opponent: 'FC Corbie',
    location: 'Stade Municipal',
    competition: 'Ligue Amateur',
    status: 'completed',
    result: { homeGoals: 3, awayGoals: 1 },
  },
  {
    id: 4,
    date: '2026-06-21',
    time: '15h00',
    opponent: 'US Camon',
    location: 'Stade du Parc',
    competition: 'Ligue Amateur',
    status: 'completed',
    result: { homeGoals: 2, awayGoals: 2 },
  },
]

export const news = [
  {
    id: 1,
    title: 'Nouvelle saison 2026-2027 : Inscriptions ouvertes !',
    content: 'Les inscriptions pour la nouvelle saison sont maintenant ouvertes. Rejoignez FC Inclusif et partagez votre passion pour le football avec nous !',
    date: '2026-06-10',
    category: 'Annonce',
    image: null,
  },
  {
    id: 2,
    title: 'Victoire 3-1 contre FC Corbie',
    content: 'Excellent match de nos joueurs face à FC Corbie. Les buts ont été marqués par nos attaquants en première période. Bravo à toute l\'équipe !',
    date: '2026-06-28',
    category: 'Match',
    image: null,
  },
  {
    id: 3,
    title: 'Rénovation du terrain en cours',
    content: 'Les travaux de rénovation du terrain de football ont débuté. Nous adapterons nos horaires d\'entraînement pendant cette période.',
    date: '2026-06-05',
    category: 'Infos Pratiques',
    image: null,
  },
]

export const galleryImages = [
  {
    id: 1,
    title: 'Match FC Inclusif vs FC Corbie',
    date: '2026-06-28',
    category: 'Match',
  },
  {
    id: 2,
    title: 'Entraînement du mercredi',
    date: '2026-06-26',
    category: 'Entraînement',
  },
  {
    id: 3,
    title: 'Visite du terrain',
    date: '2026-06-20',
    category: 'Événement',
  },
  {
    id: 4,
    title: 'Préparation avant match',
    date: '2026-06-15',
    category: 'Entraînement',
  },
]
