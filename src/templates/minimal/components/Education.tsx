import { IEducation } from '../../../stores/index.interface';
import { dateParser } from '../../../helpers/utils';

interface EducationProps {
  education: IEducation[];
}

export const Education = ({ education }: EducationProps) => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4 text-gray-800">Education</h3>
      <div className="space-y-4">
        {education.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 relative">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-400 rounded-full"></div>

            <h4 className="text-base font-medium">
              {item.studyType} - {item.area}
            </h4>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{item.institution}</span>
              <span className="text-xs">
                {dateParser(item.startDate)} -{' '}
                {item.isStudyingHere ? 'Present' : dateParser(item.endDate)}
              </span>
            </div>
            {item.score && <p className="text-xs text-gray-500 mt-1">Score: {item.score}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};
