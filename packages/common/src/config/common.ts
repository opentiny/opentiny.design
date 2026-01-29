export const createIsUnderline = (path) => () => location.pathname.startsWith(path)
export const downloadFile = (filePath:string, fileName:string) => {
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