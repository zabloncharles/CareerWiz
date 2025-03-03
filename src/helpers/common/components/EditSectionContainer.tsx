import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  isCollapsed?: boolean;
  onCollapse?: () => void;
  className?: string;
}

const EditSectionContainer = ({
  title,
  subtitle,
  children,
  isCollapsed,
  onCollapse,
  className = '',
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`rounded-lg border border-white/10 overflow-hidden ${className}`}
    >
      <div
        className={`bg-[#1A1B3D] h-12 w-full ${
          onCollapse ? 'cursor-pointer select-none' : ''
        } flex items-center justify-between px-4`}
        onClick={onCollapse}
      >
        <div>
          <h2 className="font-medium text-white/90">{title}</h2>
          {subtitle && <p className="text-sm text-white/60">{subtitle}</p>}
        </div>
        {onCollapse && (
          <button className="text-white/60 hover:text-white/90 transition-colors">
            {isCollapsed ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 9L12 16L5 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 15L12 8L19 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      <div
        className={`bg-[#1A1B3D]/80 relative rounded-b-lg px-4 py-6 overflow-hidden ${
          isCollapsed ? 'hidden' : ''
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default EditSectionContainer;
