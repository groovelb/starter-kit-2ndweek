import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
  SpacingBox,
  TreeNode,
} from '../../components/storybookDocumentation';

export default {
  title: 'Style/Spacing',
  parameters: {
    layout: 'padded',
  },
};

/** 시멘틱 토큰 그룹 컴포넌트 */
const SemanticTokenGroup = ({ name, tokens, description }) => (
  <Box sx={ { mb: 5 } }>
    <Typography variant="h6" sx={ { fontWeight: 600, mb: 0.5 } }>{ name }</Typography>
    <Typography variant="body2" color="text.secondary" sx={ { mb: 2 } }>{ description }</Typography>
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={ { fontWeight: 600 } }>Token</TableCell>
            <TableCell sx={ { fontWeight: 600 } }>Value</TableCell>
            <TableCell sx={ { fontWeight: 600 } }>Pixel</TableCell>
            <TableCell sx={ { fontWeight: 600 } }>Visual</TableCell>
            <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { tokens.map((row) => (
            <TableRow key={ row.token }>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.token }</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.value }</TableCell>
              <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.px }</TableCell>
              <TableCell>
                <SpacingBox size={ row.pxNum } />
              </TableCell>
              <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.usage }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

/** Docs - 간격 시스템 문서 (첫 번째 스토리) */
export const Docs = {
  render: () => {
    // 토큰 구조 (트리 뷰용)
    const tokenStructure = {
      spacing: {
        unit: '8px',
        scale: '0, 0.5, 1, 2, 3, 4, 6, 8, 12...',
      },
      customSpacing: {
        inset: { none: 0, sm: 2, md: 3, lg: 4 },
        gap: { none: 0, xs: 0.5, sm: 1, md: 2, lg: 3, xl: 4 },
        section: { sm: 3, md: 4, lg: 6 },
        page: { gutter: '2-4', top: '8-12', bottom: '4-6' },
        nav: { header: '64px', drawer: '280px' },
        interactive: { indicator: 1, control: 2 },
      },
    };

    // 핵심 토큰 값 (테이블용)
    const coreTokens = [
      { token: 'spacing(1)', value: '1', px: '8px', description: '최소 간격, 인라인 요소' },
      { token: 'spacing(2)', value: '2', px: '16px', description: '기본 간격, 컴포넌트 패딩' },
      { token: 'spacing(3)', value: '3', px: '24px', description: '카드 내부 패딩' },
      { token: 'spacing(4)', value: '4', px: '32px', description: '섹션 간격' },
      { token: 'spacing(6)', value: '6', px: '48px', description: '페이지 패딩' },
      { token: 'inset.md', value: '3', px: '24px', description: '컴포넌트 내부 패딩' },
      { token: 'gap.md', value: '2', px: '16px', description: 'Grid/Flex 간격' },
      { token: 'section.md', value: '4', px: '32px', description: '섹션 간 수직 간격' },
      { token: 'page.gutter', value: '2-4', px: '16-32px', description: '페이지 좌우 여백' },
    ];

    return (
      <>
        <DocumentTitle
          title="Spacing System"
          status="Available"
          note="8px grid with semantic tokens"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          {/* 제목 + 1줄 개요 */}
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Spacing System
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            8px 그리드 기반의 기본 스페이싱과 용도별 시멘틱 토큰을 정의합니다.
          </Typography>

          {/* 토큰 구조 (트리 뷰) */}
          <SectionTitle title="토큰 구조" description="Base spacing과 Semantic spacing 계층 구조" />
          <Box sx={ { p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, mb: 4 } }>
            { Object.entries(tokenStructure).map(([key, value]) => (
              <TreeNode key={ key } keyName={ key } value={ value } defaultOpen />
            )) }
          </Box>

          {/* 토큰 값 (테이블) */}
          <SectionTitle title="핵심 토큰 값" description="자주 사용되는 스페이싱 토큰" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Token</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Value</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Pixel</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { coreTokens.map((row) => (
                  <TableRow key={ row.token }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.token }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.value }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.px }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.description }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          {/* 사용 예시 */}
          <SectionTitle title="사용 예시" description="MUI sx prop에서의 spacing 활용" />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              borderRadius: 1,
              mb: 4,
            } }
          >
{ `// 기본 spacing
<Box sx={{ m: 2, p: 3 }}>  {/* margin: 16px, padding: 24px */}

// 방향별 spacing
<Box sx={{ mt: 2, mb: 4, px: 3 }}>
  {/* marginTop: 16px, marginBottom: 32px, paddingX: 24px */}

// 반응형 spacing
<Box sx={{
  p: { xs: 2, sm: 3, md: 4 },  {/* 16px → 24px → 32px */}
  my: { xs: 3, md: 6 }         {/* 24px → 48px */}
}}>

// Flex gap
<Box sx={{ display: 'flex', gap: 2 }}>  {/* gap: 16px */}

// Grid spacing
<Grid container spacing={2}>  {/* gap: 16px */}` }
          </Box>

          {/* Vibe Coding Prompt */}
          <SectionTitle
            title="Vibe Coding Prompt"
            description="AI 코딩 도구에서 활용할 수 있는 프롬프트 예시"
          />
          <Box
            component="pre"
            sx={ {
              backgroundColor: 'grey.900',
              color: 'grey.100',
              p: 2,
              fontSize: 12,
              fontFamily: 'monospace',
              overflow: 'auto',
              borderRadius: 1,
            } }
          >
{ `/* Spacing 토큰 활용 프롬프트 예시 */

"inset.md (p: 3, 24px)를 사용해서 카드 내부 패딩을 설정하고,
gap.md (spacing: 2, 16px)로 카드 내 요소들 간격을 만들어줘."

"모바일에서는 page.gutter.xs (px: 2, 16px),
데스크탑에서는 page.gutter.md (px: 4, 32px)로 반응형 여백을 적용해줘."

"section.md (mt: 4, 32px)로 섹션 간 수직 간격을 만들고,
섹션 내부는 gap.lg (spacing: 3, 24px)으로 설정해줘."` }
          </Box>
        </PageContainer>
      </>
    );
  },
};

/** 1. Basic Spacing - 기본 스케일 */
export const BasicSpacing = {
  name: '1. Basic Spacing',
  render: () => {
    const spacingScale = [
      { value: 0, px: 0, label: 'none' },
      { value: 0.5, px: 4, label: 'xs' },
      { value: 1, px: 8, label: 'sm' },
      { value: 1.5, px: 12, label: '' },
      { value: 2, px: 16, label: 'md' },
      { value: 3, px: 24, label: 'lg' },
      { value: 4, px: 32, label: 'xl' },
      { value: 5, px: 40, label: '' },
      { value: 6, px: 48, label: '2xl' },
      { value: 8, px: 64, label: '3xl' },
      { value: 10, px: 80, label: '' },
      { value: 12, px: 96, label: '4xl' },
    ];

    const sxProps = [
      { prop: 'm', description: 'margin (전체)', example: 'm: 2' },
      { prop: 'mt, mr, mb, ml', description: 'margin (top, right, bottom, left)', example: 'mt: 2' },
      { prop: 'mx, my', description: 'margin (horizontal, vertical)', example: 'mx: "auto"' },
      { prop: 'p', description: 'padding (전체)', example: 'p: 2' },
      { prop: 'pt, pr, pb, pl', description: 'padding (top, right, bottom, left)', example: 'pb: 3' },
      { prop: 'px, py', description: 'padding (horizontal, vertical)', example: 'px: 4' },
      { prop: 'gap', description: 'flex/grid gap', example: 'gap: 2' },
    ];

    return (
      <>
        <DocumentTitle
          title="Basic Spacing"
          status="Available"
          note="8px grid spacing scale"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Basic Spacing (8px 그리드)
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            MUI의 기본 spacing 단위는 8px입니다. 숫자 값에 8을 곱하면 픽셀 값이 됩니다.
          </Typography>

          <Divider sx={ { mb: 4 } } />

          <SectionTitle title="Spacing Scale" description="theme.spacing() 함수의 스케일" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Value</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Pixel</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Visual</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Alias</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { spacingScale.map((row) => (
                  <TableRow key={ row.value }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.value }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.px }px</TableCell>
                    <TableCell>
                      <SpacingBox size={ row.px } />
                    </TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.label }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="SX Props" description="spacing에 사용 가능한 sx prop" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Prop</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Example</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { sxProps.map((row) => (
                  <TableRow key={ row.prop }>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 13 } }>{ row.prop }</TableCell>
                    <TableCell sx={ { color: 'text.secondary', fontSize: 13 } }>{ row.description }</TableCell>
                    <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>{ row.example }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="계산 규칙" />
          <TableContainer>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: '30%' } }>공식</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>pixel = value × 8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>예시</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>spacing(3) = 3 × 8 = 24px</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>소수점</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>spacing(0.5) = 0.5 × 8 = 4px</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>
    );
  },
};

/** 2. Semantic Spacing - 역할별 간격 */
export const SemanticSpacing = {
  name: '2. Semantic Spacing',
  render: () => {
    const insetTokens = [
      { token: 'inset.none', value: '0', px: '0px', pxNum: 0, usage: '패딩 없음' },
      { token: 'inset.sm', value: '2', px: '16px', pxNum: 16, usage: '작은 카드/컨테이너 내부 패딩' },
      { token: 'inset.md', value: '3', px: '24px', pxNum: 24, usage: '기본 카드/컨테이너 내부 패딩' },
      { token: 'inset.lg', value: '4', px: '32px', pxNum: 32, usage: '큰 카드/컨테이너 내부 패딩' },
    ];

    const gapTokens = [
      { token: 'gap.none', value: '0', px: '0px', pxNum: 0, usage: '간격 없음 (SplitScreen, LineGrid)' },
      { token: 'gap.xs', value: '0.5', px: '4px', pxNum: 4, usage: '아이콘-텍스트 간격 (Section, Title)' },
      { token: 'gap.sm', value: '1', px: '8px', pxNum: 8, usage: '인라인 요소 간격 (NavMenu, Indicator)' },
      { token: 'gap.md', value: '2', px: '16px', pxNum: 16, usage: '기본 그리드 간격 (SmartGrid, BentoGrid)' },
      { token: 'gap.lg', value: '3', px: '24px', pxNum: 24, usage: '카드 그리드 간격' },
      { token: 'gap.xl', value: '4', px: '32px', pxNum: 32, usage: '페이지 섹션 간격' },
    ];

    const sectionTokens = [
      { token: 'section.sm', value: '3', px: '24px', pxNum: 24, usage: 'SectionTitle 하단 마진' },
      { token: 'section.md', value: '4', px: '32px', pxNum: 32, usage: 'SectionTitle 상단 마진' },
      { token: 'section.lg', value: '6', px: '48px', pxNum: 48, usage: 'PageContainer 하단 패딩' },
    ];

    const pageTokens = [
      { token: 'page.gutter.xs', value: '2', px: '16px', pxNum: 16, usage: '모바일 페이지 좌우 여백' },
      { token: 'page.gutter.sm', value: '3', px: '24px', pxNum: 24, usage: '태블릿 페이지 좌우 여백' },
      { token: 'page.gutter.md', value: '4', px: '32px', pxNum: 32, usage: '데스크탑 페이지 좌우 여백' },
      { token: 'page.top', value: '8-12', px: '64-96px', pxNum: 64, usage: '페이지 상단 패딩' },
      { token: 'page.bottom', value: '4-6', px: '32-48px', pxNum: 32, usage: '페이지 하단 패딩' },
    ];

    const navTokens = [
      { token: 'nav.header', value: '-', px: '64px', pxNum: 64, usage: 'AppShell 헤더 높이' },
      { token: 'nav.drawer', value: '-', px: '280px', pxNum: 60, usage: 'AppShell 드로어 너비' },
      { token: 'nav.item.sm', value: '-', px: '6px 12px', pxNum: 12, usage: '작은 네비 아이템 패딩' },
      { token: 'nav.item.md', value: '-', px: '8px 16px', pxNum: 16, usage: '기본 네비 아이템 패딩' },
      { token: 'nav.item.lg', value: '-', px: '12px 20px', pxNum: 20, usage: '큰 네비 아이템 패딩' },
    ];

    const interactiveTokens = [
      { token: 'interactive.indicator', value: '1', px: '8px', pxNum: 8, usage: 'Indicator 컴포넌트 간격' },
      { token: 'interactive.arrow', value: '-', px: '8px', pxNum: 8, usage: 'ImageCarousel 화살표 위치' },
      { token: 'interactive.control', value: '2', px: '16px', pxNum: 16, usage: 'ImageCarousel 인디케이터 위치' },
    ];

    return (
      <>
        <DocumentTitle
          title="Semantic Spacing"
          status="Available"
          note="Role-based spacing tokens"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Semantic Spacing (역할별 간격)
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            간격에 의미와 역할을 부여한 토큰입니다. 컴포넌트에서 이 토큰을 참조합니다.
          </Typography>

          <SectionTitle title="컴포넌트 내부 간격" />

          <SemanticTokenGroup
            name="Inset"
            tokens={ insetTokens }
            description="카드, 컨테이너 등 컴포넌트의 내부 패딩"
          />

          <SemanticTokenGroup
            name="Gap"
            tokens={ gapTokens }
            description="Flex/Grid 레이아웃에서 자식 요소 간 간격"
          />

          <SectionTitle
            title="레이아웃 간격"
            description="페이지와 섹션 레벨의 간격을 정의합니다."
          />

          <SemanticTokenGroup
            name="Section"
            tokens={ sectionTokens }
            description="주요 콘텐츠 섹션 간의 수직 간격"
          />

          <SemanticTokenGroup
            name="Page"
            tokens={ pageTokens }
            description="페이지의 거터, 마진 등 레이아웃 레벨 간격"
          />

          <SectionTitle title="UI 요소 간격" />

          <SemanticTokenGroup
            name="Navigation"
            tokens={ navTokens }
            description="헤더, 드로어, 네비게이션 메뉴 등의 간격"
          />

          <SemanticTokenGroup
            name="Interactive"
            tokens={ interactiveTokens }
            description="인디케이터, 캐러셀 컨트롤 등 인터랙티브 UI 요소의 간격"
          />
        </PageContainer>
      </>
    );
  },
};

/** 3. Usage - 컴포넌트에서의 활용 */
export const Usage = {
  name: '3. Usage',
  render: () => (
    <>
      <DocumentTitle
        title="Spacing Usage"
        status="Available"
        note="Spacing application in components"
        brandName="Design System"
        systemName="Starter Kit"
        version="1.0"
      />
      <PageContainer>
        <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
          컴포넌트 적용 예시
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
          Semantic Spacing 토큰이 실제 컴포넌트에 어떻게 적용되는지 확인합니다.
        </Typography>

        <SectionTitle
          title="Inset - 컴포넌트 내부 패딩"
          description="CardContainer, CustomCard 등에서 사용"
        />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            borderRadius: 1,
            mb: 4,
          } }
        >
{ `// inset.md = p: 3 (24px)
<Card sx={{ p: 3 }}>
  <CardContent sx={{ p: 2 }}>  {/* inset.sm = 16px */}
    Content
  </CardContent>
</Card>

// 큰 컨테이너
<Container sx={{ p: 4 }}>  {/* inset.lg = 32px */}
  Content
</Container>` }
        </Box>

        <SectionTitle
          title="Gap - Flex/Grid 레이아웃"
          description="SmartGrid, BentoGrid, Stack 등에서 사용"
        />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            borderRadius: 1,
            mb: 4,
          } }
        >
{ `// gap.md = spacing: 2 (16px)
<Grid container spacing={2}>
  <Grid size={{ xs: 6 }}><Item /></Grid>
  <Grid size={{ xs: 6 }}><Item /></Grid>
</Grid>

// gap.sm = spacing: 1 (8px)
<Stack direction="row" spacing={1}>
  <Button>A</Button>
  <Button>B</Button>
</Stack>

// Flex gap
<Box sx={{ display: 'flex', gap: 2 }}>  {/* 16px */}
  <Item /><Item />
</Box>` }
        </Box>

        <SectionTitle
          title="Section - 섹션 간 수직 간격"
          description="SectionTitle, 콘텐츠 블록 간격에서 사용"
        />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            borderRadius: 1,
            mb: 4,
          } }
        >
{ `// section.md = mt: 4 (32px), section.sm = mb: 3 (24px)
<Box sx={{ mt: 4, mb: 3 }}>
  <SectionTitle title="섹션 제목" />
</Box>

// 섹션 구분
<Box sx={{ py: 6 }}>  {/* section.lg = 48px */}
  <SectionContent />
</Box>` }
        </Box>

        <SectionTitle
          title="Page - 반응형 페이지 레이아웃"
          description="PageContainer, 반응형 레이아웃에서 사용"
        />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            borderRadius: 1,
            mb: 4,
          } }
        >
{ `// 반응형 page.gutter
<Box sx={{
  px: { xs: 2, sm: 3, md: 4 },  {/* 16px → 24px → 32px */}
  pt: { xs: 8, md: 12 },        {/* page.top: 64px → 96px */}
  pb: { xs: 4, md: 6 },         {/* page.bottom: 32px → 48px */}
}}>
  <PageContent />
</Box>` }
        </Box>

        <SectionTitle
          title="Navigation - 네비게이션 요소"
          description="AppShell, NavMenu에서 사용"
        />
        <Box
          component="pre"
          sx={ {
            backgroundColor: 'grey.100',
            p: 2,
            fontSize: 12,
            fontFamily: 'monospace',
            overflow: 'auto',
            borderRadius: 1,
          } }
        >
{ `// nav.header = 64px
<AppBar sx={{ height: 64 }}>
  <Toolbar />
</AppBar>

// nav.drawer = 280px
<Drawer sx={{ width: 280 }}>
  <NavMenu />
</Drawer>

// nav.item.md = 8px 16px
<MenuItem sx={{ py: 1, px: 2 }}>
  Menu Item
</MenuItem>` }
        </Box>
      </PageContainer>
    </>
  ),
};
