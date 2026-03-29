# Lumenstate Visual Direction

> "빛은 공간의 상태다."

## Visual Concept

조명 제품의 선과 면으로 구성된 기하학적 형태를 UI에 계승.
곡선 세리프 서체로 빛의 부드러운 확산을 표현.
라인 그리드와 충분한 여백으로 공간의 품격을 유지.

---

## Color

4색만 사용. 그래디언트/글로우/블러 금지.

| 색상명 | Hex | 용도 |
|--------|-----|------|
| Wall Tint White | `#F5F2EE` | 라이트 배경, 카드 배경 |
| 3800K White | `#F2E9DA` | 다크 모드 텍스트 |
| Warm Black | `#12100E` | 다크 배경, 라이트 모드 텍스트 |
| 3800K Accent | `#FFC66E` | 액센트 (CTA, 링크, 포커스) |

### MUI 토큰 매핑

| 모드 | primary.main | secondary.main |
|------|-------------|----------------|
| Light | `#12100E` (Warm Black) | `#FFC66E` (Accent) |
| Dark | `#F5F2EE` (Wall Tint White) | `#FFC66E` (Accent) |

### 시간대별 배경색 전환

| 시간 | 배경색 | 상태 |
|------|--------|------|
| 12:00pm | `#F5F2EE` | 가장 밝음 |
| 4:00pm | `#F5F2EE` | 밝음 유지 |
| 8:00pm | `#12100E` | 어두움 전환 |
| 12:00am | `#12100E` | 가장 어두움 |

4pm→8pm 구간에서 밝은색→어두운색으로 보간.

---

## Typography

| 용도 | 폰트 | 이유 |
|------|------|------|
| Display | Cormorant Garamond | 세리프 곡선이 빛의 확산 연상, 기하학적 우아함 |
| Body | Pretendard Variable | 한글/영문 혼용 최적화, 가변 폰트 지원 |

---

## Icon

**Library:** `lucide-react`
- 1.5px 스트로크로 브랜드 라인 스타일과 일치
- 경량, 트리쉐이킹 지원
