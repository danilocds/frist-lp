import React, { Component, Fragment } from "react";
import {
  LandingPageWrapper,
  FirstTextWrapper,
  FirstTitle,
  FirstText,
  FirstBlock,
  SecondBlock,
  SecondTitle,
  SecondSubtitle,
  HeroShot,
  HeroShotContainer,
  ThirdBlock,
  ThirdTitle,
  ThirdSubtitle, 
  AlignElements
} from "./style";
import { Button, makeStyles } from "@material-ui/core";
import PlanCards from "../../components/PlanCards";
import { colors } from "../../layout/palettes";
import HeroBlock from "./HeroBlock";
import CoursesBlock from "./CoursesBlock";
import DescriptionBlock from "./DescriptionBlock";
import PlansBlock from "./PlansBlock";
import TeachersBlock from "./Teachers";
import CommentsBlock from "./CommentsBlock";
import FAQBlock from "./FAQBlock";
import Footer from "./Footer";

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

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Fragment>
      <LandingPageWrapper>
        <HeroBlock />
        <CoursesBlock />
        <DescriptionBlock />
        <TeachersBlock />
        <PlansBlock />
        {/* <CommentsBlock /> */}
        {/* <FAQBlock /> */}
        <Footer />
      </LandingPageWrapper>
    </Fragment>
  );
}
