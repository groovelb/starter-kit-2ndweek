# Lumenstate Components

## Context

- TimelineContext: 시간대 값(0-1) 전역 상태 관리. useTimeline 훅으로 접근
- CartContext: 장바구니 상태 관리. useCart 훅으로 접근 (items, addItem, removeItem, updateQuantity)

## Layout

- Container: 반응형 페이지 컨테이너. PC는 maxWidth 고정, 모바일은 100%
- LineGrid: 그리드/스택 아이템 사이에 1px 라인을 자동 삽입하는 레이아웃
- Header: 고정 헤더. 로고, 실시간 시계, 스크롤 시 미니멀 타임라인 표시
- SplitLayout: 좌우 분할 레이아웃. 상품 상세용 (좌: 정보, 우: 이미지)

## Shared

- StateLabel: 조도(lux)·색온도(K) 표시 라벨
- TimelineSlider: 4단계 시간대 슬라이더 (12pm, 4pm, 8pm, 12am)
- MinimalTimelineSlider: 헤더용 간소화 슬라이더. 아이콘만 표시
- ScrollVideo: 스크롤 위치 기반 비디오 프레임 시킹. 시간/타임라인 오버레이 옵션
- QuantitySelector: 수량 선택기. - / + 버튼과 숫자 표시
- Breadcrumb: 네비게이션 경로 표시 (Lighting > Chandeliers)
- SelectField: 드롭다운 선택 필드. 라벨 + 선택값 + 화살표
- AccordionMenu: 아코디언 메뉴. Overview, Description 등 탭 형태 네비게이션
- ArrowLink: 화살표 링크. → 아이콘 + 텍스트 (Add Sidemark, Download a Tear Sheet)

## Hero

- HeroSection: 히어로 영역. LineGrid로 비디오 2열 배치, HeroMessage 오버레이
- HeroMessage: 브랜드 헤드라인 + 서브타이틀 텍스트

## Product

- ProductCard: 제품 카드. 썸네일(낮/밤 크로스페이드), 제품명, 타입 태그, 상태 라벨
- ProductShowcase: 제품 섹션. 타임라인 슬라이더 + 필터 + 제품 그리드
- ProductFilter: 제품 타입 필터. All/Ceiling/Stand/Wall/Desk
- ProductGallery: 제품 이미지 갤러리. 메인 이미지 + 페이지네이션 인디케이터
- ProductOptions: 제품 옵션 선택 영역. Glass Finish, Hardware, OAH 등 드롭다운 그룹
- ProductMeta: 제품 메타 정보. Item Number, Lead Time, Est. Ship Date
- ProductActions: 제품 액션 영역. 수량 선택 + 가격 + Add to Cart 버튼
- ProductTabs: 제품 정보 탭. Overview, Description, Tech Specs, Explore Collection 등

## Cart

- CartSlide: 장바구니 슬라이드 패널. 오른쪽에서 슬라이드 인/아웃
- CartHeader: 장바구니 헤더. "Your Cart" 타이틀 + Close 버튼
- CartItem: 장바구니 아이템. 썸네일 + 제품명 + 옵션 + 수량 + 가격 + Remove
- CartSummary: 장바구니 요약. Subtotal 금액
- CartActions: 장바구니 액션. Add a P.O. Number, Request Quote 버튼
- CartCheckoutButton: 체크아웃 버튼. 전체 너비 Checkout 버튼

## Checkout

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

## Section

- BrandValue: 브랜드 가치 제안. 3컬럼 피처 그리드 (아이콘 + 타이틀 + 설명)

## Templates

- ProductDetailTemplate: 상품 상세 페이지 템플릿. SplitLayout + ProductGallery + ProductOptions + ProductActions + ProductTabs
- CartSlideTemplate: 장바구니 슬라이드 템플릿. CartHeader + CartItem 리스트 + CartSummary + CartActions
- CheckoutTemplate: 체크아웃 페이지 템플릿. CheckoutHeader + CheckoutSteps + ExpressCheckout + ContactForm + ShippingForm + OrderSummary

## Pages

- ProductDetailPage: 상품 상세 페이지. ProductDetailTemplate 사용
- CheckoutPage: 체크아웃 페이지. CheckoutTemplate 사용
