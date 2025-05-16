import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "目录",
    link: "/catalog.md",
  },
  {
    text: "主要功能",
    link: "/demo/",
    activeMatch: "^/demo",
  },

  
]);
