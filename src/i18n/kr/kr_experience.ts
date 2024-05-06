import type { Experience } from '@/types'

const experience: Experience = {
  title: '경력',
  description: '아래 버튼을 클릭하여 이력서를 다운로드할 수 있습니다.',
  download_button: '다운로드',
  present: '현재',
  month: '개월 | 개월',
  year: '년 | 년',
  list: [
    {
      company: 'ralo.dev',
      position: '프리랜서 소프트웨어 엔지니어',
      url: 'https://ralo.dev/',
      startDate: '2023-07',
      endDate: '현재',
      highlights: [],
      description:
        '소프트웨어 개발, 웹 개발 및 컨설팅을 포함한 다양한 서비스를 제공하는 소프트웨어 엔지니어링 전문 지식을 제공합니다. 교육, 관광 및 기술을 포함한 다양한 산업 분야의 고객과 협력했습니다.'
    },
    {
      company: 'Instituto Tecnológico de Oaxaca',
      position: '풀스택 개발자 (주니어)',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2024-01',
      endDate: '2024-04',
      highlights: [],
      description:
        'Nextjs, React, TypeScript, Tailwind, Nestjs, PrismaORM 및 PostgreSQL을 포함하는 기술 스택을 사용하여 학생 기록 관리 웹 애플리케이션을 개발하는 책임을 맡았습니다.'
    },
    {
      company: 'Instituto Tecnológico de Oaxaca',
      position: '풀스택 개발자 인턴',
      url: 'http://www.itoaxaca.edu.mx/',
      startDate: '2022-05',
      endDate: '2023-08',
      description:
        'Vuejs, JavaScript, TailwindCSS, Java, Spring(Boot, MVC, Security) 및 MySQL을 사용하여 인사 관리 시스템 개발을 담당했습니다.',
      highlights: [
        '보고서 생성 시간 90% 단축',
        '현재 운영 중인 HRMS 성공적으로 배포 및 유지 관리',
        '앱 데모: https://sgip.ralo.dev/'
      ]
    }
  ]
}

export default experience
