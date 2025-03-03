import { dateParser } from 'src/helpers/utils';
import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer';
import { IWorkIntrf } from 'src/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const WorkSection = ({ experience }: { experience: IWorkIntrf[] }) => {
  return (
    <div className="mb-3">
      <SectionHeading title="Experience" />

      {experience.map((item: IWorkIntrf, index: number) => {
        return (
          <div key={index} className="py-2">
            <SectionTitle label={item.name} />
            <div className="flex justify-between items-center">
              <SectionSubtitle label={item.position} />
              <div>
                <p className="text-xs">
                  {dateParser(item.startDate)} -{' '}
                  {item.isWorkingHere ? 'present' : dateParser(item.endDate)}
                </p>
              </div>
            </div>

            {item.summary && (
              <div className="mt-2 text-sm text-gray-600">
                <HTMLRenderer htmlString={item.summary} />
              </div>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="mt-2 space-y-1">
                {item.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-gray-400 mt-1.5">•</span>
                    <span className="flex-1">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
