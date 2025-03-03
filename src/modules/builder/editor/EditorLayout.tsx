import React, { useState } from 'react';
import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary';
import { headers } from 'src/helpers/constants/editor-data';
import { resetResumeStore } from 'src/stores/useResumeStore';
import { motion } from 'framer-motion';

const EditorLayout = () => {
  const [link, setLink] = useState('');
  const section = headers[link];

  const linkClickHandler = (link: string) => {
    setLink(link);
  };

  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );

  return (
    <ErrorBoundary>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-[#0f1629]"
      >
        <div className="h-full text-white/90 p-6 overflow-auto relative no-scrollbar">
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-xl bg-[#111332]/50 rounded-2xl shadow-2xl border border-white/5 overflow-hidden">
              <div className="p-6 space-y-6">
                {displayElement}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={resetResumeStore}
                    className="bg-[#1A1B3D] hover:bg-[#232452] border border-white/10 text-white/80 transition-all px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg
                      className="w-4 h-4 opacity-80"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22 2L12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Reset all edits
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ErrorBoundary>
  );
};

export default EditorLayout;
