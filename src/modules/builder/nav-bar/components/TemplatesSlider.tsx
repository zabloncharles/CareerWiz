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
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const TemplateSlider = () => {
  const activeTemplate = useTemplates((state) => state.activeTemplate);
  const setTemplate = useTemplates((state) => state.setTemplate);
  const templates = Object.entries(AVAILABLE_TEMPLATES);
  const currentIndex = templates.findIndex(([id]) => id === activeTemplate.id);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + templates.length) % templates.length;
    const [id] = templates[newIndex];
    setTemplate(AVAILABLE_TEMPLATES[id]);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % templates.length;
    const [id] = templates[newIndex];
    setTemplate(AVAILABLE_TEMPLATES[id]);
  };

  return (
    <Box className="flex items-center gap-4">
      <IconButton onClick={handlePrevious} className="text-gray-400 hover:text-white">
        <MdChevronLeft />
      </IconButton>
      <span className="text-white/90">{activeTemplate.name}</span>
      <IconButton onClick={handleNext} className="text-gray-400 hover:text-white">
        <MdChevronRight />
      </IconButton>
    </Box>
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
