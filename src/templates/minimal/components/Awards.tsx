import { IAwards } from '../../../stores/index.interface';
import { dateParser } from '../../../helpers/utils';
import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';

interface AwardsProps {
  awards: IAwards[];
}

export const Awards = ({ awards }: AwardsProps) => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4 text-gray-800">Awards</h3>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 relative">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-400 rounded-full"></div>

            <h4 className="text-base font-medium">{award.title}</h4>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{award.awarder}</span>
              <span className="text-xs">{dateParser(award.date)}</span>
            </div>
            {award.summary && (
              <div className="text-sm text-gray-600 mt-1">
                <HTMLRenderer htmlString={award.summary} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
