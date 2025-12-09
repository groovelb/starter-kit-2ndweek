import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CollectionDropdown } from '../../../components/input/CollectionDropdown';

export default {
  title: 'Custom Component/Input/CollectionDropdown',
  component: CollectionDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## CollectionDropdown

무드보드 선택 드롭다운 컴포넌트.

### 기능
- 기존 컬렉션 선택
- 새 컬렉션 생성
- contained, outlined, text 변형 지원
        `,
      },
    },
  },
};

/**
 * CollectionDropdown 기본 사용 예시
 */
export const Default = {
  render: () => {
    const [selected, setSelected] = useState(null);

    const collections = [
      { id: '1', name: 'Tech Product Shots', count: 24 },
      { id: '2', name: 'Summer Campaign', count: 18 },
      { id: '3', name: 'Brand Identity', count: 42 },
      { id: '4', name: 'UI References', count: 31 },
    ];

    return (
      <Box sx={{ maxWidth: 300 }}>
        <CollectionDropdown
          collections={collections}
          selectedId={selected}
          onSelect={setSelected}
          onCreate={(name) => console.log('Create:', name)}
        />
        {selected && (
          <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
            Selected: {collections.find((c) => c.id === selected)?.name}
          </Typography>
        )}
      </Box>
    );
  },
};

/**
 * CollectionDropdown 변형
 */
export const Variants = {
  render: () => {
    const collections = [
      { id: '1', name: 'Moodboard A', count: 12 },
      { id: '2', name: 'Moodboard B', count: 8 },
    ];

    return (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Add to Board"
          variant="contained"
        />
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Select Board"
          variant="outlined"
        />
        <CollectionDropdown
          collections={collections}
          onSelect={(id) => console.log('Selected:', id)}
          buttonLabel="Choose"
          variant="text"
          size="small"
        />
      </Box>
    );
  },
};
