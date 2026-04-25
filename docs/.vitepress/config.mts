import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Claude Code 가이드',
  description: 'Claude Code 한국어 사용 가이드',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '초보자 가이드', link: '/beginner' },
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: '초보자 셋팅 가이드', link: '/beginner' },
        ]
      }
    ],
    socialLinks: [],
    footer: {
      message: 'Claude Code 한국어 커뮤니티'
    }
  }
})
