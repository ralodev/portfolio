export default {
  title: 'Proyectos',
  demo: 'Demo',
  case: 'Caso de estudio',
  live: 'en vivo',
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        'CVFast es una herramienta en línea que te permite crear un currículum profesional en minutos. Incluye una variedad de plantillas y opciones de personalización.',
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
        'Un Sistema de Administración de Recursos Humanos (HRMS) web que permite administrar la información del personal de una empresa. Desarrollado para el Instituto Tecnológico de Oaxaca. La aplicación se encuentra actualmente en producción, alojada en un servidor privado.',
      github: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'Generador de FSM',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'El Generador de FSM es una aplicación web que te permite generar Máquinas de Estados Finitos (FSM) / Autómatas Finitos Deterministas (DFA) a partir de expresiones regulares.',
      github: 'https://ralodev.github.io/FSM-Generator/'
    },
    {
      id: 3,
      name: 'Encriptador de JavaScript',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Aplicación web para encriptar y desencriptar mensajes de texto utilizando un diccionario predefinido, creada para el curso - 01 de Oracle Next Education.',
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
        'Spring Advanced Authentication Template es un proyecto base que proporciona un punto de partida para desarrollar servicios web RESTful con Spring Boot. Incluye características como envío de correos electrónicos, autenticación, seguridad y generación de tokens JWT.',
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
        'Un juego basado en el popular juego Crossy Road, desarrollado en C y C++ utilizando OpenGL y GLUT para gráficos 3D.',
      github: 'https://github.com/ralodev/'
    },
    {
      id: 2,
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      description:
        'El clásico juego DinoRun, desarrollado con las librerías Swing y AWT y una herramienta gráfica personalizada que implementa el algoritmo Bresenham para el renderizado.',
      github: 'https://github.com/ralodev/'
    }
  ]
}
