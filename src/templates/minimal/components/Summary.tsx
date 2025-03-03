import { HTMLRenderer } from '../../../helpers/common/components/HTMLRenderer';

interface SummaryProps {
  summary: string;
}

export const Summary = ({ summary }: SummaryProps) => {
  return (
    <section>
      <h3 className="text-lg font-medium mb-3 text-gray-800">Summary</h3>
      <div className="text-sm leading-relaxed text-gray-600">
        <HTMLRenderer htmlString={summary} />
      </div>
    </section>
  );
};
