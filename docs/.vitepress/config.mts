import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 활용 기록',
  description: 'AI로 이것저것 해보고 남기는 기록',
  lang: 'ko-KR',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Claude', link: '/claude/cc-beginner' },
      { text: '투자', link: '/investment/' },
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
      '/investment/': [
        {
          text: '투자 분석',
          items: [
            { text: '개요', link: '/investment/' },
          ]
        },
        {
          text: '종목별',
          items: [
            { text: '삼성전자 (005930)', link: '/investment/samsung' },
            { text: 'SK하이닉스 (000660)', link: '/investment/skhynix' },
            { text: 'SK스퀘어 (402340)', link: '/investment/sksquare' },
            { text: 'NVIDIA (NVDA)', link: '/investment/nvidia' },
            { text: 'Palantir (PLTR)', link: '/investment/palantir' },
            { text: 'Tesla (TSLA)', link: '/investment/tesla' },
          ]
        },
        {
          text: '일별',
          items: [
            { text: '2026-05-02', link: '/investment/2026-05-02' },
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
      message: '© 2026 Song · Crafted & curated'
    }
  }
})
