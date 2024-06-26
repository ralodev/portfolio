import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      description:
        'CVFast is an online resume builder that allows you to create a professional resume in minutes. It includes a variety of templates and customization options.',
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      name: 'SGIP',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      description:
        'An HRMS web application that allows to manage the information of the personnel in a company. Developed for the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server.',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'A portfolio template built with Vue.js, i18n, and TypeScript. It is highly customizable, easy to set up, and thoroughly optimized for performance, SEO, and accessibility.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'FSM Generator',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      description:
        'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    }
  ],
  // You can leave this array empty
  other: [
    {
      name: 'Spring Boot Adv-Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      description:
        'Spring AdvAuth is a template project that includes features like SMTP Email forwarding, JWT-based authentication, role-based authorization and custom security configurations.',
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      description:
        'A game based on the popular game Crossy Road, developed in C and C++ using OpenGL and GLUT for 3D graphics.',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      description:
        'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },

    {
      name: 'JavaScript Encryptor',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Web application for encrypting and decrypting text messages using a predefined dictionary, created for the Challenge01 of Oracle Next Education.',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}

export default projects
