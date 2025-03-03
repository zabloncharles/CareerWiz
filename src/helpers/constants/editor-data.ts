import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Basic details', component: BasicLayout },
  education: { title: 'Education', component: EducationLayout },
  experience: { title: 'Experience', component: ExperienceLayout },
  'skills-and-expertise': {
    title: 'Skills and expertise',
    component: SkillsLayout,
  },
};
