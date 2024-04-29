export default {
  title: 'Proyectos',
  demo: 'Demostración',
  case: 'Estudio de caso',
  live: 'en vivo',
  list: [
    {
      id: 0,
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      description:
        'CVFast es un constructor de currículums en línea que te permite crear un currículum profesional en minutos. Incluye una variedad de plantillas y opciones de personalización.',
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
        'Una aplicación web de HRMS que permite gestionar la información del personal en una empresa. Desarrollada para el Instituto Tecnológico de Oaxaca (ITO). La aplicación está actualmente en producción, alojada en un servidor privado.',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      id: 2,
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Una plantilla de portafolio construida con Vue.js, i18n y TypeScript. Es altamente personalizable, fácil de configurar y completamente optimizada para rendimiento, SEO y accesibilidad.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      id: 3,
      name: 'FSM Generator',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      description:
        'FSM Generator es una aplicación web que te permite generar máquinas de estados finitos (FSM) / Autómatas Finitos Deterministas (DFA) a partir de expresiones regulares.',
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
        'Spring AdvAuth es un proyecto de plantilla que incluye características como el reenvío de correo electrónico SMTP, autenticación basada en JWT, autorización basada en roles y configuraciones de seguridad personalizadas.',
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
        'Un juego basado en el popular juego Crossy Road, desarrollado en C y C++ usando OpenGL y GLUT para gráficos en 3D.',
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
        'El clásico juego DinoRun, esta aplicación fue realizada con las bibliotecas Swing y AWT e incorpora una herramienta gráfica hecha a medida que implementa el algoritmo de Bresenham para renderizar.',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },

    {
      id: 3,
      name: 'JavaScript Encryptor',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Aplicación web para encriptar y desencriptar mensajes de texto usando un diccionario predefinido, creada para el Challenge01 de Oracle Next Education.',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}
