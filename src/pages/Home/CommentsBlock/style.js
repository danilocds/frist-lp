import styled from "styled-components";
import { font } from "../../../layout/font";
import { device } from "../../../layout/mediaQueries";
import { colors } from "../../../layout/palettes";

export const CommentsBlockWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffff;
  padding: 100px 0;
`;

export const CommentsWrapper = styled.div`
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
  margin-bottom: 40px;
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

export const CommentsBoard = styled.div`
  width: 95%;
  display: grid;
  justify-content: center;
  gap: 10px 140px;
  grid-template-columns: repeat(3, 340px);
  grid-auto-rows: 420px;
  padding: 40px;
  align-content: center;
  justify-items: center;
`;

export const Item = styled.div`
  width: 416px;
  height: 338px;
  box-shadow: 0px 19px 32px #00000029;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;

export const CommentText = styled.span`
  text-align: left;
  font-family: Karla;
  font-size: ${font.text.size};
  color: #707070;
`;

export const CommentAuthor = styled.span`
  text-align: left;
  font-family: Karla;
  font-size: 25px;
  letter-spacing: 0px;
  color: #707070;
  font-weight: 700;
`;
