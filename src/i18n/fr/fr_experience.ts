import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Expérience',
  description: 'Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.',
  download_button: 'Télécharger',
  present: 'Actuellement',
  month: 'mois | mois',
  year: 'an | années',
  list: [
    {
      company: 'ralo.dev',
      position: 'Ingénieur logiciel freelance',
      url: 'https://ralo.dev/',
      startDate: '2023-07',
      endDate: 'Actuellement',
      highlights: [],
      description:
        "Offrant une expertise en génie logiciel, je propose une gamme de services comprenant le développement logiciel, le développement web et le conseil. J'ai travaillé avec des clients de différents secteurs, notamment l'éducation, le tourisme et la technologie."
    },
    {
      company: "Institut Technologique d'Oaxaca",
      position: 'Développeur Full Stack Junior',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2024-01',
      endDate: '2024-04',
      highlights: [],
      description:
        "Mes responsabilités comprenaient le développement d'une application web pour la gestion des dossiers étudiants, en utilisant une pile technologique comprenant Nextjs, React, TypeScript, Tailwind, Nestjs, PrismaORM et PostgreSQL."
    },
    {
      company: "Institut Technologique d'Oaxaca",
      position: 'Développeur Full Stack Stagiaire',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2022-05',
      endDate: '2023-08',
      description:
        "J'étais responsable du développement d'un système de gestion des ressources humaines en utilisant Vuejs, JavaScript, TailwindCSS, Java, Spring (Boot, MVC, Security) et MySQL.",
      highlights: [
        'Optimisation des temps de génération des rapports de 90%',
        'Déploiement et maintenance réussies du SIRH actuellement en production',
        "Démo de l'application : https://sgip.ralo.dev/"
      ]
    }
  ]
}

export default experience
