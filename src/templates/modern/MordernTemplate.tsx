import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { useContext } from 'react';
import { StateContext } from 'src/modules/builder/resume/ResumeLayout';
import { SectionValidator } from 'src/helpers/common/components/ValidSectionRenderer';

export default function MordernTemplate() {
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
    <div className="p-8 text-gray-800">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
      />
      <div className="flex mt-8 gap-8">
        <div className="basis-[60%]">
          <div className="space-y-6">
            <SectionValidator value={resumeData.basics.summary}>
              <SummarySection summary={resumeData.basics.summary} />
            </SectionValidator>

            <SectionValidator value={resumeData.work}>
              <WorkSection experience={resumeData.work} />
            </SectionValidator>
          </div>
        </div>

        <div className="basis-[40%] border-l border-gray-200 pl-8">
          <div className="space-y-6">
            <SectionValidator value={resumeData.basics.objective}>
              <Objective objective={resumeData.basics.objective} />
            </SectionValidator>

            <SectionValidator value={resumeData.education}>
              <EducationSection education={resumeData.education} />
            </SectionValidator>

            <SectionValidator value={allSkills}>
              <SkillsSection title="Skills" list={allSkills} />
            </SectionValidator>
          </div>
        </div>
      </div>
    </div>
  );
}
