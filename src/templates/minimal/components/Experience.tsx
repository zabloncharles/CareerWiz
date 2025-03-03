import { dateParser } from '../../../helpers/utils';
import { IWorkIntrf } from '../../../stores/index.interface';
import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';

interface ExperienceProps {
  experience: IWorkIntrf[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4 text-gray-800">Experience</h3>
      <div className="space-y-6">
        {experience.map((item, index) => (
          <div key={index} className="relative pl-4 border-l-2 border-gray-200">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-400 rounded-full"></div>

            <div className="mb-1">
              <h4 className="text-base font-medium">{item.name}</h4>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{item.position}</span>
                <span className="text-xs">
                  {dateParser(item.startDate)} -{' '}
                  {item.isWorkingHere ? 'Present' : dateParser(item.endDate)}
                </span>
              </div>
            </div>

            {item.summary && (
              <div className="text-sm text-gray-600 mt-2">
                <HTMLRenderer htmlString={item.summary} />
              </div>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-2 space-y-1">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
