# 컴퍼넌트 리스트

## 디자인 토큰 및 원칙

- MUI를 활용하되 기능적 토큰을, 디자인 맥락적 토큰으로 네스팅하는 것으로 시작.
- 디자인 맥락에 맞는 토큰 최적화 안내
- 다음 역할의 에이전트 도입
    - PRD 작성 → 토큰 최적화를 도화주는 온보딩 에이전트
    - 디자인 기본 원칙에 대한 조언, 가이드를 도와주는 에이전트
    - 디자인, 개발 지식이 부족한 사용자의 컴퍼넌트 가이드 에이전트
    

## 타이포그래피

- PRD 기준으로 타이포 토큰 템플렛을 만든다.

| 카테고리 | 컴퍼넌트 타이틀 | 설명 | 관련 링크 |
| --- | --- | --- | --- |
| 공간, 사이즈 변형 | Fit Typography | 컨테이너를 항상 채우는 유동적 사이즈 타이포 | [https://kizu.dev/fit-to-width/](https://kizu.dev/fit-to-width/?utm_source=chatgpt.com)

[https://css-tricks.com/fitting-text-to-a-container/](https://css-tricks.com/fitting-text-to-a-container/)

[https://www.miltontextiles.com/](https://www.miltontextiles.com/)

[https://www.lamannabakery.com/](https://www.lamannabakery.com/) |
|  | Stretched Word Spacing Headline | 문장내 단어 간격을 과도하게 띄어서 화면 전체를 채우는 히어로 타이포그래피

(구현  사례 부족) | [https://www.studiolyonszot.com/](https://www.studiolyonszot.com/)
[https://ped.ro/](https://ped.ro/)
[https://www.films53-12.com/](https://www.films53-12.com/?ref=godly) |
| 컨텐츠 배치 | InlineTypography | 타이포 내부 단어, 글자 사이에 오브젝트 배치 | [https://www.miyagami.studio/](https://www.miyagami.studio/)
[https://undsgn.com/uncode/features/inline-images-headings/](https://undsgn.com/uncode/features/inline-images-headings/) |
| 강조 | QuotedContainer | 타이포의 인라인 위치를 파악해서 smart quote 표시 | [https://dieselfarm.com/en/farm/](https://dieselfarm.com/en/farm/) |
|  | HighlitedTypography | 특정 단어 강조 (밑줄, 배경) | [https://dieselfarm.com/en/farm/](https://dieselfarm.com/en/farm/) |
|  | DynamicVariant | variable font의 transition |  |
|  | StyledParagraph | 섹션을 강조할 문단 | [https://www.wanaka.studio/nos-savoir-faire/identite-de-marque/](https://www.wanaka.studio/nos-savoir-faire/identite-de-marque/)
[https://www.openweb.com/?ref=godly](https://www.openweb.com/?ref=godly)
[https://www.andrearchitecture.com/](https://www.andrearchitecture.com/) |
| 계층 | Title | 섹션, 아이템의 타이틀
서브 타이틀, 오버라인 등 | [https://www.careofchan.com/](https://www.careofchan.com/)
[https://designedbywomen.org/](https://designedbywomen.org/) |
|  |  |  |  |
|  |  |  |  |

## 레이아웃

- 공간을 정의하는 요소들을 의도에 맞게 안내해준다.

| 카테고리 | 컴퍼넌트 타이틀 | 설명 | 관련 링크 |
| --- | --- | --- | --- |
| 황금비율 | PhiSplit | 좌우를 황금 비율로 나눔, spacing 옵션,
가로, 세로 | https://stoutcollective.com/ |
|  | RatioContainer | - 고정 비율의 컨테이너
phi 옵션
- 내부에서 PhiSplit 사용 가능 | [https://apiumhub.com/tech-blog-barcelona/golden-ratio-in-web-design/#:~:text=designs just look right and,art%2C classical buildings%2C and nature](https://apiumhub.com/tech-blog-barcelona/golden-ratio-in-web-design/#:~:text=designs%20just%20look%20right%20and,art%2C%20classical%20buildings%2C%20and%20nature)

[https://www.nngroup.com/articles/golden-ratio-ui-design/#:~:text=Webpage Layout](https://www.nngroup.com/articles/golden-ratio-ui-design/#:~:text=Webpage%20Layout) |
| 그리드 | SmartGrid | - 다양한 레이아웃 페턴을 하나로 해결
- 그리드의 배치, 컨테이너 스타일을 담당
- 각 그리드의 경계선 옵션
- 경계선 만나는 지점에서 거리 조절 |  |
|  | Dynmaic Bento |  |  |
| 히어로 섹션 | 풀페이지 컨테이너 |  |  |
|  | 스플릿 스크린 |  |  |
| 반응형 패턴 |  |  |  |
|  |  |  |  |
|  |  |  |  |

bento

https://vendula-havelkova.medium.com/bento-grids-one-of-the-2024-website-trends-7b5a31d6b8c8

negative

[https://dev.to/watzon/25-web-design-trends-to-watch-in-2025-e83#:~:text=14,Space](https://dev.to/watzon/25-web-design-trends-to-watch-in-2025-e83#:~:text=14,Space)

## 미디어

- 자주 사용하는 컴플렉스 컴퍼넌트
- 관용적으로 사용하지만, 매번 구현 + 관련 라이브러리를 찾을 필요 없이

| 카테고리 | 컴퍼넌트 타이틀 | 설명 | 관련 링크 |
| --- | --- | --- | --- |
| Image | Image | - 단일 이미지
- ratio 옵션, auto ratio |  |
|  | ImageTransition | - 선택된 인덱스에 의한 이미지 트랜지션, (전 ←→ 후 ) 인덱스 트랜지션 |  |
|  | ImageCarousel | - 단일 이미지 사이즈 내에서 carousel
- Indicator 컴퍼넌트 재사용 |  |
| Video | Video | - 단일 비디오
- ratio 옵션, auto ratio |  |
|  | VideoScrubbing | - 스크롤 위치에 의한 스크러빙
- 스크러빙 시작 지점, 스크롤 ref를 알아야함. |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

## 컴퍼넌트

- 자주 사용하는 컴플렉스 컴퍼넌트
- 관용적으로 사용하지만, 매번 구현 + 관련 라이브러리를 찾을 필요 없이

| 카테고리 | 컴퍼넌트 타이틀 | 설명 | 관련 링크 |
| --- | --- | --- | --- |
| Card | CardContainer | 자주 사용될 스타일링을 미리 설정래서 wrapping, sx override
- outliled
- elevation |  |
|  | CustomCard | - 말그대로 커스텀 card의 최상단 wrapper 컴퍼넌트
- media 영역
- content 영역 |  |
| navitation | Indicator | - 캐러셀 등에 사용될 indicator
- dot, line 모드 |  |
|  | AppShell | - 반응형이 적용된, 헤더, 메인 컨테이너 조합
- 헤더에는 항상 보이는 영역, 반응형으로 drawer 메뉴로 돌아갈 영역이 구분되야함
- 반응형 레이아웃이 적용될 브레이크 포인트 설정 |  |
|  | NavMenu | - header, drawer 메뉴에 포함될 기본 라우터 이동 메뉴,
- 아이콘, 텍스트 조합
- 헤더일떄랑 drawer 포함될때 고려 반응형
- Side Menu에 포함될때도 있음. |  |