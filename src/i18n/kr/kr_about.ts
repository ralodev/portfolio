import type { About } from '@/types'

const about: About = {
  title: '소개',
  summary:
    '안녕하세요 👋 저는 멕시코 출신의 열정적인 27세 프로그래머 Raúl López입니다. 저는 소프트웨어 개발 전문화를 갖춘 컴퓨터 시스템 공학 학위를 보유하고 있습니다.\n\n 저의 지속적인 학습 노력은 저를 Oracle Next Education 프로그램에 참여하게 했고, LinkedIn의 최고 소프트웨어 개발 목소리 중 한 명으로 인정받게 되어 자랑스럽습니다. 저는 분야 발전과 커뮤니티에 의미 있는 기여를 위해 최선을 다하고 있습니다. 함께 연결되고 혁신합시다!',
  education: {
    title: '교육',
    list: [
      {
        title: '컴퓨터 시스템 공학 학사',
        institution: 'Instituto Tecnológico de Oaxaca',
        url: 'http://www.itoaxaca.edu.mx/',
        description:
          '저는 소프트웨어 개발과 신흥 기술을 전문으로 하는 컴퓨터 시스템 공학 학위를 취득했습니다.',
        startDate: '2018-08',
        endDate: '2023-07',
        courses: ['웹 개발', '데이터 구조', '알고리즘', '데이터베이스']
      },
      {
        title: 'AlumniONE, Oracle Next Education',
        institution: 'Oracle Next Education',
        url: 'https://oracle.com/lad/one',
        description:
          '저는 현재 Java 및 Spring Boot를 사용하는 백엔드 개발에 중점을 둔 Oracle Next Education 프로그램에 등록되어 있습니다.',
        startDate: '2024-01',
        endDate: '2024-10',
        courses: ['JavaScript', 'Nodejs', 'Java', 'SpringBoot']
      }
    ]
  },
  achievements: {
    title: '성과',
    list: [
      {
        title: '과학 연구 논문 발표',
        date: '2023-09',
        url: 'https://doi.org/10.58763/c2024259',
        awarder: '아마존 교육, 자연, 문화 및 혁신 연구 센터 - CIENCIA S.A.S',
        summary:
          '"지속 가능성 행동: 엔지니어링 학생들의 VBN 이론 적용"이라는 제목의 논문은 가치, 신념 및 규범(VBN) 이론을 적용하여 이러한 요인들이 지속 가능성 행동에 어떻게 영향을 미치는지 이해합니다.'
      },
      {
        title: 'LinkedIn: 최고 소프트웨어 개발 목소리',
        date: '2024-01',
        url: 'https://www.linkedin.com/in/raul-lc/',
        awarder: 'LinkedIn',
        summary:
          '소프트웨어 개발 분야에서 LinkedIn의 최고 목소리로 인정받았으며, 소프트웨어 개발 관련 공동 저술 기사에서 글로벌 기여자 상위 2%에 속합니다.'
      },
      {
        title: '제3회 전국 학술대회 "기술, 환경 및 사회 간의 지속 가능한 균형"에서 우수상',
        date: '2023-06',
        awarder: '멕시코 국립 기술 연구소',
        summary: '"엔지니어링 학생들의 지속 가능성 행동"이라는 연구 논문 전시 및 발표'
      },
      {
        title: 'ITOAXACA 2023 경쟁 프로그래밍 대회 1등',
        date: '2023-06',
        awarder: '학교 코더스 클럽 프로그램 이사 M.C. Dalia Silva Martínez',
        summary: '대회 대학 부문에서 최고 점수를 얻어 경쟁 프로그래밍 대회에서 1등을 차지했습니다.'
      },
      {
        title: '라 살 프로그래밍 대회 2022 2등',
        date: '2022-09-30',
        awarder: '공학 및 건축학과 학장 Ing. José Adrián Villanueva',
        summary:
          '비영리 단체에 물품을 배포하는 문제를 해결하는 웹 애플리케이션을 사용하여 기계 학습 프로젝트를 발표하여 Oaxaca 대학 라 살에서 열린 프로그래밍 대회에서 2등을 차지했습니다.'
      },
      {
        title: '"새로운 상황에서 중소기업 및 지속 가능성" 제2회 전국 학술대회 2등',
        date: '2022-05-31',
        awarder:
          '멕시코 국립 기술 연구소, 흑인 시에라 아잘판의 고등 기술 연구소 및 푸에블라 자치 대학 남부 지역 단지',
        summary:
          '"2013-2021년 기간 동안 Oaxaca의 인터넷 액세스 서비스 분석" 연구 논문으로 제2회 전국 학술대회에서 2등을 차지했습니다.'
      }
    ]
  }
}

export default about
