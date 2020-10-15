import React, { Fragment } from "react";
import {
  CardsWrapper,
  PlanCardA,
  PlanCardB,
  CardHeader,
  PlanName,
  CardTitle,
  PlanValue,
  TopWrapper,
  SwitchWrapper,
} from "./style";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { PaymentType } from "./style";
import { Button, makeStyles } from "@material-ui/core";
import { colors } from "../../layout/palettes";
import { stampImg } from "../../media/img/mockup.6f043d9f@2x.png";
import { paymentLinks } from "../../links";

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

const StyledSwitch = withStyles({
  switchBase: {
    display: "props.disabled ? none : block",
    color: "#DAD0EF",
    "&$checked": {
      color: "#45297c",
    },
    "&$checked + $track": {
      backgroundColor: "#45297c",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function PlanCards() {
  const classes = useStyles();

  const [switchState, setSwitch] = React.useState({});

  const handleChange = (event) => {
    setSwitch({ ...switchState, [event.target.name]: event.target.checked });
  };

  function paymentPage(link) {
    window.open(link);
  }

  const plans = [
    {
      type: "ano",
      title: switchState.ANUAL === true ? "A prazo" : "À vista",
      name: "ANUAL",
      value: switchState.ANUAL === true ? "299,90" : "249,90",
      button:
        switchState.ANUAL === true
          ? paymentLinks.anualAPrazo
          : paymentLinks.anualAVista,
      switchDisabled: false,
      id: switchState.ANUAL === true ? "anualAPrazo" : "anualAVista",
    },
    {
      type: "mês",
      title: "À vista",
      name: "MENSAL",
      value: "34,90",
      button: paymentLinks.mensalAVista,
      switchDisabled: true,
      id: "mensal"
    },
  ];

  const renderPlansCards = (
    <Fragment>
      <PlanCardA
      // borderRight={index < plans.length - 1 ? "1px solid #f3f3f3" : "none"}
      >
        <CardHeader>
          <TopWrapper>
            <PlanName>{plans[0].name}</PlanName>
            <StyledSwitch
              checked={switchState[plans[0].type]}
              onChange={handleChange}
              name={plans[0].name}
              inputProps={{ "aria-label": "secondary checkbox" }}
              disabled={plans[0].switchDisabled}
            />
          </TopWrapper>

          <CardTitle> {plans[0].title} </CardTitle>
          <PlanValue>
            {" "}
            <span>R$</span>
            <span>{plans[0].value}</span>
            <span>/{plans[0].type}</span>
            <span>*</span>{" "}
          </PlanValue>
        </CardHeader>
        <Button
          id={plans[0].id}
          onClick={() => paymentPage(plans[0].button)}
          variant="contained"
          className={classes.callToActionButton}
        >
          Assine agora
        </Button>
      </PlanCardA>
      <PlanCardB
      // borderRight={index < plans.length - 1 ? "1px solid #f3f3f3" : "none"}
      >
        <CardHeader>
          <TopWrapper>
            <PlanName>{plans[1].name}</PlanName>
          </TopWrapper>

          <CardTitle> {plans[1].title} </CardTitle>
          <PlanValue>
            {" "}
            <span>R$</span>
            <span>{plans[1].value}</span>
            <span>/{plans[1].type}</span>
            <span>*</span>{" "}
          </PlanValue>
        </CardHeader>
        <Button
        id={plans[1].id}
          onClick={() => paymentPage(plans[1].button)}
          variant="contained"
          className={classes.callToActionButton}
        >
          Assine agora
        </Button>
      </PlanCardB>
    </Fragment>
  );

  return <CardsWrapper>{renderPlansCards}</CardsWrapper>;
}
