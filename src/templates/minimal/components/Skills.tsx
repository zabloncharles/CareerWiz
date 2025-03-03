import { IItem } from 'src/stores/index.interface';

interface SkillsProps {
  title: string;
  items: IItem[];
}

export const Skills = ({ title, items }: SkillsProps) => {
  return (
    <section>
      <h3 className="text-base font-medium mb-2 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
};
