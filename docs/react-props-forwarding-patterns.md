# React Nested Component Props 전달 패턴

래퍼 컴포넌트가 내부 컴포넌트의 props를 그대로 전달할 때 사용하는 패턴들입니다.

---

## 1. Rest/Spread Props 패턴

가장 일반적이고 간단한 방법입니다.

### 코드 예시

```jsx
function CustomCard({
  // CustomCard 전용 props
  layout,
  mediaRatio,
  // 나머지는 CardContainer로 전달
  ...containerProps
}) {
  return (
    <CardContainer {...containerProps}>
      {/* 내용 */}
    </CardContainer>
  );
}
```

### 사용법

```jsx
<CustomCard
  layout="vertical"           // CustomCard가 사용
  mediaRatio="16/9"           // CustomCard가 사용
  variant="elevation"         // CardContainer로 전달
  padding="lg"                // CardContainer로 전달
  isInteractive               // CardContainer로 전달
/>
```

### 장점

- 간단하고 직관적
- CardContainer에 새 props가 추가되면 자동으로 전달됨
- 코드량이 적음

### 단점

- 어떤 props가 어디로 가는지 명시적이지 않음
- IDE 자동완성이 불완전할 수 있음

---

## 2. Explicit Props 그룹핑 패턴

내부 컴포넌트의 props를 별도 객체로 묶어서 받습니다.

### 코드 예시

```jsx
function CustomCard({
  layout,
  mediaRatio,
  containerProps,  // CardContainer props를 객체로
  children
}) {
  return (
    <CardContainer {...containerProps}>
      {/* 내용 */}
    </CardContainer>
  );
}
```

### 사용법

```jsx
<CustomCard
  layout="vertical"
  mediaRatio="16/9"
  containerProps={{
    variant: 'elevation',
    padding: 'lg',
    isSelected: true
  }}
/>
```

### 장점

- props 소속이 명확함
- 타입 정의가 쉬움

### 단점

- 사용할 때 중첩 객체를 써야 해서 번거로움
- 코드가 장황해짐

---

## 3. MUI Slots/SlotProps 패턴

MUI v6에서 사용하는 공식 패턴입니다. 내부 요소(slot)별로 props를 전달합니다.

### 코드 예시

```jsx
function CustomCard({
  slots = {},
  slotProps = {},
  children,
  ...props
}) {
  const RootSlot = slots.root || CardContainer;
  const MediaSlot = slots.media || 'img';

  return (
    <RootSlot {...slotProps.root} {...props}>
      <MediaSlot {...slotProps.media} />
      {children}
    </RootSlot>
  );
}
```

### 사용법

```jsx
<CustomCard
  slotProps={{
    root: { variant: 'elevation', isSelected: true },
    media: { loading: 'lazy' }
  }}
/>
```

### 장점

- MUI와 일관된 API
- 내부 요소별로 세밀한 제어 가능
- 확장성이 좋음

### 단점

- 구조가 복잡함
- 학습 곡선이 있음

---

## 4. Polymorphic as Prop 패턴

렌더링할 컴포넌트 자체를 props로 받습니다.

### 코드 예시

```jsx
function CustomCard({
  as: Component = CardContainer,
  ...props
}) {
  return <Component {...props} />;
}
```

### 사용법

```jsx
// 기본 사용
<CustomCard variant="elevation" />

// 다른 컴포넌트로 교체
<CustomCard as={Paper} elevation={3} />
<CustomCard as="div" className="my-card" />
```

### 장점

- 루트 컴포넌트를 완전히 교체 가능
- 매우 유연함

### 단점

- TypeScript 타입 정의가 복잡함
- 어떤 props를 쓸 수 있는지 예측하기 어려움

---

## 5. Radix asChild 패턴

자식 컴포넌트에 props를 병합하는 합성 패턴입니다.

### 코드 예시

```jsx
import { cloneElement } from 'react';

function CustomCard({ asChild, children, ...props }) {
  if (asChild) {
    // 자식에게 props를 병합
    return cloneElement(children, props);
  }
  return <CardContainer {...props}>{children}</CardContainer>;
}
```

### 사용법

```jsx
// 기본 사용
<CustomCard variant="elevation">
  내용
</CustomCard>

// asChild로 자식에게 병합
<CustomCard asChild variant="elevation">
  <motion.div animate={{ scale: 1 }}>
    내용
  </motion.div>
</CustomCard>
```

### 장점

- 완전한 컴포넌트 합성
- 애니메이션 라이브러리와 연동 쉬움

### 단점

- 구현이 복잡함
- cloneElement 사용으로 성능 이슈 가능

---

## 현재 상황에 권장: Rest/Spread 패턴

CustomCard -> CardContainer 관계에서는 1번 패턴이 가장 적합합니다.

### 적용 예시

```jsx
const CustomCard = forwardRef(function CustomCard({
  // === CustomCard 전용 props ===
  layout = 'vertical',
  mediaPosition = 'start',
  mediaRatio = '16/9',
  mediaSrc,
  mediaAlt = '',
  mediaSlot,
  overlaySlot,
  contentPadding = 'md',
  contentAlign = 'start',
  children,

  // === CardContainer로 전달될 props ===
  // variant, elevation, isInteractive, isSelected, onClick, sx 등
  ...containerProps
}, ref) {

  return (
    <CardContainer
      ref={ref}
      padding="none"      // 콘텐츠 영역에서 별도 관리
      {...containerProps} // 나머지 전부 전달
    >
      {renderMedia()}
      {children && (
        <Box sx={getContentStyles()}>
          {children}
        </Box>
      )}
    </CardContainer>
  );
});
```

### 사용 예시

```jsx
// CardContainer의 모든 props 사용 가능
<CustomCard
  // CustomCard props
  layout="horizontal"
  mediaSrc="/image.jpg"
  mediaRatio="4/3"
  contentPadding="lg"

  // CardContainer props (자동 전달)
  variant="elevation"
  elevation={4}
  isInteractive
  isSelected
  onClick={() => console.log('clicked')}
  sx={{ maxWidth: 400 }}
>
  <Typography variant="h6">제목</Typography>
  <Typography>설명</Typography>
</CustomCard>
```

---

## 참고 자료

- [React 공식 문서 - Passing Props](https://react.dev/learn/passing-props-to-a-component)
- [MUI Composition Guide](https://mui.com/material-ui/guides/composition/)
- [MUI Slots and SlotProps](https://mui.com/material-ui/customization/overriding-component-structure/)
