import { IVolunteer } from '../../../stores/index.interface';
import { dateParser } from '../../../helpers/utils';
import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';

interface VolunteerProps {
  volunteer: IVolunteer[];
}

export const Volunteer = ({ volunteer }: VolunteerProps) => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4 text-gray-800">Volunteering</h3>
      <div className="space-y-4">
        {volunteer.map((item, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4 relative">
            <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-400 rounded-full"></div>

            <h4 className="text-base font-medium">{item.organization}</h4>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{item.position}</span>
              <span className="text-xs">
                {dateParser(item.startDate)} -{' '}
                {item.isVolunteeringNow ? 'Present' : dateParser(item.endDate)}
              </span>
            </div>
            {item.summary && (
              <div className="text-sm text-gray-600 mt-1">
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
