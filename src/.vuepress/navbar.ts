import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "目录",
    link: "/catalog.md",
  },
  {
    text: "使用示例",
    link: "/demo/",
    activeMatch: "^/demo",
  },

  
]);
