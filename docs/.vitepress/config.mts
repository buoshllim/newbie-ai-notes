import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '문과생의 AI 활용 메모장',
  description: '문과생이 직접 써보고 기록한 AI 도구 활용 노트',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Claude', link: '/claude/beginner' },
      { text: 'Copilot', link: '/copilot/' },
    ],
    sidebar: {
      '/claude/': [
        {
          text: 'Claude',
          items: [
            { text: 'Claude Code 초기 셋팅', link: '/claude/beginner' },
          ]
        }
      ],
      '/copilot/': [
        {
          text: 'Microsoft Copilot',
          items: [
            { text: '준비 중', link: '/copilot/' },
          ]
        }
      ],
    },
    socialLinks: [],
    footer: {
      message: '문과생의 AI 활용 메모장'
    }
  }
})
