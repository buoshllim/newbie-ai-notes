# Claude Code 초보자 셋팅 가이드

> 처음 시작하는 분들을 위한 단계별 가이드입니다.

---

## 시작 전 확인: 유료 플랜이 있어야 해요

Claude Code는 **무료 플랜에서는 사용 불가**합니다.

| 플랜 | 월 비용 | 비고 |
|---|---|---|
| Claude Pro | $20 | 일반 개인 사용자에게 적합 |
| Claude Max | $100~200 | 헤비 유저, 높은 사용량 필요 시 |
| Anthropic Console (API) | 사용량 과금 | API 크레딧 충전 방식 |

---

## 1단계: 설치

> ✅ **Node.js, npm 설치 불필요** — Native Installer 사용

### macOS / Linux
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Windows (PowerShell)
```powershell
irm https://claude.ai/install.ps1 | iex
```
> ⚠️ CMD가 아닌 **PowerShell**에서 실행해야 합니다

### macOS (Homebrew 선호 시)
```bash
brew install claude-code
```
> ⚠️ Homebrew는 자동 업데이트가 없으므로 주기적으로 수동 업데이트 필요
> ```bash
> brew upgrade claude-code
> ```

### 설치 확인
```bash
claude --version
```
버전 번호가 출력되면 설치 성공!

---

## 2단계: 로그인 (최초 1회)

```bash
claude
```
처음 실행하면 브라우저가 자동으로 열리며 Anthropic 계정 로그인 화면이 나타납니다.  
로그인 완료 후 터미널로 돌아오면 바로 사용 가능합니다.

---

## 3단계: CLAUDE.md 만들기

Claude에게 "나는 이런 사람이야, 이 프로젝트는 이런 거야"를 알려주는 파일입니다.  
이 파일이 없으면 매번 컨텍스트를 다시 설명해야 해서 비효율적입니다.

### 글로벌 설정 (모든 프로젝트에 적용)
```bash
mkdir -p ~/.claude
nano ~/.claude/CLAUDE.md
```

작성 예시:
```markdown
## 나에 대해
- 한국어로 설명해줘
- 코드와 명령어는 영어로 유지

## 선호 스타일
- 설명은 간결하게
- 모르는 용어는 쉽게 풀어서 설명해줘
```

### 프로젝트별 설정 (해당 폴더에만 적용)
```bash
# 프로젝트 폴더 안에서
nano CLAUDE.md
```

---

## 4단계: 기본 명령어

Claude Code 세션 안에서 사용하는 명령어입니다.

| 명령어 | 기능 |
|---|---|
| `/help` | 전체 명령어 목록 보기 |
| `/clear` | 현재 대화(컨텍스트) 초기화 |
| `/cost` | 현재 세션 사용 비용 확인 |
| `/compact` | 컨텍스트 압축 (대화가 길어질 때) |
| `/exit` | 세션 종료 |

---

## 5단계: 비용 최적화 — `/model opusplan`

Claude Code 안에서 아래 명령어를 입력하면  
Opus가 필요한 복잡한 작업만 Opus를 쓰고, 나머지는 자동으로 Sonnet으로 처리해 **비용을 아낄 수** 있습니다.

```
/model opusplan
```

---

## 6단계: 상태 모니터링 — statusline

터미널 하단에 현재 모델, 컨텍스트 사용률, 플랜 한도 사용률을 실시간으로 표시합니다.  
아래 프롬프트를 Claude Code 터미널에 **그대로 붙여넣으면** 자동 설정됩니다.

```
statusline을 설정해줘. 표시 항목:
- 모델명
- context:N% (현재 대화 컨텍스트 창 사용률)
- 5h:N% 7d:N% (플랜 사용 한도)
```

설정 후 하단 상태바 예시:

```
Claude Sonnet 4.6 | context:42% | 5h:18% 7d:34%
```

| 항목 | 의미 |
|---|---|
| 모델명 | 현재 사용 중인 Claude 모델 |
| `context:N%` | 현재 대화의 컨텍스트 창 사용률 — 높아지면 `/compact` 실행 권장 |
| `5h:N%` | 최근 5시간 플랜 사용 한도 소진율 |
| `7d:N%` | 최근 7일 플랜 사용 한도 소진율 |

---

## 보안 주의사항

### `.gitignore`에 추가하기
```
.claude/
```
API 키나 세션 정보가 실수로 GitHub에 올라가는 걸 방지합니다.

### API 키를 사용하는 경우 (Console 계정)
```bash
# ~/.zshrc 또는 ~/.bashrc에 추가
export ANTHROPIC_API_KEY="sk-ant-여기에키입력"
```

---

## 요약: 이 순서로 진행하세요

```
1단계  설치        curl 또는 PowerShell 한 줄
2단계  로그인      claude 실행 후 브라우저 인증
3단계  CLAUDE.md  Claude에게 나를 소개하는 파일 작성
4단계  기본 명령어  /help, /clear, /cost, /compact 익히기
5단계  비용 최적화  /model opusplan 설정
6단계  상태 확인   statusline 설정
```

---

## 이후 심화 (나중에 익혀도 됩니다)

- **플러그인** — oh-my-claudecode, gptaku_plugins 등
- **멀티 에이전트** — claw-empire, agent-browser
- **MCP 연동** — GitHub, Notion, Slack 등 외부 서비스 연결
- **tmux 연동** — 백그라운드 세션 관리
