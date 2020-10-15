import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const FAQBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.background};
  padding: 100px 0;
`;

export const FAQWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
`;

export const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstTitle = styled.span`
  color: #ffff;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  color: ${colors.typography};
  font-family: ${font.title.family};
  font-size: 50px;
  letter-spacing: 1px;
  margin-bottom: 16px;
`;

export const FirstText = styled.span`
  text-align: center;
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

export const FAQBoard = styled.div`
  width: 95%;
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  align-content: center;
  justify-items: center;
`;

export const Item = styled.div`
  width: 320px;
  height: 465px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 9px;
`;

export const TeacherName = styled.span`
  text-align: left;
  font-family: Karla;
  font-size: 20px;
  letter-spacing: 0px;
  color: #000000;
  font-weight: 700;
`;

export const TeacherDescription = styled.span`
  text-align: left;
  font-family: Karla;
  font-size: 14px;
  letter-spacing: 0px;
  color: #000000;
  font-weight: 700;
`;
