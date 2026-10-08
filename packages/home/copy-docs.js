import fs from 'fs-extra'

// 按需复制文档，因为部分文档构建会报错
const docList = [
  'changelog',
  'envpreparation-open',
  'faq',
  'form-valid',
  'i18n',
  'import-components',
  'installation',
  'theme',
  'mcp',
  'theme-dark'
]
for (const docName of docList) {
  const from = `./node_modules/@opentiny/vue-docs/demos/pc/webdoc/${docName}.md`
  const to = `./tinydoc-design/guide/zh-CN/${docName}.md`
  // vue-docs 3.29+ 已移除 mcp.md，缺文件时跳过，避免启动失败
  if (!fs.existsSync(from)) {
    console.warn(`[copy-docs] 源文件不存在，已跳过: ${from}`)
    continue
  }
  fs.copySync(from, to)
}
