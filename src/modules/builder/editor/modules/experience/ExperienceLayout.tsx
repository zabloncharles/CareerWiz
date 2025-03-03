import React from 'react';
import { useExperiences } from 'src/stores/experience';
import Experience from './components/Experience';
import { Box, IconButton } from '@mui/material';
import { MdDelete, MdArrowUpward, MdArrowDownward } from 'react-icons/md';

const ExperienceLayout = () => {
  const allWorks = useExperiences((state) => state.experiences);
  const removeExperience = useExperiences((state) => state.remove);
  const onMoveUp = useExperiences((state) => state.onmoveup);
  const onMoveDown = useExperiences((state) => state.onmovedown);

  return (
    <Box className="space-y-8">
      {allWorks.map((work, index) => (
        <Box key={index} className="relative p-6 bg-white/5 rounded-lg">
          <div className="absolute right-4 top-4 flex gap-2">
            {index > 0 && (
              <IconButton
                size="small"
                onClick={() => onMoveUp(index)}
                className="text-gray-400 hover:text-white"
              >
                <MdArrowUpward />
              </IconButton>
            )}
            {index < allWorks.length - 1 && (
              <IconButton
                size="small"
                onClick={() => onMoveDown(index)}
                className="text-gray-400 hover:text-white"
              >
                <MdArrowDownward />
              </IconButton>
            )}
            <IconButton
              size="small"
              onClick={() => removeExperience(index)}
              className="text-gray-400 hover:text-red-500"
            >
              <MdDelete />
            </IconButton>
          </div>
          <Experience experienceInfo={work} index={index} />
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceLayout;
