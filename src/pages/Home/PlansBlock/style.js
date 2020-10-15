import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const PlansBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 20px 0 100px;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    padding: 100px 0;
  }
`;

export const FirstTextWrapper = styled.div`
  width: 40%;
  height: 714px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;

  @media ${device.laptopL} {

    padding-left: 40px;
  }
  @media ${device.laptop} {
    max-width: none;
    width: 100%;
    align-items: center;
    height: auto;
    padding-left: 0px;
  }

`;

export const AlignElements = styled.div`
  max-width: 600px;
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 8%;

  @media ${device.laptop} {
    padding-right: 0%;
    max-width: none;
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const FirstTitle = styled.span`
  color: #ffff;
  font-size: 50px;
  font-weight: 700;
  color: ${colors.typography};
  font-family: ${font.title.family};
  letter-spacing: 1px;
  padding-bottom: 16px;

  @media ${device.laptop}{
    font-size: 40px;
  }
`;

export const FirstText = styled.span`
  width: 100%;
  color: #ffff;
  font-weight: 400;
  padding-bottom: 16px;
  color: ${colors.typography};
  font-family: ${font.text.family};
  font-size: ${font.text.size};
  letter-spacing: ${font.text.letterSpacing};
`;

export const BulletsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: justify;
`;

export const Bullet = styled.div`
  font-size: 18px;
  font-family: Karla;
  padding-bottom: 20px;
  img {
    width: 22px;
  }
  span {
    font-size: 18px;
    color: #707070;
  }
`;

export const DisclaimerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: justify;

  span:nth-child(1) {
    font-size: 23px;
    font-weight: 700;
    color: #fc4f4f;
  }
  span:nth-child(2) {
    font-size: 16px;
    font-style: italic;
    color: #707070;
  }
`;

export const MockWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    width: 90%;
    height: auto;
  }
`;

export const Mock = styled.img`
  width: 761px;
  height: 498px;
`;
