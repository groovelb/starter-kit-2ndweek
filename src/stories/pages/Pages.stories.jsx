import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { MemoryRouter } from 'react-router-dom';
import { ArchivePage } from '../../pages/ArchivePage';
import { MoodboardsPage } from '../../pages/MoodboardsPage';
import LandingPage from '../../pages/LandingPage.jsx';
import { defaultTheme as theme } from '../../styles/themes';

/**
 * ThemeWrapper 컴포넌트
 * 페이지 스토리를 테마 컨텍스트로 감싸는 헬퍼
 */
function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 3 }}>
        {children}
      </Box>
    </ThemeProvider>
  );
}

export default {
  title: 'Pages/MUSE',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## MUSE 페이지

MUSE 프로젝트의 전체 페이지 컴포넌트.

### 페이지 목록
- **LandingPage**: 서비스 랜딩 페이지 - 브랜드 소개 및 CTA
- **ArchivePage**: 메인 대시보드 - 레퍼런스 아카이브 탐색 및 관리
- **MoodboardsPage**: 무드보드 관리 및 큐레이션

### 사용 방법
각 페이지는 MainLayout 내에서 렌더링되며, React Router를 통해 네비게이션됩니다.

\`\`\`jsx
import { ArchivePage } from './pages/ArchivePage';
import { MoodboardsPage } from './pages/MoodboardsPage';

<Routes>
  <Route element={<MainLayout />}>
    <Route index element={<ArchivePage />} />
    <Route path="moodboards" element={<MoodboardsPage />} />
  </Route>
</Routes>
\`\`\`
        `,
      },
    },
  },
};

/**
 * Archive 페이지 (메인 대시보드)
 *
 * 레퍼런스 아카이브 탐색 및 관리 화면.
 *
 * 주요 기능:
 * - FilterBar로 검색어/태그 기반 실시간 필터링
 * - ImageCard 그리드에서 레퍼런스 탐색
 * - 카드 클릭 시 ImageDetailModal로 상세 보기
 * - FAB 또는 헤더 버튼으로 UploadModal 진입
 * - 무드보드 추가 시 CollectionDropdown 표시
 */
export const Archive = {
  render: () => (
    <ThemeWrapper>
      <ArchivePage />
    </ThemeWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Archive 페이지

MUSE의 메인 대시보드로, 사용자가 수집한 모든 레퍼런스를 탐색하고 관리할 수 있습니다.

**구성 요소:**
- 페이지 헤더 (제목, 업로드 버튼)
- FilterBar (검색, 태그 필터, 정렬, 뷰 모드)
- ImageCard 그리드
- UploadModal (레퍼런스 업로드)
- ImageDetailModal (상세 보기)
- CollectionDropdown (무드보드 추가)

**인터랙션:**
1. 검색창에 키워드 입력하여 필터링
2. 태그 칩 클릭하여 태그 기반 필터링
3. 이미지 카드 클릭하여 상세 보기
4. 하트 아이콘 클릭하여 좋아요
5. 폴더 아이콘 클릭하여 무드보드에 추가
6. Upload 버튼 클릭하여 새 레퍼런스 업로드
        `,
      },
    },
  },
};

/**
 * Moodboards 페이지
 *
 * 무드보드 관리 및 큐레이션 화면.
 *
 * 주요 기능:
 * - 탭으로 무드보드 간 전환
 * - 각 무드보드 내 아이템 그리드 표시
 * - 아이템 제거, 순서 변경 (시뮬레이션)
 * - 새 무드보드 생성, 이름 변경, 삭제
 */
export const Moodboards = {
  render: () => (
    <ThemeWrapper>
      <MoodboardsPage />
    </ThemeWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Moodboards 페이지

선별된 레퍼런스들을 프로젝트별로 정리하고 관리하는 페이지입니다.

**구성 요소:**
- 페이지 헤더 (제목, 새 보드 생성 버튼)
- 무드보드 탭 네비게이션
- 현재 보드 정보 영역
- ImageCard 그리드 (제거/드래그 버튼 포함)
- 보드 관리 메뉴 (이름 변경, 복제, 공유, 삭제)
- 다이얼로그 (생성, 이름 변경, 삭제 확인)

**인터랙션:**
1. 탭 클릭하여 무드보드 전환
2. New Board 버튼으로 새 무드보드 생성
3. 이미지 카드의 X 버튼으로 아이템 제거
4. 드래그 핸들로 순서 변경 (시뮬레이션)
5. 메뉴에서 보드 관리 (이름 변경, 복제, 공유, 삭제)
6. Share 버튼으로 공유 링크 복사
        `,
      },
    },
  },
};

/**
 * Landing 페이지
 *
 * 서비스 소개 및 CTA 랜딩 페이지.
 *
 * 주요 구성:
 * - HeroSection: 브랜드 메시지 + 3가지 USP 요약
 * - USPSection: 실제 컴포넌트 데모와 함께 기능 설명
 * - CTASection: Archive 페이지로 유도하는 강력한 CTA
 */
export const Landing = {
  render: () => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Landing 페이지

MUSE 서비스의 첫 진입점이 되는 랜딩 페이지입니다.

**구성 요소:**
- HeroSection: CAPTURE / CURATE / CREATE 헤드라인 + 3가지 USP 카드
- USPSection: 실제 컴포넌트(FileDropzone, FilterBar, MoodboardCard) 데모
- CTASection: 통계, 이미지 프리뷰, Archive 이동 버튼

**디자인 특징:**
- StretchedHeadline 애니메이션으로 시각적 임팩트
- 그리드 패턴 배경으로 에디토리얼 느낌
- 실제 제품 컴포넌트를 데모로 활용하여 신뢰성 구축
- 다크 CTA 섹션으로 시각적 대비 강조

**콘텐츠 관리:**
모든 텍스트는 \`src/data/landingContent.js\`에서 중앙 관리됩니다.
        `,
      },
    },
  },
};
