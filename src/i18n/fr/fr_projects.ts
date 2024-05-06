import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projets',
  source: 'GitHub',
  website: 'Site Web',
  main: [
    {
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      description:
        "CVFast est un créateur de CV en ligne qui vous permet de créer un CV professionnel en quelques minutes. Il comprend une variété de modèles et d'options de personnalisation.",
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      name: 'SGIP',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      description:
        "Une application web de gestion des RH qui permet de gérer les informations du personnel d'une entreprise. Développée pour l'Institut Technologique d'Oaxaca (ITO). L'application est actuellement en production, hébergée sur un serveur privé.",
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        "Un modèle de portfolio construit avec Vue.js, i18n et TypeScript. Il est hautement personnalisable, facile à configurer et entièrement optimisé pour les performances, le référencement et l'accessibilité.",
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'FSM Generator',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      description:
        "FSM Generator est une application web qui vous permet de générer des machines à états finis (FSM) / Automates à états finis déterministes (DFA) à partir d'expressions régulières.",
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    }
  ],
  // Vous pouvez laisser ce tableau vide
  other: [
    {
      name: 'Spring Boot Adv-Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      description:
        "Spring AdvAuth est un projet de modèle qui comprend des fonctionnalités telles que le transfert d'e-mails SMTP, l'authentification basée sur JWT, l'autorisation basée sur les rôles et des configurations de sécurité personnalisées.",
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      description:
        'Un jeu basé sur le jeu populaire Crossy Road, développé en C et C++ en utilisant OpenGL et GLUT pour les graphiques 3D.',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      description:
        "Le jeu classique DinoRun, cette application a été réalisée avec les bibliothèques Swing et AWT et intègre un outil graphique personnalisé qui implémente l'algorithme de Bresenham pour le rendu.",
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },
    {
      name: 'Chiffreur JavaScript',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        "Application web pour crypter et décrypter des messages texte à l'aide d'un dictionnaire prédéfini, créée pour le Challenge01 d'Oracle Next Education.",
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}

export default projects
