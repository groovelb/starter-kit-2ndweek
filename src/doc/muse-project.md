# 📁 MUSE (뮤즈): 시각적 영감 아카이빙 솔루션

## 1. 프로젝트 개요 및 핵심 기능 정의

### 1.1 프로젝트 목표
* **서비스 정의:** 디자이너가 외부 웹/로컬에서 발견한 레퍼런스를 효율적으로 아카이빙하고, 태그 및 카테고리 기반으로 탐색하여 무드보드를 구축하는 개인화 SaaS.
* **현재 개발 단계:** MVP (Minimum Viable Product) 프로토타입. **더미 데이터(Dummy Data)** 기반의 프론트엔드 UI/UX 구현에 집중.
* **학습 목표:** 디자인 시스템 구축, 컴포넌트 기반 개발, 복잡한 필터링/그리드 UI 구현 연습.

### 1.2 핵심 기능 재정의 (UX 관점)

| 기능 아이디어 | UX 디자인 관점의 정의 | 구현 범위 (Design System Focus) |
| :--- | :--- | :--- |
| **레퍼런스 추가/등록** | **입력 및 구조화:** 사용자가 파일 업로드와 동시에 카테고리/태그 정보를 입력하는 명확한 진입점 제공. | **Upload Modal/Form** 컴포넌트 구축. |
| **레퍼런스 카테고리** | **탐색 구조화:** 대분류 기준으로 이미지를 묶고 사이드바를 통해 쉽게 접근할 수 있는 네비게이션 시스템. | **Navigation Sidebar** 및 **Category Tab** 컴포넌트. |
| **키워드 관리** | **정밀한 필터링:** 이미지 검색 외에 상세 태그를 이용해 리스트를 실시간으로 정제하는 유동적인 UI. | **Keyword Chip** 및 **Filter Bar** 컴포넌트의 상태 관리. |
| **무드보드 작성** | **큐레이션:** 선별된 아이템을 프로젝트 보드에 담아 새로운 컬렉션을 생성/편집하는 기능. | **Image Card** 내의 액션 버튼 및 **Collection Dropdown** 컴포넌트. |

## 2. 사용자 여정 (User Journey)

### 2.1 사용자 시나리오 (Intent-Focused)

가상의 디자이너 **'미나'**가 레퍼런스를 관리하고 프로젝트 무드보드를 완성하는 흐름입니다.

1.  **아이템 등록:** 미나는 웹 서핑 중 발견한 좋은 이미지를 'MUSE'에 **업로드**하여 자신의 아카이브에 새롭게 추가한다.
2.  **영감 찾기:** 기존에 수집된 아카이브와 방금 추가한 이미지를 함께 탐색하며 프로젝트의 **시각적 방향성**을 잡는다.
3.  **기준 설정:** 작업에 필요한 **핵심 카테고리와 스타일 키워드**를 적용하여 기준을 좁힌다.
4.  **무드보드 구축:** 선별된 이미지들을 **하나의 프로젝트 보드**로 모아 클라이언트에게 공유 가능한 명확한 시각적 가이드라인을 완성한다.

### 2.2 UX Flow Diagram (사용자 흐름 및 시스템 상태)

| 시나리오 단계 | UX Flow Step | 사용자 의도 (Intent) | 시스템 상태 / 섹션 |
| :--- | :--- | :--- | :--- |
| **아이템 등록** | 1. **레퍼런스 업로드** | 외부 이미지를 내 아카이브에 등록하고 기본 정보를 입력한다. | **Upload Modal / Form** |
| **아이템 등록** | 2. **등록 완료** | 업로드가 성공적으로 완료되었음을 확인하고 아카이브로 돌아간다. | **Toast / Upload Success State** |
| **영감 찾기** | 3. **탐색 시작** | 전체 아카이브를 둘러보며 분위기를 파악한다. | **대시보드: 전체 아카이브 뷰** |
| **기준 설정** | 4. **카테고리 & 키워드 적용** | 필요한 레퍼런스 그룹으로 진입하고 스타일 태그를 적용하여 노이즈를 제거한다. | **Filtered Grid View** |
| **무드보드 구축** | 5. **상세 확인 및 저장** | 최종 선별된 아이템을 확인하고 프로젝트 무드보드에 추가한다. | **Detail Modal State & Collection Add State** |
| **무드보드 구축** | 6. **최종 큐레이션** | 선별된 아이템들로 구성된 무드보드를 확인/정리한다. | **Moodboard View** |

## 3. 디자인 시스템 요구사항 (컴포넌트 명세)

### 3.1 섹션 및 레이아웃 (Organisms)

| 섹션 / 레이아웃 | 주요 기능 | UX Flow 매핑 |
| :--- | :--- | :--- |
| **Main Layout** | 서비스의 기본 구조 (Sidebar + Main Content Area). | 3, 4, 6 |
| **Navigation Sidebar** | 카테고리 메뉴, 무드보드 목록, 설정 메뉴로의 접속점 제공. | 3, 6 |
| **Upload Modal / Form** | 이미지 파일 첨부, 제목, 카테고리, 태그를 입력하는 양식. | 1 |
| **Filter & Search Bar** | 키워드 검색 및 태그 기반 필터링 인터랙션 관리. | 3, 4 |
| **Image Detail Modal** | 레퍼런스의 고화질 이미지와 메타데이터(태그, 메모)를 표시하는 오버레이. | 5 |

### 3.2 핵심 컴포넌트 목록 (Molecules & Atoms)

| 컴포넌트명 | 역할 및 형태 | UX Flow 매핑 |
| :--- | :--- | :--- |
| **File Dropzone** | 드래그 앤 드롭 또는 클릭으로 파일을 선택하는 업로드 영역. | 1 |
| **Text Input w/ Tagging** | 업로드 폼 내에서 태그를 입력하고 Chip으로 변환하는 입력 필드. | 1 |
| **Category Tab/Item** | 사이드바에 사용되며, Active/Inactive 상태를 표시하는 메뉴 아이템. | 4 |
| **Keyword Chip** | 상단 필터 바 및 이미지 정보에 사용되는 토글 가능한 태그 버튼. | 4 |
| **Image Card** | 메인 그리드의 기본 아이템. (Masonry Grid 적합, Hover 시 액션 오버레이) | 3, 4, 5 |
| **Collection Dropdown** | 아이템을 추가할 무드보드 목록을 보여주는 팝오버/드롭다운. | 5 |
| **Toast/SnackBar** | 업로드 및 컬렉션 저장 성공 등 비동기 피드백을 전달. | 2, 5 |
| **Skeleton Loader** | 이미지 로딩 중 사용자에게 부드러운 대기 상태를 표시. | 3, 4 |

## 4. 화면 정의 (Screen Spec)

### 4.1 A. 메인 대시보드 (아카이브)

**목적:** 레퍼런스 탐색, 필터링, 아카이브 관리 및 업로드 진입.

| 구성 요소 | 사용 컴포넌트 |
| :--- | :--- |
| 레이아웃 | `AppShell`, `NavMenu` |
| 필터링 | `FilterBar`, `SearchBar`, `CategoryTab` |
| 콘텐츠 | `Grid Container`, `ImageCard` |

**인터랙션 흐름:**
1. 카테고리/키워드를 클릭하여 Grid를 실시간 필터링
2. `ImageCard`를 Hover하여 액션 버튼 활성화 (좋아요, 무드보드 추가)
3. 우상단 또는 사이드바의 버튼을 클릭하여 Upload Modal 진입

**컴포넌트 조합:**
```
AppShell
├── NavMenu (sidebar)
│   ├── CategoryTab (카테고리 목록)
│   └── Moodboard List
└── Main Content
    ├── FilterBar
    │   ├── SearchBar
    │   └── Keyword Chips
    └── Grid Container
        └── ImageCard[]
```

---

### 4.2 B. 업로드 모달/폼

**목적:** 외부 이미지 레퍼런스를 시스템에 등록하고 메타데이터를 정의.

| 구성 요소 | 사용 컴포넌트 |
| :--- | :--- |
| 컨테이너 | `UploadModal` |
| 파일 선택 | `FileDropzone` |
| 정보 입력 | `TextField`, `TagInput`, `Select` |
| 액션 | `Button`, `Stepper` |

**인터랙션 흐름:**
1. 파일을 Dropzone에 드래그하거나 선택
2. 제목, 카테고리, 태그를 입력/선택
3. Primary Button 클릭 후 업로드 진행률 확인
4. Toast 알림 확인 후 모달 자동 닫힘

**컴포넌트 조합:**
```
UploadModal
├── Stepper (3단계: Select → Details → Upload)
├── Step 1: FileDropzone
├── Step 2: Form
│   ├── TextField (제목)
│   ├── Select (카테고리)
│   └── TagInput (태그)
└── Step 3: Progress + Confirmation
    └── Snackbar (Toast)
```

---

### 4.3 C. 상세 뷰 (Modal)

**목적:** 레퍼런스 심층 분석, 메모 및 큐레이션 액션 실행.

| 구성 요소 | 사용 컴포넌트 |
| :--- | :--- |
| 컨테이너 | `ImageDetailModal` |
| 이미지 뷰어 | 대형 이미지 + 네비게이션 버튼 |
| 정보 패널 | 메타데이터, 태그 Chips, 메모 필드 |
| 액션 | `IconButton`, `CollectionDropdown`, `Button` |

**인터랙션 흐름:**
1. 이미지 및 메타데이터 확인 (해상도, 파일 크기, 라이센스 등)
2. '무드보드 추가' 버튼 클릭 후 `CollectionDropdown`에서 컬렉션 선택
3. (더미 기능) 메모 필드에 텍스트 입력
4. 닫기 버튼 또는 배경 클릭으로 Grid View 복귀
5. 좌/우 화살표 키 또는 버튼으로 이전/다음 이미지 탐색

**컴포넌트 조합:**
```
ImageDetailModal
├── Image Viewer (좌측)
│   ├── 메인 이미지
│   └── Navigation Buttons (< / >)
└── Info Panel (우측)
    ├── Title & Type
    ├── Action Buttons (Like, Download, Share, Edit)
    ├── MetaItem[] (Details)
    ├── Tag Chips
    └── CollectionDropdown (Add to Moodboard)
```

---

### 4.4 D. 무드보드 뷰

**목적:** 선별된 아이템 목록 검토 및 프로젝트별 정리.

| 구성 요소 | 사용 컴포넌트 |
| :--- | :--- |
| 레이아웃 | `AppShell`, `NavMenu` |
| 콘텐츠 헤더 | 무드보드 제목, 아이템 수, 액션 버튼 |
| 콘텐츠 | `Grid Container`, `ImageCard` |
| 액션 | `IconButton` (삭제, 순서 변경) |

**인터랙션 흐름:**
1. `NavMenu`에서 특정 무드보드 선택
2. 무드보드 내 아이템 리스트 확인
3. (더미 기능) 아이템 순서 재정렬 시뮬레이션
4. 아이템의 '제거' 버튼 클릭하여 리스트에서 삭제 (CRUD의 Delete)

**컴포넌트 조합:**
```
AppShell
├── NavMenu (sidebar)
│   └── Moodboard List (active item highlighted)
└── Moodboard Content
    ├── Header
    │   ├── Title
    │   ├── Item Count
    │   └── Share Button
    └── Grid Container
        └── ImageCard[] (with delete action)
```

---

## 5. 구현된 컴포넌트 목록

### 5.1 Input 컴포넌트 (`src/components/input/`)

| 컴포넌트 | 파일 | 설명 |
| :--- | :--- | :--- |
| **SearchBar** | `SearchBar.jsx` | 키워드 검색 입력 필드. 변형(outlined/filled/minimal), 필터 토글 지원 |
| **FileDropzone** | `FileDropzone.jsx` | 드래그 앤 드롭 파일 업로드. 미리보기, 진행률, 완료 상태 표시 |
| **TagInput** | `TagInput.jsx` | 태그 입력 및 Chip 변환. 자동완성 제안, 최대 개수 제한 |
| **CollectionDropdown** | `CollectionDropdown.jsx` | 무드보드 선택 드롭다운. 새 컬렉션 생성 기능 포함 |

### 5.2 Data 컴포넌트 (`src/components/data/`)

| 컴포넌트 | 파일 | 설명 |
| :--- | :--- | :--- |
| **ImageDetailModal** | `ImageDetailModal.jsx` | 이미지 상세 보기 모달. 메타데이터, 태그, 액션 버튼, 네비게이션 |

### 5.3 Templates (`src/components/templates/`)

| 템플릿 | 파일 | 설명 |
| :--- | :--- | :--- |
| **UploadModal** | `UploadModal.jsx` | 3단계 업로드 플로우 모달 (파일 선택 → 정보 입력 → 업로드) |
| **FilterBar** | `FilterBar.jsx` | 검색 + 태그 필터링 + 정렬 + 뷰 모드 전환 통합 바 |

### 5.4 기존 활용 컴포넌트

| 컴포넌트 | 위치 | 역할 |
| :--- | :--- | :--- |
| **ImageCard** | `src/components/card/ImageCard.jsx` | 메인 그리드 아이템, Hover 액션 오버레이 |
| **CategoryTab** | `src/components/navigation/CategoryTab.jsx` | 카테고리 필터링 탭 메뉴 |
| **AppShell** | `src/components/navigation/AppShell.jsx` | 메인 레이아웃 (Header + Sidebar + Content) |
| **NavMenu** | `src/components/navigation/NavMenu.jsx` | 네비게이션 메뉴 (수직/수평, 다양한 스타일) |
