import React, { Component, Fragment } from "react";
import {
  FirstTextWrapper,
  FirstTitle,
  FirstText,
  PlansBlockWrapper,
  AlignElements,
  BulletsWrapper,
  Bullet,
  DisclaimerWrapper,
} from "./style";
import PlanCards from "../../../components/PlanCards";
import checkIcon from "../../../media/icon/checkIcon.svg";

export default function PlansBlock() {
  const bulletsText = [
    {
      img: checkIcon,
      text: "Conteúdos novos toda semana",
    },
    {
      img: checkIcon,
      text: "Mais de 230 cursos em temas variados",
    },
    {
      img: checkIcon,
      text: "Masterclasses exclusivas",
    },
    {
      img: checkIcon,
      text: "Os melhores professores das melhores universidades",
    },
    {
      img: checkIcon,
      text: "Certificado de conclusão",
    },
    {
      img: checkIcon,
      text: "Função AudioClass",
    },
  ];
  const bulletsRender = bulletsText.map((bullet) => (
    <Bullet>
      <img src={bullet.img} />
      <span> {bullet.text} </span>
    </Bullet>
  ));

  return (
    <PlansBlockWrapper id="plans">
      <FirstTextWrapper>
        <AlignElements>
          <FirstTitle>Casa do Saber On Demand</FirstTitle>
          <FirstText>
            São inúmeras as vantagens de ter a Casa do Saber com você, aprofunde
            seu conhecimento e aprenda algo novo todos os dias.
          </FirstText>
          <BulletsWrapper> {bulletsRender} </BulletsWrapper>
          <DisclaimerWrapper>
            <span>*</span>
            <span>
              Experimente por 15 dias. Se não gostar, devolvemos seu dinheiro.
            </span>
          </DisclaimerWrapper>
        </AlignElements>
      </FirstTextWrapper>
      <PlanCards />
    </PlansBlockWrapper>
  );
}
