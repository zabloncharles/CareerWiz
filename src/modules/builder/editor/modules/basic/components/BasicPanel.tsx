import React, { Fragment } from 'react';
import Box from '@mui/material/Box';
import Contacts from './Contacts';
import Links from './Links';
import About from './About';

const BasicPanel = ({
  activeTab,
  basicTabs,
  onChangeText,
}: {
  activeTab: number;
  basicTabs: any;
  onChangeText: any;
}) => {
  const onChangeHandler = (value: any, key: string) => {
    const updatedTabs = { ...basicTabs };
    updatedTabs[key] = value;
    onChangeText(updatedTabs);
  };

  return (
    <Fragment>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { margin: '0.75rem 0' },
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '& .MuiTextField-root': {
            '& .MuiFilledInput-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
              '&.Mui-focused': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            },
          },
        }}
        noValidate
        autoComplete="off"
      >
        {activeTab == 0 && (
          <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler}></Contacts>
        )}
        {activeTab == 1 && <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler}></Links>}
        {activeTab == 2 && <About basicTabs={basicTabs} onChangeHandler={onChangeHandler}></About>}
      </Box>
    </Fragment>
  );
};

export default BasicPanel;
