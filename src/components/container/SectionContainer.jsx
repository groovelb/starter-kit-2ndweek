import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

/**
 * SectionContainer
 *
 * 페이지 내의 각 섹션을 구분하는 컨테이너입니다.
 * 기본적으로 100% 너비를 가지며, 상하 여백(py)을 제공합니다.
 * Stack을 사용하여 children 간의 간격을 조정할 수 있습니다.
 *
 * @param {node} children - 콘텐츠
 * @param {number|object} spacing - children 간의 간격 (MUI spacing 단위) [Default: 0]
 * @param {object} sx - 추가 스타일
 */
export const SectionContainer = ({ children, spacing = { xs: 4, md: 8 }, sx, ...props }) => {
  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
      }}
      {...props}
    >
      <Stack
        spacing={spacing}
        sx={sx}
      >
        {children}
      </Stack>
    </Box>
  );
};

