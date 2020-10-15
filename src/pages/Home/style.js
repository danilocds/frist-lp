import styled from "styled-components";
import { font } from "../../layout/font";
import { device } from "../../layout/mediaQueries";
import { colors } from "../../layout/palettes";
import heroShot from "../../media/img/laptop2@2x.png";

export const LandingPageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  box-sizing: border-box;
`;

export const FirstBlock = styled.div`
  margin-top: 100px;
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  border-radius: 3px;

  @media ${device.laptopL} {
    max-height: 58vw;
  }
  @media ${device.laptop} {
    max-height: 85vw;
  }
  @media ${device.tablet} {
    max-height: 110vw;
  }
  @media ${device.mobileL} {
    max-height: 140vw;
    background-size: auto;
    background-position: left;
  }
`;

export const FirstTextWrapper = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
`;

export const AlignElements = styled.div`
  max-width: 666px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const FirstTitle = styled.span`
  color: #ffff;
  font-size: 45px;
  font-weight: 700;
  color: ${colors.typography};
  font-family: ${font.title.family};
  font-size: ${font.title.size};
  letter-spacing: ${font.title.letterSpacing};

`;

export const FirstText = styled.span`
  width: 100%;
  color: #ffff;
  font-size: 23px;
  font-weight: 400;
  padding-bottom: 2vw;
  color: ${colors.typography};
  font-family: ${font.subtitle.family};
  font-size: ${font.subtitle.size};
  letter-spacing: ${font.subtitle.letterSpacing};

  @media ${device.mobileL} {
  }
`;

export const HeroShotContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const HeroShot = styled.div`
  height: 90vh;
  width: 100%;
  background-image: url(${heroShot});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SecondBlock = styled.div`
  padding-top: 90px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    color: #361E12;
  }

  @media ${device.tablet} {
    padding: 50px 0;
  }
`;

export const SecondTitle = styled.span`
  color: #361E12;
  font-size: 45px;
  font-weight: 900;

  @media ${device.laptop} {
    font-size: 26px;
    text-align: center;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

export const SecondSubtitle = styled.span`
  color: #361E12;
  font-size: 20px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 19px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;
export const ThirdBlock = styled.div`
  padding-top: 90px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media ${device.tablet} {
    padding: 50px 0;
  }
`;

export const ThirdTitle = styled.span`
  color: #361E12;
  font-size: 45px;
  font-weight: 900;

  @media ${device.laptop} {
    font-size: 26px;
    text-align: center;
  }
  @media ${device.mobileL} {
    font-size: 22px;
  }
`;

export const ThirdSubtitle = styled.span`
  color: #361E12;
  font-size: 20px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 19px;
  }
  @media ${device.mobileL} {
    font-size: 15px;
  }
`;