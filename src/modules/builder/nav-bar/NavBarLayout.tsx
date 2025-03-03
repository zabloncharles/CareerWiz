import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdMenu, MdClose } from 'react-icons/md';
import { NavMenuItem } from './components/MenuItem';
import { PrintResume } from './components/PrintResume';
import TemplateSelect from './components/TemplateSelect';
import { Toast } from 'src/helpers/common/atoms/Toast';
import exportFromJSON from 'export-from-json';
import { useActivity } from 'src/stores/activity';
import { useBasicDetails } from 'src/stores/basic';
import { useExperiences } from 'src/stores/experience';
import { useEducations } from 'src/stores/education';
import { useVoluteeringStore } from 'src/stores/volunteering';
import { useAwards } from 'src/stores/awards';
import {
  useLanguages,
  useFrameworks,
  useTechnologies,
  useLibraries,
  useDatabases,
  usePractices,
  useTools,
} from 'src/stores/skills';

const NavBarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const basicDetails = useBasicDetails((state) => state.values);
  const experiences = useExperiences((state) => state.experiences);
  const education = useEducations((state) => state.academics);
  const volunteering = useVoluteeringStore((state) => state.volunteeredExps);
  const awards = useAwards((state) => state.awards);
  const languages = useLanguages((state) => state.values);
  const frameworks = useFrameworks((state) => state.values);
  const technologies = useTechnologies((state) => state.values);
  const libraries = useLibraries((state) => state.values);
  const databases = useDatabases((state) => state.values);
  const practices = usePractices((state) => state.values);
  const tools = useTools((state) => state.values);

  const resetBasic = useBasicDetails((state) => state.reset);
  const resetExperiences = useExperiences((state) => state.reset);
  const resetEducation = useEducations((state) => state.reset);
  const resetVolunteering = useVoluteeringStore((state) => state.reset);
  const resetAwards = useAwards((state) => state.reset);
  const resetLanguages = useLanguages((state) => state.reset);
  const resetFrameworks = useFrameworks((state) => state.reset);
  const resetTechnologies = useTechnologies((state) => state.reset);
  const resetLibraries = useLibraries((state) => state.reset);
  const resetDatabases = useDatabases((state) => state.reset);
  const resetPractices = usePractices((state) => state.reset);
  const resetTools = useTools((state) => state.reset);

  const exportData = () => {
    const data = {
      basic: basicDetails,
      experiences,
      education,
      volunteering,
      awards,
      skills: {
        languages,
        frameworks,
        technologies,
        libraries,
        databases,
        practices,
        tools,
      },
    };
    exportFromJSON({
      data,
      fileName: 'resume',
      exportType: 'json',
    });
    setShowToast(true);
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          resetBasic(data.basic);
          resetExperiences(data.experiences);
          resetEducation(data.education);
          resetVolunteering(data.volunteering);
          resetAwards(data.awards);
          resetLanguages(data.skills.languages);
          resetFrameworks(data.skills.frameworks);
          resetTechnologies(data.skills.technologies);
          resetLibraries(data.skills.libraries);
          resetDatabases(data.skills.databases);
          resetPractices(data.skills.practices);
          resetTools(data.skills.tools);
          setShowToast(true);
        } catch (error) {
          console.error('Error importing data:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Box className="fixed top-0 left-0 w-full z-50">
      <Box className="bg-[#1A1B3D] shadow-lg">
        <Box className="container mx-auto px-4">
          <Box className="flex items-center justify-between h-16">
            <Box className="flex items-center">
              <IconButton
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isOpen ? <MdClose /> : <MdMenu />}
              </IconButton>
              <span className="ml-4 text-white/90 font-medium">CVstudio</span>
            </Box>
            <Box className="flex items-center space-x-4">
              <TemplateSelect />
              <PrintResume />
              <NavMenuItem caption="Export" onClick={exportData} />
              <NavMenuItem
                caption="Import"
                onClick={() => document.getElementById('import-file')?.click()}
              />
              <input
                id="import-file"
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Toast
        open={showToast}
        onClose={() => setShowToast(false)}
        content="Operation completed successfully"
      />
    </Box>
  );
};

export default NavBarLayout;
