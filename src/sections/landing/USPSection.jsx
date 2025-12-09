import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import { landingContent, demoData } from '../../data/landingContent.js';
import { FilterBar } from '../../components/templates/FilterBar.jsx';
import { MoodboardCard } from '../../components/card/MoodboardCard.jsx';
import { ImageCard } from '../../components/card/ImageCard.jsx';
import { FileDropzone } from '../../components/input/FileDropzone.jsx';

/**
 * USPSection 컴포넌트
 *
 * MUSE의 핵심 기능을 실제 컴포넌트 데모와 함께 설명하는 섹션.
 * 각 USP 항목은 좌우 교차 레이아웃으로 배치.
 *
 * 동작 방식:
 * 1. 섹션 타이틀과 서브타이틀 표시
 * 2. 각 USP 항목에 대해 설명 텍스트 + 실제 컴포넌트 데모 렌더링
 * 3. 홀수/짝수 인덱스에 따라 좌우 레이아웃 교차
 *
 * Props:
 * @param {object} sx - 추가 스타일 오버라이드 [Optional]
 *
 * Example usage:
 * <USPSection />
 */
function USPSection({ sx }) {
  const { sectionTitle, sectionSubtitle, items } = landingContent.usp;

  // FilterBar 데모용 상태
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState(demoData.selectedTags);

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  /**
   * 각 USP 항목에 해당하는 컴포넌트 데모 렌더링
   */
  const renderComponentDemo = (componentName) => {
    switch (componentName) {
      case 'UploadModal':
        return (
          <Box
            sx={{
              width: '100%',
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              p: 3,
            }}
          >
            <FileDropzone
              onFilesSelected={() => {}}
              acceptedTypes={['image/*']}
              maxFiles={5}
              maxSizeMB={10}
            />
          </Box>
        );

      case 'FilterBar':
        return (
          <Box
            sx={{
              width: '100%',
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              p: 3,
            }}
          >
            <FilterBar
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              availableTags={demoData.availableTags}
              selectedTags={selectedTags}
              onTagToggle={handleTagToggle}
              resultCount={42}
            />

            {/* 미니 이미지 그리드 프리뷰 */}
            <Grid container spacing={1} sx={{ mt: 2 }}>
              {demoData.galleryImages.slice(0, 4).map((img, idx) => (
                <Grid key={idx} size={{ xs: 6, sm: 3 }}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.title}
                    sx={{
                      width: '100%',
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        );

      case 'Moodboard':
        return (
          <Grid container spacing={2}>
            {demoData.moodboards.map((board) => (
              <Grid key={board.id} size={{ xs: 12, sm: 6 }}>
                <MoodboardCard
                  id={board.id}
                  name={board.name}
                  description={board.description}
                  items={board.items}
                  createdAt={board.createdAt}
                />
              </Grid>
            ))}
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: 'grey.50',
        ...sx,
      }}
    >
      <Container maxWidth="xl">
        {/* 섹션 헤더 */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.15em',
              display: 'block',
              mb: 2,
            }}
          >
            Features
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '-0.02em',
              mb: 2,
            }}
          >
            {sectionTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            {sectionSubtitle}
          </Typography>
        </Box>

        {/* USP 항목들 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 10, md: 16 } }}>
          {items.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: item.layoutReverse ? 'row-reverse' : 'row',
                },
                alignItems: 'center',
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* 텍스트 콘텐츠 */}
              <Box
                sx={{
                  flex: 1,
                  maxWidth: { md: 480 },
                }}
              >
                {/* 넘버 + 서브타이틀 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"Outfit", sans-serif',
                      fontSize: '4rem',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: 'grey.200',
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        display: 'block',
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Outfit", sans-serif',
                        fontWeight: 800,
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>

                {/* 설명 */}
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3,
                  }}
                >
                  {item.description}
                </Typography>

                {/* 상세 기능 목록 */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  {item.details.map((detail, idx) => (
                    <Chip
                      key={idx}
                      icon={
                        <Icon sx={{ fontSize: '16px !important' }}>check_circle</Icon>
                      }
                      label={detail}
                      size="small"
                      sx={{
                        bgcolor: 'white',
                        border: '1px solid',
                        borderColor: 'divider',
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: 'success.main',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* 컴포넌트 데모 */}
              <Box
                sx={{
                  flex: 1,
                  width: '100%',
                  maxWidth: { md: 600 },
                }}
              >
                {renderComponentDemo(item.component)}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default USPSection;
