import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function FeatureSection() {
  return (
    <>
      <FeatCard>
        <div className="icon">
          <div></div>
        </div>
        <div className="desc">
          Customise with <strong>templates and themes</strong>!
        </div>
      </FeatCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/speed.svg" alt="speed" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Simple <strong>interface</strong> that helps you build quicky!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/magic.svg" alt="magic" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          No <strong>sign up </strong>needed — go straight to building!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/lock.svg" alt="lock" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Your <strong>data</strong> never leaves your device
        </p>
      </FeatureCard>
    </>
  );
}

const FeatureCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`transition ease-in-out delay-100 duration-300 bg-resume-100 hover:bg-resume-500 text-resume-800
      hover:text-resume-50 fill-resume-800 px-6 py-10 lg:p-12 flex shadow-md cursor-pointer relative rounded-xl h-full`}
    >
      <Link href="/builder" passHref={true}>
        {children}
      </Link>
    </div>
  );
};

const CardPinnnedIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-2xl bg-resume-100 rounded-full p-2 shadow-level-hard absolute right-0 top-0 -mt-4 -mr-1">
      {children}
    </div>
  );
};

export default FeatureSection;

const FeatCard = styled.div`
  // Your styles here
  border: 1px solid #1d1c1c73;
  background-color: #1d1c1c73;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  border-radius: 0px;

  .icon {
    display: flex;
    border-right: solid 1px white;
    height: 100%;
    padding-right: 10px;

    :nth-child(1) {
      background: url('https://cdn.dribbble.com/userupload/7289230/file/original-234bca9a2dc55ec39fc69e428739be8f.jpg?resize=2048x2048');
    }
  }
  .desc {
    padding-left: 10px;
  }
`;
