import type { About } from '@/types'

const about: About = {
  title: 'À propos',
  summary:
    "Bonjour 👋, je m'appelle Raúl López, un programmeur passionné de 27 ans originaire du Mexique. Je suis titulaire d'un diplôme en génie informatique, avec une spécialisation dans les technologies émergentes. \n\n Mon engagement dans la formation continue m'a conduit à participer au programme Oracle Next Education, et je suis fier d'être reconnu comme l'une des Top Voices de LinkedIn dans le développement logiciel. Je suis dédié à l'avancement de notre domaine et à apporter des contributions significatives à la communauté. Connectons-nous et innovons ensemble !",
  education: {
    title: 'Éducation',
    list: [
      {
        title: 'Licence en génie informatique',
        institution: 'Instituto Tecnológico de Oaxaca',
        url: 'http://www.itoaxaca.edu.mx/',
        description:
          "J'ai obtenu un diplôme en génie informatique, spécialisé dans le développement de logiciels avec les technologies émergentes.",
        startDate: '2018-08',
        endDate: '2023-07',
        courses: ['Développement web', 'Structures de données', 'Algorithmes', 'Bases de données']
      },
      {
        title: 'AlumniONE, Oracle Next Education',
        institution: 'Oracle Next Education',
        url: 'https://oracle.com/lad/one',
        description:
          'Je suis actuellement inscrit au programme Oracle Next Education, en me concentrant sur le développement backend en utilisant Java et Spring Boot.',
        startDate: '2024-01',
        endDate: '2024-10',
        courses: ['JavaScript', 'Nodejs', 'Java', 'SpringBoot']
      }
    ]
  },
  achievements: {
    title: 'Réalisations',
    list: [
      {
        title: "Publication d'un article de recherche scientifique",
        date: '2023-09',
        url: 'https://doi.org/10.58763/c2024259',
        awarder:
          "Centre de recherche sur l'éducation, la nature, la culture et l'innovation pour l'Amazonie - CIENCIA S.A.S",
        summary: `Le manuscrit intitulé "Comportements de durabilité : Une application de la théorie VBN chez les étudiants en ingénierie" applique la théorie des valeurs, croyances et normes (VBN) pour comprendre comment ces facteurs influencent les comportements de durabilité.`
      },
      {
        title: 'LinkedIn : Top Voice du développement logiciel',
        date: '2024-01',
        url: 'https://www.linkedin.com/in/raul-lc/',
        awarder: 'LinkedIn',
        summary:
          'Reconnu comme Top Voice dans le développement logiciel sur LinkedIn, faisant partie des 2% des contributeurs mondiaux aux articles collaboratifs sur le développement logiciel.'
      },
      {
        title:
          "Mention honorable à la troisième conférence scientifique nationale « Équilibre durable entre la technologie, l'environnement et la société »",
        date: '2023-06',
        awarder: 'Institut national technologique du Mexique',
        summary:
          'Exposition et présentation du document de recherche « Comportements de durabilité chez les étudiants en ingénierie »'
      },
      {
        title: '1ère place au Concours de programmation compétitive ITOAXACA 2023',
        date: '2023-06',
        awarder: "M.C. Dalia Silva Martínez, Directrice du programme Coders Club à l'école",
        summary:
          'Première place au Concours de programmation compétitive, avec le score le plus élevé dans la catégorie universitaire du concours.'
      },
      {
        title: '2ème place au Concours de programmation La Salle 2022',
        date: '2022-09-30',
        awarder: "Ing. José Adrián Villanueva, Directeur de l'École d'ingénierie et d'architecture",
        summary:
          "Mon équipe a remporté la deuxième place au Concours de programmation organisé à l'Université LaSalle Oaxaca, en présentant un projet qui résout le problème de la distribution de biens aux organisations à but non lucratif via une application web utilisant le machine learning."
      },
      {
        title:
          '2ème place à la 2ème Conférence scientifique nationale « PME et Durabilité dans le Contexte de la Nouvelle Normalité »',
        date: '2022-05-31',
        awarder:
          "Institut national de technologie du Mexique, Institut technologique supérieur de la Sierra Noire d'Ajalpan et Complexe régional sud de l'Université autonome de Puebla",
        summary:
          "Deuxième place à la deuxième Conférence scientifique nationale, avec le document de recherche « ANALYSE DU SERVICE D'ACCÈS INTERNET À OAXACA PENDANT LA PÉRIODE 2013-2021 »"
      }
    ]
  }
}

export default about
