import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// manualChunks only applies to the client build. In the SSR build React and
// friends are external, so they cannot be forced into a manual chunk.
export default defineConfig(({ ssrBuild }) => ({
  plugins: [react()],
  // react-helmet-async is CommonJS; bundle it into the SSR output so Node's
  // ESM loader does not choke on its named exports during prerender.
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  build: {
    rollupOptions: ssrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            },
          },
        },
    chunkSizeWarningLimit: 600,
  },
}))
