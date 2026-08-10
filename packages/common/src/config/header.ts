import tinyAbout from '../../../home/public/images/logo-about.svg'
import tinyAi from '../../../home/public/images/logo-ai-extension.svg'
import tinyTech from '../../../home/public/images/logo-tech.svg'
import tinyEngine from '../assets/appIcon/tiny-engine.svg'
import tinySdks from '../assets/appIcon/next-sdk.svg'
import tinyPro from '../assets/appIcon/tiny-pro.svg'
import tinyVue from '../assets/appIcon/tiny-vue.svg'
import tinyRobot from '../assets/appIcon/tiny-robot.svg'
import tinyEditor from '../assets/appIcon/tiny-editor.svg'
import GenuiSdk from '../assets/appIcon/genui-sdk.svg'
import sketch from '../../../home/public/images/logo-sketch.svg'
import gitcodeLogo from '../assets/appIcon/gitcode-logo.svg'
import { createIsUnderline, downloadFile } from './common.ts'

const isGitHubBuild = import.meta.env.MODE === 'github'

const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')

const isGitHub = isGitHubRuntime || isGitHubBuild

const basePath = isGitHub ? '/opentiny.design/' : '/'
const fileBaseUrl = isGitHub ? 'https://opentiny.design' : ''

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
    url: '/tiny-engine',
    children: [],
    logo: tinyEngine,
    desc: '智能搭建平台',
    github: 'https://github.com/opentiny/tiny-engine',
    isUnderline: createIsUnderline('/tiny-engine')
  },
  {
    name: 'TinyRobot',
    url: `${basePath}tiny-robot`,
    children: [],
    logo: tinyRobot,
    desc: 'AI 对话组件库',
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: createIsUnderline(`${basePath}tiny-robot`)
  },
  {
    name: 'NEXT-SDKs',
    desc: '开发套件',
    url: `${basePath}next-sdk`,
    logo: tinySdks,
    hide: false,
    github: 'https://github.com/opentiny/next-sdk',
    children: [],
    isUnderline: createIsUnderline(`${basePath}next-sdk`)
  },
  {
    name: 'GenUI-SDK',
    desc: '生成式UI',
    url: `${basePath}genui-sdk`,
    logo: GenuiSdk,
    hide: false,
    github: 'https://github.com/opentiny/genui-sdk',
    children: [],
    isUnderline: createIsUnderline(`${basePath}genui-sdk`)
  },
  {
    name: 'AI-Extension',
    desc: 'AI 浏览器扩展插件',
    url: `${basePath}ai-extension`,
    logo: tinyAi,
    hide: false,
    github: 'https://github.com/opentiny/tiny-robot',
    isUnderline: createIsUnderline(`${basePath}ai-extension`)
  },
  // 暂时隐藏起来
  // {
  //   type: 'other',
  //   name: '演练场',
  //   url: '',
  //   children: [
  //     {
  //       title: 'TinyVue',
  //       desc: '智能组件库',
  //       href: 'https://playground.opentiny.design/tiny-vue',
  //       logo: tinyVue,
  //       github: 'https://github.com/opentiny/playground'
  //     },
  //     {
  //       title: 'TinyEngine',
  //       desc: '智能搭建平台',
  //       href: 'https://playground.opentiny.design/tiny-engine',
  //       logo: tinyEngine,
  //       github: 'https://github.com/opentiny/playground'
  //     },
  //     {
  //       title: 'TinyRobot',
  //       desc: '智能助手',
  //       href: 'https://playground.opentiny.design/tiny-robot',
  //       logo: tinyRobot,
  //       github: 'https://github.com/opentiny/playground'
  //     },
  //     {
  //       title: 'NEXT-SDKs',
  //       desc: '开发套件',
  //       href: 'https://playground.opentiny.design/next-sdk',
  //       hide: true,
  //       logo: tinySdks,
  //       github: 'https://github.com/opentiny/playground'
  //     },
  //     {
  //       title: 'GenUI-SDK',
  //       desc: '生成式UI',
  //       href: 'https://playground.opentiny.design/genui-sdk',
  //       logo: GenuiSdk,
  //       github: 'https://github.com/opentiny/playground'
  //     },
  //     {
  //       title: 'TinyPro',
  //       desc: '中后台解决方案',
  //       href: '/vue-pro/pages',
  //       logo: tinyPro,
  //       github: 'https://github.com/opentiny/tiny-pro'
  //     }
  //   ]
  // },
  {
    type: 'other',
    name: '开发文档',
    url: '',
    children: [
      {
        title: 'TinyVue',
        desc: '智能组件库',
        href: 'https://docs.opentiny.design/tiny-vue/guide/introduce',
        logo: tinyVue,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'TinyEngine',
        desc: '智能搭建平台',
        href: 'https://docs.opentiny.design/tiny-engine/guide/introduction',
        logo: tinyEngine,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'TinyRobot',
        desc: '智能助手',
        href: 'https://docs.opentiny.design/tiny-robot/guide/quick-start',
        logo: tinyRobot,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'NEXT-SDKs',
        desc: '开发套件',
        href: 'https://docs.opentiny.design/next-sdk/guide',
        logo: tinySdks,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'GenUI-SDK',
        desc: '生成式UI',
        href: 'https://docs.opentiny.design/genui-sdk/guide/quick-start',
        logo: GenuiSdk,
        github: 'https://github.com/opentiny/docs'
      },
      {
        title: 'TinyPro',
        desc: '中后台解决方案',
        href: '/vue-pro',
        logo: tinyPro,
        github: 'https://github.com/opentiny/tiny-pro'
      },
      {
        title: 'TinyEditor',
        desc: '富文本编辑器',
        href: 'https://opentiny.github.io/tiny-editor',
        logo: tinyEditor,
        github: 'https://github.com/opentiny/tiny-editor'
      }
    ]
  },
  {
    type: 'other',
    name: '资源',
    url: '',
    children: [
      {
        title: '技术学院',
        desc: '轻松 get 开发技巧',
        href: '/tech-college',
        logo: tinyTech,
        github: 'https://github.com/opentiny/opentiny.design'
      },
      {
        title: 'Sketch 资源下载',
        desc: 'Sketch 组件资源包',
        href: '#',
        logo: sketch,
        github: '',
        onClick: (event: MouseEvent) => { 
          event.preventDefault();
          downloadFile(`${import.meta.env.VITE_BASE}opentiny-design/downloadFile/TinyVue3.0_UI.KIT_202508.sketch`, 'TinyVue3.0_UI.KIT_202508.sketch')
        }
      },
      {
        title: 'GitCode 源码仓库',
        desc: '国内代码仓库，访问速度更快',
        href: 'https://gitcode.com/opentiny',
        logo: gitcodeLogo,
        target: '_blank'
      }
    ]
  }
]

export default menuItems
