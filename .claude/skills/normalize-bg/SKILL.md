---
name: normalize-bg
description: 제품 이미지 배경색을 페이지 배경과 일치시키는 스킬. Day(#E8E5E1), Night(#12100E) 모드 지원. 전체/개별/병렬 처리 가능.
user-invocable: true
---

# 제품 이미지 배경 노멀라이저

제품 이미지의 배경색을 페이지 배경색과 정확히 일치시킨다.

## 실행 방법

이 스킬이 호출되면 아래 순서로 실행한다:

### 1. 사용자 의도 파악

인자(args)를 파싱하여 옵션을 결정한다:

| 인자 예시 | 의미 |
|----------|------|
| (없음) | Day + Night 전체, 병렬 처리 |
| `day` | Day 이미지만 |
| `night` | Night 이미지만 |
| `night 1,2,3` | Night 모드, 특정 ID만 |
| `day 5 --threshold 40` | Day 모드, ID 5, 임계값 40 |
| `dry` 또는 `dry-run` | 미리보기만 (저장 안 함) |

### 2. 스크립트 실행

`scripts/normalize-product-bg.mjs` 스크립트를 Bash로 실행한다.

**기본 (Day + Night 전체 병렬 처리):**
```bash
# Day와 Night를 병렬로 동시 실행
node scripts/normalize-product-bg.mjs --parallel
node scripts/normalize-product-bg.mjs --mode night --parallel
```

**모드 지정:**
```bash
node scripts/normalize-product-bg.mjs --mode <day|night> --parallel
```

**특정 ID:**
```bash
node scripts/normalize-product-bg.mjs --mode <day|night> --ids <id,id,...> --parallel
```

**임계값 조정:**
```bash
node scripts/normalize-product-bg.mjs --mode <day|night> --threshold <값> --parallel
```

**Dry-run:**
```bash
node scripts/normalize-product-bg.mjs --mode <day|night> --dry-run --parallel
```

### 3. 결과 확인

- 처리 완료 후, 변경된 이미지 중 1~2개를 Read 도구로 열어 사용자에게 시각적으로 확인시킨다
- 스킵된 이미지 수와 처리된 이미지 수를 요약 보고한다

### 4. 주의사항

- Day/Night 모두 처리할 때는 두 명령을 **Bash 도구 2개로 병렬 호출**한다
- `--parallel` 플래그는 항상 포함한다 (이미지 간 병렬 처리)
- 처음 실행하는 사용자에게는 `--dry-run`을 먼저 제안한다

## 배경색 참조

| 모드 | 타겟 배경색 | 기본 Threshold |
|------|-----------|---------------|
| Day (Light) | `#E8E5E1` | 35 |
| Night (Dark) | `#12100E` | 25 |
