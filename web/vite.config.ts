import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { config } from "dotenv";
import * as path from "path";

config({
  path: path.join(__dirname, "..", ".env"),
});

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envVariables = ["API_URL"];

  //добавляет prefix VITE для переменных окружения из массива, что бы vite смог их пропустить и .env выглядил не грязным
  for (const key of envVariables) {
    process.env["VITE_" + key] = process.env[key];
  }

  console.log(process.env.API_URL);

  return defineConfig({
    server: {
      port: parseInt(process.env.WEB_PORT),
      host: "0.0.0.0",

      proxy: {
        "/api": {
          target: process.env.API_URL,
          changeOrigin: true,
          secure: false,
          ws: false,
        },
      },
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
      },
    },

    plugins: [react()],
  });
};
