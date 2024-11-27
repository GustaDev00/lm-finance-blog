import { Post as _Post } from "@/components/atoms/post";
import { Img } from "@/components/atoms/post/styles";
import { CtaFixed } from "@/components/molecules/cta-fixed";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const LatestArticlesSection = styled.div``;

export const Title = styled.h2`
  color: ${({ theme }) => theme.titles};
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 5rem;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
    margin-bottom: 4.6rem;
  `}
`;

export const LatestArticles = styled.div`
  display: flex;
  gap: 4rem;
`;

export const Posts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 7.3rem 2.6rem;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Post = styled(_Post)`
  ${Img} {
    width: 100%;
  }
`;

export const Cta = styled(CtaFixed)``;
