import tinyAi from '../assets/appIcon/ai-extension.svg'
import tinyTech from '../../../home/public/images/logo-tech.svg'
import tinyEngine from '../assets/appIcon/tiny-engine.svg'
import tinyNG from '../assets/appIcon/tiny-ng.svg'
import tinySdks from '../assets/appIcon/next-sdk.svg'
import tinyWebAgent from '../assets/appIcon/web-agent.svg'
import tinyPro from '../assets/appIcon/tiny-pro.svg'
import tinyProNg from '../assets/appIcon/tiny-pro-ng.svg'
import tinyVue from '../assets/appIcon/tiny-vue.svg'
import tinyCli from '../assets/appIcon/tiny-cli.svg'
import tinyRobot from '../assets/appIcon/tiny-robot.svg'
import tinyEditor from '../assets/appIcon/tiny-editor.svg'
import tinyChart from '../assets/appIcon/tiny-chart.svg'
import GenuiSdk from '../assets/appIcon/genui-sdk.svg'
import sketch from '../../../home/public/images/logo-sketch.svg'
import { createIsUnderline, downloadFile } from './common.ts'

const isGitHubBuild = import.meta.env.MODE === 'github'

const isGitHubRuntime = typeof window !== 'undefined' && window.location.hostname.includes('opentiny.github.io')

const isGitHub = isGitHubRuntime || isGitHubBuild

const basePath = isGitHub ? '/opentiny.design/' : '/'
const fileBaseUrl = isGitHub ? 'https://opentiny.design' : ''

const menuItems = [
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
    name: '前端智能化',
    url: '',
    children: [
      {
        title: '智能化解决方案',
        data: [      
          {
            name: 'TinyRobot',
            url: `${basePath}tiny-robot`,
            children: [],
            logo: tinyRobot,
            desc: 'AI 对话组件库',
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/tiny-robot',
            isUnderline: createIsUnderline(`${basePath}tiny-robot`)
          },
          {
            name: 'NEXT-SDKs',
            desc: '开发套件',
            url: `${basePath}next-sdk`,
            logo: tinySdks,
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/next-sdk',
            isUnderline: createIsUnderline(`${basePath}next-sdk`)
          },
          {
            name: 'GenUI-SDK',
            desc: '生成式UI',
            url: `${basePath}genui-sdk`,
            logo: GenuiSdk,
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/genui-sdk',
            isUnderline: createIsUnderline(`${basePath}genui-sdk`)
          },
          {
            name: 'AI-Extension',
            desc: 'AI扩展插件',
            url: `${basePath}ai-extension`,
            logo: tinyAi,
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/tiny-robot',
            isUnderline: createIsUnderline(`${basePath}ai-extension`)
          },
          {
            name: 'WebAgent',
            url: `https://docs.opentiny.design/web-agent/guide/getting-started.html`,
            children: [],
            logo: tinyWebAgent,
            desc: 'MCP代理转发服务',
            hide: false,
            github: 'https://github.com/opentiny/webmcp-sdk'
          }
        ]
      }
    ]
  },
  {
    type: 'other',
    name: '前端应用开发',
    url: '',
    children: [
      {
        title: '场景化解决方案',
        data: [      
          {
            name: 'TinyPro Vue',
            url: `/vue-pro`,
            logo: tinyPro,
            desc: '中后台应用开发模板',
            hide: false,
            github: 'https://github.com/opentiny/tiny-pro'
          },
          {
            name: 'TinyPro Angular',
            url: `/ng-pro`,
            logo: tinyProNg,
            desc: '中后台应用开发模板',
            hide: false,
            github: ''
          },
          {
            name: 'TinyCLI',
            desc: '脚手架底座',
            url: `/tiny-cli/home`,
            logo: tinyCli,
            hide: false,
            github: 'https://github.com/opentiny/tiny-cli',
          }
        ]
      },
      {
        title: 'UI组件库',
        data: [      
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
            name: 'TinyNG',
            desc: 'Angular技术栈基础组件库',
            url: `https://opentiny.design/tiny-ng/overview`,
            logo: tinyNG,
            hide: false,
            github: 'https://github.com/opentiny/tiny-ng',
            children: []
          },
          {
            name: 'TinyCharts',
            desc: '专业图表组件库',
            url: `https://opentiny.design/tiny-charts/QuickStart`,
            logo: tinyChart,
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/tiny-charts',
            children: []
          },
          {
            name: 'TinyEditor',
            desc: '富文本编辑器',
            url: location.hostname === 'opentiny.design' ? `https://docs.opentiny.design/tiny-editor/guide/quick-start.html` : 'https://opentiny.github.io/tiny-editor',
            logo: tinyEditor,
            hide: false,
            new: true,
            github: 'https://github.com/opentiny/tiny-editor'
          }
        ]
      },
      {
        title: '低代码引擎',
        data: [      
          {
            name: 'TinyEngine',
            url: '/opentiny-design/tiny-engine',
            children: [],
            logo: tinyEngine,
            desc: '低代码智能搭建平台',
            github: 'https://github.com/opentiny/tiny-engine',
            isUnderline: createIsUnderline('/tiny-engine')
          }
        ]
      }
    ]
  },
  {
    type: 'other',
    name: '文档',
    url: '',
    linkTitle: '查看全部文档',
    children: [
      {
        title: '智能化解决方案',
        data: [      
          {
            name: 'TinyRobot',
            url: `https://docs.opentiny.design/tiny-robot/guide/quick-start`,
            children: [],
            logo: tinyRobot,
            desc: 'AI 对话组件库',
            hide: false,
            github: 'https://github.com/opentiny/docs'
          },
          {
            name: 'NEXT-SDKs',
            desc: '开发套件',
            url: `https://docs.opentiny.design/next-sdk/guide`,
            logo: tinySdks,
            hide: false,
            github: 'https://github.com/opentiny/docs',
          },
          {
            name: 'GenUI-SDK',
            desc: '生成式UI',
            url: `https://docs.opentiny.design/genui-sdk/guide/quick-start`,
            logo: GenuiSdk,
            hide: false,
            github: 'https://github.com/opentiny/docs',
          }
        ]
      },
      {
        title: '场景化解决方案',
        data: [      
          {
            name: 'TinyPro Vue',
            url: `/vue-pro`,
            children: [],
            logo: tinyPro,
            desc: '中后台应用开发模板',
            hide: false,
            github: 'https://github.com/opentiny/tiny-pro'
          },
          {
            name: 'TinyPro Angular',
            url: `/ng-pro`,
            children: [],
            logo: tinyProNg,
            desc: '中后台应用开发模板',
            hide: false,
            github: ''
          }
        ]
      },
      {
        title: 'UI组件库',
        data: [      
          {
            name: 'TinyVue',
            url: 'https://docs.opentiny.design/tiny-vue/guide/introduce',
            children: [],
            logo: tinyVue,
            desc: '智能组件库',
            github: 'https://github.com/opentiny/docs'
          },
          {
            name: 'TinyEditor',
            desc: '富文本编辑器',
            url: `https://docs.opentiny.design/tiny-editor/guide/quick-start`,
            logo: tinyEditor,
            hide: false,
            github: 'https://github.com/opentiny/docs'
          }
        ]
      },
      {
        title: '低代码引擎',
        data: [      
          {
            name: 'TinyEngine',
            url: 'https://docs.opentiny.design/tiny-engine/guide/introduction',
            children: [],
            logo: tinyEngine,
            desc: '低代码智能搭建平台',
            github: 'https://github.com/opentiny/docs'
          }
        ]
      }
    ]
  },
  {
    type: 'other',
    name: '资源',
    url: '',
    children: [
      {
        title: '学堂',
        data: [      
          {
            name: '技术学院',
            url: `/tech-college`,
            children: [],
            logo: tinyTech,
            desc: '轻松 get 开发技巧',
            hide: false,
            github: 'https://github.com/opentiny/opentiny.design'
          },
        ]
      },
      {
        title: '设计',
        data: [      
          {
            name: 'Sketch 资源下载',
            url: `#`,
            children: [],
            logo: sketch,
            desc: 'Sketch 组件资源包',
            hide: false,
            github: '',
            onClick: (event: MouseEvent) => { 
              event.preventDefault();
              downloadFile(`${import.meta.env.VITE_BASE}opentiny-design/downloadFile/TinyVue3.0_UI.KIT_202508.sketch`, 'TinyVue3.0_UI.KIT_202508.sketch')
            }
          }
        ]
      }
    ]
  }
]

export default menuItems