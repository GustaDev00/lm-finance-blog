import { Cta } from "@/components/atoms/cta";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const CtaFixed = styled.div`
  width: 41.5rem;

  ${mediaMaxWidth("mobile")`
    display: none;
  `}
`;

export const Modal = styled.div`
  position: sticky;
  top: 16rem;
  display: flex;
  flex-direction: column;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: #f8f8f8;
  box-shadow: 0 1.2rem 1.6rem 0 rgba(0, 0, 0, 0.08);
  padding: 4.4rem 4.5rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
  padding: 2.4rem 2.5rem;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.titles};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.55rem;
  margin-bottom: 2.4rem;
`;

export const Button = styled(Cta)``;
