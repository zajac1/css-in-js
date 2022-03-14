/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper>
        <CloseButtonContainer onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButtonContainer>
        <MainNavigation>
          <Link highlighted="true" href="/sale">
            Sale
          </Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </MainNavigation>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </ContentWrapper>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  background-color: rgba(96, 100, 108, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
`;

const ContentWrapper = styled(DialogContent)`
  width: 300px;
  padding: 32px 22px;
  z-index: 1;
  height: 100%;
  background-color: ${COLORS.white};
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const CloseButtonContainer = styled(UnstyledButton)`
  margin-left: auto;
`;

const MainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto 0;
`;

const Link = styled.a`
  font-size: 18px;
  color: ${({ highlighted }) =>
    highlighted ? COLORS.secondary : COLORS.gray[900]};
  text-transform: uppercase;
  text-decoration: none;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

export default MobileMenu;
