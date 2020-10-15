import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";
import heroShot from "../../../media/img/Mockup2@2x.png";


export const HeroBlockWrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  border-radius: 3px;

  @media ${device.laptop} {
    height: auto;
    min-height: 80vh;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FirstTextWrapper = styled.div`
  width: 50%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media ${device.laptop} {
    min-height: 50%;
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const AlignElements = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 15%;

  @media ${device.laptop} {
    padding-left: 0%;
    align-items: center;
    padding-top: 10%;
    margin-bottom: 40px;
  }
`;

export const FirstTitle = styled.span`
  font-weight: 700;
  color: ${colors.typography};
  font-family: ${font.title.family};
  font-size: ${font.title.size};
  letter-spacing: 0px;
  line-height: 75px;
  padding-bottom: 40px;

  @media ${device.laptopL} {
    width: 90%;
    font-size: 45px;
    line-height: 40px;
  }
`;

export const FirstText = styled.span`
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 30px;
  color: ${colors.typography};
  font-family: ${font.subtitle.family};
  letter-spacing: ${font.subtitle.letterSpacing};
`;

export const BulletsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 20px;
`;

export const Bullet = styled.div`
  width: 40%;
  display: flex;

  span {
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 30px;
    color: ${colors.typography};
    font-family: ${font.subtitle.family};
    font-size: ${font.subtitle.size};
    letter-spacing: ${font.subtitle.letterSpacing};
  }
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: radial-gradient(circle, #f43d3d 20%, transparent 10%),
    radial-gradient(circle, #f43d3d 20%, transparent 10%);
  background-size: 20px 20px;
  background-position: 0 0, 50px 50px;
`;

export const HeroShotContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${device.laptop} {
    width: 90%;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

export const HeroShot = styled.div`
  min-height: 80vh;
  width: 100%;
  background-image: url(${heroShot});
  background-position: 15vw 5vw;
  background-repeat: no-repeat;
  background-size: 100%;

  @media ${device.laptopL} {
    background-position: center;
  }
  @media ${device.laptop} {
    min-height: 0vh;
    height: 100%;
    background-position: center;
    background-size: 75%;
  }
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
    color: #361e12;
  }

  @media ${device.tablet} {
    padding: 50px 0;
  }
`;
