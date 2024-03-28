// import Image from 'next/image';
// import Link from 'next/link';
import styled from 'styled-components';
import { FaDharmachakra } from 'react-icons/fa';
import { PiCodeSimpleLight } from 'react-icons/pi';
function FeatureSection() {
  return (
    <FeatureNav>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FeatCard>
          <div
            className="icon"
            style={{
              backgroundImage: `url('https://cdn.dribbble.com/userupload/5241108/file/original-570cbe42ff3fd72b910fa724f2fd5dfa.jpg?resize=1504x1128')`,
            }}
          ></div>

          <div className="desc">
            <div className="title">Customize</div>
            <div>
              Customise with <strong>templates and themes</strong>!
            </div>
          </div>
        </FeatCard>

        <FeatCard>
          {/* <CardPinnnedIcon>
          <Image src="/icons/speed.svg" alt="speed" height="56" width="56" />
        </CardPinnnedIcon> */}
          <div
            className="icon"
            style={{
              backgroundImage: `url('https://cdn.dribbble.com/userupload/4803726/file/original-8a24c5f9f4678f04fd93bbf6845b2470.jpg?resize=1504x1128')`,
            }}
          ></div>

          <div className="desc">
            <div className="title">Simple</div>
            <div>
              {' '}
              Simple <strong>interface</strong> that helps you build quicky!
            </div>
          </div>
        </FeatCard>

        <FeatCard>
          <div
            className="icon"
            style={{
              backgroundImage: `url('https://cdn.dribbble.com/userupload/9025383/file/original-2a3158e895c7813bbce30185fe16e02d.png?resize=2400x3106')`,
            }}
          ></div>

          <div className="desc">
            <div className="title">
              Easy <PiCodeSimpleLight />
            </div>
            <div>No sign up needed — go straight to building!</div>
          </div>
        </FeatCard>

        <FeatCard>
          <div
            className="icon"
            style={{
              backgroundImage: `url('https://cdn.dribbble.com/userupload/5899210/file/original-b0a30b1fc6b1b87e003b3b7e0817da38.png?resize=2048x1536')`,
            }}
          ></div>

          <div className="desc">
            <div className="title">
              Privacy <FaDharmachakra />
            </div>
            <div>Your data never leaves your device</div>
          </div>
        </FeatCard>
      </div>
    </FeatureNav>
  );
}

export default FeatureSection;

const FeatureNav = styled.div`
  // Your styles here

  padding: 20px 10px;
`;

const FeatCard = styled.div`
  // Your styles here
  border: 1px solid #1d1c1c73;
  background-color: #1d1c1c73;
  color: white;
  display: flex;

  font-family: 'Spline Sans Mono', sans-serif;
  border-radius: 10px;
  min-height: 318px;
  flex-direction: column;
  overflow: hidden;

  .title {
    font-size: 26px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .icon {
    display: flex;
    /* border-right: solid 1px white; */
    height: 100%;
    width: 100%;
    background-color: red;
    padding-right: 10px;
    /* background-image: url('https://cdn.dribbble.com/users/2448220/screenshots/15499344/media/b8c61a7c4fb165c14d53091c65b9c408.jpg?resize=1600x1200&vertical=center'); */
    background-size: cover;
    background-position: center;
  }
  .desc {
    padding: 10px;
    > :nth-child(2) {
      border-left: 1px solid white;
      padding-left: 10px;
      color: grey;
    }
  }
`;
