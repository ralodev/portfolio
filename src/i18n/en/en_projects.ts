export default {
  title: 'Projects',
  demo: 'Demo',
  case: 'Case study',
  live: 'live',
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        'CVFast is an online resume builder that allows you to create a professional resume in minutes. It includes a variety of templates and customization options.',
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
        'An HRMS web application that allows to manage the information of the personnel in a company. Developed for the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server.',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'FSM Generator',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    },
    {
      id: 3,
      name: 'JavaScript Encryptor',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Web application for encrypting and decrypting text messages using a predefined dictionary, created for the Challenge01 of Oracle Next Education.',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
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
        'Spring AdvAuth is a template project that includes features like SMTP Email forwarding, JWT-based authentication, role-based authorization and custom security configurations.',
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
        'A game based on the popular game Crossy Road, developed in C and C++ using OpenGL and GLUT for 3D graphics.',
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
        'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    }
  ]
}
