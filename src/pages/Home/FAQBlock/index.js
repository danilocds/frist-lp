import React, { Fragment } from "react";
import CustomizedAccordions from "../../../components/Accordion";
import {
  FAQWrapper,
  FirstTitle,
  FirstText,
  FAQBlockWrapper,
  TextWrapper,
  FAQBoard,
} from "./style";

export default function FAQBlock() {
  const faq = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
    },
  ];

  const FAQRender = faq.map((faq) => (
    <Fragment>
      <CustomizedAccordions question={faq.question} text={faq.text} />
    </Fragment>
  ));

  return (
    <FAQBlockWrapper id="faq">
      <FAQWrapper>
        <TextWrapper>
          <FirstTitle>Lorem ipsum</FirstTitle>
          <FirstText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </FirstText>
        </TextWrapper>
        <FAQBoard>{FAQRender}</FAQBoard>
      </FAQWrapper>
    </FAQBlockWrapper>
  );
}
