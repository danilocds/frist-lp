import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const CoursesBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.background};
  padding: 100px 0;
`;

export const CoursesWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FirstTitle = styled.span`
  color: #ffff;
  font-size: 50px;
  font-weight: 700;
  color: ${colors.typography};
  font-family: ${font.title.family};
  letter-spacing: 1px;
  margin-bottom: 16px;

  @media ${device.laptopL} {
    font-size: 40px;
  }

`;

export const FirstText = styled.span`
  width: 100%;
  color: #ffff;
  font-size: 23px;
  font-weight: 400;
  padding-bottom: 2vw;
  color: ${colors.typography};
  font-family: ${font.text.family};
  font-size: ${font.text.size};
  letter-spacing: ${font.subtitle.letterSpacing};

  @media ${device.mobileL} {
  }
`;

export const SpheresBoard = styled.div`
  width: 70%;
  display: grid;
  justify-content: center;
  gap: 38px 116px;
  grid-template-columns: repeat(5, 140px);
  grid-auto-rows: 160px;
  padding: 40px;
  align-content: center;
  justify-items: center;

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 140px);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 15vw);
    gap: 4vw 12vw;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  span{
    width: 100%;
  }
`;

export const Sphere = styled.div`
  width: 116px;
  height: 116px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000000d;
  border-radius: 58px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;



  img {
    width: 50%;
    max-height: 60%;
  }

  @media ${device.tablet} {
    width: 17vw;
    height: 17vw;
  }
`;
