import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Proyectos',
  source: 'GitHub',
  website: 'Sitio Web',
  main: [
    {
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      description:
        'CVFast es un creador de currículums en línea que te permite crear un CV profesional en minutos. Incluye una variedad de plantillas y opciones de personalización.',
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      name: 'SGIP',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      description:
        'Una aplicación web de gestión de recursos humanos que permite administrar la información del personal de una empresa. Desarrollada para el Instituto Tecnológico de Oaxaca (ITO). La aplicación se encuentra actualmente en producción, alojada en un servidor privado.',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Una plantilla de portafolio construida con Vue.js, i18n y TypeScript. Es altamente personalizable, fácil de configurar y totalmente optimizada para rendimiento, SEO y accesibilidad.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'Generador FSM',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      description:
        'El Generador FSM es una aplicación web que te permite generar máquinas de estados finitos (FSM) / Autómatas Finitos Deterministas (DFA) a partir de expresiones regulares.',
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    }
  ],
  // Puedes dejar este array vacío
  other: [
    {
      name: 'Spring Boot Adv-Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      description:
        'Spring AdvAuth es un proyecto de plantilla que incluye características como reenvío de correo electrónico SMTP, autenticación basada en JWT, autorización basada en roles y configuraciones de seguridad personalizadas.',
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      description:
        'Un juego basado en el popular juego Crossy Road, desarrollado en C y C++ utilizando OpenGL y GLUT para gráficos 3D.',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      description:
        'El clásico juego DinoRun, esta aplicación se realizó con las bibliotecas Swing y AWT e incorpora una herramienta gráfica personalizada que implementa el algoritmo de Bresenham para el renderizado.',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },
    {
      name: 'Cifrador JavaScript',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Aplicación web para cifrar y descifrar mensajes de texto utilizando un diccionario predefinido, creada para el Challenge01 de Oracle Next Education.',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}

export default projects
