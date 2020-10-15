import styled from "styled-components";
import { font } from "../../layout/font";
import { device } from "../../layout/mediaQueries";
import { colors } from "../../layout/palettes";

export const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100px;
  display: flex;
  background-color: #ffff;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: stretch
  }
`;

export const HeaderAlign = styled.div`
  width: 76%;
  max-width: 1920px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  box-sizing: border-box;
  color: #ffff;

  @media ${device.laptop} {
    width: 95%;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const HeaderMenu = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media ${device.laptop} {
    display: none;
  }
`;

export const MenuOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93px;
  padding: 0 32px;
  font-size: ${font.header.size};
  font-style: normal;
  font-weight: ${font.header.weight};
  color: ${colors.typography};
  letter-spacing: ${font.header.letterSpacing};
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
  border-bottom: 6px solid transparent;
  transition: 0.4s ease-in-out;

  &:hover {
    border-bottom: 6px solid ${colors.primary};
  }
`;

export const HiddenMenuContainer = styled.div`
  display: none;
  @media ${device.laptop} {
    display: block;
    padding-right: 20px;
  }
`;

export const HeaderSmallIcon = styled.img`
  display: none;
  @media ${device.laptop} {
    display: block;
    height: 38px;
  }

  @media ${device.laptop} {
    padding-left: 20px;
  }

  @media ${device.mobileL} {
    padding-left: 2px;
  }
`;

export const HeaderLargeIcon = styled.img`
  height: 40%;
  box-sizing: border-box;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`;
