# soft-ai-notes 프로젝트 규칙

## 프로젝트 개요
VitePress 기반 정적 사이트. AI 활용 기록을 음슴체로 담담히 남기는 개인 노트 사이트.
GitHub push → Vercel 자동 배포.

## 글쓰기 규칙
- 모든 글은 **음슴체**로 작성 (예: "~함", "~됨", "~있음")
- 가르치는 톤 금지. 내가 겪은 걸 담담히 기록하는 스타일
- 잘난척 금지. 터미널 버전이 앱보다 낫다는 식의 우월감 표현 금지. 겸손하게 소개하는 톤 유지
- 불필요한 수식어, 군더더기 문장 넣지 않음

## 파일 구조
- 콘텐츠: `docs/` 하위 `.md` 파일
- 사이트 설정(메뉴, 사이드바): `docs/.vitepress/config.mts`
- 새 글 추가 시 `config.mts` sidebar/nav도 함께 업데이트

## 배포
- `git status` 확인 → `git add` → `git commit` → `git push`
- push하면 Vercel이 자동 빌드 및 배포
- URL: soft-ai-notes.vercel.app
