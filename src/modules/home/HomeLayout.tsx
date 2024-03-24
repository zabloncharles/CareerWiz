import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';
import styled from 'styled-components';

const HomeLayout = () => {
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <Navbar>
        <Link href="/">
          <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">ResumeX</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="#contribute" passHref={true}>
              <StyledButton variant="text" className="max-md:hidden">
                Contribute
              </StyledButton>
            </Link>
            <Link href="#about-us" passHref={true}>
              <StyledButton variant="text">About us</StyledButton>
            </Link>
            <a
              href={'https://github.com/sadanandpai/resume-builder'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </Navbar>

      <TopContent>
        <Linear></Linear>
        <VerticalLines>
          <div></div>
          <div></div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </VerticalLines>
        <HeaderPic></HeaderPic>
        <HeaderDesc>
          <h3 className="header-desc1 text-xl md:text-2xl mb-2 text-resume-400">
            SIMPLEST WAY TO BUILD A
          </h3>
          <h1 className="text-5xl mb-12 text-resume-800">Professional Resume</h1>

          <div className="flex mb-10">
            <p className="header-desc2 text-lg ml-3 text-resume-800">
              &ldquo;The secret to getting ahead is getting started&rdquo;
              <br />
              —Mark Twain
            </p>
          </div>
          <Link href="/builder" passHref={true}>
            <Button variant="contained" className="button mb-2">
              BUILD YOUR RESUME
            </Button>
          </Link>
          <p
            className="header-desc2 xl:invisible text-resume-800"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Desktop screen recommended
          </p>
        </HeaderDesc>

        <FlippedText>
          <div></div>
          <p>Scroll Down</p>
        </FlippedText>
      </TopContent>

      <motion.div
        className="mx-6 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <FirstCard>
          <div className="top-image"></div>
          <div className="text-under-image">som people wish</div>
          <div className="two-sections">
            <div>
              <div className="left-top">Pioneering Success</div>
              <div className="left-bottom">Big Success</div>
            </div>
            <div>
              <div className="right-top">somee hteehfhsf sf hf sd sjdjsdsj djd fdffd</div>
              <div className="right-bottom">some jargon</div>
            </div>
          </div>
        </FirstCard>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      {/* THIRD SECTION */}
      <div className="bg-resume-50 my-32">
        <div
          id="contribute"
          className="mx-6 md:mx-40 xl:mx-60 py-12"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div className="grid grid-cols-12 items-center text-center">
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0 flex flex-col items-center gap-2">
              <Image src={'/icons/palette.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                Do you want to make your own <strong>template?</strong>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-resume-800 text-4xl">
              <p>+</p>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col items-center gap-2">
              <Image src={'/icons/terminal.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                Do you write <strong>React</strong> code?
              </p>
            </div>
            <div className="invisible lg:visible lg:col-span-2 text-resume-800 text-4xl mx-6">
              <p>=</p>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-auto flex flex-col items-center gap-2">
              <div className="mb-6">
                <Image src={'/icons/wave.svg'} alt="logo" height="48" width="48" />
              </div>
              <div>
                <a
                  href="https://github.com/sadanandpai/resume-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained" className="bg-resume-800 mt-2 lg:mt-5 mb-3">
                    CONTRIBUTE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A bunch of developers and designers — who love to build open source projects and learn
          along!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div>
        <p className="text-resume-400 my-8 text-center lg:text-left">
          Read our design story on&nbsp;
          <a
            href="https://medium.com/@yakshag/e-resume-build-a-professional-resume-design-case-study-3dc02a6359ea"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Medium
          </a>
          ↗
        </p>
      </div>
    </motion.div>
  );
};

export default HomeLayout;

const Navbar = styled.div`
  // Your styles here
  background-color: #00000080;
  backdrop-filter: blur(44px);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 70px;
  left: 0;
  right: 0;
  padding: 20px 10px;
  z-index: 99;
  position: fixed;

  @media screen and (min-width: 1000px) {
    top: 21px;
    color: white;
    font-size: 25px;
    border: 1px solid rgb(24, 24, 25);
    margin: 0 10px;

    padding: 20px 20px;
    left: 0;
    right: 0;
    border-radius: 60px;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const TopContent = styled.div`
  // Your styles here

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  /* for iphone */
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 70vh;
  }
`;
const Linear = styled.div`
  // Your styles here
  position: absolute;
  width: 100%;
  bottom: 0;
  background: linear-gradient(1deg, #000000, #000000, transparent);
  height: 50%;
`;

const HeaderPic = styled.div`
  // Your styles here
  background-color: red;
  background: url('https://cdn.dribbble.com/userupload/13091011/file/original-ad5b9b255d5eb3b70e24efc56d3e31a4.jpg?resize=2400x1969');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  /* for iphone */
  @media screen and (max-width: 1000px) {
    height: 70vh;
  }
`;
const HeaderDesc = styled.div`
  // Your styles here
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  color: white;

  .header-desc1 {
    background: linear-gradient(to right, rgb(255, 253, 253), rgb(223, 70, 0)) text;
    -webkit-text-fill-color: transparent;
    font-family: 'Spline Sans Mono', sans-serif;
  }
  .header-desc2 {
    color: white;
    font-family: 'Spline Sans Mono', sans-serif;
    text-align: end;
  }
  .button {
    background-color: black;
  }
  > :nth-child(2) {
    font-family: 'cisnero', sans-serif;
    color: white;
    font-size: 92px;

    /* for iphone */
    @media screen and (max-width: 1000px) {
      font-size: 30px;
    }
  }
`;
const VerticalLines = styled.div`
  // Your styles here
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 20px;
  display: flex;
  justify-content: space-around;
  > div {
    width: 1px;
    height: 100%;
    background-color: #2f2e2e;
  }
`;
const FlippedText = styled.div`
  // Your styles here
  display: flex;
  gap: 10px;
  transform: rotate(90deg);
  position: absolute;
  bottom: 62px;
  left: 0;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  color: white;
  > :nth-child(1) {
    height: 1px;
    width: 50px;
    background-color: white;
  }
`;
const FirstCard = styled.div`
  // Your styles here
  width: 100%;
  flex: 1;
  .top-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://cdn.dribbble.com/userupload/7289230/file/original-234bca9a2dc55ec39fc69e428739be8f.jpg?resize=2048x2048');
    height: 300px;
    width: 100%;
    border-radius: 12px;

    .text-under-image {
      display: flex;
      justify-content: space-between;
      color: #ee0505;
      font-size: 20px;
    }
    .two-sections {
      display: flex;
      justify-content: space-between;
      background: aquamarine;
    }
  }
`;
