import { Context, createContext, useEffect } from 'react';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { useResumeStore } from 'src/stores/useResumeStore';
import { useTemplates } from 'src/stores/useTemplate';
import { useThemes } from 'src/stores/themes';
import { useZoom } from 'src/stores/useZoom';
import { ITemplateStore } from 'src/stores/useTemplate';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const zoom = useZoom((state) => state.zoom);
  const templateId = useTemplates((state) => state.activeTemplate.id);
  const setTemplate = useTemplates((state: ITemplateStore) => state.setTemplate);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
  StateContext = createContext(resumeData);

  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
    setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, [setTemplate]);

  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div
        style={{ transform: `scale(${zoom})` }}
        className="origin-top transition-all duration-300 ease-linear print:!scale-100"
      >
        <div
          className="w-[210mm] min-h-[297mm] bg-[#232452] text-white/90 shadow-sm ring-1 ring-white/10 print:shadow-none print:ring-0 font-sans"
          style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          <div className="px-8 pb-8">
            <StateContext.Provider value={resumeData}>
              <ThemeProvider theme={selectedTheme}>{Template && <Template />}</ThemeProvider>
            </StateContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};
