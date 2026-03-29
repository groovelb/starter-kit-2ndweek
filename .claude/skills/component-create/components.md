# Components Reference

## Part 1: Starter-Kit (범용)

### Layout
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| PhiSplit | 황금비 분할 레이아웃 | `components/layout/PhiSplit.jsx` |
| SplitScreen | 좌우 분할 레이아웃 | `components/layout/SplitScreen.jsx` |
| HeroStack | 수직 레이아웃 (Hero+Footer) | `components/layout/HeroStack.jsx` |
| LineGrid | 그리드 아이템 사이 1px 라인 | `components/layout/LineGrid.jsx` |
| CenteredAsideLayout | 중앙 + 사이드 레이아웃 | `components/layout/CenteredAsideLayout.jsx` |
| BentoGrid | 벤토 그리드 레이아웃 | `components/layout/BentoGrid.jsx` |
| RatioContainer | 비율 기반 컨테이너 | `components/layout/RatioContainer.jsx` |
| FullPageContainer | 전체 페이지 컨테이너 | `components/layout/FullPageContainer.jsx` |

### Container
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| PageContainer | 반응형 페이지 컨테이너 | `components/container/PageContainer.jsx` |
| SectionContainer | 섹션 컨테이너 | `components/container/SectionContainer.jsx` |
| CarouselContainer | 캐로셀 컨테이너 | `components/container/CarouselContainer.jsx` |

### Card
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| CardContainer | 카드 기본 컨테이너 | `components/card/CardContainer.jsx` |
| CustomCard | 미디어+콘텐츠 카드 | `components/card/CustomCard.jsx` |

### Input
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| FileDropzone | 파일 드래그&드롭 영역 | `components/input/FileDropzone.jsx` |
| SearchBar | 검색 입력 바 | `components/input/SearchBar.jsx` |
| TagInput | 태그 입력 필드 | `components/input/TagInput.jsx` |
| UnderlineInput | 밑줄만 있는 텍스트 인풋 | `components/shared/UnderlineInput.jsx` |
| UnderlineSelect | 밑줄만 있는 셀렉트 | `components/shared/UnderlineSelect.jsx` |

### Media
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| AspectMedia | 비율 기반 미디어 컨테이너 | `components/media/AspectMedia.jsx` |
| ImageCarousel | 이미지 캐로셀 | `components/media/ImageCarousel.jsx` |
| ImageTransition | 이미지 트랜지션 효과 | `components/media/ImageTransition.jsx` |
| VideoScrubbing | 비디오 스크러빙 | `components/media/VideoScrubbing.jsx` |
| CarouselIndicator | 캐로셀 인디케이터 | `components/media/CarouselIndicator.jsx` |

### Navigation
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| NavMenu | 네비게이션 메뉴 | `components/navigation/NavMenu.jsx` |
| CategoryTab | 카테고리 탭 | `components/navigation/CategoryTab.jsx` |

### Typography
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| FitText | 컨테이너에 맞춤 텍스트 | `components/typography/FitText.jsx` |
| HighlightedTypography | 하이라이트 타이포그래피 | `components/typography/HighlightedTypography.jsx` |
| InlineTypography | 인라인 타이포그래피 | `components/typography/InlineTypography.jsx` |
| StretchedHeadline | 스트레치 헤드라인 | `components/typography/StretchedHeadline.jsx` |
| StyledParagraph | 스타일드 문단 | `components/typography/StyledParagraph.jsx` |
| Title | 타이틀 컴포넌트 | `components/typography/Title.jsx` |
| QuotedContainer | 인용 컨테이너 | `components/typography/QuotedContainer.jsx` |

### Shared
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| QuantitySelector | 수량 선택기 | `components/shared/QuantitySelector.jsx` |
| SelectField | 드롭다운 선택 필드 | `components/shared/SelectField.jsx` |
| Breadcrumb | 네비게이션 경로 표시 | `components/shared/Breadcrumb.jsx` |
| ArrowLink | 화살표 링크 | `components/shared/ArrowLink.jsx` |

---

## Part 2: Lumenstate Brand (브랜드 전용)

### Context
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| TimelineContext | 시간대 값(0-1) 전역 상태 관리 | `hooks/useTimeline.jsx` |
| CartContext | 장바구니 상태 관리 | `context/CartContext.jsx` |

### Shared (Lumenstate)
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| TimelineSlider | 4단계 시간대 슬라이더 | `components/shared/TimelineSlider.jsx` |
| MinimalTimelineSlider | 헤더용 간소화 타임라인 슬라이더 | `components/shared/MinimalTimelineSlider.jsx` |
| ScrollVideo | 스크롤 위치 기반 비디오 프레임 시킹 | `components/shared/ScrollVideo.jsx` |

### Media (Lumenstate)
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| TimeBlendImage | 타임라인 기반 낮/밤 이미지 크로스페이드 | `components/media/TimeBlendImage.jsx` |

### Product
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| ProductCard | 제품 카드 | `components/product/ProductCard.jsx` |
| ProductGallery | 제품 이미지 갤러리 | `components/product/ProductGallery.jsx` |
| ProductOptions | 제품 옵션 선택 | `components/product/ProductOptions.jsx` |
| ProductMeta | 제품 메타 정보 | `components/product/ProductMeta.jsx` |
| ProductActions | 제품 액션 영역 | `components/product/ProductActions.jsx` |
| ProductTabs | 제품 정보 탭 | `components/product/ProductTabs.jsx` |
| ProductFilter | 제품 타입 필터 | `components/navigation/ProductFilter.jsx` |

### Cart
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| CartDrawer | 장바구니 슬라이드 패널 | `components/cart/CartDrawer.jsx` |
| CartHeader | 장바구니 헤더 | `components/cart/CartHeader.jsx` |
| CartItem | 장바구니 아이템 | `components/cart/CartItem.jsx` |
| CartSummary | 장바구니 요약 | `components/cart/CartSummary.jsx` |
| CartCheckoutButton | 체크아웃 버튼 | `components/cart/CartCheckoutButton.jsx` |

### Checkout
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| CheckoutLayout | 체크아웃 2컬럼 레이아웃 | `components/checkout/CheckoutLayout.jsx` |
| ContactForm | 연락처 폼 | `components/checkout/ContactForm.jsx` |
| ShippingForm | 배송지 폼 | `components/checkout/ShippingForm.jsx` |
| OrderSummary | 주문 요약 패널 | `components/checkout/OrderSummary.jsx` |

### Navigation (Lumenstate)
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| GNB | 글로벌 네비게이션 바 | `components/navigation/GNB.jsx` |
| AppShell | 앱 셸 | `components/navigation/AppShell.jsx` |
| Footer | 푸터 | `components/navigation/Footer.jsx` |

### Templates
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| ProductDetailTemplate | 제품 상세 페이지 템플릿 | `templates/ProductDetailTemplate.jsx` |
| ProductHeroTemplate | 제품 히어로 영역 템플릿 | `templates/ProductHeroTemplate.jsx` |
| ProductInfoTemplate | 제품 정보 영역 템플릿 | `templates/ProductInfoTemplate.jsx` |
| CheckoutTemplate | 체크아웃 페이지 템플릿 | `templates/CheckoutTemplate.jsx` |

### Sections
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| HeroSection | 히어로 섹션 | `sections/HeroSection.jsx` |
| ProductShowcase | 제품 쇼케이스 섹션 | `sections/ProductShowcase.jsx` |
| BrandValueSection | 브랜드 가치 제안 섹션 | `sections/BrandValueSection.jsx` |
| ProductDetailSection | 제품 상세 섹션 | `sections/ProductDetailSection.jsx` |
| CheckoutSection | 체크아웃 섹션 | `sections/CheckoutSection.jsx` |

### Pages
| 컴포넌트 | 설명 | 경로 |
|---------|------|------|
| LandingPage | 랜딩 페이지 | `pages/LandingPage.jsx` |
| ProductDetailPage | 제품 상세 페이지 | `pages/ProductDetailPage.jsx` |
| CheckoutPage | 체크아웃 페이지 | `pages/CheckoutPage.jsx` |
