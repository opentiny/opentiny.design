const envName = import.meta.env.VITE_EnvName
import tinyNG from '../assets/appIcon/tiny-ng.svg'
import tinyCharts from '../assets/appIcon/tiny-chart.svg'
// import tinyVueMobile from '../assets/appIcon/tiny-vue-mobile.svg'
import tinyCli from '../assets/appIcon/tiny-cli.svg'
import tinyEngine from '../assets/appIcon/tiny-engine.svg'
import tinyPro from '../assets/appIcon/tiny-pro.svg'
import tinyVue from '../assets/appIcon/tiny-vue.svg'
import tinyRobot from '../assets/appIcon/tiny-robot.svg'

export default [
  {
    name: 'TinyVue',
    url: '/opentiny-design/tiny-vue',
    children: [],
    logo: tinyVue,
    github: 'https://github.com/opentiny/tiny-vue',
    isUnderline: () => location.pathname === '/opentiny-design/tiny-vue'
  },
  {
    name: 'TinyRobot',
    url: '/opentiny-design/tiny-robot',
    children: [],
    logo: tinyRobot,
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: () => location.pathname === '/opentiny-design/tiny-robot'
  },
  {
    name: 'NEXT-SDKs',
    url: '/opentiny-design/next-sdks',
    children: [],
    logo: tinyRobot,
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: () => location.pathname === '/opentiny-design/next-sdks'
  },
  {
    name: 'AI-Extension',
    url: '/opentiny-design/ai-extension',
    children: [],
    logo: tinyRobot,
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: () => location.pathname === '/opentiny-design/ai-extension'
  },
  {
    name: '技术学院',
    url: '/opentiny-design/tech',
    children: [],
    isUnderline: () => location.pathname.startsWith('/opentiny-design/tech')
  },

  {
    name: '关于我们',
    url: '/opentiny-design/about',
    children: [],
    isUnderline: () => location.pathname.startsWith('/opentiny-design/about')
  },
  {
    name: '生态产品',
    url: '',
    children: [
      {
        title: 'TinyPro',
        desc: '中后台最佳实践',
        href: '/pro',
        logo: tinyPro,
        hide: true,
        github: 'https://github.com/opentiny/tiny-cli'
      },
      {
        title: 'TinyCharts',
        desc: '图表组件库',
        href: '/tiny-charts',
        logo: tinyCharts,
        github: 'https://github.com/opentiny/tiny-charts'
      },
      {
        title: 'TinyNG',
        desc: 'Angular组件库',
        href: '/tiny-ng',
        logo: tinyNG,
        hide: envName === 'inner',
        github: 'https://github.com/opentiny/ng'
      },
      {
        title: 'TinyCLI',
        desc: '官方脚手架',
        href: '/tiny-cli/home',
        logo: tinyCli,
        hide: true,
        github: 'https://github.com/opentiny/tiny-cli'
      }
    ],
    isUnderline: () =>
      ['tiny-cli', 'tiny-charts', 'designtheme', 'pro', 'tiny-engine', 'tiny-ng', 'tiny-vue-mobile'].some((app) =>
        location.pathname.includes(app)
      )
  }
]
