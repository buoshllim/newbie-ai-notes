import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 활용 기록',
  description: '코딩 모르는 사람이 AI 쓰면서 남긴 메모들',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Claude', link: '/claude/cc-beginner' },
      { text: '기타', link: '/etc/' },
    ],
    sidebar: {
      '/claude/': [
        {
          text: 'Claude',
          items: [
            { text: 'Claude Code 설치 및 초기 세팅', link: '/claude/cc-beginner' },
          ]
        }
      ],
      '/etc/': [
        {
          text: '기타 도구',
          items: [
            { text: '정리 중', link: '/etc/' },
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
