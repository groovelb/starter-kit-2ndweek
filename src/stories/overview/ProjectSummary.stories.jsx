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
import {
  DocumentTitle,
  PageContainer,
  SectionTitle,
} from '../../components/storybookDocumentation';

export default {
  title: 'Overview/Project Summary',
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: () => {
    return (
      <>
        <DocumentTitle
          title="Project Summary"
          status="Available"
          note="Starter Kit Basic overview and guidelines"
          brandName="Design System"
          systemName="Starter Kit"
          version="1.0"
        />
        <PageContainer>
          <Typography variant="h4" sx={ { fontWeight: 700, mb: 1 } }>
            Starter Kit Basic
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={ { mb: 4 } }>
            React + MUI + Storybook 환경을 디자이너에게 마치 디자인 툴처럼 사용할 수 있도록 도와주는 개발 환경입니다.
          </Typography>

          <SectionTitle title="핵심 목적" />
          <Stack spacing={ 2 } sx={ { mb: 4 } }>
            <Box>
              <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                1. UI 컴포넌트 체계적 관리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                재사용 가능한 컴포넌트를 Storybook으로 문서화
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                2. 디자인 톤 일관성 유지
              </Typography>
              <Typography variant="body2" color="text.secondary">
                색상, 타이포그래피, 스타일을 중앙에서 관리
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" sx={ { fontWeight: 600 } }>
                3. 로직과 UI 분리
              </Typography>
              <Typography variant="body2" color="text.secondary">
                제품의 비즈니스 로직과 UI 디자인 작업을 명확히 분리
              </Typography>
            </Box>
          </Stack>

          <SectionTitle title="대상 사용자" />
          <Stack direction="row" spacing={ 1 } sx={ { mb: 4 } }>
            <Chip label="디자이너" variant="outlined" />
            <Chip label="개발자" variant="outlined" />
          </Stack>
          <Typography variant="body2" color="text.secondary" sx={ { mb: 4 } }>
            디자이너는 Storybook을 통해 컴포넌트를 시각적으로 탐색하고 테스트하며,
            개발자는 체계적인 컴포넌트 구조와 스타일 가이드를 활용하여 개발합니다.
          </Typography>

          <SectionTitle title="기술 스택" />
          <TableContainer sx={ { mb: 4 } }>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>기술</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>버전</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>React</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>19.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>MUI (Material UI)</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>7.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Vite</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>7.x</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storybook</TableCell>
                  <TableCell sx={ { fontFamily: 'monospace' } }>10.x</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <SectionTitle title="중요 규칙" />

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            컴포넌트 작성
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 3 } }>
            <li>
              <Typography variant="body2">모든 UI 컴포넌트는 MUI 기반으로 작성</Typography>
            </li>
            <li>
              <Typography variant="body2">스타일링은 MUI의 <code>sx</code> prop 사용</Typography>
            </li>
            <li>
              <Typography variant="body2">컴포넌트는 독립적이고 재사용 가능하게 설계</Typography>
            </li>
          </Box>

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            스토리 작성
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 3 } }>
            <li>
              <Typography variant="body2">모든 컴포넌트는 Storybook 스토리와 함께 작성</Typography>
            </li>
            <li>
              <Typography variant="body2">디자이너가 이해하기 쉬운 명확한 설명 포함</Typography>
            </li>
            <li>
              <Typography variant="body2">Props 변형을 시각적으로 확인할 수 있도록 구성</Typography>
            </li>
          </Box>

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            디자인 시스템
          </Typography>
          <Box component="ul" sx={ { pl: 2, mb: 3 } }>
            <li>
              <Typography variant="body2">색상, 타이포그래피는 테마 파일에서 중앙 관리</Typography>
            </li>
            <li>
              <Typography variant="body2">일관된 spacing, elevation, borderRadius 적용</Typography>
            </li>
            <li>
              <Typography variant="body2">Style 섹션에서 디자인 토큰 문서화</Typography>
            </li>
          </Box>

          <Typography variant="subtitle2" sx={ { fontWeight: 600, mb: 1 } }>
            작업 분리 원칙
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={ { fontWeight: 600 } }>레이어</TableCell>
                  <TableCell sx={ { fontWeight: 600 } }>설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>UI 레이어</TableCell>
                  <TableCell>순수 프레젠테이션 컴포넌트 (로직 없음)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>로직 레이어</TableCell>
                  <TableCell>비즈니스 로직, 상태 관리, API 호출</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="caption" color="text.secondary" sx={ { mt: 1, display: 'block' } }>
            Storybook에서는 UI 레이어만 다룹니다.
          </Typography>
        </PageContainer>
      </>
    );
  },
};
