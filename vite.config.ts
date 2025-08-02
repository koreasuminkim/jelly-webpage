import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
    base: "/",
    plugins: [
        react(),
        Sitemap({ 
            hostname: "https://teamjelly.co.kr",
            dynamicRoutes: ["/", "/portfolio"]
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    optimizeDeps: {
        exclude: ["lucide-react"],
    },
    server: {
        watch: {
            usePolling: true,
        },
    },
    preview: {
        port: 3000,
    },
});
