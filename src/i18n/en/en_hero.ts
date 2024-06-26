import type { Hero } from '@/types'

const hero: Hero = {
  title: "Hey, I'm Raúl López Cruz",
  subtitle:
    'Experienced Full Stack Developer dedicated to simplifying processes and enhancing user experiences through innovative solutions.',
  name: 'Raúl López Cruz',
  contact_button: 'Get in touch',
  //If a profile hast an empty string '', the button wont be rendered
  profiles: {
    linkedin: 'https://linkedin.com/in/raul-lc/',
    github: 'https://github.com/ralodev',
    youtube: '',
    twitter: '',
    instagram: '',
    facebook: ''
  },
  home: 'Home'
}

export default hero
