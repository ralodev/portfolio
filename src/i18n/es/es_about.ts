import type { About } from '@/types'

const about: About = {
  title: 'Acerca de',
  summary:
    'Hola 👋, mi nombre es Raúl López, un programador apasionado de 27 años de México. Soy Ingeniero en Sistemas Computacionales, con especialización en Tecnologías Emergentes. \n\n Mi compromiso con el aprendizaje continuo me ha llevado a participar en el programa Oracle Next Education, y me enorgullece ser reconocido como una de las Top Voices de LinkedIn en Desarrollo de Software. Estoy dedicado a avanzar en nuestro campo y hacer contribuciones significativas a la comunidad. ¡Conectémonos e innovemos juntos!',
  education: {
    title: 'Educación',
    list: [
      {
        title: 'Ingeniería en Sistemas Computacionales',
        institution: 'Instituto Tecnológico de Oaxaca',
        url: 'http://www.itoaxaca.edu.mx/',
        description:
          'Me gradué como Ingeniero en Sistemas Computacionales, con especialidad en Desarrollo de Software con Tecnologías Emergentes.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: ['Desarrollo Web', 'Estructuras de Datos', 'Algoritmos', 'Bases de Datos']
      },
      {
        title: 'AlumniONE, Oracle Next Education',
        institution: 'Oracle Next Education',
        url: 'https://oracle.com/lad/one',
        description:
          'Actualmente estoy inscrito en el programa Oracle Next Education, enfocado en el desarrollo Backend utilizando Java y Spring Boot.',
        startDate: '2024-01',
        endDate: '2024-10',
        courses: ['JavaScript', 'Nodejs', 'Java', 'SpringBoot']
      }
    ]
  },
  achievements: {
    title: 'Logros',
    list: [
      {
        title: 'Publicación de Artículo de Investigación Científica',
        date: '2024-02',
        url: 'https://doi.org/10.58763/c2024259',
        awarder:
          'Centro de Investigación en Educación, Naturaleza, Cultura e Innovación para la Amazonía - CIENCIA S.A.S',
        summary: `El manuscrito titulado "Comportamientos de Sostenibilidad: Una Aplicación de la Teoría VBN en Estudiantes de Ingeniería" aplica la teoría de Valores, Creencias y Normas (VBN) para comprender cómo estos factores influyen en los comportamientos de sostenibilidad.`
      },
      {
        title: 'LinkedIn: Top Voice en Desarrollo de Software',
        date: '2024-01',
        url: 'https://www.linkedin.com/in/raul-lc/',
        awarder: 'LinkedIn',
        summary:
          'Reconocido como Top Voice en desarrollo de software en LinkedIn, estando entre el 2% de los colaboradores globales en artículos colaborativos sobre Desarrollo de Software.'
      },
      {
        title: `Mención Honorífica en el Tercer Congreso Nacional Científico "Equilibrio Sostenible entre Tecnología, Medio Ambiente y Sociedad"`,
        date: '2023-06',
        awarder: 'Instituto Tecnológico Nacional de México',
        summary:
          'Exhibición y presentación del trabajo de investigación "Comportamientos de sostenibilidad entre estudiantes de ingeniería"'
      },
      {
        title: '1er lugar en el Concurso de Programación Competitiva ITOAXACA 2023',
        date: '2023-06',
        awarder:
          'M.C. Dalia Silva Martínez, Directora del Programa del Club de Codificadores de la Escuela',
        summary:
          'Obtuve el primer lugar en el Concurso de Programación Competitiva, logrando el mayor puntaje en la categoría universitaria de la competencia.'
      },
      {
        title: '2do lugar en el Concurso de Programación La Salle 2022',
        date: '2022-09-30',
        awarder: 'Ing. José Adrián Villanueva, Director de la Escuela de Ingeniería y Arquitectura',
        summary:
          'Mi equipo obtuvo el segundo lugar en el Concurso de Programación realizado en la Universidad LaSalle Oaxaca, presentando un proyecto que resuelve el problema de la distribución de bienes a organizaciones sin fines de lucro a través de una aplicación web utilizando aprendizaje automático.'
      },
      {
        title:
          '2do lugar en el 2do Congreso Nacional Científico "PYMES y Sustentabilidad en el Contexto de la Nueva Normalidad"',
        date: '2022-05-31',
        awarder:
          'Instituto Tecnológico Nacional de México, Instituto Tecnológico Superior de la Sierra Negra de Ajalpan y Complejo Regional Sur de la Benemérita Universidad Autónoma de Puebla',
        summary:
          'Obtuve el segundo lugar en el Segundo Congreso Nacional Científico, con el trabajo de investigación "ANÁLISIS DEL SERVICIO DE ACCESO A INTERNET EN OAXACA DURANTE EL PERIODO 2013-2021"'
      }
    ]
  }
}

export default about
