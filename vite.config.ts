import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { join } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 9527,
    open: true,
  },
  // src替换为@，这样在项目中就可以使用@/components/xxx来代替src/components/xxx
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
})
