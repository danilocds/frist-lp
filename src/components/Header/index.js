import React from "react";
import {
  HeaderAlign,
  HeaderLargeIcon,
  HeaderMenu,
  HeaderSmallIcon,
  HeaderWrapper,
  HiddenMenuContainer,
  MenuOption,
} from "./style";
import HiddenMenu from "../HiddenMenu";
import headerSmallIcon from "../../media/icon/ICONE_infinito_-03.png";
import headerLargeIcon from "../../media/img/Logovetor-ON DEMAND_PRETO.png";
import { Link } from "react-scroll";
import { Button, createMuiTheme, makeStyles } from "@material-ui/core";
import { colors } from "../../layout/palettes";
import { headerLinks, paymentLinks } from "../../links";
import { device } from "../../layout/mediaQueries";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

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
    [theme.breakpoints.down('390')]: {
      display: "none",
    },
  },
  loginButton: {
    fontSize: "20px",
    fontFamily: "Karla",
    height: "54px",
    width: "196px",
    backgroundColor: "#ffff",
    color: colors.typography,
    fontWeight: "700",
    borderRadius: "6px",
    "&:hover": {
      color: colors.primary,
      backgroundColor: "#ffff",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  function goToMainPage() {
    window.open(headerLinks.homePage)
  }

  function goToAnualPlan() {
    window.open(paymentLinks.anualAVista);
  }

  return (
    <HeaderWrapper>
      <HeaderAlign>
        <HeaderSmallIcon onClick={goToMainPage} src={headerSmallIcon} />
        <HeaderLargeIcon onClick={goToMainPage} src={headerLargeIcon} />

        <HeaderMenu>
          <Link to="home" offset={-100} duration={500} smooth={true}>
            <MenuOption>
              <span>HOME</span>
            </MenuOption>
          </Link>
          <Link to="courses" offset={-100} duration={500} smooth={true}>
            <MenuOption>
              <span>TEMAS</span>
            </MenuOption>
          </Link>
          <Link to="teachers" offset={-100} duration={500} smooth={true}>
            <MenuOption>
              <span>PROFESSORES</span>
            </MenuOption>
          </Link>
          <Link to="plans" offset={-100} duration={500} smooth={true}>
            <MenuOption>
              <span>PLANOS</span>
            </MenuOption>
          </Link>

        </HeaderMenu>
        <div>
        <Link to="plans" offset={-100} duration={500} smooth={true}>
          <Button
            variant="contained"
            className={classes.callToActionButton}
          >
              Assine agora
          </Button>
          </Link>
        </div>
        <HiddenMenuContainer>
          <HiddenMenu />
        </HiddenMenuContainer>
      </HeaderAlign>
    </HeaderWrapper>
  );
};

export default Header;
