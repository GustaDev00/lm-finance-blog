import styled from "styled-components";
import { Logo as _Logo } from "@/components/atoms/logo";
import { Wrapper as _Wrapper } from "@/styles/components/wrapper";
import { mediaMaxWidth } from "@/utils/media-query";

export const Footer = styled.footer`
  margin-top: 10rem;
  position: relative;
  background: ${({ theme }) => theme.white};
`;

export const Wrapper = styled(_Wrapper)`
  position: relative;
  flex-direction: column;
  padding: 4rem 18rem 0;
  z-index: 2;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    padding: 4rem 6.4rem 0;
  `}

  ${mediaMaxWidth("mobile")`
    padding: 4rem 2.6rem 0;
  `}
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 3.9rem;
  padding-bottom: 3rem;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.15);
    bottom: 0rem;
  }

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 3rem;
  `}
`;

export const WrapperLogo = styled.div`
  height: fit-content;
  padding: 1.1rem 0rem;
  border-radius: 1rem;
`;

export const Logo = styled(_Logo)``;

export const LogoText = styled.p`
  margin-top: 2.4rem;
  color: #737373;
  font-family: var(--hankengrotesk);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

export const Categories = styled.div`
  margin: 0 6rem 0 12.2rem;

  ${mediaMaxWidth("mobile")`
    margin: 0;
  `}
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 2.4rem;
`;

export const List = styled.ul`
  color: #737373;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 140%;
`;

export const Item = styled.li`
  margin: 0.6rem 0;

  span {
    color: ${({ theme }) => theme.eerieBlack};
  }

  svg {
    position: relative;
    top: 0.3rem;
    margin: 0 0.5rem;
    width: 1.8rem;
    height: 1.8rem;

    ${mediaMaxWidth("mobile")`
    width: 2rem;
    height: 2rem;
  `}
  }

  a:hover {
    opacity: 0.6;
    transition: opacity 0.4s ease;
  }
`;

export const Link = styled.a``;

export const Contact = styled.div``;

export const Info = styled.div`
  margin-top: 3.9rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.eerieBlack};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 140%;

  ${mediaMaxWidth("mobile")`
    flex-direction: column;
    align-items: flex-start;
    margin-top: 3rem;
    font-size: 1.6rem;
    gap: 1.7rem;
  `}
`;

export const Copy = styled.p``;

export const Agency = styled.p`
  span {
    font-weight: 700;
  }
`;
