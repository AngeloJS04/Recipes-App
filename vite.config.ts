import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv';

// dotenv.config();
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],

    // Access env vars in your code as process.env.VITE_APP_*:
    // console.log(process.env.VITE_APP_SERVER_API_URL);
    // To access env vars here use process.env.TEST_VAR
  });
}