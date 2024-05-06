import type { Hero } from '@/types'

const hero: Hero = {
  title: '안녕하세요, 저는 Raúl López Cruz입니다.',
  subtitle:
    '혁신적인 솔루션을 통해 프로세스를 간소화하고 사용자 경험을 향상시키는 데 전념하는 경험 많은 풀스택 개발자입니다.',
  name: 'Raúl López Cruz',
  contact_button: '연락',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://linkedin.com/in/raul-lc/',
    github: 'https://github.com/ralodev',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: '홈'
}

export default hero
