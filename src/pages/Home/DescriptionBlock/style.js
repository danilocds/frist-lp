import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const DescriptionBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 100px 0;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FirstTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media ${device.mobileL} {
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;

export const AlignElements = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.laptopL} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 100%;
    justify-content: center;
    align-items: center;
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

  @media ${device.laptopL} {
    width: 80%;
    font-size: 40px;
  }

  @media ${device.mobileL} {
    width: 100%;
    text-align: center;
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

  @media ${device.tablet} {
    font-weight: 100;
  }

  @media ${device.mobileL} {
    text-align: center;
  }
`;

export const MockWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  padding-right: 8%;
  padding-top: 5%;
  padding-bottom: 2%;
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export const Mock = styled.img`
  max-width: 761px;
  max-height: 498px;
`;
