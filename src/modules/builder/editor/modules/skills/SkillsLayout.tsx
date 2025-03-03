import React, { useState } from 'react';
import { Box } from '@mui/material';
import {
  useLanguages,
  useFrameworks,
  useTechnologies,
  useLibraries,
  useDatabases,
  usePractices,
  useTools,
} from 'src/stores/skills';
import Skill from './components/Skill';

const SkillsLayout = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const skillStores = [
    useLanguages(),
    useFrameworks(),
    useTechnologies(),
    useLibraries(),
    useDatabases(),
    usePractices(),
    useTools(),
  ];

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="space-y-6">
      {skillStores.map((store) => (
        <Box key={store.title} className="bg-white/5 rounded-lg p-6">
          <Skill
            items={store.values}
            addItem={store.add}
            removeItem={store.remove}
            setItems={store.reset}
            hasLevel={store.hasLevel}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SkillsLayout;
