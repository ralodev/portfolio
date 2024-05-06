import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experiencia',
  description: 'Puedes descargar mi CV haciendo clic en el botón de abajo.',
  download_button: 'Descargar',
  present: 'Actualidad',
  month: 'mes | meses',
  year: 'año | años',
  list: [
    {
      company: 'ralo.dev',
      position: 'Ingeniero de Software Freelance',
      url: 'https://ralo.dev/',
      startDate: '2023-07',
      endDate: 'Actualidad',
      highlights: [],
      description:
        'Ofrezco experiencia en Ingeniería de Software, brindando un espectro de servicios que incluyen desarrollo de software, desarrollo web y consultoría. He trabajado con clientes de diversas industrias, incluyendo educación, turismo y tecnología.'
    },
    {
      company: 'Instituto Tecnológico de Oaxaca',
      position: 'Desarrollador Full Stack Jr',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2024-01',
      endDate: '2024-04',
      highlights: [],
      description:
        'Mis responsabilidades incluyeron el desarrollo de una aplicación web para la gestión de expedientes estudiantiles, utilizando un stack tecnológico que incluía Nextjs, React, TypeScript, Tailwind, Nestjs, PrismaORM y PostgreSQL.'
    },
    {
      company: 'Instituto Tecnológico de Oaxaca',
      position: 'Desarrollador Full Stack - Pasante',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2022-05',
      endDate: '2023-08',
      description:
        'Fui responsable del desarrollo de un Sistema de Gestión de Recursos Humanos utilizando Vuejs, JavaScript, TailwindCSS, Java, Spring(Boot, MVC, Security) y MySQL.',
      highlights: [
        'Optimización del tiempo de generación de informes en un 90%',
        'Implementación y mantenimiento exitoso del HRMS actualmente en producción',
        'Demo de la aplicación: https://sgip.ralo.dev/'
      ]
    }
  ]
}

export default experience
