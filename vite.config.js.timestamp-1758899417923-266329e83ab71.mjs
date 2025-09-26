// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import vue from "file:///home/project/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import frappeui from "file:///home/project/node_modules/frappe-ui/vite/index.js";
import { VitePWA } from "file:///home/project/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  plugins: [
    frappeui({
      frappeProxy: "http://69.62.114.182:8000",
      lucideIcons: true,
      jinjaBootData: true,
      frappeTypes: {
        input: {}
      },
      buildConfig: {
        indexHtmlPath: "../lms/www/lms.html"
      }
    }),
    vue({
      script: {
        defineModel: true,
        propsDestructure: true
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: true,
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      },
      manifest: false
    })
  ],
  server: {
    host: "0.0.0.0",
    // Accept connections from any network interface
    allowedHosts: ["ps", "fs", "home"]
    // Explicitly allow this host
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "tailwind.config.js": path.resolve(__vite_injected_original_dirname, "tailwind.config.js")
    }
  },
  optimizeDeps: {
    include: [
      "feather-icons",
      "showdown",
      "engine.io-client",
      "tailwind.config.js",
      "interactjs",
      "highlight.js",
      "plyr"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZyYXBwZXVpIGZyb20gJ2ZyYXBwZS11aS92aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRmcmFwcGV1aSh7XG5cdFx0XHRmcmFwcGVQcm94eTogJ2h0dHA6Ly82OS42Mi4xMTQuMTgyOjgwMDAnLFxuXHRcdFx0bHVjaWRlSWNvbnM6IHRydWUsXG5cdFx0XHRqaW5qYUJvb3REYXRhOiB0cnVlLFxuXHRcdFx0ZnJhcHBlVHlwZXM6IHtcblx0XHRcdFx0aW5wdXQ6IHt9LFxuXHRcdFx0fSxcblx0XHRcdGJ1aWxkQ29uZmlnOiB7XG5cdFx0XHRcdGluZGV4SHRtbFBhdGg6ICcuLi9sbXMvd3d3L2xtcy5odG1sJyxcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0dnVlKHtcblx0XHRcdHNjcmlwdDoge1xuXHRcdFx0XHRkZWZpbmVNb2RlbDogdHJ1ZSxcblx0XHRcdFx0cHJvcHNEZXN0cnVjdHVyZTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0Vml0ZVBXQSh7XG5cdFx0XHRyZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcblx0XHRcdGRldk9wdGlvbnM6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR3b3JrYm94OiB7XG5cdFx0XHRcdGNsZWFudXBPdXRkYXRlZENhY2hlczogdHJ1ZSxcblx0XHRcdFx0bWF4aW11bUZpbGVTaXplVG9DYWNoZUluQnl0ZXM6IDUgKiAxMDI0ICogMTAyNCxcblx0XHRcdH0sXG5cdFx0XHRtYW5pZmVzdDogZmFsc2UsXG5cdFx0fSksXG5cdF0sXG5cdHNlcnZlcjoge1xuXHRcdGhvc3Q6ICcwLjAuMC4wJywgLy8gQWNjZXB0IGNvbm5lY3Rpb25zIGZyb20gYW55IG5ldHdvcmsgaW50ZXJmYWNlXG5cdFx0YWxsb3dlZEhvc3RzOiBbJ3BzJywgJ2ZzJywgJ2hvbWUnXSwgLy8gRXhwbGljaXRseSBhbGxvdyB0aGlzIGhvc3Rcblx0fSxcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcblx0XHRcdCd0YWlsd2luZC5jb25maWcuanMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAndGFpbHdpbmQuY29uZmlnLmpzJyksXG5cdFx0fSxcblx0fSxcblx0b3B0aW1pemVEZXBzOiB7XG5cdFx0aW5jbHVkZTogW1xuXHRcdFx0J2ZlYXRoZXItaWNvbnMnLFxuXHRcdFx0J3Nob3dkb3duJyxcblx0XHRcdCdlbmdpbmUuaW8tY2xpZW50Jyxcblx0XHRcdCd0YWlsd2luZC5jb25maWcuanMnLFxuXHRcdFx0J2ludGVyYWN0anMnLFxuXHRcdFx0J2hpZ2hsaWdodC5qcycsXG5cdFx0XHQncGx5cicsXG5cdFx0XSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsZUFBZTtBQUp4QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixTQUFTO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixhQUFhO0FBQUEsUUFDWixPQUFPLENBQUM7QUFBQSxNQUNUO0FBQUEsTUFDQSxhQUFhO0FBQUEsUUFDWixlQUFlO0FBQUEsTUFDaEI7QUFBQSxJQUNELENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNILFFBQVE7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLE1BQ25CO0FBQUEsSUFDRCxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsUUFDWCxTQUFTO0FBQUEsTUFDVjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1IsdUJBQXVCO0FBQUEsUUFDdkIsK0JBQStCLElBQUksT0FBTztBQUFBLE1BQzNDO0FBQUEsTUFDQSxVQUFVO0FBQUEsSUFDWCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFDTixjQUFjLENBQUMsTUFBTSxNQUFNLE1BQU07QUFBQTtBQUFBLEVBQ2xDO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDbEMsc0JBQXNCLEtBQUssUUFBUSxrQ0FBVyxvQkFBb0I7QUFBQSxJQUNuRTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNiLFNBQVM7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
