import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

/**
 * PageContainer
 *
 * 페이지의 메인 콘텐츠를 감싸는 컨테이너입니다.
 * xl(1536px) 이하에서는 반응형 좌우 패딩이 적용되며, 화면 중앙에 정렬됩니다.
 * Stack을 사용하여 children 간의 간격을 조정할 수 있습니다.
 *
 * @param {node} children - 콘텐츠
 * @param {string|bool} maxWidth - 최대 너비 (xs, sm, md, lg, xl, false) [Default: 'xl']
 * @param {boolean} disableGutters - 좌우 패딩 비활성화 여부 [Default: false]
 * @param {number|object} spacing - children 간의 간격 (MUI spacing 단위) [Default: 0]
 * @param {object} sx - 추가 스타일
 */
export const PageContainer = ({
  children,
  maxWidth = 'xl',
  disableGutters = false,
  spacing = 6,
  sx,
  ...props
}) => {
  return (
    <Container
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      {...props}
    >
      <Stack
        spacing={spacing}
        sx={sx}
      >
        {children}
      </Stack>
    </Container>
  );
};

