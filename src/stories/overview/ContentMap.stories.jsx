import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
  TreeNode,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Content Map',
  parameters: {
    layout: 'padded',
  },
};

export const Doc = {
  render: () => {
    const contentStructure = {
      brand: {
        name: 'Lumenstate',
        tagline: 'Light defines the space.',
      },
      navigation: {
        menuItems: [
          '{ id: "brand", label: "Brand", path: "/brand" }',
          '{ id: "collection", label: "Collection", path: "/collection" }',
          '{ id: "shop", label: "Shop", path: "/shop" }',
        ],
      },
      hero: {
        title: 'Lumenstate',
        subtitle: 'Light defines the space.',
        moodboard: {
          hero: 'arc-lamp-living.png (Day)',
          heroNight: 'arc-lamp-living-night.png (Night)',
          side: 'arch-light-gallery.png (Day)',
          sideNight: 'arch-light-gallery-night.png (Night)',
          sideAlt: 'Arch light in gallery space',
          gallery: [
            '{ src: archLightGallery, srcNight: ...Night, alt: "Arch light in gallery space" }',
            '{ src: splitDiscMeditation, srcNight: ...Night, alt: "Split disc in meditation room" }',
            '{ src: capsuleLampLoft, srcNight: ...Night, alt: "Capsule lamp in loft workspace" }',
          ],
        },
      },
      brandValue: {
        features: [
          '{ id: "immanence", icon: "CircleDot", title: "Immanence" }',
          '{ id: "continuity", icon: "Repeat", title: "Continuity" }',
          '{ id: "flexibility", icon: "Activity", title: "Flexibility" }',
        ],
      },
      products: {
        sectionTitle: 'Product Showcase',
        sectionSubtitle: 'Explore brightness and color temperature changes throughout the day',
      },
      footer: {
        copyright: '© 2025 Lumenstate. All rights reserved.',
      },
    };

    return (
      <>
        <DocumentTitle
          title="Content Map"
          status="Available"
          note="content.js 데이터 구조와 컴포넌트 바인딩"
          brandName="Lumenstate"
          systemName="Brand Guide"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Content Map
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 1 } }>
            <code>src/data/content.js</code>의 전체 데이터 구조와 각 키가 바인딩되는 컴포넌트
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 4 } }>
            모든 텍스트 콘텐츠와 이미지 참조는 이 파일에서 중앙 관리됩니다.
          </Typography>

          {/* Tree Structure */}
          <SectionTitle title="content.js 트리 구조" />
          <Box sx={ { p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1, mb: 4 } }>
            <Box sx={ { fontFamily: 'monospace' } }>
              { Object.entries(contentStructure).map(([key, value]) => (
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

          <Divider sx={ { my: 3 } } />

          {/* Moodboard Asset Mapping */}
          <SectionTitle title="Moodboard 에셋 매핑" description="hero.moodboard에서 import하는 Day/Night 이미지 쌍" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>용도</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Day 파일</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Night 파일</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>제품</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Hero 메인</TableCell>
                  <TableCell><code>arc-lamp-living.png</code></TableCell>
                  <TableCell><code>arc-lamp-living-night.png</code></TableCell>
                  <TableCell>Parabolic arc floor lamp (#2)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hero 사이드</TableCell>
                  <TableCell><code>arch-light-gallery.png</code></TableCell>
                  <TableCell><code>arch-light-gallery-night.png</code></TableCell>
                  <TableCell>Arch portal wall light (#11)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gallery [0]</TableCell>
                  <TableCell><code>arch-light-gallery.png</code></TableCell>
                  <TableCell><code>arch-light-gallery-night.png</code></TableCell>
                  <TableCell>Arch portal wall light (#11)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gallery [1]</TableCell>
                  <TableCell><code>split-disc-meditation.png</code></TableCell>
                  <TableCell><code>split-disc-meditation-night.png</code></TableCell>
                  <TableCell>Split disc wall light (#8)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gallery [2]</TableCell>
                  <TableCell><code>capsule-lamp-loft.png</code></TableCell>
                  <TableCell><code>capsule-lamp-loft-night.png</code></TableCell>
                  <TableCell>Capsule floor lamp (#18)</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="caption" color="text.secondary" sx={ { display: 'block', mb: 4 } }>
            에셋 경로: <code>src/assets/brand-mood/</code> | 생성: <code>generate-product-images.mjs</code> MOODBOARD_SCENES
          </Typography>

          <Divider sx={ { my: 3 } } />

          {/* Brand Value Data */}
          <SectionTitle title="Brand Value 데이터" description="brandValue.features — 3가지 핵심 가치" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>ID</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Icon</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Title</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>immanence</TableCell>
                  <TableCell>CircleDot</TableCell>
                  <TableCell>Immanence</TableCell>
                  <TableCell>Light quietly residing within the space.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>continuity</TableCell>
                  <TableCell>Repeat</TableCell>
                  <TableCell>Continuity</TableCell>
                  <TableCell>Seamless & natural day to night flow.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>flexibility</TableCell>
                  <TableCell>Activity</TableCell>
                  <TableCell>Flexibility</TableCell>
                  <TableCell>Auto by default, precise on demand.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={ { my: 3 } } />

          {/* Import Structure */}
          <SectionTitle title="Import 구조" description="content.js가 이미지를 import하는 방식" />
          <Box sx={ { p: 2, bgcolor: 'grey.50', borderRadius: 1, mb: 4 } }>
            <Typography variant="body2" sx={ { fontFamily: 'monospace', whiteSpace: 'pre-line', fontSize: '12px', lineHeight: 1.8 } }>
              { `// Day 이미지
import arcLampLiving from '../assets/brand-mood/arc-lamp-living.png';
import columnLampStudio from '../assets/brand-mood/column-lamp-studio.png';
import archLightGallery from '../assets/brand-mood/arch-light-gallery.png';
import splitDiscMeditation from '../assets/brand-mood/split-disc-meditation.png';
import capsuleLampLoft from '../assets/brand-mood/capsule-lamp-loft.png';

// Night 이미지 (같은 파일명 + "-night" suffix)
import arcLampLivingNight from '../assets/brand-mood/arc-lamp-living-night.png';
...` }
            </Typography>
          </Box>
        </PageContainer>
      </>
    );
  },
};
