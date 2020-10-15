import React, { Component, Fragment } from "react";
import {
  FirstTextWrapper,
  FirstTitle,
  FirstText,
  DescriptionBlockWrapper,
  Mock,
  MockWrapper,
  AlignElements,
} from "./style";
import mock from "../../../media/img/mockup.6f043d9f@2x.png";

export default function DescriptionBlock() {
  return (
    <DescriptionBlockWrapper id="description">
      <MockWrapper>
        <Mock src={mock} />
      </MockWrapper>
      <FirstTextWrapper>
        <AlignElements>
          <FirstTitle>Multiplataforma</FirstTitle>
          <FirstText>
            Assista quando quiser, por onde quiser. Somos mais de 200 mil alunos
            desfrutando de conteúdos de qualidade disponíveis para todos os
            dispositivos com acesso à internet.
          </FirstText>
        </AlignElements>
      </FirstTextWrapper>
    </DescriptionBlockWrapper>
  );
}
