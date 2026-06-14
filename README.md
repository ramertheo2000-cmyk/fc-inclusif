# 🏟️ Site Web FC Inclusif - Club de Football Amateur

Bienvenue sur le site web officiel de **FC Inclusif**, un club de football amateur basé à Amiens en France.

## 📋 Caractéristiques

- ✅ **Site Professionnel** - Design moderne et épuré
- ✅ **Responsive** - Compatible téléphone, tablette et ordinateur
- ✅ **RGPD Compliant** - Aucune donnée personnelle collectée
- ✅ **Gratuit** - Hébergement sur GitHub Pages
- ✅ **Facile à Modifier** - Code simple et bien structuré
- ✅ **Aucun Système de Vente** - Site informatif uniquement

## 🛠️ Technologies Utilisées

- **React** - Framework JavaScript
- **Vite** - Bundler moderne et rapide
- **Tailwind CSS** - Framework CSS pour le design
- **React Router** - Navigation entre les pages

## 📦 Installation Locale

### Prérequis
- Node.js (version 14 ou plus)
- npm ou yarn

### Étapes d'Installation

1. **Cloner le projet** (ou l'ouvrir dans VS Code)
```bash
cd "votre-dossier/fc inclusif"
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible à `http://localhost:5173`

## 📄 Pages du Site

- **Accueil** - Présentation du club et infos rapides
- **Matchs** - Calendrier des rencontres et résultats
- **Actualités** - Articles et informations du club
- **Galerie** - Photos d'ambiance et d'événements
- **Contact** - Formulaire de contact et informations pratiques
- **Mentions Légales** - Conformité RGPD et légale

## ✏️ Modifier le Contenu

### Données du Club
Tous les données (nom, adresse, horaires, etc.) sont centralisées dans :
```
src/data/clubData.js
```

**Informations à mettre à jour :**
- Nom et coordonnées du club
- Adresse du terrain
- Téléphone et email
- Horaires d'entraînement
- Couleurs du club

### Matchs
Modifiez la liste des matchs dans `src/data/clubData.js` :
```javascript
export const matches = [
  {
    id: 1,
    date: '2026-07-15',
    time: '20h30',
    opponent: 'Équipe Adverse',
    location: 'Stade',
    competition: 'Ligue Amateur',
    status: 'upcoming', // ou 'completed'
    result: { homeGoals: 3, awayGoals: 1 } // si completed
  },
  // ...
]
```

### Actualités
Ajoutez ou modifiez les articles dans `src/data/clubData.js` :
```javascript
export const news = [
  {
    id: 1,
    title: 'Titre de l\'article',
    content: 'Contenu de l\'article',
    date: '2026-06-10',
    category: 'Annonce',
  },
  // ...
]
```

### Galerie Photos
Mettez à jour les images dans `src/data/clubData.js` et remplacez les placeholders dans la galerie.

## 🌐 Déploiement sur GitHub Pages

### 1. Créer un compte GitHub
- Allez sur [github.com](https://github.com)
- Créez un compte gratuit

### 2. Créer un nouveau repository
- Nom : `fc-inclusif` (ou votre préférence)
- Assurez-vous que c'est public

### 3. Configurer le déploiement
Dans `vite.config.js`, modifiez la base :
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/fc-inclusif/', // Remplacez par votre nom de repo
})
```

### 4. Installer gh-pages (déjà dans package.json)
```bash
npm install --save-dev gh-pages
```

### 5. Déployer le site
```bash
npm run build
npm run deploy
```

Votre site sera accessible à : `https://votre-username.github.io/fc-inclusif/`

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.js` :
```javascript
colors: {
  primary: '#1e40af',    // Bleu
  secondary: '#f97316',  // Orange
}
```

### Logo
Remplacez `logo-club.jpg` dans le dossier `public/` par votre logo.

## 📧 Formulaire de Contact

Le formulaire affiche un message de confirmation, mais pour l'envoyer vraiment par email, vous devrez :

1. Utiliser un service comme **Formspree**, **EmailJS** ou **Firebase**
2. Modifier le code dans `src/pages/Contact.jsx`

Exemple avec Formspree (gratuit) :
```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  setSubmitted(true)
}
```

## 🔒 Sécurité & RGPD

- ✅ Aucune donnée personnelle collectée
- ✅ Pas de cookies de suivi
- ✅ Conformité RGPD
- ✅ Pas de système de paiement
- ✅ Pas d'informations sur les joueurs

## 🐛 Dépannage

**Le site ne se charge pas ?**
```bash
npm install
npm run dev
```

**Erreur lors du build ?**
```bash
npm run build
# Vérifiez les erreurs dans la console
```

**Problème avec GitHub Pages ?**
- Vérifiez le nom du repository
- Vérifiez que `vite.config.js` a le bon `base`
- Attendez 1-2 minutes après le déploiement

## 📞 Support

Pour toute question sur le développement :
- Consultez le code commenté
- Explorez les fichiers dans `src/`
- Modifiez `src/data/clubData.js` pour ajouter du contenu

## 📄 Licence

© 2026 FC Inclusif - Tous droits réservés

---

**Bon développement ! ⚽⚽⚽**
