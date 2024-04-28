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
        'CVFast est un outil en ligne qui vous permet de créer un CV professionnel en quelques minutes. Il comprend une variété de modèles et d’options de personnalisation.',
      github: 'https://github.com/ralodev/'
    },
    {
      id: 1,
      name: 'SGIP',
      startDate: '2023-02',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      endDate: '2023-07',
      description:
        'Un système de gestion des ressources humaines (HRMS) web qui permet de gérer les informations du personnel d’une entreprise. Développé pour l’Institut Technologique de Oaxaca. L’application est actuellement en production, hébergée sur un serveur privé.',
      github: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'Générateur de FSM',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'Le Générateur de FSM est une application web qui vous permet de générer des Machines à États Finis (FSM) / Automates Finis Déterministes (DFA) à partir d’expressions régulières.',
      github: 'https://ralodev.github.io/FSM-Generator/'
    },
    {
      id: 3,
      name: 'Encrypteur de JavaScript',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Application web pour crypter et décrypter des messages textuels en utilisant un dictionnaire prédéfini, créée pour le cours - 01 de Oracle Next Education.',
      github: 'https://github.com/ralodev/'
    }
  ],
  list_secondary: [
    {
      id: 0,
      name: 'Spring Advanced Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      startDate: '2022-12',
      description:
        'Le modèle d’authentification avancée Spring est un projet de base qui fournit un point de départ pour développer des services web RESTful avec Spring Boot. Il inclut des fonctionnalités telles que l’envoi d’emails, l’authentification, la sécurité et la génération de tokens JWT.',
      github: 'https://github.com/ralodev/',
      endDate: '2023-07-31'
    },
    {
      id: 1,
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      startDate: '2021',
      description:
        'Un jeu basé sur le populaire jeu Crossy Road, développé en C et C++ utilisant OpenGL et GLUT pour les graphismes 3D.',
      github: 'https://github.com/ralodev/'
    },
    {
      id: 2,
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      description:
        'Le jeu classique DinoRun, développé avec les bibliothèques Swing et AWT et un outil graphique personnalisé qui met en œuvre l’algorithme de Bresenham pour le rendu.',
      github: 'https://github.com/ralodev/'
    }
  ]
}
