import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { headers } from 'src/helpers/constants/editor-data';
import HeaderTitle from '../atoms/HeaderTitle';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const EditHeaders = ({ onLinkClick }: { onLinkClick: (link: string) => void }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
      {Object.entries(headers).map(([link, { title }], index) => (
        <motion.div key={title} variants={item} className="group">
          <button
            onClick={() => onLinkClick(link)}
            className="w-full transition-all rounded-xl hover:bg-white/5 p-2"
          >
            <HeaderTitle title={title} />
          </button>
          <Divider
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              transition: 'background-color 0.3s',
              marginTop: '0.5rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EditHeaders;
