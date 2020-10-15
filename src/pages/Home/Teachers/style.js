import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const TeachersBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.background};
  padding: 100px 0;
`;

export const TeachersWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

  @media ${device.laptop}{
    width: 90%;
  }
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

  @media ${device.laptop}{
    font-size: 40px;
  }
`;

export const FirstText = styled.span`
  text-align: center;
  width: 100%;
  color: #ffff;
  font-weight: 400;
  padding-bottom: 2vw;
  color: ${colors.typography};
  font-family: ${font.text.family};
  font-size: ${font.text.size};
  letter-spacing: ${font.subtitle.letterSpacing};
  padding-bottom: 100px;

  @media ${device.mobileL} {
  }
`;

export const TeachersCarroussel = styled.div`
  width: 85%;
  max-width: 1500px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media ${device.laptopL} {
    width: 100%;
  }

  @media ${device.laptop} {
    flex-direction: column;
    width: 70%;
    align-items: center;
  }
`;

export const Item = styled.div`
  max-width: 330px;
  width: 23%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${device.laptop} {
    max-width: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 40px;
  }
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
  padding: 20px 0;

  @media ${device.laptop} {
    text-align: center;
  }
`;

export const TeacherDescription = styled.span`
  text-align: left;
  font-family: Karla;
  font-size: 14px;
  letter-spacing: 0.2px;
  line-height: 19px;
  color: #000000;
  font-weight: 400;
  @media ${device.laptop} {
    text-align: center;
  }
`;
