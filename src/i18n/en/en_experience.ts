import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume by clicking the button below.',
  download_button: 'Download',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'ralo.dev',
      position: 'Freelance Software Engineer',
      url: 'https://ralo.dev/',
      startDate: '2023-07',
      endDate: 'Present',
      highlights: [],
      description:
        "Offering expertise in Software Engineering, providing a spectrum of services including software development, web development, and consulting. I've worked with clients from different industries, including education, tourism, and technology."
    },
    {
      company: 'Technological Institute of Oaxaca',
      position: 'Full Stack Developer Jr',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2024-01',
      endDate: '2024-04',
      highlights: [],
      description:
        'My responsibilities included developing a web application for the management of student records, using a tech stack that included Nextjs, React, TypeScript, Tailwind, Nestjs, PrismaORM and PostgreSQL.'
    },
    {
      company: 'Technological Institute of Oaxaca',
      position: 'Full Stack Developer Intern',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2022-05',
      endDate: '2023-08',
      description:
        'I was responsible for the development of a Human Resources Management System using Vuejs, JavaScript, TailwindCSS, Java, Spring(Boot, MVC, Security) and MySQL.',
      highlights: [
        'Optimized report generation times by 90%',
        'Succesfully deployed and mantained the HRMS currently on production',
        'Demo of the app: https://sgip.ralo.dev/'
      ]
    }
  ]
}

export default experience
