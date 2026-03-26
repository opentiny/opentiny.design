import {
  WebMcpServer,
  WebMcpClient,
  createMessageChannelPairTransport,
  withPageTools,
  registerNavigateTool
} from '@opentiny/next-sdk'
import registerInventoryTools from './inventory/tools'

const rawServer = new WebMcpServer()
const client = new WebMcpClient()
const [serverTransport, clientTransport] = createMessageChannelPairTransport()

// 用 withPageTools 包装后，registerTool 第三个参数支持路由配置对象
export const server = withPageTools(rawServer)

const SESSION_ID_KEY = 'web-agent-session-id'

const cachedSessionId: string | undefined = localStorage.getItem(SESSION_ID_KEY) ?? undefined

export const useWebAgentServer = async () => {
  registerNavigateTool(server as unknown as WebMcpServer)

  // 注册各业务模块工具，直接使用带路由能力的 server
  registerInventoryTools(server)

  await rawServer.connect(serverTransport)
  await client.connect(clientTransport)

  const { sessionId } = await client.connect({
    sessionId: cachedSessionId,
    agent: true,
    url: 'https://agent.opentiny.design/api/v1/webmcp-trial/mcp'
  })

  // 持久化到 localStorage，刷新页面后可复用
  if (sessionId) {
    localStorage.setItem(SESSION_ID_KEY, sessionId)
  }
  return { sessionId }
}
