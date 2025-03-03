import Image from 'next/image';
import { motion } from 'framer-motion';

const animation = {
  initial: { x: 25, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

interface IEditSection {
  section: {
    title: string;
    component: () => JSX.Element;
  };
  onLinkClick: (link: string) => void;
}

const EditSection = ({ section, onLinkClick }: IEditSection) => {
  return (
    <motion.div initial={animation.initial} animate={animation.animate}>
      <div className="flex items-center mb-6">
        <button
          onClick={() => onLinkClick('')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/70 transition-all"
        >
          <Image src="/icons/left-arrow.svg" alt="back" width={12} height={16} />
          <span className="text-gray-700 font-medium">Back</span>
        </button>
        <h1 className="text-2xl font-semibold text-gray-800 ml-4">{section.title}</h1>
      </div>
      <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
        <section.component />
      </div>
    </motion.div>
  );
};

export default EditSection;
