import React, { Fragment } from "react";
import {
  CoursesWrapper,
  FirstTitle,
  FirstText,
  CoursesBlockWrapper,
  Item,
  TextWrapper,
  SpheresBoard,
  Sphere,
} from "./style";
import musicIcon from '../../../media/icon/musicIcon.svg'
import paintingIcon from '../../../media/icon/paintingIcon.svg'
import cienceIcon from '../../../media/icon/cienceIcon.svg'
import philosophyIcon from '../../../media/icon/philosophyIcon.svg'
import historyIcon from '../../../media/icon/historyIcon.svg'
import literatureIcon from '../../../media/icon/literatureIcon.svg'
import brainIcon from '../../../media/icon/brainIcon.svg'
import religionIcon from '../../../media/icon/religionIcon.svg'
import thinkersIcon from '../../../media/icon/thinkersIcon.svg'
import gestaoIcon from '../../../media/icon/gestaoIcon.svg'
import movieIcon from '../../../media/icon/movieIcon.svg'
import greateQuestionsIcon from '../../../media/icon/greateQuestionsIcon.svg'
import startUpIcon from '../../../media/icon/startUpIcon.svg'
import contemporaryIcon from '../../../media/icon/contemporaryIcon.svg'
import theaterIcon from '../../../media/icon/theaterIcon.svg'

export default function CoursesBlock() {
  const courses = [
    {
      name: "Artes",
      icon: paintingIcon
    },
    {
      name: "Ciências",
      icon: cienceIcon
    },
    {
      name: "Filosofia",
      icon: philosophyIcon
    },
    {
      name: "História",
      icon: historyIcon
    },
    {
      name: "Literatura",
      icon: literatureIcon
    },
    {
      name: "Psicologia",
      icon: brainIcon
    },
    {
      name: "Religião",
      icon: religionIcon
    },
    {
      name: "Clássicos do Cinema",
      icon: movieIcon
    },
    {
      name: "Grandes Questões da Humanidade",
      icon: greateQuestionsIcon
    },
    {
      name: "Teatraulas",
      icon: theaterIcon
    },
  ];

  const spheresRender = courses.map((course) => (
    <Item>
      <Sphere>
        <img src={course.icon} />
      </Sphere>
      <span> {course.name} </span>
    </Item>
  ));

  return (
    <CoursesBlockWrapper id="courses">
      <CoursesWrapper>
        <TextWrapper>
          <FirstTitle>Variedade de Temas</FirstTitle>
          <FirstText>
            São mais de 15 categorias de temas, com diversos cursos gravados com
            carinho e cuidado para você aprimorar seu conhecimento.
          </FirstText>
        </TextWrapper>
        <SpheresBoard>{spheresRender}</SpheresBoard>
      </CoursesWrapper>
    </CoursesBlockWrapper>
  );
}
