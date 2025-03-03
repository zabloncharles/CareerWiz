import React, { Fragment } from 'react';
import { RichtextEditor } from 'src/helpers/common/components/richtext';

const About = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  return (
    <Fragment>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Professional Summary</h3>
        <p className="text-sm text-gray-600 mb-3">
          Write 2-4 short & energetic sentences to interest the reader! Mention your role,
          experience & most importantly - your biggest achievements, best qualities and skills.
        </p>
        <RichtextEditor
          label="About me"
          value={basicTabs.summary}
          onChange={(htmlOutput) => {
            onChangeHandler(htmlOutput, 'summary');
          }}
          name="summary"
        />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">Career Objective</h3>
        <p className="text-sm text-gray-600 mb-3">
          Briefly describe your career goals and what you hope to achieve in your next role.
        </p>
        <RichtextEditor
          label="Career objective"
          value={basicTabs.objective}
          onChange={(htmlOutput) => {
            onChangeHandler(htmlOutput, 'objective');
          }}
          name="objective"
        />
      </div>
    </Fragment>
  );
};

export default About;
