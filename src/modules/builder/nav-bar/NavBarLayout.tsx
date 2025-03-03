import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { NavBarActions, NavBarMenu, StyledButton } from './atoms';
import {
  useDatabases,
  useFrameworks,
  useLanguages,
  useLibraries,
  usePractices,
  useTechnologies,
  useTools,
} from 'src/stores/skills';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import DEFAULT_RESUME_JSON from 'src/helpers/constants/resume-data.json';
import Image from 'next/image';
import Link from 'next/link';
import { NavMenuItem } from './components/MenuItem';
import { PrintResume } from './components/PrintResume';
import { TemplateSelect } from './components/TemplateSelect';
import { Toast } from 'src/helpers/common/atoms/Toast';
import exportFromJSON from 'export-from-json';
import { useActivity } from 'src/stores/activity';
import { useAwards } from 'src/stores/awards';
import { useBasicDetails } from 'src/stores/basic';
import { useEducations } from 'src/stores/education';
import { useExperiences } from 'src/stores/experience';
import { useVoluteeringStore } from 'src/stores/volunteering';
import { motion } from 'framer-motion';

const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length;

const NavBarLayout = () => {
  const [openToast, setOpenToast] = useState(false);
  const fileInputRef = useRef(null);

  const exportResumeData = useCallback(() => {
    const updatedResumeJson = {
      ...DEFAULT_RESUME_JSON,
      basics: {
        ...DEFAULT_RESUME_JSON.basics,
        ...useBasicDetails.getState().values,
      },
      work: useExperiences.getState().experiences,
      education: useEducations.getState().academics,
      awards: useAwards.getState().awards,
      volunteer: useVoluteeringStore.getState().volunteeredExps,
      skills: {
        languages: useLanguages.getState().get(),
        frameworks: useFrameworks.getState().get(),
        technologies: useTechnologies.getState().get(),
        libraries: useLibraries.getState().get(),
        databases: useDatabases.getState().get(),
        practices: usePractices.getState().get(),
        tools: useTools.getState().get(),
      },
      activities: useActivity.getState().activities,
    };
    const fileName = updatedResumeJson.basics.name + '_' + new Date().toLocaleString();
    const exportType = exportFromJSON.types.json;
    exportFromJSON({
      data: updatedResumeJson,
      fileName,
      exportType,
    });
  }, []);

  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const reader = new FileReader();

    reader.readAsText(fileObj);

    event.target.value = ''; // To read the same file

    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') {
        const uploadedResumeJSON = JSON.parse(e.target?.result);
        const {
          basics = {},
          skills = {},
          work = [],
          education = [],
          activities = {
            involvements: '',
            achievements: '',
          },
          volunteer = [],
          awards = [],
        } = uploadedResumeJSON;
        const {
          languages = [],
          frameworks = [],
          libraries = [],
          databases = [],
          technologies = [],
          practices = [],
          tools = [],
        } = skills;
        useBasicDetails.getState().reset(basics);
        useLanguages.getState().reset(languages);
        useFrameworks.getState().reset(frameworks);
        useLibraries.getState().reset(libraries);
        useDatabases.getState().reset(databases);
        useTechnologies.getState().reset(technologies);
        usePractices.getState().reset(practices);
        useTools.getState().reset(tools);
        useExperiences.getState().reset(work);
        useEducations.getState().reset(education);
        useVoluteeringStore.getState().reset(volunteer);
        useAwards.getState().reset(awards);
        useActivity.getState().reset(activities);
        setOpenToast(true);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-16 w-full bg-[#0f1629]/90 backdrop-blur-xl border-b border-white/10 relative flex items-center px-6 shadow-2xl z-20 print:hidden"
    >
      <Link
        href="/"
        className="text-white text-xl font-bold tracking-wide hover:text-white/80 transition-colors flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
          <span className="text-white text-sm font-bold">CV</span>
        </div>
        CVstudio
      </Link>

      <div className="flex-auto flex justify-between items-center ml-8">
        <NavBarMenu>
          <NavMenuItem
            caption={`Templates (${TOTAL_TEMPLATES_AVAILABLE})`}
            popoverChildren={<TemplateSelect />}
            icon={
              <Image
                src="/icons/template.svg"
                alt="Templates"
                width="20"
                height="20"
                className="invert opacity-80"
              />
            }
          />
        </NavBarMenu>

        <NavBarActions>
          <button
            onClick={exportResumeData}
            className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            <Image
              src="/icons/export.svg"
              alt="Export"
              width="18"
              height="18"
              className="invert opacity-80"
            />
            <span className="text-sm font-medium">Export</span>
          </button>

          <button
            onClick={() => {
              if (fileInputRef.current) {
                const fileElement = fileInputRef.current as HTMLInputElement;
                fileElement.click();
              }
            }}
            className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            <Image
              src="/icons/import.svg"
              alt="Import"
              width="18"
              height="18"
              className="invert opacity-80"
            />
            <span className="text-sm font-medium">Import</span>
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept="application/json"
              onChange={handleFileChange}
            />
          </button>

          <PrintResume />
        </NavBarActions>
      </div>

      <Toast
        open={openToast}
        onClose={() => {
          setOpenToast(false);
        }}
        content={'Resume data was successfully imported.'}
      />
    </motion.nav>
  );
};

export default NavBarLayout;
