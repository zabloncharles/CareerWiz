import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';

const BuilderLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f1629]">
      <NavBarLayout />
      <main className="flex flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit">
        <div className="flex flex-col flex-1 justify-center bg-[#0f1629]/80 backdrop-blur-xl print:bg-white">
          <header className="w-[210mm] mt-5 mb-3 mx-auto print:hidden">
            <ResumeHeader />
          </header>
          <div className="overflow-auto no-scrollbar flex justify-center items-start py-8">
            <div className="bg-white rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-shadow duration-300">
              <ResumeLayout />
            </div>
          </div>
        </div>
        <aside className="w-[28vw] min-w-[24rem] max-w-[30rem] print:hidden bg-[#0f1629]/90 backdrop-blur-xl border-l border-white/10">
          <EditorLayout />
        </aside>
      </main>

      <footer className="print:hidden">
        <Tooltip title="Share feedback">
          <a
            href="https://forms.gle/YmpXEZLk6LYdnqet7"
            target="_blank"
            rel="noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-4 left-4 flex justify-center items-center bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all shadow-lg"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip>
      </footer>
    </div>
  );
};

export default BuilderLayout;
