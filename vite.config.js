const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: './dist', // 保持輸出目錄為相對根目錄的 dist
    emptyOutDir: true, // 每次構建清空輸出目錄
  },
  server: {
    port: 8080
  }
}