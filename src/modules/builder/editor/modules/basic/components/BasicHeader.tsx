import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabTitles,
}: {
  activeTab: number;
  changeActiveTab: (event: React.SyntheticEvent, activeTab: number) => void;
  tabTitles: string[];
}) => {
  return (
    <Tabs
      value={activeTab}
      onChange={changeActiveTab}
      variant="fullWidth"
      sx={{
        '& .MuiTab-root': {
          color: 'rgba(255, 255, 255, 0.7)',
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          '&.Mui-selected': {
            color: 'rgba(255, 255, 255, 0.95)',
          },
          '&:hover': {
            color: 'rgba(255, 255, 255, 0.85)',
          },
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        },
      }}
    >
      {tabTitles.map((title: string, index: number) => (
        <Tab key={index} label={title} />
      ))}
    </Tabs>
  );
};

export default BasicHeader;
