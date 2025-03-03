import React from 'react';
import { useTemplates } from 'src/stores/useTemplate';
import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { motion } from 'framer-motion';

const TemplateSelect = () => {
  const activeTemplate = useTemplates((state) => state.activeTemplate);
  const setTemplate = useTemplates((state) => state.setTemplate);

  const handleTemplateChange = (event: SelectChangeEvent) => {
    const newTemplateId = event.target.value;
    setTemplate(AVAILABLE_TEMPLATES[newTemplateId]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[300px] bg-[#1A1B3D] rounded-lg border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl"
    >
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        <FormControl variant="filled" fullWidth>
          <InputLabel>Template</InputLabel>
          <Select value={activeTemplate.id || ''} onChange={handleTemplateChange}>
            {Object.entries(AVAILABLE_TEMPLATES).map(([id, template]) => (
              <MenuItem key={id} value={id}>
                {template.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </motion.div>
  );
};

export default TemplateSelect;
