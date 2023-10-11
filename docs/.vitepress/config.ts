import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

export default defineConfig({
  title: '海浪Dev',
  ignoreDeadLinks: true,
  themeConfig: {
    // logo: '/logo.png', //设置标题旁边的Logo
    siteTitle: '海浪|SeaWave',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gumingWu/vitepress-fun' },
      { icon: 'twitter', link: 'https://github.com/gumingWu/vitepress-fun' },
      { icon: 'youtube', link: 'https://github.com/gumingWu/vitepress-fun' },
    ],
    nav: [
      {
        text: '编程笔记',
        items: [
          { text: 'C', link: '/C语言/1.基础知识.md' },
          { text: 'Java', link: '/Java/01-HelloWorld.md' },
          { text: 'Python', link: '/Python/pip使用说明.md' },
          { text: '正则表达式', link: '/正则表达式/正则表达式教程.md' },
          
        ],
      },
      {
        text: 'web前端',
        items: [
          {
            items:[
              { text: 'HTML', link: '/web前端/1.HTML/1、语义结构.md' },
              { text: 'CSS', link: '/web前端/2.CSS/1、CSS学习笔记/1、CSS基础知识.md' },
              { text: 'JavaScript', link: '/web前端/3.JavaScript/1.基础知识/基础知识点.md' },
            ]
          },
          { text: 'Node.js', link: '/Node.js/1. NVM使用教程.md' },
        ],
      },
      { text: 'Stm32', link: '/stm32/00-学习资源.md' },
      { text: '软技能', link: '/开发环境/1.VScode配置指南.md' },
      { text: '个人介绍', link: '/关于我/关于.md' },

    ],
  },
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        deletePrefix: /\d+\./,
        collapsed: true,
        ignoreList: ['images'],
        // 按照文件名排序
        beforeCreateSideBarItems(data) {
          const regex = /^\d+/
          return data.sort((a, b) => {
            const aOrder = a.match(regex)?.[0]
            const bOrder = b.match(regex)?.[0]
            if (!aOrder || !bOrder) {
              return 0
            }
            return Number(aOrder) - Number(bOrder)
          })
        },
      }),
    ],
  },
})
