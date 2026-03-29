# Project Structure Rules

새로운 파일을 추가할 때는 아래 디렉토리 룰을 따른다.

## Directory Structure

```
src/
  components/           # 재사용 UI 컴포넌트 (카테고리별 하위 폴더)
  pages/                # 페이지 레벨 컴포넌트
  common/               # 공통 유틸 컴포넌트 (ui/, media/)
  guide/                # 컴포넌트 생성 가이드 (image-generation/ 등)
  templates/            # 다수 컴포넌트 조합 템플릿
  sections/             # 페이지 내 주요 섹션
  hooks/                # 커스텀 React 훅
  utils/                # 유틸리티 함수
  styles/               # 전역 스타일, 테마
  assets/               # 이미지, 폰트, 비디오 등 정적 자원
  data/                 # 콘텐츠 데이터
stories/                # 스토리북 스토리 전용
scripts/                # 유틸리티 스크립트
.claude/skills/         # Claude Code 스킬
.storybook/             # Storybook 설정
```

## 파일 위치 규칙
- `.stories.jsx`는 해당 컴포넌트와 같은 폴더에 위치
- 컴포넌트 목록 및 Storybook 카테고리 규칙은 `component-create` / `storybook` 스킬 참조
