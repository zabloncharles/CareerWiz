import { useContext } from 'react';
import { StateContext } from 'src/modules/builder/resume/ResumeLayout';
import { SectionValidator } from 'src/helpers/common/components/ValidSectionRenderer';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

export default function MinimalTemplate() {
  const resumeData = useContext(StateContext);

  // Combine all skills into a single array
  const allSkills = [
    ...(resumeData.skills.languages || []),
    ...(resumeData.skills.frameworks || []),
    ...(resumeData.skills.technologies || []),
    ...(resumeData.skills.libraries || []),
    ...(resumeData.skills.databases || []),
    ...(resumeData.skills.practices || []),
    ...(resumeData.skills.tools || []),
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800">
      <Header
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        email={resumeData.basics.email}
        phone={resumeData.basics.phone}
        city={resumeData.basics.location.city}
        url={resumeData.basics.url}
      />

      <div className="mt-8 space-y-6">
        <SectionValidator value={resumeData.basics.summary}>
          <Summary summary={resumeData.basics.summary} />
        </SectionValidator>

        <SectionValidator value={resumeData.basics.objective}>
          <div className="text-sm text-gray-600 italic border-l-2 border-gray-200 pl-4">
            {resumeData.basics.objective}
          </div>
        </SectionValidator>

        <SectionValidator value={resumeData.work}>
          <Experience experience={resumeData.work} />
        </SectionValidator>

        <SectionValidator value={resumeData.education}>
          <Education education={resumeData.education} />
        </SectionValidator>

        <SectionValidator value={allSkills}>
          <Skills title="Skills" items={allSkills} />
        </SectionValidator>
      </div>
    </div>
  );
}
