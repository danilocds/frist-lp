import React, { Fragment } from "react";
import {
  AlignWrapper,
  FooterWrapper,
  LogoCasa,
  Payment,
  Security,
  Terms,
} from "./style";
import creditCards from "../../../media/icon/creditCardsIcon.png";
import siteBlindado from "../../../media/icon/site-seguro-icon.png";
import footerIcon from "../../../media/img/logo-casa.png";
import { footerLinks, headerLinks } from "../../../links";

export default function Footer() {
  function goTo(link) {
    window.open(link);
  }

  function goToHomePage() {
    window.open(headerLinks.homePage);
  }
  return (
    <FooterWrapper>
      <AlignWrapper>
        <LogoCasa onClick={goToHomePage} src={footerIcon} />
        <Terms>
          <span onClick={() => goTo(footerLinks.termosECondicoes)}>
            Termos e Condições
          </span>
          <span onClick={() => goTo(footerLinks.termosECondicoes)}>
            Política de Privacidade
          </span>
          <span>Contato</span>
        </Terms>
        <Payment>
          <span>Formas de Pagamento</span>
          <img src={creditCards} />
        </Payment>
        <Security>
          <span>Compre com segurança</span>
          <img src={siteBlindado} />
        </Security>
      </AlignWrapper>
    </FooterWrapper>
  );
}
