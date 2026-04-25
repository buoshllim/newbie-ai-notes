# soft-ai-notes 프로젝트 규칙

## 프로젝트 개요
VitePress 기반 정적 사이트. AI 활용 기록을 음슴체로 담담히 남기는 개인 노트 사이트.
GitHub push → Vercel 자동 배포.

## 글쓰기 규칙
- 모든 글은 **음슴체**로 작성 (예: "~함", "~됨", "~있음")
- 내가 겪은 담담히 기록하는 스타일
- 특정 도구에 대해 우월감을 나타내는 표현은 금지.
- 불필요한 수식어, 군더더기 문장은 넣지 않음.
- 겸손하게 소개하는 톤 유지.
- 뇌피셜은 뇌피셜이라고 명시.

## 파일 구조
- 콘텐츠: `docs/` 하위 `.md` 파일
- 사이트 설정(메뉴, 사이드바): `docs/.vitepress/config.mts`
- 새 글 추가 시 `config.mts` sidebar/nav도 함께 업데이트

## 배포
- `git status` 확인 → `git add` → `git commit` → `git push`
- push하면 Vercel이 자동 빌드 및 배포
- URL: soft-ai-notes.vercel.app
