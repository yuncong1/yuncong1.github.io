import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/demo/": [
    {
      text: "如何使用",
      icon: "laptop-code",
      link: "",
      collapsible: false,
      expanded: true,
      children: "structure",
    },
  ],
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      expanded: true,
      children: "structure",
    },
    
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      collapsible: true,
      
      children: "structure",
    },
    "intro",
    
  ],
  
});
