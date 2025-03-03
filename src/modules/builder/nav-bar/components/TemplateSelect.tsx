import { MenuItem } from '@mui/material';
import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { useTemplates } from 'src/stores/useTemplate';
import { motion } from 'framer-motion';

export const TemplateSelect = () => {
  const templateId = useTemplates((state) => state.activeTemplate.id);

  const handleTemplateChange = (newTemplateId: string) => {
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[newTemplateId]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-[300px] bg-[#1A1B3D] rounded-lg border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl"
    >
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {Object.entries(AVAILABLE_TEMPLATES).map(([id, template]) => (
          <div
            key={id}
            onClick={() => handleTemplateChange(id)}
            className={`px-4 py-3 cursor-pointer transition-colors duration-200 flex items-center justify-between ${
              id === templateId ? 'bg-white/10' : 'hover:bg-white/5'
            }`}
          >
            <span className="text-white/90">{template.name}</span>
            {id === templateId && (
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        ))}
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
