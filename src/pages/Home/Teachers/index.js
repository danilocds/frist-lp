import React, { Fragment } from "react";
import {
  TeachersWrapper,
  FirstTitle,
  FirstText,
  TeachersBlockWrapper,
  Item,
  TextWrapper,
  TeachersCarroussel,
  ProfileImg,
  TeacherName,
  TeacherDescription,
} from "./style";
import luizImg from "../../../media/img/luiz-hanss.jpg";
import mariaImg from "../../../media/img/maria-homem-min.jpg";
import clovisImg from "../../../media/img/clovis-barros.jpg";
import claudiaImg from "../../../media/img/claudia-feitosa.png";


export default function TeachersBlock() {
  const teachers = [
    {
      picture: luizImg,
      name: "Luiz Hanns",
      description:
        "Psicoterapeuta, graduado em psicologia pela USP, doutor e mestre em psicologia clínica pela PUC-SP. Professor convidado da Sigmund Freud Universität de Viena, foi também professor convidado da USP e consultor do Conselho Federal de Psicologia e presidente da Associação Brasileira de Psicoterapia. Tradutor de Freud e autor de diversos livros sobre psicoterapia aplicada, incluindo “A Equação do Casamento”, publicado pela Companhia das Letras."
    },
    {
      picture: claudiaImg,
      name: "Claudia Feitosa-Santana",
      description:
        "Claudia Feitosa-Santana é neurocientista, com mestrado e doutorado pela USP e pós-doutoramento pela Universidade de Chicago. Professora da Casa do Saber há 6 anos, estuda neurociência aplicada a diversas áreas, da percepção de cores à tomada de decisão. Lecionou na The School of The Art Institute of Chicago e foi professora visitante da Universitá degli Studi di Firenze. Atualmente, desenvolve pesquisas em colaboração com USP, Hospital Israelita Albert Einstein, UFABC, Universidade do Minho, dentre outras.",
    },
    {
      picture: mariaImg,
      name: "Maria Homem",
      description:
        "Psicanalista e professora na FAAP e no Núcleo Diversitas-USP, com pós-graduação no Collège International de Philosophie/ Universidade de Paris 8 e FFLCH-USP. Coautora do livro “Coisa de Menina?” (com Contardo Calligaris), sobre gênero, sexualidade, maternidade e feminismo. Autora do livro “No Limiar do Silêncio e da Letra – Traços da Autoria em Clarice Lispector”."
    },
    {
      picture: clovisImg,
      name: "Clóvis de Barros Filho",
      description:
        "Professor livre-docente pela USP, onde também obteve o doutorado em ciência da comunicação. Mestre em ciência política pela Universidade Paris 3 (Université Sorbonne-Nouvelle), com especializações em direito constitucional e em sociologia do direito pela Universidade Paris 2 (Université Panthéon-Assas). Foi pesquisador na Unesco, professor da ECA-USP, ESPM e Faculdade Cásper Líbero e professor visitante na FGV-SP. É sócio-proprietário do Espaço Ética. É autor ou co-autor de diversos livros como “A Monja e o Professor” (com Monja Coen), “O Que Move as Paixões” (com Luiz Felipe Pondé), “Felicidade ou Morte” (com Leandro Karnal), “Somos Todos Canalhas” (com Júlio Pompeu), “Ética e Vergonha na Cara!” (com Mario Sergio Cortella), “A Felicidade é Inútil” e “Shinsetsu: O Poder da Gentileza”, entre outros."
    },
  ];

  const teachersRender = teachers.map((course) => (
    <Item>
      <ProfileImg src={course.picture}/>
      <TeacherName> {course.name} </TeacherName>
      <TeacherDescription> {course.description} </TeacherDescription>
    </Item>
  ));

  return (
    <TeachersBlockWrapper id="teachers">
      <TeachersWrapper>
        <TextWrapper>
          <FirstTitle>Professores</FirstTitle>
          <FirstText>
            Nossa curadoria faz uma seleção cuidadosa dos professores parceiros
            da Casa, sempre buscamos os melhores profissionais e temas mais
            relevantes para fazerem parte dessa história.
          </FirstText>
        </TextWrapper>
        <TeachersCarroussel>{teachersRender}</TeachersCarroussel>
      </TeachersWrapper>
    </TeachersBlockWrapper>
  );
}
