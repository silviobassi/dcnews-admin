import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "window",
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: "" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        /*modifyVars: {
          "primary-color": "#1DA57A",
          "heading-color": "#f00",
        },*/
        javascriptEnabled: true,
      },
    },
  },
});
