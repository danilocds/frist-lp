import styled from "styled-components";
import { device } from "../../layout/mediaQueries";
import { colors } from "../../layout/palettes";
import { stampImg } from "../../media/img/selo-7dias.png";

export const CardsWrapper = styled.div`
  width: 700px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`;

export const PlanCardA = styled.div`
  max-width: 396px;
  max-height: 455px;
  width: 26vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f3f3f3;
  box-shadow: 0px 19px 32px #00000010;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 10px;

  @media ${device.laptop} {
    margin-top: 40px;
    width: 90%;
    height: auto;
    max-width: none;
    max-height: none;
    padding: 20px 0;
  }
`;

export const PlanCardB = styled.div`
  max-width: 396px;
  max-height: 414px;
  width: 26vw;
  height: 26vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 19px 32px #00000010;
  border: 1px solid #f3f3f3;
  border-radius: 4px;
  border-left: none;
  box-sizing: border-box;
  padding: 0 10px;

  @media ${device.laptop} {
    margin-top: 40px;
    width: 80%;
    height: auto;
    max-width: none;
    max-height: none;
    padding: 20px 0;
  }
`;

export const CardHeader = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PaymentType = styled.span`
  max-width: 80px;
`;

export const PlanName = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Karla;
  font-size: 29px;
  font-weight: 700;
  padding-bottom: 15px;
  color: #707070;
`;

export const CardTitle = styled.span`
  padding-top: 15px;
  text-align: center;
  font-family: Karla;
  font-size: 20px;
  font-weight: 700;
  color: #707070;
`;

export const PlanValue = styled.div`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 15px;
  text-align: center;
  font-family: Karla;
  font-size: 29px;
  font-weight: 700;
  color: #707070;

  span:nth-child(1) {
    font-size: 30px;
    padding-bottom: 30px;
  }
  span:nth-child(2) {
    font-size: 50px;
  }
  span:nth-child(3) {
    font-size: 30px;
  }
  span:nth-child(4) {
    font-size: 30px;
    font-weight: 700;
    color: #fc4f4f;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
`;

export const CardItems = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
`;

export const IconItem = styled.img`
  padding-right: 10px;
`;

export const ItemText = styled.span`
  font-size: 20px;
  color: #483f35;
`;
