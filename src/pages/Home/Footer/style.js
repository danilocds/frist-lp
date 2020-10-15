import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background: #1d1d1d;
  justify-content: center;
  align-items: center;
`;

export const AlignWrapper = styled.div`
  width: 70%;
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: #ffff;
  padding-top: 40px;
  box-sizing: border-box;

  @media ${device.laptop} {
    width: 95%;
  }

  @media ${device.mobileL} {
    flex-direction: column;
    min-height: 400px;
    padding-bottom: 100px;
    align-items: center;
  }
`;

export const LogoCasa = styled.img`
  width: 250px;
  cursor: pointer;

  @media ${device.laptop} {
    display: none;
  }
`;

export const Terms = styled.div`
  height: 50%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 100px;

  span {
    cursor: pointer;
    border-bottom: 1px transparent #ffff;
    &:hover {
      border-bottom: 1px solid #ffff;
    }
  }

  @media ${device.laptop} {
    padding-left: 0px;
  }

  @media ${device.mobileL} {
    height: auto;
    align-items: center;
    span {
      margin-bottom: 10px;
    }  }
`;

export const Payment = styled.div`
  height: 40%;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  span {
    font-weight: 700;
  }

  @media ${device.mobileL} {
    height: auto;
    align-items: center;
    span {
      padding-bottom: 10px;
    }
  }
`;

export const Security = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  span {
    font-weight: 700;
  }

  @media ${device.mobileL} {
    height: auto;
    align-items: center;

    span {
      padding-bottom: 10px;
    }
  }
`;
