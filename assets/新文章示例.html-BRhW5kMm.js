import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as p,b as n,e as d,f as a,a as c,w as r,r as t,o}from"./app-CfwVV_A4.js";const v={};function m(u,s){const e=t("RouteLink");return o(),l("div",null,[p(" 这里是 Markdown 内容 "),s[2]||(s[2]=n("h1",{id:"新文章模板",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#新文章模板"},[n("span",null,"新文章模板")])],-1)),n("p",null,[s[1]||(s[1]=a("这篇文章主要是给新文章留个模板，参考 ")),c(e,{to:"/demo/page.html"},{default:r(()=>s[0]||(s[0]=[a("页面配置")])),_:1,__:[0]})]),s[3]||(s[3]=d(`<p>每篇文章都要有个摘要，由两个<code>---</code>包裹在内，然后才是正文。不写的话默认会自动生成作者和阅读时间。</p><p><code>title</code> 就是在博客中显示的标题，并不会以md的文件名为标题。<code>title</code> 可以不写，这样就会以正文中markdown格式的一级标题<code>#</code>的内容作为标题。建议直接使用一级标题，反正这个一般必写。</p><p>日常不需要使用太多东西，直接复制以下简单版用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>---</span></span>
<span class="line"><span>date: 1970-01-01</span></span>
<span class="line"><span>category:</span></span>
<span class="line"><span>  - 默认</span></span>
<span class="line"><span>tag:</span></span>
<span class="line"><span>  - 默认</span></span>
<span class="line"><span>---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是比较全的，还需要什么再从这里复制。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>---</span></span>
<span class="line"><span># 这是文章的标题</span></span>
<span class="line"><span>title: 页面配置</span></span>
<span class="line"><span># 你可以自定义封面图片</span></span>
<span class="line"><span>cover: /assets/images/cover1.jpg</span></span>
<span class="line"><span># 这是页面的图标</span></span>
<span class="line"><span>icon: file</span></span>
<span class="line"><span># 这是侧边栏的顺序</span></span>
<span class="line"><span>order: 3</span></span>
<span class="line"><span># 设置作者</span></span>
<span class="line"><span>author: Ms.Hope</span></span>
<span class="line"><span># 设置写作时间</span></span>
<span class="line"><span>date: 2020-01-01</span></span>
<span class="line"><span># 一个页面可以有多个分类</span></span>
<span class="line"><span>category:</span></span>
<span class="line"><span>  - 使用指南</span></span>
<span class="line"><span># 一个页面可以有多个标签</span></span>
<span class="line"><span>tag:</span></span>
<span class="line"><span>  - 页面配置</span></span>
<span class="line"><span>  - 使用指南</span></span>
<span class="line"><span># 此页面会在文章列表置顶</span></span>
<span class="line"><span>sticky: true</span></span>
<span class="line"><span># 此页面会出现在星标文章中</span></span>
<span class="line"><span>star: true</span></span>
<span class="line"><span># 你可以自定义页脚</span></span>
<span class="line"><span>footer: 这是测试显示的页脚</span></span>
<span class="line"><span># 你可以自定义版权信息</span></span>
<span class="line"><span>copyright: 无版权</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这里才是正文</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6))])}const g=i(v,[["render",m]]),k=JSON.parse('{"path":"/demo/%E6%96%B0%E6%96%87%E7%AB%A0%E7%A4%BA%E4%BE%8B.html","title":"新文章模板","lang":"zh-CN","frontmatter":{"title":"新文章模板","description":"用于提供新文章模板","icon":"pen-to-square","date":"2025-05-13T00:00:00.000Z","order":1,"category":["使用指南","默认"],"tag":["默认"],"star":true},"git":{"createdTime":1747382706000,"updatedTime":1747418261000,"contributors":[{"name":"lyc","username":"lyc","email":"yuncong1@qq.com","commits":2,"url":"https://github.com/lyc"}]},"readingTime":{"minutes":1.3,"words":391},"filePathRelative":"demo/新文章示例.md","excerpt":"<!-- 这里是 Markdown 内容 -->\\n<h1>新文章模板</h1>\\n<p>这篇文章主要是给新文章留个模板，参考 <a href=\\"/demo/page.html\\" target=\\"_blank\\">页面配置</a></p>\\n<p>每篇文章都要有个摘要，由两个<code>---</code>包裹在内，然后才是正文。不写的话默认会自动生成作者和阅读时间。</p>\\n<p><code>title</code> 就是在博客中显示的标题，并不会以md的文件名为标题。<code>title</code> 可以不写，这样就会以正文中markdown格式的一级标题<code>#</code>的内容作为标题。建议直接使用一级标题，反正这个一般必写。</p>"}');export{g as comp,k as data};
