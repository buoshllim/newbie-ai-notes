import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '문과생의 AI 활용 메모장',
  description: '문과생이 직접 써보고 기록한 AI 도구 활용 노트',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Claude Code', link: '/beginner' },
    ],
    sidebar: [
      {
        text: 'Claude Code',
        items: [
          { text: '초보자 셋팅 가이드', link: '/beginner' },
        ]
      }
    ],
    socialLinks: [],
    footer: {
      message: '문과생의 AI 활용 메모장'
    }
  }
})
