# Components

---

## Part 1: Design System (범용)

재사용 가능한 기본 UI 컴포넌트. 브랜드 독립적.

### Context

- CartContext: 장바구니 상태 관리. useCart 훅으로 접근 (items, addItem, removeItem, updateQuantity)

### Layout

- Container: 반응형 페이지 컨테이너. PC는 maxWidth 고정, 모바일은 100%
- SplitScreen: 좌우 분할 레이아웃. ratio, stackAt, stackOrder 옵션 지원
- HeroStack: 수직 레이아웃. Hero(수직 중앙 정렬) + Footer(하단 고정). flex-grow 패턴
- LineGrid: 그리드/스택 아이템 사이에 1px 라인을 자동 삽입하는 레이아웃

### Shared

- QuantitySelector: 수량 선택기. - / + 버튼과 숫자 표시
- Breadcrumb: 네비게이션 경로 표시 (Lighting > Chandeliers)
- SelectField: 드롭다운 선택 필드. 라벨 + 선택값 + 화살표
- AccordionMenu: 아코디언 메뉴. Overview, Description 등 탭 형태 네비게이션
- ArrowLink: 화살표 링크. → 아이콘 + 텍스트 (Add Sidemark, Download a Tear Sheet)
- UnderlineInput: 밑줄만 있는 텍스트 인풋. readOnly 지원, size(small/medium) 옵션
- UnderlineSelect: 밑줄만 있는 셀렉트. MUI Select 기반, size(small/medium) 옵션

### Product

- ProductGallery: 제품 이미지 갤러리. 메인 이미지 + 페이지네이션 인디케이터
- ProductOptions: 제품 옵션 선택 영역. Glass Finish, Hardware, OAH 등 드롭다운 그룹
- ProductMeta: 제품 메타 정보. Item Number, Lead Time, Est. Ship Date
- ProductActions: 제품 액션 영역. 수량 선택 + 가격 + Add to Cart 버튼
- ProductTabs: 제품 정보 탭. Overview, Description, Tech Specs, Explore Collection 등
- ProductFilter: 제품 타입 필터. All/Ceiling/Stand/Wall/Desk

### Cart

- CartContext: 장바구니 상태 관리. useCart 훅 (items, addItem, removeItem, updateQuantity, subtotal, totalItems)
- CartDrawer: 장바구니 슬라이드 패널. MUI Drawer 기반, 오른쪽에서 슬라이드
- CartHeader: 장바구니 헤더. "Cart" 타이틀 + Close 버튼
- CartItem: 장바구니 아이템. 썸네일 + 제품명 + 옵션(3줄) + 가격 + 수량 + Remove
- CartSummary: 장바구니 요약. Subtotal 금액
- CartCheckoutButton: 체크아웃 버튼. 전체 너비 Checkout 버튼

### Checkout

- CheckoutLayout: 체크아웃 페이지 레이아웃. 좌: 폼, 우: 주문 요약
- CheckoutHeader: 체크아웃 헤더. 로고 + 단계 표시 (Cart > Information > Shipping > Payment)
- CheckoutSteps: 체크아웃 단계 인디케이터. 현재 단계 하이라이트
- ExpressCheckout: 빠른 결제 옵션. Shop Pay, Google Pay 버튼
- ContactForm: 연락처 폼. Email 입력 + 뉴스레터 체크박스 + Sign in 링크
- ShippingForm: 배송지 폼. Country, Name, Company, Address, City, State, ZIP, Phone
- OrderSummary: 주문 요약 패널. 상품 목록 + 할인코드 + Subtotal + Shipping + Total
- OrderItem: 주문 요약 아이템. 썸네일(수량 뱃지) + 제품명 + 옵션 + 가격
- DiscountInput: 할인코드 입력. 입력 필드 + Apply 버튼
- CheckoutFooter: 체크아웃 푸터. Return to cart 링크 + Continue 버튼
- PolicyLinks: 정책 링크. Refund policy, Privacy policy, Terms of service

### Sections

- ProductDetailSection: 제품 상세 섹션. ProductDetailTemplate + CartDrawer 조합. 장바구니 추가 시 자동 열기 지원

### Templates

- ProductDetailTemplate: 상품 상세 페이지 템플릿. SplitScreen + HeroStack + ProductImageViewer + ProductOptions + ProductActions
- CartDrawerTemplate: 장바구니 슬라이드 템플릿. CartHeader + CartItem 리스트 + CartSummary + CartCheckoutButton
- CheckoutTemplate: 체크아웃 페이지 템플릿. CheckoutHeader + CheckoutSteps + ExpressCheckout + ContactForm + ShippingForm + OrderSummary

### Navigation

- GNB: 글로벌 네비게이션 바. 로고 + Cart 아이콘 (뱃지로 아이템 수 표시)

### Pages

- ProductDetailPage: 상품 상세 페이지. PageContainer + ProductDetailSection. GNB는 라우터에서 처리
- CheckoutPage: 체크아웃 페이지. CheckoutTemplate 사용

---

## Part 2: Lumenstate Brand (브랜드 전용)

환경 반응형 조명 브랜드 Lumenstate 전용 컴포넌트. 타임라인 기반 조도/색온도 시스템.

### Context

- TimelineContext: 시간대 값(0-1) 전역 상태 관리. useTimeline 훅으로 접근

### Layout

- Header: 고정 헤더. 로고, 실시간 시계, 스크롤 시 미니멀 타임라인 표시

### Shared

- StateLabel: 조도(lux)·색온도(K) 표시 라벨
- TimelineSlider: 4단계 시간대 슬라이더 (12pm, 4pm, 8pm, 12am)
- MinimalTimelineSlider: 헤더용 간소화 슬라이더. 아이콘만 표시
- ScrollVideo: 스크롤 위치 기반 비디오 프레임 시킹. 시간/타임라인 오버레이 옵션

### Hero

- HeroSection: 히어로 영역. LineGrid로 비디오 2열 배치, HeroMessage 오버레이
- HeroMessage: 브랜드 헤드라인 + 서브타이틀 텍스트

### Product

- ProductCard: 제품 카드. 썸네일(낮/밤 크로스페이드), 제품명, 타입 태그, 상태 라벨
- ProductShowcase: 제품 섹션. 타임라인 슬라이더 + 필터 + 제품 그리드

### Section

- BrandValue: 브랜드 가치 제안. 3컬럼 피처 그리드 (아이콘 + 타이틀 + 설명)
