import Image from 'next/image';

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl font-medium text-white/90 hover:text-white transition-colors cursor-pointer py-2 flex items-center justify-between group">
      {title}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <Image
          src="/icons/right-arrow.svg"
          alt="right arrow"
          width={16}
          height={16}
          className="invert opacity-70"
        />
      </div>
    </h2>
  );
};

export default HeaderTitle;
