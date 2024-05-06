import type { Projects } from '@/types'

const projects: Projects = {
  title: '프로젝트',
  source: 'GitHub',
  website: '웹사이트',
  main: [
    {
      name: 'CVFast',
      techstack: ['Nuxtjs', 'Tailwind', 'Vercel'],
      image: 'cvfast_cover.webp',
      description:
        'CVFast는 몇 분 만에 전문적인 이력서를 만들 수 있는 온라인 이력서 작성 도구입니다. 다양한 템플릿과 맞춤 설정 옵션을 포함합니다.',
      src: 'https://github.com/ralodev/',
      url: 'https://cvfast.com/'
    },
    {
      name: 'SGIP',
      techstack: ['Vuejs', 'Spring Boot', 'MySQL'],
      image: 'sgip_cover.webp',
      description:
        '회사 인사 정보를 관리할 수 있는 HRMS 웹 애플리케이션입니다. Oaxaca 기술 연구소(ITO)를 위해 개발되었습니다. 현재 애플리케이션은 개인 서버에서 호스팅되고 운영 중입니다.',
      src: '',
      url: 'https://sgip.ralo.dev/'
    },
    {
      name: 'Vuefolio',
      image: 'vuefolio_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Vue.js, i18n 및 TypeScript로 구축된 포트폴리오 템플릿입니다. 고도로 맞춤 설정 가능하며, 설정이 간편하고 성능, SEO 및 접근성을 위해 철저히 최적화되었습니다.',
      src: 'https://github.com/ralodev/vuefolio',
      url: 'https://vuefolio.netlify.app/'
    },
    {
      name: 'FSM 생성기',
      techstack: ['JavaScript', 'HTML5', 'CSS3'],
      image: 'fsm_cover.webp',
      description:
        'FSM 생성기는 정규 표현식에서 유한 상태 머신(FSM) / 결정적 유한 자동 기계(DFA)를 생성할 수 있는 웹 애플리케이션입니다.',
      src: 'https://github.com/ralodev/FSM-Generator',
      url: 'https://fsm.ralo.dev/'
    }
  ],
  // You can leave this array empty
  other: [
    {
      name: 'Spring Boot Adv-Authentication',
      techstack: ['Spring Boot', 'Java', 'JWT'],
      image: '',
      description:
        'Spring AdvAuth는 SMTP 이메일 전달, JWT 기반 인증, 역할 기반 권한 부여 및 맞춤 보안 구성과 같은 기능을 포함하는 템플릿 프로젝트입니다.',
      src: 'https://github.com/ralodev/SpringSecurity-Jwt-JavaMail',
      url: ''
    },
    {
      name: 'CrossyRoad',
      techstack: ['C', 'C++', 'OpenGL', 'GLUT'],
      image: '',
      description:
        '인기 게임 크로시 로드를 기반으로 한 게임으로, 3D 그래픽을 위해 OpenGL 및 GLUT를 사용하여 C 및 C++로 개발되었습니다.',
      src: 'https://github.com/ralodev/CrossyRoad',
      url: ''
    },
    {
      name: 'DinoRun',
      techstack: ['Java', 'Swing', 'AWT'],
      image: '',
      description:
        '클래식 DinoRun 게임, 이 애플리케이션은 Swing 및 AWT 라이브러리로 만들어졌으며 Bresenham 알고리즘을 렌더링하기 위해 맞춤 제작된 그래픽 도구를 포함합니다.',
      src: 'https://github.com/ralodev/DinoRun-2D',
      url: ''
    },
    {
      name: 'JavaScript 암호화기',
      image: 'encriptador_cover.webp',
      techstack: ['JavaScript', 'HTML5', 'Tailwind'],
      description:
        'Oracle Next Education의 Challenge01을 위해 만들어진 사전 정의된 사전을 사용하여 텍스트 메시지를 암호화 및 복호화하는 웹 애플리케이션입니다.',
      src: 'https://github.com/ralodev/ONE-encriptador',
      url: 'https://ralodev.github.io/ONE-encriptador/'
    }
  ]
}

export default projects
