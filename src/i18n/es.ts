export default {
  layout: {
    greetings: "Hey, I'm Raúl López Cruz",
    contact: 'Contact',
    experience: 'Experience',
    education: 'Education',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    awards: 'Awards',
    certificates: 'Certificates',
    publications: 'Publications',
    languages: 'Languages',
    interests: 'Interests',
    references: 'References',
    download: 'Download PDF'
  },
  basics: {
    name: 'Raúl López Cruz',
    label: 'Full Stack Developer | Software Engineer ',
    image: 'https://github.com/ralodev.png?size=200',
    email: 'contact@ralo.dev',
    phone: '+52 951 123 4567',
    url: 'https://ralo.dev/',
    summary: 'Desarrollador Full Stack con experiencia',
    location: {
      address: 'Oaxaca, México',
      postalCode: '08820',
      countryCode: 'MX'
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'midudev',
        url: 'https://linkedin.com/in/raul-lc/'
      },
      {
        network: 'GitHub',
        username: 'ralodev',
        url: 'https://github.com/ralodev'
      }
    ]
  },
  work: [
    {
      id: '01',
      name: 'ralo.dev',
      position: 'Freelance Software Engineer',
      url: 'https://ralo.dev/',
      startDate: '2023-07',
      endDate: 'Present',
      summary:
        "Offering expertise in Software Engineering, providing a spectrum of services including software development, web development, and consulting. I've worked with clients from different industries, including education, tourism, and technology.",
      skills: ['Software Development', 'Project Management', 'Formation']
    },
    {
      id: '02',
      name: 'Technological Institute of Oaxaca',
      position: 'Full Stack Developer (Mid)',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2024-01',
      endDate: '2024-04',
      summary:
        'My responsibilities included developing a web application for the management of student records, using a tech stack that included Nextjs, React, TypeScript, Tailwind, Nestjs, PrismaORM and PostgreSQL.',
      skills: ['Full Stack Development', 'Nextjs', 'Nestjs']
    },
    {
      id: '03',
      name: 'Technological Institute of Oaxaca',
      position: 'Full Stack Developer Intern',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2022-05',
      endDate: '2023-08',
      summary:
        'I was responsible for the development of a Human Resources Management System using Vuejs, JavaScript, TailwindCSS, Java, Spring(Boot, MVC, Security) and MySQL.',
      highlights: [
        'Optimized report generation times by 90%',
        'Succesfully deployed and mantained the HRMS currently on production',
        'Demo of the app: https://sgip.ralo.dev/'
      ],
      skills: ['Full Stack Development', 'Vuejs', 'Spring Boot']
    },
    {
      id: '04',
      name: 'Secretariat of Tourism of Oaxaca',
      position: 'Tourism Ambassador',
      startDate: '2019-06',
      endDate: '2019-08',
      summary: 'Served as interpreter and guide for English-speaking tourists.',
      skills: ['Interpretation', 'Group Management', 'Bilingual Communication']
    }
  ],
  volunteer: [
    {
      organization: 'Organization',
      position: 'Volunteer',
      url: 'https://organization.com/',
      startDate: '2012-01-01',
      endDate: '2013-01-01',
      summary: 'Description…',
      highlights: ["Awarded 'Volunteer of the Month'"]
    }
  ],
  education: [
    {
      institution: 'Oracle Next Education',
      url: 'https://oracle.com/lad/one',
      area: 'Backend Web Development',
      studyType: 'Bootcamp',
      startDate: '2024-01',
      endDate: '2024-10',
      score: '',
      courses: ['JavaScript', 'Nodejs', 'Java', 'SpringBoot']
    },
    {
      institution: 'Technological Institute of Oaxaca',
      url: 'http://www.itoaxaca.edu.mx/',
      area: 'Computer Systems Engineering',
      studyType: 'Bachelor',
      startDate: '2018-08',
      endDate: '2023-07',
      score: '3.3',
      courses: ['Web Development', 'Data Structures', 'Algorithms', 'Databases']
    }
  ],
  awards: [
    {
      title: 'Scientific Research Article Publication',
      date: '2023-09-30',
      url: 'https://doi.org/10.58763/c2024259',
      awarder:
        'Research Center in Education, Nature, Culture, and Innovation for the Amazon - CIENCIA S.A.S',
      summary:
        'The manuscript titled "Sustainability Behaviors: An Application of VBN Theory in Engineering Students" study applies the Values, Beliefs, and Norms (VBN) theory to understand how these factors influence the sustainability behaviors of Computer Systems engineering students at the Tecnológico Nacional de México, Oaxaca campus. Using a descriptive quantitative approach, the research analyzed the relationship between students values, beliefs, norms, and their engagement in sustainability practices.'
    },
    {
      title: "LinkedIn's Top Voices: Software Development",
      date: '2024-01',
      url: 'https://www.linkedin.com/in/raul-lc/',
      awarder: 'LinkedIn',
      summary:
        'Recognized as one of the top voices in software development on LinkedIn, for sharing knowledge and experiences with the community.'
    },
    {
      title:
        'Honorific Mention in the Third National Scientific Conference "Sustainable balance between Technology, Environment and Society"',
      date: '2023-06',
      awarder: 'National Technological Institute of Mexico',
      summary:
        'Display and presentation of the research article "Sustainability behaviors among engineering students"'
    },
    {
      title: '1st place in ITOAXACA Competitive Programming Contest 2023',
      date: '2023-06',
      awarder: "M.C. Dalia Silva Martínez, Director of the School's Coders Club Program",
      summary:
        "First place was achieved in the Competitive Programming Contest, obtaining the highest score in the competition's university category."
    },
    {
      title: '2nd place in the La Salle Programming Contest 2022',
      date: '2022-09-30',
      awarder:
        'Eng. José Adrián Villanueva, Director of the School of Engineering and Architecture',
      summary:
        'My team won second place in the Programming Contest held at LaSalle University Oaxaca, presenting a project that solves the problem of distributing goods to non-profit organizations through a web application using machine learning.'
    },
    {
      title:
        '2nd place in the 2nd National Scientific Conference "SMEs and Sustainability in the Framework of the New Normal"',
      date: '2022-05-31',
      awarder:
        'National Technological Institute of Mexico, Higher Technological Institute of the Sierra Negra de Ajalpan and the Southern Regional Complex of the Benemérita Universidad Autónoma de Puebla',
      summary:
        'Second place was achieved in the Second National Scientific Conference, with the research article "ANALYSIS OF INTERNET ACCESS SERVICE IN OAXACA DURING THE PERIOD 2013-2021"'
    }
  ],
  certificates: [
    {
      name: 'Voxy Proficiency Achievement Certificate - High Intermediate',
      issuer: 'Voxy',
      startDate: '2021-09-30',
      url: 'https://app.voxy.com/certificates/proficiency-test/614f9844958584056851dbbd/'
    },
    {
      name: 'Voxy Proficiency Achievement Certificate - Low Advanced',
      issuer: 'Voxy',
      startDate: '2022-01-31',
      url: 'https://app.voxy.com/certificates/proficiency-test/61f73e4461beeb0cae97e60f/'
    },
    {
      name: 'Técnico en informática',
      issuer: 'Fundación Carlos Slim',
      startDate: '2017-08-31',
      url: 'https://capacitateparaelempleo.org/verifica/0td4qdccm/'
    },
    {
      name: 'Finder',
      issuer: 'Fundación Carlos Slim',
      startDate: '2018-01-31',
      url: 'https://capacitateparaelempleo.org/verifica/ysy1b7qj8/'
    },
    {
      name: 'Curador de datos',
      issuer: 'Fundación Carlos Slim',
      startDate: '2020-06-30',
      url: 'https://capacitateparaelempleo.org/verifica/6jwvnupev/'
    },
    {
      name: 'Técnico en seguridad informática (análisis de riesgos)',
      issuer: 'Fundación Carlos Slim',
      startDate: '2020-12-31',
      url: 'https://capacitateparaelempleo.org/verifica/hg0273sjd/'
    },
    {
      name: 'Voxy Proficiency Achievement Certificate - Low Advanced',
      issuer: 'Voxy',
      startDate: '2022-04-30',
      url: 'https://app.voxy.com/certificates/proficiency-test/62545608da6a440abedeb7ba/'
    },
    {
      name: 'Creación de Filtros Faciales con Spark AR',
      issuer: 'Platzi',
      startDate: '2022-09-30',
      url: 'https://platzi.com/p/lopez.cruz.raul/curso/2647-filtros-spark-ar/diploma/detalle/'
    },
    {
      name: 'Creación de Filtros 3D con Spark AR',
      issuer: 'Platzi',
      startDate: '2022-09-30',
      url: 'https://platzi.com/p/lopez.cruz.raul/curso/2667-spark-ar-3d/diploma/detalle/'
    },
    {
      name: 'Salud Digital',
      issuer: 'Fundación Carlos Slim',
      startDate: '2021-12-31',
      url: 'https://capacitateparaelempleo.org/verifica/39a2d942-16f9-47bc-abb1-8cdb2faf7169'
    }
  ],
  publications: [
    {
      name: 'Sustainability Behaviors: An Application of VBN Theory in Engineering Students',
      publisher: 'Región Científica',
      releaseDate: '2014-01-15',
      url: 'https://doi.org/10.58763/c2024259',
      summary:
        'The manuscript applies the Values, Beliefs, and Norms (VBN) theory to understand how these factors influence the sustainability behaviors of Computer Systems engineering students at the Tecnológico Nacional de México, Oaxaca campus.'
    }
  ],
  skills: [
    {
      name: 'Nodejs',
      level: '',
      keywords: []
    },
    {
      name: 'MySQL',
      level: '',
      keywords: []
    },
    {
      name: 'Nextjs',
      level: '',
      keywords: []
    },
    {
      name: 'TypeScript',
      level: '',
      keywords: []
    },
    {
      name: 'Tailwind',
      level: '',
      keywords: []
    },
    {
      name: 'CSS3',
      level: '',
      keywords: []
    },
    {
      name: 'HTML5',
      level: '',
      keywords: []
    },
    {
      name: 'JavaScript',
      level: '',
      keywords: []
    },
    {
      name: 'Vuejs',
      level: '',
      keywords: []
    },
    {
      name: 'React',
      level: '',
      keywords: []
    },
    {
      name: 'Spring Security',
      level: '',
      keywords: []
    },
    {
      name: 'SEO',
      level: '',
      keywords: []
    },
    {
      name: 'Cpp',
      level: '',
      keywords: []
    },
    {
      name: 'Spring Boot',
      level: '',
      keywords: []
    },
    {
      name: 'Java',
      level: '',
      keywords: []
    },
    {
      name: 'Spark AR',
      level: '',
      keywords: []
    },
    {
      name: 'SQL',
      level: '',
      keywords: []
    }
  ],
  languages: [
    {
      fluency: 'Native Speaker',
      language: 'Español'
    },
    {
      fluency: 'Advanced Proficiency',
      language: 'Inglés'
    }
  ],
  interests: [
    {
      name: 'Wildlife',
      keywords: ['Ferrets', 'Unicorns']
    }
  ],
  references: [
    {
      name: 'Jane Doe',
      reference: 'Reference…'
    }
  ],
  projects: [
    {
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      startDate: '2024-02',
      summary:
        'CVFast is an online resume builder that allows you to create a professional resume in minutes. It includes a variety of templates and customization options.',
      url: 'https://github.com/ralodev/'
    },
    {
      name: 'SGIP',
      startDate: '2023-02',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      endDate: '2023-07',
      summary:
        'An HRMS web application that allows to manage the information of the personnel in a company. Developed for the Technological Institute of Oaxaca (ITO). The application is currently in production, hosted on a private server.',
      url: 'https://sgip.ralo.dev/'
    },
    {
      name: 'FSM Generator',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      startDate: '2024-01',
      summary:
        'FSM Generator is a web application that allows you to generate finite state machines (FSM) / Deterministic Finite Automata (DFA) from regular expressions.',
      url: 'https://ralodev.github.io/FSM-Generator/'
    },
    {
      name: 'JavaScript Encryptor',
      startDate: '2024-01',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      summary:
        'Web application for encrypting and decrypting text messages using a predefined dictionary, created for the Challenge01 of Oracle Next Education.',
      url: 'https://github.com/ralodev/'
    }
  ],
  other_projects: [
    {
      name: 'Spring AdvAuth Template',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      startDate: '2022-12',
      summary:
        'Spring AdvAuth Template is a template project that provides a starting point for developing RESTful web services with Spring Boot. It includes features like email sending, authentication, security, and JWT token generation.',
      url: 'https://github.com/ralodev/',
      endDate: '2023-07-31'
    },
    {
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      startDate: '2021',
      summary:
        'A game based on the popular game Crossy Road, developed in C and C++ using OpenGL and GLUT for 3D graphics.',
      url: 'https://github.com/ralodev/'
    },
    {
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      startDate: '2021',
      summary:
        'The classic DinoRun game, this application was made with the Swing and AWT libraries and incorporates a custom-made graphic tool that implements the Bresenham algorithm for rendering.',
      url: 'https://github.com/ralodev/'
    }
  ],
  meta: {
    version: 'v1.0.0',
    canonical: 'https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json'
  },
  $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json'
}
