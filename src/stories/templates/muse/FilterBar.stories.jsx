import { useState } from 'react';
import { FilterBar } from '../../../components/templates/FilterBar';

export default {
  title: 'Template/MUSE/Template/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## FilterBar

검색 및 필터링 바 템플릿 컴포넌트.

### 역할
- 키워드 검색
- 태그 기반 필터링
- 정렬 옵션 (최신순, 오래된순, 이름순)
- 뷰 모드 전환 (그리드/리스트)
- 필터 초기화

### 사용 위치
- ArchivePage: 에셋 목록 상단 필터 영역
        `,
      },
    },
  },
};

export const Default = {
  render: () => {
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const [sort, setSort] = useState('newest');
    const [view, setView] = useState('grid');

    return (
      <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        availableTags={['abstract', 'illustration', 'photography', 'typography']}
        selectedTags={tags}
        onTagToggle={(t) => setTags((p) => p.includes(t) ? p.filter((x) => x !== t) : [...p, t])}
        onClearFilters={() => { setSearch(''); setTags([]); }}
        sortBy={sort}
        onSortChange={setSort}
        viewMode={view}
        onViewModeChange={setView}
        resultCount={42}
      />
    );
  },
};
