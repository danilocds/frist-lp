import React, { Component, Fragment } from "react";
import {
  FirstTextWrapper,
  FirstTitle,
  FirstText,
  HeroBlockWrapper,
  HeroShot,
  HeroShotContainer,
  AlignElements,
  BulletsWrapper,
  Bullet,
  Dot,
} from "./style";
import { Button, makeStyles } from "@material-ui/core";
import { colors } from "../../../layout/palettes";
import { paymentLinks } from "../../../links";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  callToActionButton: {
    textTransform: "none",
    fontSize: "20px",
    fontFamily: "Karla",
    height: "54px",
    width: "196px",
    backgroundColor: colors.primary,
    color: "#ffff",
    fontWeight: "700",
    boxShadow: "0px 8px 8px #3716902E",
    borderRadius: "6px",
    "&:hover": {
      color: colors.primary,
      backgroundColor: "#DAD0EF",
    },
  },
}));

export default function HeroBlock() {
  const classes = useStyles();

  function goToAnualPlan() {
    window.open(paymentLinks.anualAVista);
  }

  const bulletsContent = [
    {
      content: "lorem ipsum",
    },
    {
      content: "lorem ipsum",
    },
    {
      content: "lorem ipsum",
    },
    {
      content: "lorem ipsum",
    },
  ];

  const bulletsRender = bulletsContent.map((bullet) => (
    <Bullet>
      <Dot></Dot>
      <span> {bullet.content} </span>
    </Bullet>
  ));

  return (
    <HeroBlockWrapper id="home">
      <FirstTextWrapper>
        <AlignElements>
          <FirstTitle>
            O Prazer de aprender pode te acompanhar onde você estiver.
          </FirstTitle>
          <FirstText>
            Nosso compromisso em disseminar e promover o saber de qualidade se
            mantém mesmo à distância. Por isso, tornamos nossos cursos
            acessíveis por meio do Casa do Saber On Demand. Conheça mais sobre
            essa nova forma de estarmos juntos. Afinal, distantes sim, sem
            conhecimento nunca.
          </FirstText>
          <Link to="plans" offset={-100} duration={500} smooth={true}>
            <Button
              variant="contained"
              className={classes.callToActionButton}
            >
              Assine agora
            </Button>
          </Link>
        </AlignElements>
      </FirstTextWrapper>
      <HeroShotContainer>
        <HeroShot></HeroShot>
      </HeroShotContainer>
    </HeroBlockWrapper>
  );
}
