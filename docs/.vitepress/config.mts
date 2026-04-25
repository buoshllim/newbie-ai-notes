import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 활용 기록',
  description: '코딩 모르는 사람이 AI 쓰면서 남긴 메모들',
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
            { text: 'Claude Code 처음 세팅', link: '/claude/beginner' },
          ]
        }
      ],
      '/copilot/': [
        {
          text: 'Microsoft Copilot',
          items: [
            { text: '정리 중', link: '/copilot/' },
          ]
        }
      ],
    },
    socialLinks: [],
    footer: {
      message: 'AI 활용 기록'
    }
  }
})
