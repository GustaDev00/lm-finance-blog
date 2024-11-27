import { Post as _Post } from "@/components/atoms/post";
import { Img, Title as _Title, Text } from "@/components/atoms/post/styles";
import { mediaMaxWidth } from "@/utils/media-query";
import styled from "styled-components";

export const PostHighlight = styled.div`
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

export const Wrapper = styled.div`
  height: 100%;
`;

export const Article = styled.article``;

export const Title = styled.h1`
  color: ${({ theme }) => theme.titles};
  font-size: 6rem;
  font-weight: 700;
  line-height: 130%;

  ${mediaMaxWidth("mobile")`
    font-size: 4.2rem;
  `}
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.descriptions};
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 180%;
  margin: 2rem 0 4rem;

  ${mediaMaxWidth("mobile")`
    font-size: 1.8rem;
  `}
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 3.6rem;

  ${mediaMaxWidth("isMobileOrTabletVertical")`
    flex-direction: column;
    gap: 6rem;
  `}
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${mediaMaxWidth("mobile")`
    gap: 4rem;
  `}
`;

export const Post = styled(_Post)``;

export const PostBig = styled(_Post)`
  width: 100%;

  ${Img} {
    width: 100%;
    height: 61.7rem;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      height: 24.8rem;
    `}
  }

  ${_Title} {
    width: 90%;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 130%;
    letter-spacing: -0.08rem;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      font-size: 2.4rem;
      font-weight: 800;
      line-height: 3.2rem;
      letter-spacing: -0.06rem;
    `}
  }

  ${Text} {
    width: 90%;
    height: 5.9rem;
    font-size: 1.9rem;
    line-height: 160%;
    letter-spacing: -0.0038rem;

    ${mediaMaxWidth("mobile")`
      width: 100%;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: -0.0032rem;
      height: auto;
    `}
  }
`;
