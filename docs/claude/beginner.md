# Claude Code 처음 설치하고 세팅한 기록

처음엔 그냥 ChatGPT 같은 거겠지 했는데, 터미널에서 돌아가는 AI임. 파일도 읽고, 코드도 짜고, 명령어도 실행함. 코딩 몰라도 꽤 씀.

---

## 유료 플랜 필요함

무료로는 안 됨. 아래 셋 중 하나 있어야 함.

| 플랜 | 월 비용 | 비고 |
|---|---|---|
| Claude Pro | $20 | 일반적으로 이걸로 시작함 |
| Claude Max | $100~200 | 많이 쓸 것 같으면 |
| Anthropic Console (API) | 사용량 과금 | 개발자용 |

---

## 설치

Node.js 같은 거 따로 설치 안 해도 됨.

### macOS / Linux
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Windows (PowerShell)
```powershell
irm https://claude.ai/install.ps1 | iex
```

CMD 말고 PowerShell에서 실행해야 함.

### Homebrew 쓰는 경우 (macOS)
```bash
brew install claude-code
```

자동 업데이트 안 되니까 가끔 수동으로 올려줘야 함.
```bash
brew upgrade claude-code
```

### 설치 확인
```bash
claude --version
```

버전 번호 뜨면 됨.

---

## 로그인

```bash
claude
```

처음 실행하면 브라우저 열림. Anthropic 계정으로 로그인하면 끝. 이후엔 자동 연결됨.

---

## CLAUDE.md — Claude한테 나를 소개하는 파일

이게 없으면 매번 "나 이런 사람이야" 설명해야 함. 한 번 써두면 알아서 읽음.

### 전체 적용 (어느 폴더에서 실행해도)
```bash
mkdir -p ~/.claude
nano ~/.claude/CLAUDE.md
```

```markdown
## 나에 대해
- 한국어로 답해줘
- 코드랑 명령어는 영어 유지

## 스타일
- 짧고 간결하게
- 모르는 용어는 풀어서
```

### 프로젝트별 적용
```bash
nano CLAUDE.md
```

해당 폴더에서만 적용됨.

---

## 자주 쓰는 명령어

세션 안에서 씀.

| 명령어 | 용도 |
|---|---|
| `/help` | 명령어 목록 |
| `/clear` | 대화 초기화 |
| `/cost` | 이번 세션 비용 |
| `/compact` | 대화 길어지면 압축 |
| `/exit` | 종료 |

---

## 비용 아끼는 설정 — `/model opusplan`

복잡한 작업만 Opus 쓰고, 나머지는 Sonnet으로 자동 처리해줌. Pro 플랜이면 세팅해두는 게 나음.

```
/model opusplan
```

---

## 하단 상태바 (statusline)

터미널 맨 아래에 현재 모델, 컨텍스트 사용률, 플랜 한도 보여줌. 아래 프롬프트 그대로 붙여넣으면 설정됨.

```
statusline을 설정해줘. 표시 항목:
- 모델명
- context:N% (현재 대화 컨텍스트 창 사용률)
- 5h:N% 7d:N% (플랜 사용 한도)
```

이렇게 뜸:
```
Claude Sonnet 4.6 | context:42% | 5h:18% 7d:34%
```

| 항목 | 의미 |
|---|---|
| `context:N%` | 현재 대화 맥락이 얼마나 찼는지. 높아지면 `/compact` |
| `5h:N%` | 최근 5시간 플랜 사용량 |
| `7d:N%` | 최근 7일 플랜 사용량 |

---

## 보안

`.gitignore`에 추가해두는 게 좋음. 세션 정보가 GitHub에 올라가는 걸 막음.

```
.claude/
```

API 키 쓰는 경우 `~/.zshrc`에 넣어둠.

```bash
export ANTHROPIC_API_KEY="sk-ant-여기에키입력"
```

---

## 나중에 해볼 것들

- 플러그인 — oh-my-claudecode 등
- MCP 연동 — GitHub, Notion, Slack 연결
- 멀티 에이전트 — claw-empire
- tmux — 백그라운드 세션
