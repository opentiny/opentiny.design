import tinyAbout from '../../../home/public/images/logo-about.svg'
import tinyAi from '../../../home/public/images/logo-ai-extension.svg'
import tinyTech from '../../../home/public/images/logo-tech.svg'
import tinyEngine from '../assets/appIcon/tiny-engine.svg'
import tinySdks from '../assets/appIcon/next-sdk.svg'
import tinyVue from '../assets/appIcon/tiny-vue.svg'
import tinyRobot from '../assets/appIcon/tiny-robot.svg'
import sketch from '../../../home/public/images/logo-sketch.svg'

const createIsUnderline = (path) => () => location.pathname.startsWith(path)
const downloadFile = (filePath:string, fileName:string) => {
  const link = document.createElement('a')

  // 确保 filePath 不以斜杠开头
  const href = filePath.startsWith('/') ? filePath.slice(1) : filePath
  // 根据环境设置 link.href
  link.href = `${import.meta.env.BASE_URL}${href}`
  link.download = fileName || 'download-file'
  document.body.appendChild(link)

  link.click()
  document.body.removeChild(link)
}

const menuItems = [
  {
    name: 'TinyVue',
    url: '/opentiny-design/tiny-vue',
    children: [],
    logo: tinyVue,
    desc: '智能组件库',
    github: 'https://github.com/opentiny/tiny-vue',
    isUnderline: createIsUnderline('/opentiny-design/tiny-vue')
  },
  {
    name: 'TinyEngine',
    url: '/opentiny-design/tiny-engine',
    children: [],
    logo: tinyEngine,
    desc: '智能搭建平台',
    github: 'https://github.com/opentiny/tiny-engine',
    isUnderline: createIsUnderline('/opentiny-design/tiny-engine')
  },
  {
    name: 'TinyRobot',
    url: '/opentiny-design/tiny-robot',
    children: [],
    logo: tinyRobot,
    desc: '智能助手',
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: createIsUnderline('/opentiny-design/tiny-robot')
  },
  {
    name: 'Next-SDKs',
    desc: '开发套件',
    url: '/opentiny-design/next-sdks',
    logo: tinySdks,
    hide: false,
    github: 'https://github.com/opentiny/next-sdk',
    children: [],
    isUnderline: createIsUnderline('/opentiny-design/next-sdks')
  },
  {
    name: 'AI-Extension',
    desc: 'AI 浏览器扩展插件',
    url: '/opentiny-design/ai-extension',
    logo: tinyAi,
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: createIsUnderline('/opentiny-design/ai-extension')
  },
  {
    type: 'other',
    name: '演练场',
    url: '',
    children: [
      {
        title: 'TinyVue',
        desc: 'Vue组件库',
        href: 'https://playground.opentiny.design/tiny-vue.html',
        logo: tinyVue,
        github: 'https://github.com/opentiny/playground'
      },
      {
        title: 'TinyEngine',
        desc: '低代码引擎',
        href: 'https://playground.opentiny.design/tiny-engine.html',
        logo: tinyEngine,
        github: 'https://github.com/opentiny/playground'
      },
      {
        title: 'TinyRobot',
        desc: 'AI智能助手',
        href: 'https://playground.opentiny.design/tiny-robot.html',
        logo: tinyRobot,
        github: 'https://github.com/opentiny/playground'
      },
      {
        title: 'NEXT-SDKs',
        desc: '智能应用开发工具包',
        href: '',
        hide: true,
        logo: tinySdks,
        github: 'https://github.com/opentiny/playground'
      }
    ]
  },
  {
    type: 'other',
    name: '开发文档',
    url: '',
    children: [
      {
        title: 'TinyVue',
        desc: '智能组件库',
        href: 'https://docs.opentiny.design/tiny-vue/guide/introduce.html',
        logo: tinyVue,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'TinyEngine',
        desc: '智能搭建平台',
        href: 'https://docs.opentiny.design/tiny-engine/guide/introduction.html',
        logo: tinyEngine,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'TinyRobot',
        desc: '智能助手',
        href: 'https://docs.opentiny.design/tiny-robot/guide/quick-start.html',
        logo: tinyRobot,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'Next-SDKs',
        desc: '开发套件',
        href: 'https://docs.opentiny.design/next-sdk/guide/',
        logo: tinySdks,
        github: 'https://github.com/opentiny/docs'
      }
    ]
  },
  {
    type: 'other',
    name: '开发资源',
    url: '',
    children: [
      {
        title: '技术学院',
        desc: '轻松 get 开发技巧',
        href: '/opentiny-design/tech',
        logo: tinyTech,
        github: 'https://github.com/opentiny/opentiny.design'
      },
      {
        title: '关于我们',
        desc: '一起加入我们',
        href: '/opentiny-design/about',
        logo: tinyAbout,
        github: 'https://github.com/opentiny/opentiny.design'
      },
      {
        title: 'Sketch 资源下载',
        desc: 'Sketch 组件资源包',
        href: `/downloadFile/TinyVue3.0_UI.KIT_202508.sketch`,
        logo: sketch,
        github: '',
        download: true,
        onClick: (event: MouseEvent) => { 
          event.preventDefault();
          downloadFile(`/downloadFile/TinyVue3\.0_UI\.KIT_202508\.sketch`, 'sketch')
        }
      }
    ]
  }
]

export default menuItems