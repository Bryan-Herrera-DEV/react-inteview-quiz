import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };
  return defineConfig({
    plugins: [react(
		{
			include: [/\.tsx?$/, /\.jsx?$/],
		}
	)],
    server: {
      port: Number(process.env.VITE_PORT) || 3001,
    },
    mode: process.env.VITE_NODE_ENV || 'development',
    build: {
      outDir: 'build',
      minify: true,
    },
    resolve: {
			alias: [
				{
					find: '@',
					replacement: path.resolve(__dirname, 'src'),
				},
      ]
    },
  });
  
};
