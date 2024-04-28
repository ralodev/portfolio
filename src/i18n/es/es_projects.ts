export default {
  title: 'Proyectos', // Kept title "Projects" (commonly understood)
  demo: 'Demo', // Kept "Demo" (commonly understood)
  case: 'Caso de estudio', // Translated "Case study"
  live: 'en vivo', // Translated "live"
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        'CVFast es un creador de currículums en línea que te permite crear un currículum profesional en minutos. Incluye una variedad de plantillas y opciones de personalización.', // Translated description
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
        'Un Sistema de Gestión de Recursos Humanos (SGIRH) web que permite administrar la información del personal de una empresa. Desarrollado para el Instituto Tecnológico de Oaxaca (ITO). La aplicación se encuentra actualmente en producción, alojada en un servidor privado.', // Translated description
      github: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'Generador de FSM', // Translated "FSM Generator"
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'El Generador de FSM es una aplicación web que te permite generar máquinas de estados finitos (FSM) / Autómatas Finitos Deterministas (DFA) a partir de expresiones regulares.', // Translated description
      github: 'https://ralodev.github.io/FSM-Generator/'
    },
    {
      id: 3,
      name: 'Encriptador de JavaScript', // Translated "JavaScript Encryptor"
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Aplicación web para encriptar y desencriptar mensajes de texto utilizando un diccionario predefinido, creada para el Challenge01 de Oracle Next Education.', // Translated description
      github: 'https://github.com/ralodev/'
    }
  ],
  list_secondary: [
    {
      id: 0,
      name: 'Plantilla Spring AdvAuth', // Translated "Spring AdvAuth Template"
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      startDate: '2022-12',
      description:
        'Spring AdvAuth Template es un proyecto base que proporciona un punto de partida para desarrollar servicios web RESTful con Spring Boot. Incluye características como envío de correos electrónicos, autenticación, seguridad y generación de tokens JWT.', // Translated description
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
        'Un juego basado en el popular juego Crossy Road, desarrollado en C y C++ utilizando OpenGL y GLUT para gráficos 3D.', // Translated description
      github: 'https://github.com/ralodev/'
    },
    {
      id: 2,
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      description:
        'El clásico juego DinoRun, esta aplicación se realizó con las librerías Swing y AWT e incorpora una herramienta gráfica personalizada que implementa el algoritmo Bresenham para el renderizado.', // Translated description
      github: 'https://github.com/ralodev/'
    }
  ]
}
