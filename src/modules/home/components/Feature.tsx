// import Image from 'next/image';
// import Link from 'next/link';
import styled from 'styled-components';
// import { GiPaintBrush } from 'react-icons/gi';

function FeatureSection() {
  return (
    <>
      <FeatCard>
        <div className="title">Customise</div>
        <div className="icon">
          <div></div>
        </div>
        <div className="desc">
          Customise with <strong>templates and themes</strong>!
        </div>
      </FeatCard>

      <FeatCard>
        {/* <CardPinnnedIcon>
          <Image src="/icons/speed.svg" alt="speed" height="56" width="56" />
        </CardPinnnedIcon> */}
        <div className="title">Simple</div>
        <div className="icon">
          <div></div>
        </div>
        <p className="desc">
          Simple <strong>interface</strong> that helps you build quicky!
        </p>
      </FeatCard>

      <FeatCard>
        <div className="title">Easy</div>
        <div className="icon">
          <div></div>
        </div>
        <p className="desc">
          No <strong>sign up </strong>needed — go straight to building!
        </p>
      </FeatCard>

      <FeatCard>
        <div className="title">Customise</div>
        <div className="icon">
          <div></div>
        </div>
        <p className="desc">
          Your <strong>data</strong> never leaves your device
        </p>
      </FeatCard>
    </>
  );
}

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
  min-height: 190px;

  .title {
  }
  .icon {
    display: flex;
    border-right: solid 1px white;
    height: 100%;
    padding-right: 10px;

    :nth-child(1) {
      width: 90px;
      height: 90px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('https://cdn.dribbble.com/userupload/7289230/file/original-234bca9a2dc55ec39fc69e428739be8f.jpg?resize=2048x2048');
      padding-right: 10px;
    }
  }
  .desc {
    padding-left: 10px;
  }
`;
