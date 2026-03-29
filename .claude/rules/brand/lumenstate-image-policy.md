# Lumenstate Image Policy (요약)

이미지 컴포넌트 작업 시 `component-image` 스킬이 자동 활성화됨.

## 핵심 원칙
- 이미지 원본 비율 유지 (`width:100%; height:auto`) — `object-fit: cover/contain` 금지
- 그리드 높이 맞춤은 CSS가 아니라 이미지 소스 비율로 해결
