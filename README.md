# Projet React avec Vite

Un projet React moderne construit avec Vite, TypeScript, TailwindCSS et d'autres outils modernes.

## 🛠️ Stack Technologique

- **React** - Bibliothèque UI avec hooks
- **Vite** - Build tool rapide
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utilitaire
- **React Router DOM** - Navigation entre pages
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📁 Structure du Projet

```
src/
├── assets/               # Images, icônes, illustrations
├── components/           # Composants réutilisables
│   ├── Button.tsx
│   ├── Navbar.tsx
│   └── SectionTitle.tsx
├── constants/            # Constantes et données statiques
├── layouts/              # Layouts généraux
│   └── DefaultLayout.tsx
├── pages/                # Pages principales
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── router/               # Configuration des routes
│   └── AppRouter.tsx
├── sections/             # Sections réutilisables
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   └── ContactForm.tsx
├── styles/               # Styles globaux
├── utils/                # Fonctions utilitaires
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Installation et Démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Construire pour la production**
   ```bash
   npm run build
   ```

4. **Prévisualiser la version de production**
   ```bash
   npm run preview
   ```

## 🎨 Fonctionnalités

- ✅ Configuration TypeScript
- ✅ TailwindCSS avec classes utilitaires
- ✅ React Router pour la navigation
- ✅ Animations avec Framer Motion
- ✅ Composants réutilisables
- ✅ Layouts modulaires
- ✅ Imports absolus avec alias `@/`
- ✅ Structure de projet organisée

## 📝 Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Exécute ESLint

## 🔧 Configuration

### Imports Absolus

Les imports absolus sont configurés avec l'alias `@/` pointant vers le dossier `src/`:

```typescript
import Button from '@/components/Button';
import { SITE_CONFIG } from '@/constants';
```

### TailwindCSS

TailwindCSS est configuré avec des classes personnalisées dans `src/index.css`:

```css
@layer components {
  .btn {
    @apply font-semibold py-2 px-4 rounded-lg transition-all duration-200;
  }
}
```

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Pushez vers la branche
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence MIT.
