// eslint-disable-next-line import/no-unresolved
import '@splidejs/splide/css';

import Splide, { Splide as SplideCore } from '@splidejs/splide';
import { useEffect, useRef, useState } from 'react';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { Global } from '@emotion/react';
import Image from 'next/image';
import { useTemplates } from 'src/stores/useTemplate';
import { useResumeStore } from 'src/stores/useResumeStore';
import { motion } from 'framer-motion';

export const TemplateSlider = () => {
  const templateIndex = useTemplates((state) => state.activeTemplate.id);

  const onChangeTemplate = (templateId: string) => {
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[templateId]);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(AVAILABLE_TEMPLATES).map(([name, template]) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
            template.id === templateIndex
              ? 'border-blue-500 shadow-lg scale-[1.02]'
              : 'border-white/10 hover:border-white/20'
          }`}
          onClick={() => onChangeTemplate(name)}
        >
          <div className="w-full h-full bg-[#232452] p-3">
            <Image
              src={template.thumbnail}
              alt={name}
              width={200}
              height={283}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {template.id === templateIndex && (
            <div className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full shadow-lg">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export const TemplateSlide = ({
  isActive,
  id,
  name,
  onChangeTemplate,
}: {
  isActive: boolean;
  id: string;
  name: string;
  thumbnail: string;
  onChangeTemplate: (id: string) => void;
}) => {
  const getTemplatePreview = () => {
    switch (id) {
      case 'modern':
        return (
          <div className="w-full h-full bg-white p-3">
            {/* Header Section */}
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="ml-2 flex-1">
                <div className="w-2/3 h-3 bg-gray-800 rounded mb-1"></div>
                <div className="w-1/2 h-2 bg-gray-400 rounded"></div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-3">
              <div className="w-1/3 h-3 bg-gray-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="w-1/3 h-3 bg-gray-800 rounded mb-2"></div>
              <div className="flex gap-1 flex-wrap">
                <div className="w-12 h-2 bg-gray-200 rounded"></div>
                <div className="w-16 h-2 bg-gray-200 rounded"></div>
                <div className="w-14 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="w-full h-full bg-white p-3">
            {/* Header Section */}
            <div className="mb-4">
              <div className="w-3/4 h-4 bg-gray-800 rounded mb-2"></div>
              <div className="w-1/2 h-2 bg-gray-400 rounded"></div>
            </div>

            {/* Experience Section */}
            <div className="mb-3">
              <div className="w-1/3 h-3 bg-gray-800 rounded mb-2"></div>
              <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
              <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="w-1/3 h-3 bg-gray-800 rounded mb-2"></div>
              <div className="flex gap-1">
                <div className="w-12 h-2 bg-gray-200 rounded"></div>
                <div className="w-16 h-2 bg-gray-200 rounded"></div>
                <div className="w-14 h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`h-[255px] w-[180px] rounded border hover:cursor-pointer overflow-hidden relative transition-all duration-200 ${
        isActive
          ? 'border-resume-800 shadow-lg scale-105'
          : 'border-resume-200 hover:border-resume-400'
      }`}
      onClick={() => {
        onChangeTemplate(id);
      }}
    >
      {getTemplatePreview()}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-sm font-medium text-resume-800">{name}</div>
      </div>

      {isActive && (
        <div className="absolute top-1 right-1 bg-white rounded-full">
          <Image src={'/icons/selected-tick.svg'} alt="logo" width="24" height="24" />
        </div>
      )}
    </div>
  );
};
