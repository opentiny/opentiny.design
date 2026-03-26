import {
  WebMcpServer,
  createMessageChannelPairTransport,
  withPageTools,
  registerNavigateTool
} from '@opentiny/next-sdk'

import registerInventoryTools from './inventory/tools'
export { useWebAgentServer } from './useWebAgentServer'

const rawServer = new WebMcpServer()
const [serverTransport, clientTransport] = createMessageChannelPairTransport()

// 用 withPageTools 包装后，registerTool 第三个参数支持路由配置对象
export const server = withPageTools(rawServer)

export { clientTransport }

let isConnected = false

export const createMcpServer = async () => {
  if (isConnected) return
  isConnected = true

  registerNavigateTool(server as unknown as WebMcpServer)

  // 注册各业务模块工具，直接使用带路由能力的 server
  registerInventoryTools(server)

  await rawServer.connect(serverTransport)
}
