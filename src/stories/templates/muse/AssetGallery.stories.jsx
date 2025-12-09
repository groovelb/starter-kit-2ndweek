import { AssetGallery } from '../../../sections';
import museDataStore from '../../../data/museDataStore';

export default {
  title: 'Template/MUSE/Section/AssetGallery',
  component: AssetGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## AssetGallery

에셋을 Masonry 레이아웃으로 표시하는 갤러리 섹션 컴포넌트.

### 역할
- 이미지/비디오 에셋을 Masonry 그리드로 표시
- 각 카드에 Fade 애니메이션 적용
- 에셋이 없을 경우 EmptyState 자동 표시
- 클릭, 좋아요, 무드보드 추가 이벤트 처리

### 사용 위치
- ArchivePage: 필터링된 에셋 목록 표시
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const assets = museDataStore.getAssets().slice(0, 6);

    return (
      <AssetGallery
        assets={assets}
        viewMode="grid"
        onAssetClick={(asset) => console.log('Click:', asset.title)}
        onLike={(id) => console.log('Like:', id)}
        onAddToBoard={(asset) => console.log('Add:', asset.title)}
      />
    );
  },
};
