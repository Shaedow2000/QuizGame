import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/QuizGame",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        quiz: resolve(__dirname, "quiz.html"),
        complete: resolve(__dirname, "completed.html"),
      },
    },
  },
});
