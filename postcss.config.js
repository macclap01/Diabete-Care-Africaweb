module.exports = {
  plugins: {
    'postcss-import': {}, // Permet d'importer des fichiers CSS
    'postcss-flexbugs-fixes': {}, // Corrige des bugs liés à flexbox
    'postcss-preset-env': {
      stage: 3, // Définit la compatibilité du CSS moderne avec les anciens navigateurs
      features: {
        'nesting-rules': true, // Active les règles de nesting
      },
      autoprefixer: {
        flexbox: 'no-2009', // Ajoute des préfixes pour les propriétés flexbox
      },
    },
    'tailwindcss': {}, // Ajouter Tailwind CSS ici
    cssnano: { // Minifie le CSS pour la production
      preset: 'default',
    },
  },
};
