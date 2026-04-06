import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
  TreeNode,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Project Summary',
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => {
    const siteMap = {
      '/ (Landing Page)': {
        'TopSection': {
          'HeroSection': '브랜드명 + 태그라인 + 무드보드 이미지 (Day/Night 크로스페이드)',
          'BrandValueSection': '3가지 핵심 가치 (Immanence, Continuity, Flexibility)',
        },
        'ProductShowcase': {
          'TimelineSlider': '시간대 선택 (12pm → 12am)',
          'ProductGallery': '타입별 필터 + 제품 그리드 (20개)',
        },
      },
      '/product/:id (Product Detail)': {
        'ProductDetailSection': {
          'ProductHeroTemplate': '제품 스펙 카드 3개',
          'ProductInfoTemplate': '메타 정보 + 옵션 선택 + 장바구니 추가',
          'ProductImageViewer': 'Day/Night 블렌딩 이미지 + 타임라인',
        },
        'CartDrawer': '장바구니 슬라이드 패널',
      },
      '/checkout (Checkout)': {
        'CheckoutSection': {
          'ExpressCheckout': 'Shop Pay / Google Pay',
          'ContactForm': '이메일 + 뉴스레터 수신',
          'ShippingForm': '배송지 입력',
          'OrderSummary': '주문 요약 + 결제',
        },
      },
    };

    return (
      <>
        <DocumentTitle
          title="Project Summary"
          status="Available"
          note="Lumenstate 브랜드 웹사이트 프로젝트 요약"
          brandName="Lumenstate"
          systemName="Brand Guide"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Lumenstate
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            환경 반응형 조명 브랜드 Lumenstate의 e-commerce 웹사이트 프로젝트
          </Typography>

          {/* 브랜드 컨셉 */}
          <SectionTitle title="Brand Concept" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: 160 } }>브랜드명</TableCell>
                  <TableCell>Lumenstate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>태그라인</TableCell>
                  <TableCell>Light defines the space.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>카테고리</TableCell>
                  <TableCell>프리미엄 건축 조명 (환경 반응형)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>핵심 기능</TableCell>
                  <TableCell>타임라인 기반 조도/색온도 Day↔Night 자동 전환</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>제품 수</TableCell>
                  <TableCell>20개 (Ceiling, Stand, Wall, Desk)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* 브랜드 가치 */}
          <SectionTitle title="Brand Value" description="3가지 핵심 가치" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>가치</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>English</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Immanence</TableCell>
                  <TableCell>Light quietly residing within the space.</TableCell>
                  <TableCell>공간에 스며드는 은은한 빛</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Continuity</TableCell>
                  <TableCell>Seamless & natural day to night flow.</TableCell>
                  <TableCell>자연스러운 낮→밤 전환</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Flexibility</TableCell>
                  <TableCell>Auto by default, precise on demand.</TableCell>
                  <TableCell>자동화 + 수동 정밀 제어</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={ { my: 3 } } />

          {/* 비주얼 디렉션 */}
          <SectionTitle title="Visual Direction" />
          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            Color — 4색 팔레트 (그래디언트/글로우/블러 금지)
          </Typography>
          <TableContainer sx={ { mb: 3 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>색상</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Hex</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box sx={ { width: 14, height: 14, bgcolor: '#F5F2EE', border: '1px solid', borderColor: 'divider', borderRadius: '2px' } } />
                      Wall Tint White
                    </Box>
                  </TableCell>
                  <TableCell><code>#F5F2EE</code></TableCell>
                  <TableCell>라이트 모드 배경</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box sx={ { width: 14, height: 14, bgcolor: '#F2E9DA', border: '1px solid', borderColor: 'divider', borderRadius: '2px' } } />
                      3800K White
                    </Box>
                  </TableCell>
                  <TableCell><code>#F2E9DA</code></TableCell>
                  <TableCell>다크 모드 텍스트</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box sx={ { width: 14, height: 14, bgcolor: '#12100E', border: '1px solid', borderColor: 'divider', borderRadius: '2px' } } />
                      Warm Black
                    </Box>
                  </TableCell>
                  <TableCell><code>#12100E</code></TableCell>
                  <TableCell>다크 모드 배경 / 라이트 모드 텍스트</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Box sx={ { display: 'flex', alignItems: 'center', gap: 1 } }>
                      <Box sx={ { width: 14, height: 14, bgcolor: '#FFC66E', border: '1px solid', borderColor: 'divider', borderRadius: '2px' } } />
                      3800K Accent
                    </Box>
                  </TableCell>
                  <TableCell><code>#FFC66E</code></TableCell>
                  <TableCell>CTA, 링크, 포커스</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Stack direction="row" spacing={ 1 } sx={ { mb: 4, flexWrap: 'wrap', gap: 1 } }>
            <Chip label="Display: Cormorant Garamond" size="small" variant="outlined" />
            <Chip label="Body: Pretendard Variable" size="small" variant="outlined" />
            <Chip label="Icon: lucide-react (1.5px)" size="small" variant="outlined" />
          </Stack>

          <Divider sx={ { my: 3 } } />

          {/* 정보 구조 (사이트맵) */}
          <SectionTitle title="Information Architecture" description="사이트맵 — 3개 페이지, 섹션별 구성" />
          <Box sx={ { p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, mb: 4 } }>
            <Box sx={ { fontFamily: 'monospace' } }>
              { Object.entries(siteMap).map(([key, value]) => (
                <TreeNode
                  key={ key }
                  keyName={ key }
                  value={ value }
                  depth={ 0 }
                  defaultOpen={ true }
                />
              )) }
            </Box>
          </Box>

          {/* 타임라인 시스템 */}
          <SectionTitle title="Timeline System" description="핵심 인터랙션 — 타임라인 값(0~1)에 따른 전환" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>시간</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Timeline</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>모드</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Lux</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Kelvin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>12:00pm</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>0.00</TableCell>
                  <TableCell>Light</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>480</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>4400K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4:00pm</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>0.33</TableCell>
                  <TableCell>Light</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>380</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>3800K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>8:00pm</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>0.67</TableCell>
                  <TableCell>Dark</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>180</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>3200K</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:00am</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>1.00</TableCell>
                  <TableCell>Dark</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>80</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>2700K</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={ { my: 3 } } />

          {/* 에셋 현황 */}
          <SectionTitle title="Assets" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>에셋</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>수량</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>경로</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>제품 이미지 (Day/Night)</TableCell>
                  <TableCell>40개 (20 x 2)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/assets/product/</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>무드보드 이미지 (Day/Night)</TableCell>
                  <TableCell>10개 (5 x 2)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/assets/brand-mood/</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* 기술 스택 */}
          <SectionTitle title="Tech Stack" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600, width: 160 } }>React</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>19.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>MUI (Material UI)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>7.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Vite</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>7.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>Storybook</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>10.x</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          {/* 데이터 소스 */}
          <SectionTitle title="Data Sources" description="콘텐츠 관리 파일" />
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>파일</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>내용</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/data/content.js</TableCell>
                  <TableCell>브랜드명, 메뉴, 히어로, 브랜드 가치, 푸터</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/data/products.js</TableCell>
                  <TableCell>20개 제품 데이터 (이름, 설명, 스펙, 옵션)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/styles/theme.js</TableCell>
                  <TableCell>4색 팔레트, 타이포그래피, 간격 토큰</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={ { fontFamily: 'monospace', fontSize: 12 } }>src/hooks/useTimeline.jsx</TableCell>
                  <TableCell>타임라인 상태 (0~1), 시간대 보간</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </PageContainer>
      </>
    );
  },
};
