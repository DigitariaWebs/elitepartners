// Ce script génère les favicons à partir d'un logo local
// Pour exécuter ce script, installez les dépendances :
// npm install sharp fs-extra

import fs from 'fs-extra';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtenir le chemin du répertoire actuel en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Utiliser le fichier logo local
const LOCAL_LOGO_PATH = path.join(__dirname, '../public/home images/LogoEle-1024x724.webp');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    // Vérifier que le logo existe
    if (!fs.existsSync(LOCAL_LOGO_PATH)) {
      throw new Error(`Le fichier logo n'existe pas: ${LOCAL_LOGO_PATH}`);
    }
    
    console.log(`Utilisation du logo local: ${LOCAL_LOGO_PATH}`);
    
    // Générer les favicons
    const sizes = {
      'favicon-16x16.png': 16,
      'favicon-32x32.png': 32,
      'apple-touch-icon.png': 180,
      'android-chrome-192x192.png': 192,
      'android-chrome-512x512.png': 512
    };
    
    // Créer un favicon.ico (combinaison de 16x16, 32x32 et 48x48)
    await sharp(LOCAL_LOGO_PATH)
      .resize(48, 48)
      .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));
    console.log('Favicon.ico généré');
    
    // Générer les autres tailles
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(LOCAL_LOGO_PATH)
        .resize(size, size)
        .toFile(path.join(PUBLIC_DIR, filename));
      console.log(`Favicon généré: ${filename}`);
    }
    
    // Sauvegarder aussi une copie du logo dans le dossier public
    await fs.copy(LOCAL_LOGO_PATH, path.join(PUBLIC_DIR, 'logo.webp'));
    console.log('Logo sauvegardé dans public/logo.webp');
    
    console.log('Tous les favicons ont été générés avec succès!');
  } catch (error) {
    console.error(`Erreur lors de la génération des favicons: ${error.message}`);
  }
}

generateFavicons(); 