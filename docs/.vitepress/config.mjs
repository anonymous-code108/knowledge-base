import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "小爱的知识库",
  description: "Personal knowledge base powered by 小爱同学",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '技术笔记', link: '/knowledge/tech/' },
      { text: '工作待办', link: '/tasks/active' },
      { text: '会议记录', link: '/knowledge/meetings/' },
      { text: '灵感想法', link: '/knowledge/ideas/' }
    ],
    sidebar: [
      {
        text: '知识库',
        items: [
          { text: '技术笔记', link: '/knowledge/tech/' },
          { text: '工作笔记', link: '/knowledge/work/' },
          { text: '生活笔记', link: '/knowledge/life/' },
          { text: '会议记录', link: '/knowledge/meetings/' },
          { text: '灵感想法', link: '/knowledge/ideas/' },
          { text: '待办事项', link: '/tasks/active' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anonymous-code108/knowledge-base' }
    ]
  }
})
