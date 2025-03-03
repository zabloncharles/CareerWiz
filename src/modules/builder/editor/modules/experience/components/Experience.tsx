import React, { ChangeEvent, Fragment, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

import { useExperiences } from 'src/stores/experience';
import { IExperienceItem } from 'src/stores/experience.interface';
import { SwitchWidget } from 'src/helpers/common/atoms/Switch';
import { RichtextEditor } from 'src/helpers/common/components/richtext';
import { DATE_PICKER_FORMAT } from 'src/helpers/constants';
import { Box } from '@mui/material';

interface ExperienceProps {
  experienceInfo: IExperienceItem;
  index: number;
}

const Experience: React.FC<ExperienceProps> = ({ experienceInfo, index }) => {
  const updateExperience = useExperiences((state) => state.updateExperience);

  const onChangeHandler = useCallback(
    (name: string, value: any) => {
      const currentExpInfo = { ...experienceInfo };
      switch (name) {
        case 'companyName':
          currentExpInfo.name = value;
          break;
        case 'position':
          currentExpInfo.position = value;
          break;
        case 'startDate':
          if (value?.isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isWorkingHere':
          currentExpInfo.isWorkingHere = value;
          break;
        case 'endDate':
          if (value?.isValid()) {
            currentExpInfo.endDate = value;
          }
          break;
        case 'years':
          currentExpInfo.years = value;
          break;
        case 'summary':
          currentExpInfo.summary = value;
          break;
        default:
          break;
      }
      updateExperience(index, currentExpInfo);
    },
    [index, experienceInfo]
  );

  const onSummaryChange = useCallback(
    (htmlOutput: string) => {
      onChangeHandler('summary', htmlOutput);
    },
    [onChangeHandler]
  );

  return (
    <Box className="space-y-6">
      <TextField
        fullWidth
        label="Company Name"
        variant="filled"
        value={experienceInfo.name}
        onChange={(e) => onChangeHandler('companyName', e.target.value)}
      />
      <TextField
        fullWidth
        label="Position"
        variant="filled"
        value={experienceInfo.position}
        onChange={(e) => onChangeHandler('position', e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="grid grid-cols-2 gap-4">
          <DatePicker
            label="Start Date"
            value={dayjs(experienceInfo.startDate)}
            onChange={(value) => onChangeHandler('startDate', value)}
            renderInput={(params) => <TextField {...params} variant="filled" fullWidth />}
          />
          <DatePicker
            label="End Date"
            value={experienceInfo.isWorkingHere ? null : dayjs(experienceInfo.endDate)}
            onChange={(value) => onChangeHandler('endDate', value)}
            renderInput={(params) => <TextField {...params} variant="filled" fullWidth />}
            disabled={experienceInfo.isWorkingHere}
          />
        </div>
      </LocalizationProvider>
      <SwitchWidget
        label="I currently work here"
        value={experienceInfo.isWorkingHere}
        onChange={(newValue) => onChangeHandler('isWorkingHere', newValue)}
      />
      <TextField
        label="Years"
        variant="filled"
        value={experienceInfo.years}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeHandler('years', value);
        }}
        autoComplete="off"
        fullWidth
        sx={{ marginBottom: '26px' }}
      />
      <RichtextEditor
        label="Few points on this work experience"
        value={experienceInfo.summary}
        onChange={onSummaryChange}
        name="summary"
      />
    </Box>
  );
};

export default Experience;
