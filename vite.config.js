import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.REACT_APP_GOOGLE_API_KEY': JSON.stringify(env.AIzaSyC85sVCSmoRAJGTMkbNer1t0TokfeM2T0o)
    },
    plugins: [react()],
  }
})