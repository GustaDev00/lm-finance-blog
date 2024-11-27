import { LazyImage } from "@/components/atoms/lazy-image";
import { CtaFixed } from "@/components/molecules/cta-fixed";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const Blog = styled.section`
  padding: 22.9rem 18rem 0;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
  padding: 18rem 6.4rem 0;
`}

  ${mediaMaxWidth("mobile")`
  padding: 16rem 2.6rem 0;
`}
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 9.2rem;
  position: relative;
  padding-bottom: 10.4rem;
  margin-bottom: 10rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background: rgba(0, 0, 0, 0.25);

    ${mediaMaxWidth("mobile")`
      width: 100vw;
      left: -2.6rem;
    `}
  }

  ${mediaMaxWidth("mobile")`
    padding-bottom: 6.4rem;
  `}
`;

export const Cta = styled(CtaFixed)``;

export const Article = styled.article`
  width: 100%;
`;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 60rem;
  object-fit: cover;
  border-radius: 0.8rem;
  margin: 2rem 0 4rem;

  ${mediaMaxWidth("mobile")`
    height: 30rem;
  `}
`;

export const Content = styled.div``;
