# Lumenstate Components

## Context

- TimelineContext: 시간대 값(0-1) 전역 상태 관리. useTimeline 훅으로 접근

## Layout

- Container: 반응형 페이지 컨테이너. PC는 maxWidth 고정, 모바일은 100%
- LineGrid: 그리드/스택 아이템 사이에 1px 라인을 자동 삽입하는 레이아웃
- Header: 고정 헤더. 로고, 실시간 시계, 스크롤 시 미니멀 타임라인 표시

## Shared

- StateLabel: 조도(lux)·색온도(K) 표시 라벨
- TimelineSlider: 4단계 시간대 슬라이더 (12pm, 4pm, 8pm, 12am)
- MinimalTimelineSlider: 헤더용 간소화 슬라이더. 아이콘만 표시
- ScrollVideo: 스크롤 위치 기반 비디오 프레임 시킹. 시간/타임라인 오버레이 옵션

## Hero

- HeroSection: 히어로 영역. LineGrid로 비디오 2열 배치, HeroMessage 오버레이
- HeroMessage: 브랜드 헤드라인 + 서브타이틀 텍스트

## Product

- ProductCard: 제품 카드. 썸네일(낮/밤 크로스페이드), 제품명, 타입 태그, 상태 라벨
- ProductShowcase: 제품 섹션. 타임라인 슬라이더 + 필터 + 제품 그리드
- ProductFilter: 제품 타입 필터. All/Ceiling/Stand/Wall/Desk

## Section

- BrandValue: 브랜드 가치 제안. 3컬럼 피처 그리드 (아이콘 + 타이틀 + 설명)
