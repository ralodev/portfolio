export default {
  title: 'Projets',
  demo: 'Démo',
  case: 'Étude de cas',
  live: 'en direct',
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        "CVFast est un constructeur de CV en ligne qui vous permet de créer un CV professionnel en quelques minutes. Il comprend une variété de modèles et d'options de personnalisation.",
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      id: 1,
      name: 'SGIP',
      startDate: '2023-02',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      endDate: '2023-07',
      description:
        "Une application web de GRH qui permet de gérer les informations du personnel d'une entreprise. Développée pour l'Institut Technologique d'Oaxaca (ITO). L'application est actuellement en production, hébergée sur un serveur privé.",
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        "Un modèle de portfolio construit avec Vue.js, i18n et TypeScript. Il est hautement personnalisable, facile à configurer et optimisé de manière approfondie pour la performance, le SEO et l'accessibilité.",
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      id: 3,
      name: 'Générateur de FSM',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        "Générateur de FSM est une application web qui vous permet de générer des automates à états finis (FSM) / Automates finis déterministes (DFA) à partir d'expressions régulières.",
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    }
  ],
  list_secondary: [
    {
      id: 0,
      name: 'Spring Boot Adv-Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      startDate: '2022-12',
      description:
        "Spring AdvAuth est un projet modèle qui inclut des fonctionnalités telles que la redirection d'emails SMTP, l'authentification basée sur JWT, l'autorisation basée sur les rôles et des configurations de sécurité personnalisées.",
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      id: 1,
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      startDate: '2021',
      description:
        'Un jeu basé sur le jeu populaire Crossy Road, développé en C et C++ utilisant OpenGL et GLUT pour les graphismes 3D.',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      id: 2,
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      description:
        "Le jeu classique DinoRun, cette application a été réalisée avec les bibliothèques Swing et AWT et intègre un outil graphique fait maison qui implémente l'algorithme de Bresenham pour le rendu.",
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },

    {
      id: 3,
      name: 'Encrypteur JavaScript',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        "Application web pour crypter et décrypter des messages texte en utilisant un dictionnaire prédéfini, créée pour le Challenge01 d'Oracle Next Education.",
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}
